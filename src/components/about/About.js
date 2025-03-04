import React from 'react';
import aboutImg from '../../image/about.jpg'
import './About.css';

const About = () => {
  return (
    <div className='aboutWrapper'>
      <div className='aboutContent'>
      <div className='col-md-5' id='aboutImgContent'>
            <img src={aboutImg} alt='shamsul-alam' className='w-100' />
        </div>
        <div className='col-md-3' id='aboutTextContent'>
           <p>Euroopan parlamentti vaikuttaa meidän jokaisen elämään yhä enemmän.<br/> <br/> EU on huonoimmillaan kun se keskittyy markkinoiden ja suuryritysten lyhytnäköisiin etuihin ja parhaimmillaan kun se vahvistaa demokratiaa, hyvinvointivaltioita, inhimillisempää työelämää <br/> <br/> ja rajat ylittävää työtä ilmastonmuutoksen ja luontokadon pysäyttämiseksi.Olemme kaikki kuulleet, kuinka turhaa on alle 6 miljoonan kansana tehdä toimenpiteitä – juuri siksi ne on tehtävä EU:n tasolla, joka voi isona markkina-alueena olla asettamassa koko maailmalle kestäviä pelisääntöjä markkinoiden rajaamiseksi ja <br/> <br/>hallitsemiseksi.Jos kilpailemme siitä, kuka myy ympäristönsä, hyvinvointivaltion rahoittavan verotuksensa ja työntekijänsä halvimmalla, häviämme kaikki.</p>
        </div>
      </div>
    </div>
  )
}

export default About