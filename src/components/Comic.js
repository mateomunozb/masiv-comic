import React, { useEffect, useState } from 'react'
import './style.css'
import Barcode from './images/barcode.jpg'
import fetch from 'node-fetch'
import CustomizedRatings from './Rate'

const Comic = () => {
  const [dataComic, setDataComic] = useState({})

  const getComic = async () => {
    try {
      const response = await fetch('https://xkcd.com/info.0.json')
      const currentComic = await response.json()
      const randomComicNumber = Math.round(Math.random() * (currentComic.num - 1) + 1)
      const data = await fetch(`https://xkcd.com/${randomComicNumber}/info.0.json`)
      const randomComic = await data.json()
      setDataComic(randomComic)
      console.log('TLC ~ file: Comic.js ~ line 17 ~ getComic ~ randomComic', randomComic)
    } catch (error) {
      console.log('TLC ~ file: Comic.js ~ line 14 ~ getComic ~ error', error)
    }
  }

  useEffect(() => {
    getComic()
  }, [])

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
        <h1>{dataComic.title}</h1>
      </div>
      <div className='image'>
        <img src={dataComic.img} alt='' />
        <CustomizedRatings className='rate' />
      </div>
      <div className='number'>
        <div className='date'>
          <h1>Num. {dataComic.num}</h1>
          <h2>
            Day: {dataComic.day} Month: {dataComic.month} Year: {dataComic.year}
          </h2>
        </div>
        <a href='http://www.freepik.com' target='_blank' rel='noreferrer'>
          <img src={Barcode} alt='' />
        </a>
      </div>
      <div className='description'>
        <p>{dataComic.alt}</p>
        <div className='refresh'>
          <a href='/'>
            <h1>REFRESH!</h1>
          </a>
          <a
            href='https://xkcd.com/'
            target='
            _blank'
            rel='noreferrer'>
            <span>Or go to xkcd</span>
          </a>
        </div>
      </div>
      <div className='foot'></div>
    </div>
  )
}

export default Comic
