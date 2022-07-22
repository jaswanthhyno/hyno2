import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import calnder from "../images/Mask Group 10/Mask Group 10.png"
import person from "../images/Untitled.png"
import mobile from "../images/Untitled1.png"
import Footer from './Footer'
import Nodemail from './Nodemail'
import { position } from '@chakra-ui/react'

import Burger from "../images/Group 11709/Group 11709.png"
import Hyno from "../images/hyno/Group 11654.png"
import { ChakraProvider } from '@chakra-ui/react'

function Page4() {
  var data=["Node.js can be used to build both simple and complex applications, especially those driven by data. It’s perfect for applications that need to manage events in real-time, including chat apps and multiplayer games. Node.js is an open-source JavaScript run-time system that processes incoming requests in the event loop. Node.js can handle I/O operations asynchronously, thus making it highly scalable. Hyno can help you with Node.js development. We’ve been building enterprise-grade applications for many years, and we can do the same for your project.",
"Apple iOS is a proprietary mobile operating system that runs on mobile devices such as the iPhone, iPad and iPod Touch. Apple iOS is based on the Mac OS X operating system for desktop and laptop computers. The iOS developer kit provides tools that allow for iOS app development.",
"A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages",
"Back end developers are responsible for creating and maintaining technology at the back end of a website (the server, database and application). The attractive visuals created by designers, UX professionals and front end developers couldn't exist without the technology provided by a back end developer.",
"In computing, cross-platform software (also called multi-platform software, platform-agnostic software, or platform-independent software) is computer software that is designed to work in several computing platforms.",
"Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision."]
var data1=["ANDRIOD","IOS","FRONTEND","BACKEND","CROSS PLATFORM","ARTIFICIAL INTELLIGENCE"]
const [info,setInfo]=useState(data[0])
const [info1,setInfo1]=useState("Andriod")
  const handelfunction=(x)=>{
    
      setInfo(data[x])
      setInfo1(data1[x])
      console.log(data[x])

  }
  useEffect(()=>{
  
  },[info,setInfo,info1,setInfo1])
  return (

  <div style={{backgroundColor:"black"}}>      
  <div  style={{marginLeft: "11%" ,width:"87%",height:"60px",}} >
<div  className='dropdown' style={{float:"left"}}>
<img src={Burger} style={{marginLeft:"0px",float:"left",marginTop:"20px"}}/>
<img src={Hyno} style={{width:"90px", marginLeft:"20px",float:"left",marginTop:"10px"}}/>

</div>
<div  className='contact' style={{float:"right",width:"auto",height:"20px",fontSize:"14px",marginRight:"20px" ,marginTop:"0px"}}>
  <p style={{color:"white"}}>E: Contact@indovations.in</p> <p  style={{color:"white"}}>T: +1 510-962-3200</p>   
</div>
</div>
<div className='intro' style={{ width: "100%", height: "840px", marginTop: "0px" }}>
    <div style={{ width: "623px", height: "184px", color: "white" }}>
      <h1 style={{ color: "white", fontFamily: "Gilroy-Bold", fontSize: "56px", marginLeft: "175px", marginTop: "189px", float: 'left',lineHeight:"64px"}}>Web & mobile Development For Your Every Need</h1>
      <p style={{ color: "white", fontFamily: "Raleway, Medium", fontSize: "20px", marginLeft: "175px", marginTop: "24px", float: 'left',marginBottom:"24px" }}>Hyno develops solutions that serve as the foundation for both new and established digital businesses. While we’re working on the software, we provide entrepreneurs the tools they need to turn their ideas into profitable enterprises.</p>
      <div style={{ width: "312px",fontFamily: "Gilroy-Bold",marginTop:"0px", backgroundColor: "#FF004C", height: "48px", display: 'flex', marginLeft: "175px", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "45px", marginTop: "10px",  }}>Let’s create something together</p></div>
    </div>
  </div>
  <div style={{float:"right",marginTop:"-600px",marginRight:"80px"}}>
 
  </div>
  <div className='singleletters' >
    <div  style={{ marginTop: "80px", marginLeft: "179px", fontFamily: "Raleway, Medium", fontSize: "14px", color: "#FF004C", width: "483" ,letterSpacing: "8.4px",color:"#FF004C",}}>L E S S M A N A G E M E N T, M O R E R E S U L T S </div>
    <dr></dr>
    <div id='start' style={{ marginTop: "10px", marginLeft: "176px", width: "580px", height: "123px", fontSize: "56px", color: 'white',lineHeight:"64px" }}>Start-to-finish product development services</div>
    <div style={{ width: "560px", height: "232px", marginLeft: "176px", marginTop: "150px", color: '#AAAAAA' }}>Hyno specializes in the development of custom applications and products for any business, from large companies to small businesses and startups who require a custom solution for their needs. We at Hyno promise a seamless development process that will turn your idea into an enterprise-level solution. We take the time to understand your business and tailor our services to meet your needs. Our team of experts has over 15 years of experience in the industry, and use proven best practices to rapidly develop your product. We collaborate with you through every stage of the product development process—from early customer discovery meetings to strategic planning, design, and development, testing and deployment.</div>
    <div>

    </div>
    <div  style={{ float: "right", width: "523px", height: "362px", display: "flex", marginTop: "-360px", marginRight: "100px" }}>
      <img id="clander"  src={calnder} style={{ width: "" }} />
    </div>

  </div>
 
  <div class="grid-container">
    <div class="grid-item">
      <div style={{float:"left",display:'flex'}}>
      <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
      <div style={{fontSize:"16px",color:"white",padding:"10px"}}>Ideation & Strategy</div>
     </div>
     <div style={{float:"right",fontSize:"10px",color:"white",width:"305px",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Your product development project will be handled by the most qualified teams. You will have access to product designers, engineers, and DevOps who will work closely with you to implement your business idea into a reality. We’ll also appoint a project manager to oversee the remainder of the product development team’s work.</div>
   
    </div>
    <div class="grid-item"> <div style={{float:"left",display:'flex'}}>
      <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
      <div style={{fontSize:"16px",color:"white",padding:"10px"}}>Ideation & Strategy</div>
     </div>
     <div style={{float:"right",fontSize:"10px",color:"white",width:"305px",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Your product development project will be handled by the most qualified teams. You will have access to product designers, engineers, and DevOps who will work closely with you to implement your business idea into a reality. We’ll also appoint a project manager to oversee the remainder of the product development team’s work.</div>
   </div>
    <div class="grid-item"> <div style={{float:"left",display:'flex'}}>
      <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
      <div style={{fontSize:"16px",color:"white",padding:"10px"}}>Ideation & Strategy</div>
     </div>
     <div style={{float:"right",fontSize:"10px",color:"white",width:"305px",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Your product development project will be handled by the most qualified teams. You will have access to product designers, engineers, and DevOps who will work closely with you to implement your business idea into a reality. We’ll also appoint a project manager to oversee the remainder of the product development team’s work.</div>
   </div>
    <div class="grid-item"> <div style={{float:"left",display:'flex'}}>
      <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
      <div style={{fontSize:"16px",color:"white",padding:"10px"}}>Ideation & Strategy</div>
     </div>
     <div style={{float:"right",fontSize:"10px",color:"white",width:"305px",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Your product development project will be handled by the most qualified teams. You will have access to product designers, engineers, and DevOps who will work closely with you to implement your business idea into a reality. We’ll also appoint a project manager to oversee the remainder of the product development team’s work.</div>
   </div>
    <div class="grid-item"> <div style={{float:"left",display:'flex'}}>
      <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
      <div style={{fontSize:"16px",color:"white",padding:"10px"}}>Ideation & Strategy</div>
     </div>
     <div style={{float:"right",fontSize:"10px",color:"white",width:"305px",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Your product development project will be handled by the most qualified teams. You will have access to product designers, engineers, and DevOps who will work closely with you to implement your business idea into a reality. We’ll also appoint a project manager to oversee the remainder of the product development team’s work.</div>
   </div>
    <div class="grid-item"> <div style={{float:"left",display:'flex'}}>
      <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
      <div style={{fontSize:"16px",color:"white",padding:"10px"}}>Ideation & Strategy</div>
     </div>
     <div style={{float:"right",fontSize:"10px",color:"white",width:"305px",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Your product development project will be handled by the most qualified teams. You will have access to product designers, engineers, and DevOps who will work closely with you to implement your business idea into a reality. We’ll also appoint a project manager to oversee the remainder of the product development team’s work.</div>
   </div>

  </div>
  <div className='choose' style={{fontSize:"14px",marginTop:"30px",fontFamily:"Raleway, Medium",}}><center><h3  style={{letterSpacing: "8.4px",color:"#FF004C",}}>T E C H N O L O G Y  S T A C K</h3></center></div>
  <center><div style={{color:"white",fontSize:"48px",width:"1025px",fontFamily:"Gilroy-Bold",marginTop:"30px",lineHeight:"64px"}}>
    
    Choose battle-tested web development services with community support over hype
    
  </div>
  </center>
  <center><div style={{color:"white",fontSize:"18px",width:"1025px",fontFamily:"Gilroy-Bold",marginTop:"20px"}}>
  Hype can be deceiving – it might look good on paper, but it might not work so well in the real world. With battle-tested services, you know that you’re getting something that’s been tried and tested and is known to work well. You also don’t have to worry about being left in the dark when it comes to support
    
    
  </div>
  </center>
  <center>
  <div style={{display:"flex",marginLeft:"126px",marginTop:"40px",color:"#FF004C"}}>
    <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}}  onClick={()=>handelfunction(0)} >Android</div>
    <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}} onClick={()=>handelfunction(1)}>IOS</div>
    <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}} onClick={()=>handelfunction(2)}>FRONTEND</div>
    <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}} onClick={()=>handelfunction(3)}>BACKEND</div>
    <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}} onClick={()=>handelfunction(4)}>CROSS PLATFORM</div>
    <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}} onClick={()=>handelfunction(5)}>Artificial intelligence</div>
  </div>
  </center>
  <div style={{display:"flex"}}>
  <div style={{color:"white",marginLeft:"250px",marginTop:"100px",}}>
  <p>{info1}</p>
 
  <div style={{width:"448px",height:"304px",color:"#707070",}}>{info}
  </div>
  </div>
  <div style={{marginLeft:"200px",marginTop:"100px"}}>
    <h3>
      Why andriod development
    </h3>
    <div>
      <h4>Expressive and concise </h4><h4>Safer code </h4><h4>Interoperable </h4><h4>Structured concurrency Get sustainable growth</h4>
    </div>
  </div>
  </div>
  <center className="design"> <div style={{width:"800px",height:"100px",}}><h4 style={{position:"absolute",left:"357px",right:"357px",backgroundColor:"#C7CEEA",fontSize:"32px"}}>Design, development, DevOps, or Cloud - which team do you need?</h4></div>
 </center>
<div style={{marginLeft:"100px",marginTop:"100px",display:"flex"}}>
<div style={{width:"400px",height:"400px",marginLeft:"150px"}}><img src={person} /></div>
<div style={{width:"640px",height:"400px",marginLeft:"200px"}}>
<h2>Start-to-finish mobile & Web development services</h2>
<p>Hyno specializes in the development of custom applications and products for any business, from large companies to small businesses and startups who require a custom solution for their needs. We at Hyno promise a seamless development process that will turn your idea into an enterprise-level solution. We take the time to understand your business and tailor our services to meet your needs. Our team of experts has over 15 years of experience in the industry, and use proven best practices to rapidly develop your product. We collaborate with you through every stage of the product development process—from early customer discovery meetings to strategic planning, design, and development, testing and deployment.</p>
</div>
</div>
<div>
<center><h3 style={{color:"#FF004C",marginTop:"100px",letterSpacing: "8.4px",color:"#FF004C",}}>C A S E S T U D I E S</h3></center>
</div>
<div>
<center><h1 style={{color:"white",width:"1000px",marginTop:"50px",marginTop:"50px",fontSize:"48px",lineHeight:"56px"}}>Building and layout permissions to the citizens through a single window of 21 days.</h1></center>
</div>
<div>

</div>
<div style={{display:"flex"}}>
<div style={{marginLeft:"200px",width:"400px",height:"400px",marginTop:"50px"}}><h1>Ts-Bpass </h1>
<h2>Government Of Telangana</h2>
<p>Telangana State - Building Approval & Self-Certification System</p></div>
<div style={{marginLeft:"200px",width:"400px",height:"400px",marginTop:"50px",fontWeight:"lighter",fontFamily:"Raleway, Medium"}}>
  <ul>
<li  style={{}}>Permissions for buildings and layout are either provided offline or through the DPMS portal. There are no stipulated timelines for providing permissions to the buildings.  </li>
<li>There are delays in issuing permissions to the citizens. Also there are line departments like fire, police, etc which has a dependency on the issuing.</li>
<li>Telangana governments wanted to build a single interface portal for the citizens for taking different kinds of permissions integrating it with all the line departments</li>
</ul>
</div>
</div>
<div>
<center> <img src={mobile} /></center>
</div>
<div style={{display:"flex",marginLeft:"120px",marginTop:"80px"}}>
<p style={{marginLeft:"100px",fontFamily:"Gilroy-Regular",width:"304px"}}>We have built a complete web application for the citizens where they can apply for various permissions, from a small house to a multiplex.</p>
<p style={{marginLeft:"100px",fontFamily:"Gilroy-Regular",width:"304px"}}>Along with the citizen module, a completely new interface has been built for officers to inspect and take actions needed for issuing permissions.</p>
<p style={{marginLeft:"100px",fontFamily:"Gilroy-Regular",width:"304px"}}>Total of more than 10 departments were integrated into the system.</p>
</div>
<div style={{marginLeft:"100px",display:"flex"}}> 
<div style={{ width: "312px", backgroundColor: "#FF004C", height: "48px", display: 'flex',marginTop:"30px", marginLeft: "350px", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "45px", marginTop: "10px", backgroundColor: "#FF004C" }}>view all Details</p></div>
<div style={{ width: "312px", backgroundColor: "#FF004C", height: "48px", display: 'flex',marginTop:"30px", marginLeft: "15px", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "45px", marginTop: "10px", backgroundColor: "#FF004C" }}>view all caseStudies</p></div></div>


  

<Nodemail />

<ChakraProvider> <Footer /></ChakraProvider>
</div>
  )
}

export default Page4