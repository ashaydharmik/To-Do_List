import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import React,{useState,useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom"
import ContactDetails from './components/ContactDetails';
import api from "./api/contacts"
import EditContact from './components/EditContact';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const[contacts,setContacts]=useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const[searchResults,setSearchResults]=useState([])

  //add data
  const displayContact = async(contact)=>{
console.log(contact);
   const request = {
    id:uuidv4(),
    ...contact
   }
   const response = await api.post("/contacts",request)
setContacts([...contacts, response.data])
  }

  //update data
  const updateHandler= async(contact)=>{
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const {id , name , email} = response.data;
    setContacts(
      contacts.map((contact)=>{
      return contact.id ===id? {...response.data} : contact;
    }) )
  };

  //retrieve data
const retrieveContacts=async()=>{
  const response = await api.get("/contacts")
  return response.data;
}

  useEffect(()=>{
    // const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retrieveContact) setContacts(retrieveContact)
    const getallData = async()=>{
      const allData = await retrieveContacts();
      if(allData) setContacts(allData)
    }
   getallData();
  },[])

  useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])
  

  //search
  const searchHandler =(searchTerm)=>{
    setSearchTerm(searchTerm)
    if (searchTerm !== ""){
      const filteredSearch = contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(filteredSearch)
    }
    else{
      setSearchResults(contacts)
    }
  }

  //delete data
const removeHandler = async(id)=>{
  await api.delete(`/contacts/${id}`)
  const cutContacts = contacts.filter((contact)=>{
    return contact.id!==id
  })
  setContacts(cutContacts)
}

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>

      <Route path='/'  element={<ContactList  contacts={searchTerm.length <1 ? contacts : searchResults}  contactId={removeHandler} term={searchTerm}
      searchKeyword={searchHandler}/>}/>
<Route path='/add' element={<AddContact  displayContact={displayContact}/>}/>
{/* <Route path='/edit' element={<EditContact  updateHandler={updateHandler}/>}/> */}
<Route path='/contact/:id' element={<ContactDetails/>}/> 
        </Routes>
        </Router>
        </div>
        );
      }
      //  <AddContact displayContact={displayContact}/>
      //  <ContactList  contacts={contacts}  contactId={removeHandler}/>

export default App;







{/* <Switch>
<Route path='/'  exact render={(props)=>
  <ContactList {...props} contacts={contacts}  contactId={removeHandler}/>
}/>

<Route path='/add'  render={(props)=>
  <AddContact {...props}  displayContact={displayContact}/>}/>

<Route path='/contact/:id' components={<ContactDetails/>}/>
        </Switch> */}