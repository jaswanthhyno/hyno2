import React from 'react'
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa"
import{BsTwitter}from "react-icons/bs"
import {IoLogoInstagram} from "react-icons/io"
function Source2() {
  return (
    <div className='Details-Container'>
         <div className='contacts-Box'>
          <h3>Contacts</h3>
         </div>
         <div className='Contacts'>
         <div className='Charminar-Details'>
          <img style={{width:"64px", height:"64px"}} src="https://cdn.iconscout.com/icon/free/png-256/charminar-119682.png" alt="" />
          <div className='Container-text'>
            <p>5th Floor, Rajapushpa Summit</p>
            <p>Nanakaramguda Rd, Financial District, Gachibowli</p>
            <p>Hyderabad, Telangana, India</p>
            <p>E: Contact@hyno. co</p>
            <p>T: +1510-962-3200</p>
          </div>
         </div>
         <div className='Charminar-Details'>
          <img style={{width:"64px", height:"64px"}}  src="https://cdn.iconscout.com/icon/free/png-512/delhi-1-161357.png" alt="" />
          <div className='Container-text'>
            <p>5600 Mowry School Rd.</p>
            <p>Ste. 220 Newwark, CA</p>
            <p>E: Contact@hyno.co</p>
            <p>T: +1510-962-3200</p>

          </div>
         </div>
         <div className='Social'>
          <h3>FOLLOW</h3>
          <div className='Social-network'>
<FaFacebookF/>
<FaLinkedinIn/>
<IoLogoInstagram/>
<BsTwitter/>
          </div>
         </div>
         </div>
    </div>
  )
}

export default Source2