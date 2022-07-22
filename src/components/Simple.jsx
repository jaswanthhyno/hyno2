import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import cyber_intrusion from "../images/cyber_intrusion.jpg"
import old from "../images/02-old.jpeg"
import hiring from "../images/hiring_remotely.jpg"
import time_zone from "../images/time_zone.jpg"
import tips_to_consider_before_hiring_remote from "../images/tips_to_consider_before_hiring_remote.jpg"
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
                             <div>
                            <h3>
                                <div className='profileflex1'>
                                    <div className='profilebox'>
                                        <img src={hiring} />
                                        <p1>17 FEBRUARY, 2019</p1>
                                        <h4  >Embracing remote work culture amid the COVID19 crisis

                                        </h4>
                                        <br></br>

                                        <p className='profilefont1'>COVID19 locked down nearly a quarter of the human population across the globe and nearly 7 lakh people got infected till now. We are the first human generation witnessing globalized insecurity with an unpredictable future</p>
                                        <a href='https://www.hyno.co/blogs/covidremote-blog'>   <p className='more'> <strong className='arrow'>&#8594;</strong> Read more</p> </a>
                                    </div>
                                    </div></h3>
                            </div>
                            


                         <div>
                            <h3><div className='profileflex1'>
                                <div className='profilebox'>
                                    <img src={cyber_intrusion} />
                                    <p1>17 FEBRUARY, 2022</p1>
                                    <h4 className='date'>10 tools to manage your Remote Teams

                                    </h4>
                                    <br></br>

                                    <p className='profilefont1'>Remote opportunities are growing and are here to stay,companies are swiftly shifting their focus on building their teams remotely,widespread covid19 has already mandated many companies to work remotely</p>
                                    <a href='https://www.hyno.co/blogs/cyber-intrusion-blog'>  <p className='more'> <strong className='arrow'>&#8594;</strong> Read more</p></a>
                                </div>



                            </div></h3>
                        </div>



                
                        <div>
                            <h3><div className='profileflex1'>
                        <div className='profilebox'>
                                        <img src={tips_to_consider_before_hiring_remote} />
                                        <p1>10 APRIL, 2021</p1>
                                        <h4>7 Ultimate Tips While Onboarding a Remote Employee

                                        </h4>
                                        <br></br>

                                        <p className='profilefont1'>Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Praesent convallis in lorem nec blandit.</p>

                                        <a href='https://www.hyno.co/blogs/tips-remote-blog'>  <p className='more'> <strong className='arrow'>&#8594;</strong> Read more</p>

                                        </a></div>
                                        </div></h3>
                        </div>



                        <div>
                            <h3><div className='profileflex1'>

                                    <div className='profilebox'>
                                        <img src={time_zone} />
                                        <p1>17 FEBRUARY, 2022</p1>
                                        <h4>Time Zones ? Where is your Remote Employee  ! <br></br>

                                        </h4>
                                        <br></br>


                                        <p className='profilefont1'>The utility of an Object or an asset lies in our handling. Wet soap gives you a lather to cleanse your body. If you hold it tightly it runs off your clutch. Likewise, a good remote employee must be handled in the right way.</p>
                                        <a href='https://www.hyno.co/blogs/timezone-blog'><p className='more'> <strong className='arrow'>&#8594;</strong> Read more</p></a>
                                    </div>
                                    </div></h3>
                        </div>


                                    <div>
                            <h3><div className='profileflex1'>
                                    <div className='profilebox'>
                                        <img src={old} />
                                        <p1>17 FEBRUARY, 2022</p1>
                                        <h4>Type of tools you will need for Managing a Remote Team</h4>
                                        <br></br>

                                        <p className='profilefont1'>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam. vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. Phasellus dolor sapien, molestie at ante id, porta interdum nisl. Duis sit amet ante feugiat enim viverra sagittis. Sed vitae pulvinar augue. Donec sit amet dolor non velit tincidunt commodo.</p>
                                        <a href='https://www.hyno.co/blogs/tools-blog'><p className='more'> <strong className='arrow'>&#8594;</strong> Read more</p></a>
                                    </div>
                                </div></h3>
                        </div>

                        


    </Carousel>
  );
};

export default Simple;
