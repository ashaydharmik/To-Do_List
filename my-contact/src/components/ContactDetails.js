import React from 'react'
import { Link } from 'react-router-dom'
// import pic from "../images/img"

const ContactDetails = (props) => {
//    const {name,email} = props.location.state.contact;
  return (
    <div>
      <div className='main'>
        <div className='img'>
      <i className="user icon"></i>
        </div>
        <div className='details'>
            <p>name</p>
            <p>email</p>
        </div>
      </div>
      <Link to="/">

        <button className='ui button blue center'>contact list</button>
      </Link>
    </div>
  )
}

export default ContactDetails
