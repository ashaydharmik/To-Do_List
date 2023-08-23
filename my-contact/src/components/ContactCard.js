import React from 'react'
import {Link} from "react-router-dom"

const ContactCard = (props) => {
    const {id,name,email} = props.contact;
  return (
    
       <div className="list">
        <div>
        <Link to={{pathname:`/contact/${id}`, state:{state:props.contact}}}>
          <div className='text'>{name}</div>
          <div  className='text'>{email}</div>
        </Link>
        </div>
        <Link to={{pathname:`/edit`, state:{state:props.contact}}}>
        <div>
          <i className="edit alternate icon blue" ></i>
        </div>
        </Link>
        <div>
          <i className="trash alternate icon red" onClick={()=> props.clickContact(id)}></i>
        </div>
      </div>

  )
}

export default ContactCard
