import Hero from '../elements/Hero';
import './home.css';
import { Helmet } from 'react-helmet';
import featurebgimg from '../img/featurebgimg.png'; 
import Feature from '../elements/Feature';
import Plan from '../elements/Plan';

function Home(props) {
  const featurebg = {
    backgroundImage:`url(${featurebgimg})`
  }
    return <>
      <Helmet>
            <title>Whoyoutone</title>
            <meta name="title" content="" />
            <meta name="keywords" content=""></meta>
            <meta name="description" content="" />
            <link rel="canonical" href="#" />
        </Helmet>
         <Hero />
        <div className='FeatureBlock' style={featurebg}>
          <div className='container'>
             <div className='row'>
               <div className='col-md-12 text-center'>
                  <h2>Features</h2>
                  <p>The full monty spiffing good time no biggie cack grub fantastic.</p>
               </div>
             </div>
             <div className='row'>
           
              <Feature />
             </div>
          </div>
        </div>
        <div className='unlock-app'>
          <div className='apppriceBg'></div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2>Unlock Full Power Of App</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p> 
              </div>
            </div>
            <div className='row justify-content-center'>
               <Plan />
            </div>
          </div>
        </div>
     </>

} 
export default Home; 
