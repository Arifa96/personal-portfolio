import React from 'react';
import {Link} from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contactWrapper'>
        <h2>Contact us!</h2>
        <div className='container' id='contactContainer'>
             <div className='col-md-3'>
                <div>
                  <h5>Shamsul:</h5>
                  <Link>Shamsul Alam</Link>
                </div>
                <div id='contact-content'>
                    <Link>Shamsul.alam[at]</Link>
                    <Link>europarl.europa.eu</Link>
                </div>
             </div>
             <div className='col-md-3'>
                <h5>Special Political Assistant:</h5>
               <div  id='contact-content'>
                  <Link>(committee work,
                    political assistance)
                  </Link>
                 <Link>vilma.faal [at] ep.europa.eu</Link>
                 <Link>+32 472 33 16 39</Link>
               </div>
             </div>
             <div className='col-md-3'>
                    <h5>Special Assistant for Administration:</h5>
                <div  id='contact-content'>
                    <Link>Anna Kalso(meetings,visual communication)</Link>
                    <Link>anna.kalso [at] ep.europa.eu</Link>
                    <Link>+32 472 98 23 08</Link>
                </div>
             </div>
             <div className='col-md-3'>
                <h5>Special Assistant for Communications:</h5>
                <di id='contact-content'>
                    <Link>Anna Lemström(Communications,Political Assistance)</Link>
                    <Link>anna.lemstrom [at] ep.europa.eu</Link>
                    <Link>+32 472 98 82 44</Link>
                </di>
             </div>
        </div>
    </div>
  )
}

export default Contact