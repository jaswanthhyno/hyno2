import React, { useRef, useState } from 'react'
import {RiAttachment2} from "react-icons/ri"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Source1() {
  const notify = () => toast("Sucessfully");
  const [fotterData , setFotterData] = useState({
   Name:"",
   Email:"",
   Project:""
  })

  const {Name, Email, Project} = fotterData;
const contref=useRef()
  const BookCall = () => {
    console.log(contref.current);
    emailjs.sendForm('service_64hupyd', 'template_yovdcg1', contref.current, 'jbYVhHHDi8BIX4fCW')
    .then((result) => {
        notify()

    }, (error) => {

    });
  }
  return (
     
    <div className='Input-Container'>
        <div className='headding' >
        <h2>Say hello!</h2>
        <h5  style={{marginTop:"30px", color:"#ffff",marginBottom:"1    0px"}} >What happens when You submit this request</h5>
        </div>
        <div className='Container-text'style={{marginTop:"10px" , height:"108px"}}>   
                <p>  <span> {">"} </span>  &nbsp;  We will respond to you within 24 hours </p>
                <p> <span>{">"} </span>    &nbsp;     We'll sign an NDA if requested     </p>
                <p> <span> {">"}</span>    &nbsp;   You'll be taking to Product and tech experts  </p>
        </div>

        <div>

 <form  ref={contref}className='FormDetails' >
  <input type="text" name='Name' placeholder='Name' />
  <input type="text" name= "Email" placeholder='Email' />
  <input type="text" name='Project' placeholder='Project details' />
 </form>
            
        </div>
         <div className='Border-Line'>
          <div className='attchment'>
          <RiAttachment2 style={{fontSize:"23.3px"}}/>
          <p>Attach file</p>
          </div>
          <button onClick={BookCall} className='Btn'> BOOK A CALL</button>

         </div>
         <ToastContainer />
    </div>
  )
}

export default Source1