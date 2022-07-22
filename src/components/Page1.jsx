import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import calnder from "../images/Mask Group 10/Mask Group 10.png"
import person from "../images/Untitled.png"
import mobile from "../images/Untitled1.png"
import Footer from './Footer'
import Nodemail from './Nodemail'
import video from "../images/istockphoto-1317152051-640_adpp_is.mp4"
import { Center, position } from '@chakra-ui/react'

import Burger from "../images/Group 11709/Group 11709.png"
import Hyno from "../images/hyno/Group 11654.png"
import { ChakraProvider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import dropdown from "../images/Group 11709/Group 11709.png"
import logo from "../images/hyno/Group 11654@2x.png"
import right from "../images/Untitled2.png"
import graph from "../images/graphy_@2X (1)/graphy_@2X.png"
import Combainer from './Combainer'


function Page1() {
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
    <div >     
      <div style={{backgroundColor:"black",width:"100%",height:"auto"}}>
     <div  className='navbar'>
            <div className='left'>
                <img className='dropdown'src={dropdown} />
              
            </div>
            <div className='logo'>  <img className='logoimg' src={logo} />
            </div>
            <div className='right'>
                E: hello@hyno.co
            </div>
        </div>
  <div className='intro1' style={{ width: "100%", height: "840px", marginTop: "0px" ,marginLeft:"5%"}}>
      <div style={{ width: "623px", height: "184px", color: "white" }}>
        <h1 style={{  width :"690px" ,color: "white", fontFamily: "Gilroy-Bold", fontSize: "56px", marginLeft: "175px", marginTop: "319px", float: 'left',lineHeight:"64px"}}>We Design, Build and Deliver Software Products</h1>
        <p style={{ color: "#AAAAAA", fontFamily: "Raleway, Medium", fontSize: "20px", marginLeft: "175px", marginTop: "24px", float: 'left',marginBottom:"24px" }}>            We’re a team of design and development experts who help you transform ideas into products</p>
        <div style={{ width: "312px",fontFamily: "Gilroy-Bold",marginTop:"0px", backgroundColor: "#FF004C", height: "48px", display: 'flex', marginLeft: "175px", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "45px", marginTop: "10px",  }}>Let’s create something together</p></div>
      </div>
    </div>
    <div style={{float:"right",marginTop:"-600px",marginRight:"80px"}}>
   
    </div>
    
    <div className='singleletters' >
      <div  style={{ marginTop: "80px", marginLeft: "179px", fontFamily: "Raleway, Medium", fontSize: "14px", color: "#FF004C", width: "483" ,letterSpacing: "8.4px",color:"#FF004C",}}>LESSMANAGEMENT, MORERESULTS</div>
      <dr></dr>
      <div id='start' style={{ fontSize:"56px",fontFamily:"Gilroy-Bold ",marginTop: "10px", marginLeft: "176px", width: "650px", height: "123px", fontSize: "56px", color: 'white',lineHeight:"64px" }}>Start-to-finish product development services</div>
      <div style={{ width: "560px", height: "232px", marginLeft: "176px", marginTop: "30px", color: '#AAAAAA' ,fontFamily:"Gilroy-Regular",fontSize:"16px "}}>Hyno specializes in the development of custom applications and products for any business, from large companies to small businesses and startups who require a custom solution for their needs. We at Hyno promise a seamless development process that will turn your idea into an enterprise-level solution. We take the time to understand your business and tailor our services to meet your needs. Our team of experts has over 15 years of experience in the industry, and use proven best practices to rapidly develop your product. We collaborate with you through every stage of the product development process—from early customer discovery meetings to strategic planning, design, and development, testing and deployment.</div>
      <div>
  
      </div>
      <div  style={{ float: "right", width: "523px", height: "362px", display: "flex", marginTop: "-360px", marginRight: "100px" }}>
        <img id="clander"  src={calnder} style={{ width: "" }} />
      </div>
  
    </div>
  
    <div class="grid-containerr">
      <div class="grid-itemm">
        <div style={{float:"left",display:'flex'}}>
        <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
        <div style={{fontSize:"16px",color:"white",padding:"10px",fontFamily:"Gilroy-Bold"}}>Ideation & Strategy</div>
       </div>
       <div style={{float:"right",color:"#AAAAAA",fontSize:"16px",width:"305px",height:"122px",fontFamily:"Gilroy-Regular",overflow:"auto", marginTop:"20px",marginLeft:"45px",textAlign:"left",}}>Your product development project will be handled by the most qualified teams. You will have access to product designers, engineers, and DevOps who will work closely with you to implement your business idea into a reality. We’ll also appoint a project manager to oversee the remainder of the product development team’s work.</div>
     
      </div>
      <div class="grid-itemm"> <div style={{float:"left",display:'flex'}}>
        <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
        <div style={{fontSize:"16px",color:"white",padding:"10px"}}>UI & UX design</div>
       </div>
       <div style={{float:"right",fontSize:"10px",color:"#AAAAAA",fontSize:"16px",width:"305px",height:"122px",fontFamily:"Gilroy-Regular",overflow:"auto",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Every business is unique. That’s why we take a process-driven approach to product development – tailoring each step to fit your company’s vision and goals. We start our process by developing a thorough product specification – one that’s driven by your business needs and supported by industry best practices.</div>
     </div>
      <div class="grid-itemm"> <div style={{float:"left",display:'flex'}}>
        <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
        <div style={{fontSize:"16px",color:"white",padding:"10px"}}>Product Engineering</div>
       </div>
       <div style={{float:"right",fontSize:"10px",color:"#AAAAAA",fontSize:"16px",width:"305px",height:"122px",fontFamily:"Gilroy-Regular",overflow:"auto",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa nunc, fringilla quis bibendum non, luctus sed sem. Suspendisse nec libero euismod, facilisis nisi vitae, accumsan lorem. Donec sed urna et magna feugiat lobortis nec nec erat. Mauris sagittis tincidunt libero, ut pulvinar neque mattis non. Morbi mattis vestibulum neque, vitae vestibulum orci gravida ac. Duis quis scelerisque erat. Sed vel maximus nisl. Etiam ultrices pulvinar tellus, quis faucibus neque tempus feugiat. Aenean vel tempor ex, sed commodo turpis. Nam interdum et lectus nec mollis. Curabitur pharetra interdum velit, in suscipit risus vehicula et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut facilisis rhoncus ex, ac ultricies nunc varius sed. Morbi pulvinar velit enim. Fusce lacinia feugiat turpis maximus volutpat.</div>
     </div>
      <div class="grid-itemm"> <div style={{float:"left",display:'flex'}}>
        <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
        <div style={{fontSize:"16px",color:"white",padding:"10px"}}>Cloud Devops</div>
       </div>
       <div style={{float:"right",fontSize:"10px",color:"#AAAAAA",fontSize:"16px",width:"305px",height:"122px",fontFamily:"Gilroy-Regular",overflow:"auto",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa nunc, fringilla quis bibendum non, luctus sed sem. Suspendisse nec libero euismod, facilisis nisi vitae, accumsan lorem. Donec sed urna et magna feugiat lobortis nec nec erat. Mauris sagittis tincidunt libero, ut pulvinar neque mattis non. Morbi mattis vestibulum neque, vitae vestibulum orci gravida ac. Duis quis scelerisque erat. Sed vel maximus nisl. Etiam ultrices pulvinar tellus, quis faucibus neque tempus feugiat. Aenean vel tempor ex, sed commodo turpis. Nam interdum et lectus nec mollis. Curabitur pharetra interdum velit, in suscipit risus vehicula et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut facilisis rhoncus ex, ac ultricies nunc varius sed. Morbi pulvinar velit enim. Fusce lacinia feugiat turpis maximus volutpat.</div>
     </div>
      <div class="grid-itemm"> <div style={{float:"left",display:'flex'}}>
        <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
        <div style={{fontSize:"16px",color:"white",padding:"10px"}}>Quality Assurance</div>
       </div>
       <div style={{float:"right",fontSize:"10px",color:"#AAAAAA",fontSize:"16px",width:"305px",height:"122px",fontFamily:"Gilroy-Regular",overflow:"auto",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa nunc, fringilla quis bibendum non, luctus sed sem. Suspendisse nec libero euismod, facilisis nisi vitae, accumsan lorem. Donec sed urna et magna feugiat lobortis nec nec erat. Mauris sagittis tincidunt libero, ut pulvinar neque mattis non. Morbi mattis vestibulum neque, vitae vestibulum orci gravida ac. Duis quis scelerisque erat. Sed vel maximus nisl. Etiam ultrices pulvinar tellus, quis faucibus neque tempus feugiat. Aenean vel tempor ex, sed commodo turpis. Nam interdum et lectus nec mollis. Curabitur pharetra interdum velit, in suscipit risus vehicula et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut facilisis rhoncus ex, ac ultricies nunc varius sed. Morbi pulvinar velit enim. Fusce lacinia feugiat turpis maximus volutpat.</div>
     </div>
      <div class="grid-itemm"> <div style={{float:"left",display:'flex'}}>
        <div style={{width:"40px",height:"40px",backgroundColor:"#AAAAAA",borderRadius:"50%",}}></div>
        <div style={{fontSize:"16px",color:"white",padding:"10px"}}>Artificial intelligence</div>
       </div>
       <div style={{float:"right",fontSize:"10px",color:"#AAAAAA",fontSize:"16px",width:"305px",height:"122px",fontFamily:"Gilroy-Regular",overflow:"auto",marginTop:"20px",marginLeft:"45px",textAlign:"left"}}>Each deploy is accompanied by QA engineer and includes both manual and automated tests. They helps find bugs, improve performance and discover blockers</div>
     </div>
  
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br ></br>
    </div>
    <div style = {{ backgroundImage: `url(${graph})`,
                
                backgroundRepeat: 'repeat',opacity:"80%",width:"100%",
                height:"auto",
              }}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

    <div style={{fontSize:"14px",fontFamily:"Raleway, Medium",}}><center><div><h3  style={{letterSpacing: "8.4px",color:"#FF004C"}}>T E C H N O L O G Y  S T A C K</h3></div></center></div>
    <center><div style={{color:"#000000",fontSize:"48px",width:"1025px",fontFamily:"Gilroy-Bold",marginTop:"30px",lineHeight:"64px"}}>
      
      Choose battle-tested web development services with community support over hype
      
    </div>
    </center>
    <center><div style={{fontSize:"16px",color:"#707070",width:"1025px",fontFamily:"Gilroy-Bold",marginTop:"20px",lineHeight:"32px"}}>
    Hype can be deceiving – it might look good on paper, but it might not work so well in the real world. With battle-tested services, you know that you’re getting something that’s been tried and tested and is known to work well. You also don’t have to worry about being left in the dark when it comes to support
      
      
    </div>
    </center>
    <center>
    <div style={{display:"flex",marginLeft:"126px",marginTop:"40px",color:"#FF004C"}}>
      <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer",fontSize:"16px"}}  onClick={()=>handelfunction(0)} >Android</div>
      <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}} onClick={()=>handelfunction(1)}>IOS</div>
      <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}} onClick={()=>handelfunction(2)}>FRONTEND</div>
      <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}} onClick={()=>handelfunction(3)}>BACKEND</div>
      <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}} onClick={()=>handelfunction(4)}>CROSS PLATFORM</div>
      <div style={{marginLeft:"123px",color:"#FF004C",cursor: "pointer"}} onClick={()=>handelfunction(5)}>Artificial intelligence</div>
    </div>
    </center>
    <div style={{display:"flex"}}>
    <div style={{color:"white",marginLeft:"250px",marginTop:"100px",}}>
    <p style={{color:"#000000",fontSize:"20px",fontFamily:"Gilroy-Bold"}}>{info1} </p>
    
   
    <div style={{width:"448px",height:"304px",color:"#707070",marginBottom:"10px"}}>{info}
    </div>
    <div style={{ width: "30%",fontFamily: "Gilroy-Bold",marginTop:"0px", backgroundColor: "#754d4d;", height: "10%px", display: 'flex', fontSize:"12px", marginLeft: "0%", borderRadius: "50px" }}><p style={{  color:"#FF004C",  textAlign: "center", marginLeft: "18px", marginTop: "10px",marginBottom:"10px",fontSize:"16px"}}>More on this</p></div>
                   
    </div>
    <div style={{width:"448px",heigth:"393",marginLeft:"200px",marginTop:"100px",padding:"20px",backgroundColor:"#B5EAD7",fontFamily:"Gilroy",borderRadius:"5px"}}>
      <h3 style={{marginLeft:"22px",fontFamily:"Work Sans",fontWeight:"semi-bold",fontSize:"21px",marginBottom:"30px"}}>
        Why andriod development
      </h3>
      <div >
        <h4 style={{marginLeft:"22px",fontFamily:"Gilroy-Regular",fontSize:"16px",marginBottom:"30px"}}>Expressive and concise </h4>
        <h4 style={{marginLeft:"22px",fontFamily:"Gilroy-Regular",fontSize:"16px",marginBottom:"30px"}}>Safer code </h4>
        <h4 style={{marginLeft:"22px",fontFamily:"Gilroy-Regular",fontSize:"16px",marginBottom:"30px"}}>Interoperable </h4>
        <h4 style={{marginLeft:"22px",fontFamily:"Gilroy-Regular",fontSize:"16px",marginBottom:"30px"}}>Structured concurrency Get sustainable growth</h4>
      </div>
    </div>
    </div>
    <center className="design"> <div style={{width:"800px",height:"100px",marginTop:"300px"}}><h4 style={{position:"absolute",left:"357px",right:"357px",backgroundColor:"#C7CEEA",fontSize:"32px"}}>Design, development, DevOps, or Cloud - which team do you need?</h4></div>
   </center>
  <div style={{marginLeft:"100px",marginTop:"100px",display:"flex"}}>
  <div style={{width:"400px",height:"400px",marginLeft:"150px"}}>    <video loop autoPlay sound>
        <source
          src={video}
          type="video/mp4"
        />
       
      </video></div>
  <div style={{width:"640px",height:"400px",marginLeft:"200px",marginBottom:"100px"}}>
  <div  style={{marginBottom:"20px", fontFamily: "Raleway, Medium", fontWeight:"Medium",fontSize: "14px", color: "#FF004C", width: "483" ,letterSpacing: "8.4px",color:"#FF004C",}}>LESSMANAGEMENT, MORERESULTS</div>
      
  <div style={{width:"640px",height:"auto", color:"#000000",fontSize:"48px",fontFamily:"Gilroy-Bold",marginTop:"30px",lineHeight:"64px",marginBottom:"20px"}}>Start-to-finish mobile & Web development services</div>
  <p style={{marginBottom:"30px"}}>  Hyno specializes in the development of custom applications and products for any business, from large companies to small businesses and startups who require a custom solution for their needs. We at Hyno promise a seamless development process that will turn your idea into an enterprise-level solution. We take the time to understand your business and tailor our services to meet your needs. Our team of experts has over 15 years of experience in the industry, and use proven best practices to rapidly develop your product. We collaborate with you through every stage of the product development process—from early customer discovery meetings to strategic planning, design, and development, testing and deployment.</p>
 
                       
                        <p2 style={{color:"#000000",marginTop:"40px"}}><strong>John</strong> Doe</p2>
                        <p className='manager'>Manager - senior relationships</p>
                    </div>
  </div>
  <div style={{margintop:"100px",alignContent:"center"}}> 
  <center><h3 style={{color:"#FF004C",marginTop:"100px",letterSpacing: "8.4px",color:"#FF004C"}}>CASESTUDIES</h3></center>
  </div>
  <div>
  <center><h1 style={{color:"#000000",width:"1000px",marginTop:"50px",marginTop:"50px",fontSize:"48px",lineHeight:"56px"}}>Building and layout permissions to the citizens through a single window of 21 days.</h1></center>
  </div>
  <div>
  
  </div>
  <div style={{display:"flex"}}>
   
  <div style={{marginLeft:"200px",width:"400px",height:"400px",marginTop:"50px"}}>
  <p  style={{fontFamily:"Gilroy-bold",fontSize:"18px",color:"#FF004C",marginBottom:"20px"}}>Client</p>
  <h1 style={{fontSize:"36px",fontWeight:"semi-bold",color:"#000000"}}>Ts-Bpass </h1>
  <h2 style={{fontFamily:"Gilroy-Light",fontSize:"32px",color:"#000000"}}>Government Of Telangana</h2>
  <p style={{fontFamily:"Gilroy-Regular",fontSize:"14px",color:"#000000"}}>Telangana State - Building Approval & Self-Certification System</p></div>
  <div style={{marginLeft:"200px",width:"400px",height:"400px",marginTop:"50px",fontWeight:"lighter",fontFamily:"Raleway, Medium"}}>
    <p style={{fontFamily:"Gilroy-bold",fontWeight:'bolder',fontSize:"18px",color:"#FF004C"}}>Goals</p>
    <ul style={{fontFamily:"Gilroy-Regular" ,margin:"20px"}} >
  <li  >Permissions for buildings and layout are either provided offline or through the DPMS portal. There are no stipulated timelines for providing permissions to the buildings.  </li>
  <li>There are delays in issuing permissions to the citizens. Also there are line departments like fire, police, etc which has a dependency on the issuing.</li>
  <li>Telangana governments wanted to build a single interface portal for the citizens for taking different kinds of permissions integrating it with all the line departments</li>
  </ul>
  </div>
  </div>
  
  <div>
  <center> <img  style={{borderRadius:"5px"}} src={mobile} /></center>
  </div>
  <center>
      <div style={{display:"flex",marginLeft:"16%",marginTop:"80px",textAlign:"left"}}>
  <p style={{marginLeft:"100px",fontFamily:"Gilroy-Regular",width:"304px"}}>We have built a complete web application for the citizens where they can apply for various permissions, from a small house to a multiplex.</p>
  <p style={{marginLeft:"100px",fontFamily:"Gilroy-Regular",width:"304px"}}>Along with the citizen module, a completely new interface has been built for officers to inspect and take actions needed for issuing permissions.</p>
  <p style={{marginLeft:"100px",fontFamily:"Gilroy-Regular",width:"304px"}}>Total of more than 10 departments were integrated into the system.</p>
  </div>
  </center>

  <div style={{marginLeft:"15%",display:"flex",}}> 
  <div style={{ fontSize:"16px", width: "auto", fontFamily: "Gilroy-Bold",backgroundColor: "#FF004C", height: "48px", display: 'flex',marginTop:"30px", marginLeft: "350px", borderRadius: "50px" }}><p style={{  fontSize:"16px",color:"#FFFFFF", textAlign: "center", marginLeft: "45px", marginTop: "4px", marginRight: "45px",padding:"10px",backgroundColor: "#FF004C" }}>View detailed casestudy</p></div>
  <div style={{ width: "auto",fontFamily: "Gilroy-Bold",marginTop:"30px",  height: "48px", display: 'flex', fontSize:"16px", marginLeft: "0%", borderRadius: "50px",border:"1px solid #FF004C" }}><p style={{  fontSize:"16px",textAlign: "center", marginRight: "15px", marginTop: "-0px", color:"#FF004C",marginLeft: "13px",padding:"10px"}}>View All casestudies {""}</p></div>
               

  </div>
  <br></br>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
  
  <Combainer />
  
  <ChakraProvider> <Footer /></ChakraProvider>
  </div>
  )
}

export default Page1