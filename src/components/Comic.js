import React, { useEffect } from 'react'
import './style.css'
import Barcode from './images/barcode.jpg'
import fetch from 'node-fetch'
import { axios } from '../axios'

const Comic = () => {
  const getComic = async () => {
    try {
      const response = await fetch('https://xkcd.com/info.0.json')
      const data = await response.json()
      console.log('TLC ~ file: Comic.js ~ line 13 ~ getComic ~ data', data)
      // return data
    } catch (error) {
      console.log('TLC ~ file: Comic.js ~ line 14 ~ getComic ~ error', error)
    }
  }

  // try {
  //   const data = await axios.get('/info.0.json', {
  //     headers: { 'Access-Control-Allow-Origin': 'ORIGIN' },
  //   })
  //   console.log('TLC ~ file: Comic.js ~ line 9 ~ getComic ~ data', data)
  // } catch (error) {
  //   console.log(
  //     'TLC ~ file: Comic.js ~ line 14 ~ getComic ~ error',
  //     error.response
  //   )
  // }

  useEffect(() => {
    getComic()
  })

  return (
    <div className='comiccover'>
      <div className='cover'>
        <a href='/'>
          <h1>xkcd</h1>
        </a>
        <div>
          <p>A webcomic of romance, sarcasm, math, and language.</p>
        </div>
      </div>
      <div className='title'>
        <h1>Life Before the Pandemic</h1>
      </div>
      <div className='image'>
        <img
          src='https://imgs.xkcd.com/comics/life_before_the_pandemic.png'
          alt=''
        />
      </div>
      <div className='number'>
        <div className='date'>
          <h1>Num. 20528</h1>
          <h2>Day: 27 Month: 11 Year: 2020 </h2>
        </div>
        <a href='http://www.freepik.com' target='_blank' rel='noreferrer'>
          <img src={Barcode} alt='' />
        </a>
      </div>
      <div className='description'>
        <p>
          Our retina display features hundreds of pixels per inch in the central
          fovea region.
        </p>
        <div className='refresh'>
          <a href='/'>
            <h1>REFRESH!</h1>
          </a>
          <a
            href='https://xkcd.com/'
            target='
            _blank'
            rel='noreferrer'
          >
            <span>Or go to xkcd</span>
          </a>
        </div>
      </div>
      <div className='foot'></div>
    </div>
  )
}

export default Comic
