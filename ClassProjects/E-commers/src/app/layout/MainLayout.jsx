import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../shared/ui/compunents/Navbar'
const MainLayout = () => {
  return (
    <div className='bg-black lg:px-12 px-2.5'>
        <Navbar></Navbar>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout