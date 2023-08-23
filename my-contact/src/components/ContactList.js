import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom"

const ContactList = (props) => {
  console.log(props);
const deleteContact = (id)=>{
    props.contactId(id)
}

const inputRef = useRef("");

  const renderContacts = props.contacts.map((contact) => {
    return (
     <ContactCard contact={contact} key={contact.id} clickContact={deleteContact}/>
    );
  });

  const getSearchTerm=()=>{
props.searchKeyword(inputRef.current.value);
  }


  return (
    <div className="center">
      <h2>ContactList</h2>
      <Link to="/add">
      <button className="ui button blue right">Add contacts</button>
      </Link>
      <div className="search-bar">
        <input type="search" ref={inputRef} placeholder="search contact.." value={props.term} onChange={getSearchTerm}/>
      </div>
      <div>{renderContacts.length > 0 ? renderContacts : "no contacts found"}</div>
    </div>
  );
};

export default ContactList;
