import './Hero.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import mobileimg from '../img/mobile-frame.png';
import herobgimg from '../img/hero-banner-bg.png';
import MobileThumbimg1 from '../img/MobileThumbimg1.svg';
import MobileThumbimg2 from '../img/MobileThumbimg2.svg';
import MobileThumbimg3 from '../img/MobileThumbimg3.svg';

function Hero() {
     const herobg = {
         backgroundImage:`url(${herobgimg})`
     }
    return(
        <div className='HeroSlider'> 
            <div className='Hero-Bg'  style={herobg}></div>
           <div className='container'>
               <div className='row align-items-center'>
                   <div className='col-md-6'>
                       <h1>Interact with your <span>Fans Sell Content</span> to your audience</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                       <NavLink className='ButttonPrimery' to="/#">Start Today</NavLink>
                   </div>
                   <div className='col-md-6'>
                     <div className='HeroMobile'>
                         <div className='MobileThumb1'>
                              <img src={MobileThumbimg1} alt="thumbnail" />
                         </div>
                         <div className='MobileThumb2'>
                              <img src={MobileThumbimg2} alt="thumbnail" />
                         </div>
                         <div className='MobileThumb3'>
                              <img src={MobileThumbimg3} alt="thumbnail" />
                         </div>
                         <img src={mobileimg} className='MobileFrame' alt='Mobile application' />
                     </div>
                   </div>
               </div>
            </div> 
        </div>
    );
}
export default Hero;