import React from 'react'


import {
  Box,
  Button,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function Nodemail() {
  return (
    <div style={{display:"flex",backgroundColor:"#080808",marginTop:"0px"}}>
        <div style={{fontFamily:"Gilroy-Bold",marginLeft:"288px",color:"#FFFFFF",marginTop:"30px"}}>
            <h2  id="hello">Say hello!</h2>
            <p>What happens when you submit this request</p>
            <ul style={{margin:"20px",padding:"10px",margintop:"10px"}}>
    <li style={{color:"#707070"}}>We will respond to you within 24 hours.</li>
    <li style={{color:"#707070"}}> We’ll sign an NDA if requested. </li>
    <li style={{color:"#707070"}}>You’ll be talking to product and tech experts</li>
    </ul>       
    <form>
  <label for="fname">First Name</label>
  <br></br>
  <input type="text" id="fname" name="fname"  style={{width:"100%",color:"#000000"}} />
  <br></br>
  <label for="lname">Last Name</label>
  <br></br>
  <input type="text" id="lname" name="lname"  style={{width:"100%",color:"#000000"}}/>
</form>
<br>
</br>
<form>
  <textarea style={{width:"100%",color:"#000000",height:"100px%"}}> Some text...</textarea>
</form>
<br></br>
<div style={{ width: "200px", backgroundColor: "#FF004C", height: "48px", display: 'flex', marginLeft: "0px", borderRadius: "50px" ,marginBottom:"50px"}}><p style={{ textAlign: "center", marginLeft: "65px", marginTop: "10px", backgroundColor: "#FF004C" }}>Send  Mail</p></div>
    
        </div>
        <div style={{fontFamily:"Gilroy-Bold",fontSize:"14px",marginLeft:"288px"}}>
            <h1 style={{fontFamily:"Gilroy-bold", fontSize:"36px",color:"white",marginTop:"20px"}}>Contact</h1>
            <p style={{color:"gray",width:"300px",lineHeight:"24px"}}>5th Floor, Rajapushpa Summit Nanakramguda Rd, Financial District, Gachibowli Hyderabad, Telangana, India</p>
            <p style={{color:"gray",width:"300px",lineHeight:"24px"}}>5600 Mowry School Rd. Ste. 220 Newark, CAE: Contact@hyno.co T: +1 510-962-3200</p>
   
   


        </div>
        
    </div>
  )
}

export default Nodemail