import React, { Component } from "react";
import {Link} from "react-router-dom"
class EditContact extends Component {
    constructor(props) {
      super(props)
    const {id,name,email} = props.location.state.contact;
      this.state = {
        id,name,email
      }
    }
    
    handleUpdate=(e)=>{
        e.preventDefault()
       if(this.state.name==="" || this.state.email===""){
        alert("enter the fields")
        return
       }
       this.props.updateHandler(this.state)
       this.setState({name:"" , email:""})
       console.log(this.props)
    }

  render() {
    return (
      <>
      <div className="form-container">
        <form className="ui form" onSubmit={this.handleUpdate}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
          </div>
          <button className="ui button blue " type="submit">
            Update
          </button>
        </form>
      </div>
      <div>

        <Link to="/">

        <button className='ui button blue center'>contact list</button>
      </Link>
      </div>
      </>
    );
  }
}

export default EditContact;
