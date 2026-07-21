import React from 'react'
import Navbar from './Nav'
import { Outlet } from 'react-router'

const NavLayout = () => {
  return (<> 
   <Navbar />
    <Outlet />
  </>
   
  )
}

export default NavLayout