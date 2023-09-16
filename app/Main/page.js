import React from 'react'
import Heder from '../Component/Heder'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import LanguageIcon from '@mui/icons-material/Language';


import LunchDiningIcon from '@mui/icons-material/LunchDining';

const main = () => {
  return (
    <>
      <Heder />

      <div id='Nav1'>
        {/* <h1>ZOMATO</h1> */}
        <div className='plac'>

          <LocationOnIcon className='icon' />
          <h2>Mumbai</h2>
          <ExpandMoreIcon className='icon1' />

          <div id='box'>
            <SearchIcon className='icon2' />
          </div>
          <div id='Search'>
            <input type="text" placeholder='Search for restaurant,Cuisine or a dish' className='s1' />
          </div>

        </div>



      </div>

      <div id='nav-2'>
        <div className='icon3'>
          <DeliveryDiningIcon className='icon4' />
          <h2 className='h2'>Delivery</h2>
        </div>

        <div className='icon3'>
          < RamenDiningIcon className='icon4' />
          <h2 className='h2'>Dining.Out</h2>
        </div>

        <div className='icon3'>
          <DinnerDiningIcon className='icon4' />
          <h2 className='h2'>Nightlife</h2>
        </div>




      </div>
      <div id='nav3'>
        <div className='a1'>
          <TuneIcon className='icon6' />
          <h2 className='ha'> Filter</h2>
        </div>


        <div className='a1'>
          <div className='icon6' />
          <h2 className='ha'>Rating:4.0+ </h2>
        </div>


        <div className='a1'>
          <KeyboardArrowDownIcon className='icon7' />
          <h2 className='ha1'>Cuisines</h2>
        </div>


      </div>



      <div className='nav4'>
        <h1 className='n4'>Inspiration for your first order</h1>
        <div className='box1'>

          <div className='box'>
            <img src=" https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="" srcset="" />
            <p className='para'> pizza</p>
          </div>

          <div className='box'>
            <img src=" https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="" srcset="" />
            <p className='para'>Burger</p>
          </div>

          <div className='box'>
            <img src=" https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" alt="" srcset="" />
            <p className='para'>Cake</p>
          </div>

          <div className='box'>
            <img src=" https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png  " alt="" srcset="" />
            <p className='para'> Rolls</p>
          </div>

          <div className='box'>
            <img src="https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png" alt="" srcset="" />
            <p className='para'> Sandwich</p>
          </div>

          <div className='box'>
            <img src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" alt="" srcset="" />
            <p className='para'>Briyani</p>
          </div>



        </div>


      </div>



      <div id='nav5'>
        <h1 className='para2'>Top brands for you</h1>

        <div className='box2'>
          <div className='boxx'>
            <img src="https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png?output-format=webp  " alt="" srcset="" />
            <p className='para'>McDonald</p>
          </div>


          <div className='boxx'>
            <img src=" https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png?output-format=webp" alt="" srcset="" />
            <p className='para'>Pizza</p>
          </div>


          <div className='boxx'>

            <img src=" https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png?output-format=webp" alt="" srcset="" />
            <p className='para'>Burger.K</p>
          </div>

        </div>


        <div className='boxx'>

          <img src=" https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520651.png?output-format=webp" alt="" srcset="" />
          <p className='para'>Subway</p>
        </div>


        <div className='boxx'>

          <img src="https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179319.png?output-format=webp" alt="" srcset="" />
          <p className='para'>Theobroma</p>
        </div>

        <div className='boxx'>

          <img src="https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715114.png?output-format=webp " alt="" srcset="" />
          <p className='para'>FreshMenu</p>
        </div>

      </div>



         {/* .... */}


         <div id='nav6'>
          <h1 className='para3'>Best Food in Mumbai</h1>
          <div className='box3'>
            <div className='bx'>
              <img src=" https://b.zmtcdn.com/data/pictures/chains/6/32026/6e9456e4280a714993fd8ef3b11aed63_o2_featured_v2.jpg?output-format=webp" alt="" srcset="" />
              <p className='para1'>Aditi  North Indian</p>
            </div>

            <div className='bx'>
              <img src=" https://b.zmtcdn.com/data/pictures/2/20696742/ca1aebbced6c554563f745cf324096ec_o2_featured_v2.jpg?output-format=webp" alt="" srcset="" />
              <p className='para1'>The Craftery by Subko</p>
            </div>


            <div className='bx'>
              <img src=" https://b.zmtcdn.com/data/pictures/chains/9/18140649/4cb203e431bd45124a5cd01bcb50055d_o2_featured_v2.jpg?output-format=webp" alt="" srcset="" />
              <p className='para1'>Chaayos Chai+Snacks=Relax</p>
            </div>


            <div className='bx'>
              <img src=" https://b.zmtcdn.com/data/pictures/chains/3/32223/5114b993bf0c7a78101fe7e85305b000_o2_featured_v2.jpg?output-format=webp" alt="" srcset="" />
              <p className='para1'>Ramashraya - Since 1939</p>
            </div>


            <div className='bx'>
              <img src="https://b.zmtcdn.com/data/pictures/chains/9/35079/c7d5d60adfd7086350717a0ec4cf39b6_o2_featured_v2.jpg?output-format=webp" alt="" srcset="" />
              <p className='para1'>McDonald's</p>
            </div>


            <div className='bx'>
              <img src="https://b.zmtcdn.com/data/pictures/chains/1/49781/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg?output-format=webp" alt="" srcset="" />
              <p className='para1'>Burger King</p>
            </div>

            <div className='bx'>
              <img src=" https://b.zmtcdn.com/data/pictures/chains/9/35299/4b16336b06df38a18362be00bf81d2e5_o2_featured_v2.jpg" alt="" srcset="" />
              <p className='para1'>Pizza Hut</p>
            </div>

            <div className='bx'>
              <img src=" https://b.zmtcdn.com/data/pictures/8/19106688/e1243332b3f72eff7b7db10ff320a584_o2_featured_v2.jpg" alt="" srcset="" />
              <p className='para1'>Mamledar Misal</p>
            </div>


           
            <div className='bx'>
              <img src=" https://b.zmtcdn.com/data/pictures/chains/2/18796372/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg" alt="" srcset="" />
              <p className='para1'>La Pino'z Pizza</p>
            </div>



            <div className='bx'>
              <img src=" https://b.zmtcdn.com/data/pictures/chains/4/43344/163aa2d5720ce597203370afb1357c90_o2_featured_v2.jpg" alt="" srcset="" />
              <p className='para1'>Starbucks Coffee</p>
            </div>
            


            <div className='bx'>
              <img src=" https://b.zmtcdn.com/data/pictures/chains/9/20427479/9b49d2c9c09b606463857f37742498c5_o2_featured_v2.jpg" alt="" srcset="" />
              <p className='para1'>Naadbramha Idli</p>
            </div>
            


            <div className='bx'>
              <img src=" https://b.zmtcdn.com/data/pictures/chains/0/39150/70871f7248e4d9eff0f5f9c87159eb6c_o2_featured_v2.jpg" alt="" srcset="" />
              <p className='para1'></p>
            </div>
            
            


            
           


            


          </div>
          

          <div id='nav7'>
            <h1 className='pa'>Popular localities in and around Mumbai</h1>
            <div className='t-1'>
              <div className='tt'>
                <p className='nj'>Lower Parel</p>
                <p className='nj1'>419 places</p>
               < ArrowForwardIcon className='pi' />

              
              </div>



              <div className='tt'>
                <p className='nj'>Powai complex</p>
                <p className='nj1'>388 places</p>
               < ArrowForwardIcon className='pi' />

              
              </div>


              <div className='tt'>
                <p className='nj'>Malad West</p>
                <p className='nj1'>832 places</p>
               < ArrowForwardIcon className='pi' />

              
              </div>





              <div className='tt'>
                <p className='nj'>Borivali West</p>
                <p className='nj1'>611 places</p>
               < ArrowForwardIcon className='pi' />

              
              </div>



              <div className='tt'>
                <p className='nj'>Bandra Complex</p>
                <p className='nj1'>117 places</p>
               < ArrowForwardIcon className='pi' />

              
              </div>


              <div className='tt'>
                <p className='nj'>Vashi complex</p>
                <p className='nj1'>589 places</p>
               < ArrowForwardIcon className='pi' />

              
              </div>

              <div className='tt'>
                <p className='nj'>Fort Complex</p>
                <p className='nj1'>249 places</p>
               < ArrowForwardIcon className='pi' />

              
              </div>


              <div className='tt'>
                <p className='nj'>Juhu complex</p>
                <p className='nj1'>419 places</p>
               < ArrowForwardIcon className='pi' />

              
              </div>

              <div className='tt'>
                <p className='nj'>Marin Drive St</p>
                <p className='nj1'>711 places</p>
               < ArrowForwardIcon className='pi' />

              
              </div>




            </div>


          </div>
        
                <div id='nav8'>
                  <h1 className='l1'>Explore options near me</h1>
                  <div className='ss'>
                    <div className='ss1'>
                      <h2>Popular cuisines near me</h2>
                      <ArrowDownwardIcon className='new1'/>
                    </div>


                    <div className='ss1'>
                      <h2>Popular restaurant types </h2>
                      <ArrowDownwardIcon className='new1'/>
                    </div>


                    <div className='ss1'>
                      <h2>Top Restaurant Chains S</h2>
                      <ArrowDownwardIcon className='new1'/>
                    </div>


                    <div className='ss1'>
                      <h2>Cities We Deliver To  ST..</h2>
                      <ArrowDownwardIcon className='new1'/>
                    </div>

                  </div>

                  
                  <div id='nav9'>
                  <p className='Dog'> Zomato</p>
                  
                    <div id='check'>
                      
                    <div className='po'>
                      <img src="https://tse4.mm.bing.net/th?id=OIP.Ay8H_126zjIfNRE3MeBDuQHaHa&pid=Api&P=0&h=180 " alt="" srcset="" />
                      <p>India</p>
                    </div>

                   

                      

                    </div>

                    <div className='po1'>
                      
                      <LanguageIcon className='glo'/>

                      <p>English</p>
                    </div>



                    <div className='fot'>
                    
                      <ul>
                      
                        <p className='last1'>About Zomato</p>
                        <li> Who We Are</li>
                        <li>Blog</li>
                      <li>Work With Us</li>
                      <li> Investor Relations</li>
                      <li>Report Fraud</li>
                      <li>Press Kit</li>
                      <li>Contact Us</li>

                       
                      </ul>



                      <ul>
                        <p className='last1'>ZOMAVERSE</p>
                        <li>Zomato</li>
                        <li>Biknit</li>
                      <li>Feeding india</li>
                      <li> Investor Relations</li>
                      <li>Hyperpure</li>
                      <li>Press Kit</li>
                      <li>Zoomaland</li>

                       
                      </ul>



                      <ul>
                        <p className='last1'>FOR RESTAURANTS</p>
                        <li> Partner with us</li>
                        <li>Apps For you</li>
                      <li>FOR ENTERPRISES</li>
                      <li> Zooma for Enterprices</li>
                      <li>Food india</li>
                      <li>All Countery</li>
                      <li>Contact Us</li>

                       
                      </ul>



                      <ul>
                        <p className='last1'>LEARN MORE</p>
                        <li>Privcy</li>
                        <li>Security</li>
                      <li>Terms</li>
                      <li>Sitemap</li>
                      <li>All Country</li>
                      <li>Press Kit</li>
                      <li>Fooding</li>

                       
                      </ul>
                    </div>

                    <h1 className='gg'>
                     
                    </h1>

                    <p className='chiled'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
                     2008- 2023 © Zomato™ Ltd. All rights reserved.</p>
                     
                    </div>

                  
                </div>

          
               
          
         </div>


        
           
          











    </>
  )
}

export default main
