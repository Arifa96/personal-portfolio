import React from 'react';
import personImg from '../../image/person1.png';
import './Home.css';
import About from '../about/About';
import About2 from '../about/About2';

const Home = () => {
  return (
    <>
      <div className='Home-Wrapper'>
        <div id='main-content'>
          <div className='col-md-6' id='text-content'>
             <h1>Shamsul <br/> Alam</h1>
          </div>
          <div className='col-md-6' id='img-content'>
            <img src={personImg} alt='shamsul-alam' className='w-100'/>
          </div>
        </div>
    </div>

    <div className='about'>
      <About />
    </div>
    <div className='about-2'>
      <About2 />
    </div>
    </>
  )
}

export default Home