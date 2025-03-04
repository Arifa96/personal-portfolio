import React from 'react';
import about2 from '../../image/about2.jpg';
import './About2.css';

const About2 = () => {
  return (
    <div className='about2Wrapper'>
       <div className='title-container'>
          <h1>SH</h1>
          <h1>AM</h1>
          <h1>SUL</h1>
        </div>
        
       <div id="timeline">
         <div class="timeline-item">
           <h3>Euroopan parlamentin jäsen</h3>
           <p>2024–</p>
        </div>
        <div class="timeline-item">
          <h3>Eduskuntaryhmän puheenjohtaja</h3>
          <p>2021–2024</p>
        </div>
         <div class="timeline-item">
         <h3>Ulkoasiainvaliokunnan jäsen</h3>
          <p>2021–2024</p>
         </div>
        <div class="timeline-item">
           <h3>EU-ministerivaliokunnassa</h3>
           <p>2021–2022</p>
         </div>
         <div class="timeline-item">
          <h3>EU-asiat käsittelevässä suuressa valiokunnassa</h3>
          <p>2022–2023</p>
        </div>
        <div class='timeline-item'>
          <h3>Marinin hallituksen johtoviisikossa</h3>
          <p>2021–2022</p>
        </div>
        <div class='timeline-item'>
         <h3>Euroopan Neuvoston parlamentaarisessa yleiskokouksessa 2019-2020</h3>
         <p>2019–2020</p>
         </div>
     </div>

     <div className='imageContainer'>
        <img src={about2} alt=''/>
     </div>
 </div>
  )
}

export default About2








