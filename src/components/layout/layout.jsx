import React from 'react'

import Header from '../common/Navbar'
import Footer from '../common/Footer'
import Routes from '../../routes/Routers'

import '../../assets/styles/main.css';

const layout = () => {
  return (
    <>
    <Header />
    <main>
      <Routes />
    </main>
    <Footer />
    </>
  )
}

export default layout