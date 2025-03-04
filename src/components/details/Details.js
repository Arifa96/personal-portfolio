import React from 'react';
import about1Img from '../../image/about1.jpg'
import about2Img from '../../image/about4.jpg'
import about3Img from '../../image/about5.jpg'
import './Details.css';

const Details = () => {
  return (
    <div className='detailsWrapper'>
       <div className='content-1'>
          <div className='col-md-6' id='text-content-1'>
          <h1>Shamsul Alam</h1>
          <p>on ensimmäisen kauden europarlamentaarikko. Koordinaattorina hän 
           johtaa vasemmistoryhmän työtä talous- ja verovaliokunnissa 
           (ECON ja FISC) sekä toimii jäsenenä myös teollisuuden, 
           tutkimuksen ja energian valiokunnassa (ITRE). Ennen valintaansa 
           Euroopan Parlamenttiin hän on toiminut vasemmistoliiton eduskuntaryhmän
            puheenjohtajana ja opetusministerinä.<br/><br/> Politiikassa Jussille tärkeää
            on pohjoismaisen hyvinvointivaltion vahvistaminen, inhimillinen
            työelämä, kansainvälinen oikeudenmukaisuus sekä siirtymä luonnon 
            monimuotoisuutta turvaaviin ja ilmaston kannalta kestäviin 
            ratkaisuihin..Jussin into maailman parantamiseen syttyi 15-vuotiaan
            Brasiliassa vietetyn kuukauden aikana,<br/><br/> kun eriarvoisuus muurien
            eri puolilla asuneen köyhälistön ja eliitin välillä kävi 
            ilmeiseksi. Siitä asti Jussi on toiminut pohjoismaisen hyvinvointivaltion 
            vahvistamiseksi Suomessa ja oikeudenmukaisuuden lisäämiseksi koko maailmassa.
            Brasiliassa myös luonnon monimuotoisuuden tuhoaminen herätti, kun valtavat alueet sademetsää 
            oli muutettu yhden ainoan lajin käsittäviksi lähes kuolleiksi puupelloiksi. Nuorena syttynyt
            vaikuttamisen kipinä on vienyt Jussin monenlaiseen järjestö- ja puoluetoimintaan,
            Vantaan ja Porvoon kaupunginvaltuustoihin sekä eduskuntaan.<br/><br/></p>
          </div>
          <div className='col-md-6' id='image-content-1'>
            <img src={about1Img} alt='' className='w-100' />
          </div>
       </div>
       <div className='content-2'>
         <div className='col-md-6' id='image-content-2'>
          <img src={about2Img} alt='' className='w-100'/>
         </div>
         <div className='col-md-6' id='text-content-2'>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the 
            leap into electronic typesetting,<br/><br/> remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's<br/><br/> standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the 
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum
            </p>
         </div>
       </div>
       <div className='content-3'>
       <div className='col-md-6' id='text-content-3'>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the 
            leap into electronic typesetting,<br/><br/> remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's<br/><br/> standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the 
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum
            </p>
         </div>
         <div className='col-md-6' id='image-content-3'>
          <img src={about3Img} alt='' className='w-100'/>
         </div>
       </div>
       <div className='content-1'></div>
    </div>
  )
}

export default Details