
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../images/bruce-mars-FWVMhUa_wbY-unsplash.jpg"
import { Link } from 'react-router-dom'
import "./Style.css"
function Contact() {
    var flag=""

    const notify = () => toast("Sucessfully");
    
    
   
    const form = useRef()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        text: ""
    })
    const { name, email, phone, text } = data;

    const handleCLose = () => {
        console.log("CLosed");
    }
    const handleFormSubmit = (e) => {


        e.preventDefault();
    
       
       if(form.current.name.value==""||form.current.email.value==""||form.current.phone.value==""||form.current.text.value==""){
       
        flag=false
       }
       else{
        flag=true
       }
       console.log(flag)
       if(flag==true){
                    emailjs.sendForm('service_64hupyd', 'template_bn0xhqb', form.current, 'jbYVhHHDi8BIX4fCW')
            .then((result) => {
                notify()

            }, (error) => {

            });
    setTimeout(()=>{  window.location.reload(false);},4500)

       }
        

        
            
     
    }
  
    return (
        <div>
        <div className='Main-Contacts-details'>

            <div className='Contact-Box'>

                <div className='Contanct-content  typewriter'>
                    <h1>Let's talk here!</h1>
                    <div className='text-content'>
                        <h5>
                            We'd love to hear what you are working on. Drop us a note here and
                        </h5>
                        <h5>
                            we'll get back to you within 24 hours.

                        </h5>
                    </div>

                </div>

                <form ref={form} onSubmit={handleFormSubmit} className="form-Content'">
                    <div className='form-Content'>
                        <input type="text" name="name" placeholder='Name' required="true" />
                        <input type="eamil" name="email" placeholder='Mail Id'     required="true" />
                        <input type="Number" name="phone" placeholder='Phone Number '  required="true"  />
                        <input type="text" name='text' placeholder='Where did You hear about us ?' required="true"  />
                        <textarea name="Describe" placeholder='Describe Your Project' required="true"  ></textarea>
                        <input  className='Send-Button' type="submit"   />
                        <ToastContainer />
                          <div>
                          
                          
                          </div>
                    </div>
                </form>


            </div>
            <div className='Contact-Cross'>
               <Link to={"/"}><p onClick={handleCLose}>X</p></Link> 
            </div>

        </div>
        <div ><img  className='contackimg'src={image} /> </div>
        </div>
    )
}

export default Contact