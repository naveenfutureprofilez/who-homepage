import React from 'react'; 
import './Feature.css';
import featuresitem from './featuresitem';

 //console.log(featuresitem.addclass);

export default function Feature(props) {
    return <>
        {featuresitem.map((e, i) => {
            return (
                <div className='col-lg-3 col-md-6 col-sm-6 col-12' key={i}> 
                     <div className= {"feature-item" + " " +e.addclass}>
                         <div className='icon'>
                              <img src={e.Featuresimg} alt="icon" />
                         </div> 
                         <h3>
                             {e.TitleName}
                         </h3>
                         <p>{e.Decription}</p>
                     </div> 
                </div>
            );
        })}


    </>
}
