import React from 'react'
import dropdown from "../images/Group 11709/Group 11709.png"
import logo from "../images/hyno/Group 11654@2x.png"
import video from "../images/office.mp4"
import image from "../images/graphy_@2X/graphy_@2X.png"
import mobile from "../images/Mask Group 2/Mask Group 2.png"
import profile from "../images/Image 41/Image 41.png"
import Footer from "./Footer"
import time_zone from "../images/time_zone.jpg"
import { ChakraProvider } from '@chakra-ui/react'
import icon from "../images/Image 29/Image 29.png"
import Slider from "react-slick";
import old from "../images/02-old.jpeg"
import hiring from "../images/hiring_remotely.jpg"
import tips_to_consider_before_hiring_remote from "../images/tips_to_consider_before_hiring_remote.jpg"
import icon2 from "../images/Image 30/Image 30.png"
import icon3 from "../images/Image 31/Image 31.png"
import icon1 from "../images/Image 32/Image 32.png"
import cyber_intrusion from "../images/cyber_intrusion.jpg"
import sc1 from "../images/sc1.png"
import sc2 from "../images/sc2.png"
import './second.css';
import { Link } from 'react-router-dom'
import Test from './Test'
import Combainer from './Combainer'
function SamplePreArrow(props) {
    const { className, style, onClick } = props;
    return (

        <button
            style={{ ...style, color: "blue", position: "absolute", top: "100px", left: "80%", fontFamily: "Work Sans, Medium    " }}
            onClick={onClick}>

            {"< Previous"}
        </button>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button style={{ color: "red", position: "absolute", top: "100px", left: "90%", fontFamily: "Work Sans, Medium    " }} onClick={onClick}>
            {"Next >"}
        </button>
    );
}


function Second() {
    const settings = {
        dots: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow  />,
        prevArrow: <SamplePreArrow />,
        autoPlay:false,
        speed: 1200,
        autoplaySpeed: 99999999,
       
  
    };
    const settings1 = {
        dots: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 4000,

    };

    return (
        <div className='home'>
            <div className='Homepage'>


                <video loop autoPlay>
                    <source
                        src={video}
                        type="video/mp4"
                    />

                </video>

                <div className='homepage1'>
                    <div className='navbar'>
                        <div className='left'>
                            <img className='dropdown' src={dropdown} />

                        </div>
                        <div className='logo'>  <img className='logoimg' src={logo} />
                        </div>
                        <div className='right'>
                            E: hello@hyno.co
                        </div>
                    </div>
                    <div className='content'>
                        <div className='intro'><h1>We Design, Build and Deliver Software Products</h1></div>
                        <div className='paragaph'>

                            We’re a team of design and development experts who help you transform ideas into products


                        </div>

                    <Link to={"contact"} >   <div className='border-r'><p >Let’s create something together  </p></div> </Link>
                    </div>
                </div>




            </div>
            <div className='black'>
                <div className='what'>
                    <h1>What We Do</h1>
                    <div className='flex1'>
                        <div className='container'>
                            <div className='flexcontainer'>
                                <h2>01</h2>
                                <h4>Turn ideas to products</h4>
                                <p>Define operational, technological, and strategic challenges through an in-depth understanding of your business. Then design a strategic roadmap of your idea to a great product.</p>
                                <Link to="/page1"> <p2> &#8594;  Product Development </p2></Link></div>

                            <div className='flexcontainer'>
                                <h2>02</h2>
                                <h4>Accelerate Your Business</h4>
                                <p>Supported by our team, your digital transformation swiftly gains momentum and evolves into a digital acceleration. Accelerate your tech growth to keep pace with business demands</p>
                                <Link to="/page2">   <p2> &#8594;  Build Or Extend Your Tech Teams </p2></Link>
                            </div>


                        </div>
                    </div>
                    <div className='insight'>
                        <p2>INSIGHTS</p2>
                        <h1>Perspectives on <br></br>digital and web.</h1>
                        <p>Technology is indistinguishable to magic if it can give an experience of something that we never imagine. The following products are crafted by hyno and we serve our clients with nothing less than they imagined.</p>
                    </div>




                </div>
            </div>

            <div className='Component-Bg'
                style={{
                    backgroundImage: `url(${image})`,

                    backgroundRepeat: 'repeat',
                }}>
                <div className='over'>
                    <a href='https://www.hyno.co/casestudies/washapp'>
                    <div className='flexbox'>
                        <img src={sc2} />
                         <h4>Wash App</h4>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "20%", fontFamily: "Gilroy-Bold", marginTop: "0px", backgroundColor: "rgb(235, 154, 154)", height: "10%px", display: 'flex', fontSize: "12px", marginLeft: "0%", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "4px", colorAdjust: "initial", marginTop: "10px", marginBottom: "10px", color: "black" }}>FINTECH</p></div>
                            <div style={{ width: "20%", fontFamily: "Gilroy-Bold", marginTop: "0px", backgroundColor: "#00FFFF", height: "10%px", display: 'flex', fontSize: "12px", marginLeft: "4%", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "4px", marginTop: "10px", marginBottom: "10px", color: "black" }}>FINTECH</p></div>

                        </div>
                        <p className='mobilefont'>When all the services like food, travel, groceries were available online, Washapp wanted to make laundry available online.</p>
                    </div>
                    </a>
                    <a href="https://www.hyno.co/casestudies/nearbuzz">
                    <div className='flexbox'>
                        <img src="https://www.hyno.co/img/Component%2041%20%E2%80%93%201.png" />
                        <h4>Nearbuzz</h4>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "20%", fontFamily: "Gilroy-Bold", marginTop: "0px", backgroundColor: "rgb(235, 154, 154)", height: "10%px", display: 'flex', fontSize: "12px", marginLeft: "0%", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "4px", marginTop: "10px", marginBottom: "10px", color: "black" }}>FINTECH</p></div>
                            <div style={{ width: "20%", fontFamily: "Gilroy-Bold", marginTop: "0px", backgroundColor: "#00FFFF", height: "10%px", display: 'flex', fontSize: "12px", marginLeft: "4%", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "4px", marginTop: "10px", marginBottom: "10px", color: "black" }}>FINTECH</p></div>

                        </div>
                        <p className='mobilefont'>Nearbuzz is a web application catering to marketers who can promote their products based on the geography and real time conditions.</p>
                    </div>
                    </a>

                </div>
                <div className='over1'>
                <a href="https://www.hyno.co/casestudies/tsbpass">
                    <div className='flexbox'>
                        <img src="https://www.hyno.co/img/Component%207%20%E2%80%93%201.png" />
                        <h4>Ts-bpass</h4>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "20%", fontFamily: "Gilroy-Bold", marginTop: "0px", backgroundColor: "rgb(235, 154, 154)", height: "10%px", display: 'flex', fontSize: "12px", marginLeft: "0%", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "4px", marginTop: "10px", marginBottom: "10px", color: "black" }}>FINTECH</p></div>
                            <div style={{ width: "20%", fontFamily: "Gilroy-Bold", marginTop: "0px", backgroundColor: "#00FFFF", height: "10%px", display: 'flex', fontSize: "12px", marginLeft: "4%", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "4px", marginTop: "10px", marginBottom: "10px", color: "black" }}>FINTECH</p></div>

                        </div>
                        <p className='mobilefont'>TS-bPASS is a flagship product of the government of Telangana through which building and layout permissions will be given to the citizen through a single window.</p>
                    </div>
                    </a>
                    <div className='flexbox'>
                        <img src={sc1} />
                        <h4>Web & Digital Design</h4>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "20%", fontFamily: "Gilroy-Bold", marginTop: "0px", backgroundColor: "rgb(235, 154, 154)", height: "10%px", display: 'flex', fontSize: "12px", marginLeft: "0%", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "4px", marginTop: "10px", marginBottom: "10px", color: "black" }}>FINTECH</p></div>
                            <div style={{ width: "20%", fontFamily: "Gilroy-Bold", marginTop: "0px", backgroundColor: "#00FFFF", height: "10%px", display: 'flex', fontSize: "12px", marginLeft: "4%", borderRadius: "50px" }}><p style={{ textAlign: "center", marginLeft: "4px", marginTop: "10px", marginBottom: "10px", color: "black" }}>FINTECH</p></div>

                        </div>
                        <p className='mobilefont'>Integer ullamcorper accumsan imperdiet. Cras vulputate lectus erat, in tristique.</p>
                    </div>


                </div>
                <div className='people'>
                    <h1>What people say</h1>
                </div>
                <Slider  {...settings1}>
                    <div style={{ witdh: "100px" }}>
                        <div className='hole' >
                            <div className='profile'>
                               
                                <p2><strong>Khushhal</strong> Gupta</p2>
                                <p className='manager'>Engineering Lead, Boloo</p>
                            </div>
                            <div className='managerbio'><p>Loved hyno’s approach is solving our problem to hire our lead developer from India. The team has coordinated well and was able to give us the best remote talent.</p></div>
                        </div>
                    </div>
                    <div style={{ witdh: "100px" }}>
                        <div className='hole' >
                            <div className='profile'>
                                
                                <p2><strong>Sathish</strong> Doe</p2>
                                <p className='manager'>CEO-Nearbuzz</p>
                            </div>
                            <div className='managerbio'><p className='managerfont'>UX team has impressed me with their attention to how the business is supposed to work and how the user experience they suggest aligns with our strategic goals.</p></div>
                        </div>
                    </div>


                </Slider >
                <div class="grid-container">
                    <img src={icon} />
                    <img src={icon1} />
                    <img src={icon2} />
                    <img src={icon3} />
                    <img src={icon} />
                    <img src={icon3} />
                    <img src={icon1} />
                    <img src={icon3} />



                </div>
                <div className='profileflex'>
                    <div className='profilebox'>
                        <img src={mobile} />
                        <h4>Building an MVP?</h4>

                        <p className='profilefont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut malesuada sapien. Integer ullamcorper accumsan imperdiet. Cras vulputate lectus erat, in tristique nunc lobortis id. Cras vulputate urna velit, ut.</p>
                        <div style={{ width: "156px", fontFamily: "Gilroy-Bold", marginTop: "0px", height: "48px", display: 'flex', fontSize: "12px", marginLeft: "0%", borderRadius: "50px", border: "1px solid #FF004C" }}><p style={{ fontSize: "16px", textAlign: "center", marginRight: "15px", marginTop: "px", color: "#FF004C", marginLeft: "13px", padding: "10px" }}>Email Ram  </p></div>
                    </div>
                    <div className='profilebox'>
                        <img src={mobile} />
                        <h4>Need a Team?</h4>

                        <p className='profilefont'>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit.</p>
                        <div style={{ width: "156px", fontFamily: "Gilroy-Bold", marginTop: "0px", height: "48px", display: 'flex', fontSize: "12px", marginLeft: "0%", borderRadius: "50px", border: "1px solid #FF004C" }}><p style={{ fontSize: "16px", textAlign: "center", marginRight: "15px", marginTop: "px", color: "#FF004C", marginLeft: "13px", padding: "10px" }}>Email Dheeraj {""}</p></div>
                    </div>
                    <div className='profilebox'>
                        <img src={mobile} />
                        <h4>Talk Tech?</h4>

                        <p className='profilefont'>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam. vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. Phasellus dolor sapien, molestie at ante id, porta interdum nisl. Duis sit amet ante feugiat enim viverra sagittis. Sed vitae pulvinar augue. Donec sit amet dolor non velit tincidunt commodo.</p>
                        <div style={{ width: "156px", fontFamily: "Gilroy-Bold", marginTop: "0px", height: "48px", display: 'flex', fontSize: "12px", marginLeft: "0%", borderRadius: "50px", border: "1px solid #FF004C" }}><p style={{ fontSize: "16px", textAlign: "center", marginRight: "15px", marginTop: "px", color: "#FF004C", marginLeft: "13px", padding: "10px" }}>Email Ranga{""}</p></div>
                    </div>
                </div>
                <div>
                    <h1 className='business'>Business & Tech Insights</h1>
                </div>


                <div style={{marginLeft:"8%"}}>

                  
                    <Test />
                </div>
                <Combainer/>

                <ChakraProvider> <Footer /></ChakraProvider>

            </div>

        </div>
    )
}

export default Second