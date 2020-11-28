import React from 'react'
import './style.css'
import Barcode from './images/barcode.jpg'

const Comic = () => {
  return (
    <div className='comiccover'>
      <div className='cover'>
        <h1>xkcd</h1>
        <div>
          <p>A webcomic of romance, sarcasm, math, and language.</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </div>
      </div>
      <div className='title'>
        <h1>Life Before the Pandemic</h1>
      </div>
      <div className='image'>
        <img src='https://imgs.xkcd.com/comics/life_before_the_pandemic.png' alt='' />
      </div>
      <div className='number'>
        <div className='date'>
          <h1>Num. 20528</h1>
          <h2>Day: 27 Month: 11 Year: 2020 </h2>
        </div>
        <a href='http://www.freepik.com'>
          <img src={Barcode} alt='' />
        </a>
      </div>
      <div className='description'>
        <p>Our retina display features hundreds of pixels per inch in the central fovea region.</p>
        <div className='refresh'>
          <h1>REFRESH!</h1>
          <span>Or go to xkcd</span>
        </div>
      </div>
    </div>
  )
}

export default Comic
