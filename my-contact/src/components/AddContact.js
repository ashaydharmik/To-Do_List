import React, { Component } from "react";
import {Link} from "react-router-dom"
class AddContact extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         email:""
      }
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
       if(this.state.name==="" || this.state.email===""){
        alert("enter the fields")
        return
       }
       this.props.displayContact(this.state)
       this.setState({name:"" , email:""})
       console.log(this.props)
    }

  render() {
    return (
      <>
      <div className="form-container">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
          </div>
          <button className="ui button blue " type="submit">
            Add
          </button>
        </form>
      </div>
      <div>

        <Link to="/">

       <button className="ui button blue"> 
       <i class="arrow left icon white"></i>
        </button> 
      </Link>
      </div>
      </>
    );
  }
}

export default AddContact;
