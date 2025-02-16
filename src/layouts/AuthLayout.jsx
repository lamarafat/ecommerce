import React from 'react'
import Navbar from '../component/user/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/user/Footer'


export default function AuthLayout() {


  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
