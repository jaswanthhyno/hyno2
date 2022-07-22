import React from 'react'
import Burger from "../images/Group 11709/Group 11709.png"
import Hyno from "../images/hyno/Group 11654.png"

function Navbar() {
  return (
 <div style={{marginLeft: "175px" ,backgroundColor:"black",width:"87%",height:"60px"}}>
    <div style={{backgroundColor:"black",float:"left"}}>
    <img src={Burger} style={{backgroundColor:"black",marginLeft:"0px",float:"left",marginTop:"20px"}}/>
    <img src={Hyno} style={{width:"90px", backgroundColor:"black",marginLeft:"20px",float:"left",marginTop:"10px"}}/>
  
    </div>
    <div style={{float:"right",width:"auto",height:"20px",fontSize:"14px",marginRight:"20px" ,marginTop:"0px"}}>
      <p style={{color:"white"}}>E: Contact@indovations.in</p> <p  style={{color:"white"}}>T: +1 510-962-3200</p>   
    </div>
 </div>
  )
}

export default Navbar