import React from 'react'
import Header from '../components/home-component/Header'
import Silder from '../components/home-component/Silder'
import Tools from '../components/home-component/Tools'

import "../components/home-component/home.scss"
import CryptoList from '../components/home-component/CryptoList'
import Suggested from '../components/home-component/Suggested'
function Home() {
  return (
    <section className='home'>

             <Header/>
             <Silder/>
             <Tools/>
             <CryptoList/>
             <Suggested/>
    </section>
  )
}

export default Home