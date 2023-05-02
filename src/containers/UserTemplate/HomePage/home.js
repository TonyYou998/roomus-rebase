import React from 'react'
import Banner from './components/Banner'
import Category from './components/Category'
import Contact from './components/Contact'
import Features from './components/Features'
import Trending from './components/Trending'

export default function HomePage() {

  return (
    <div className='page-holder'>
      <header className='header bg-white container container__header  '> 
          <Banner/>
          <Category/>
          <Trending/>
          <Features/>
          <Contact/>
      </header>
    </div>
  )
}
