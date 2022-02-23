import React from 'react'; 
import { NavLink } from 'react-router-dom';
import './plan.css';
import Planitem from './Planitem';

 
export default function Plan(props) {
    
  return <>
    {Planitem.map((e, i) => {
        return(
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 col-xl-3' key={i}>
                <div className='planitem'>
                   <div className='price'>
                       <div><sub>$</sub><span>{e.Price}</span></div>
                       <div>/Month</div>
                   </div>
                   <div className='PlanTitle'>
                      {e.PlanTitle}
                   </div>
                   <div className='Deciption'>
                       <ul>
                        {e.specs && e.specs.map((s, k) => {
                            return(
                                <>
                                <li key={"c-"+k}>{s}</li>
                                </>
                            )
                        })}
                       </ul>
                        
                    </div>
                    <div className='Planbtn'>
                     <NavLink to="/" className='ButttonPrimery'>Start Now</NavLink>
                   </div> 
                </div>
            </div>
        )

    })}
  </>
} 