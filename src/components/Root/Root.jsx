import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

function Root() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root