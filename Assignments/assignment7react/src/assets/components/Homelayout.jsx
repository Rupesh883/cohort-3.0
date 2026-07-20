import React from 'react'
import Navbar from './Nav'
import Hero from './Hero'
import Categories from './Categories'
import TopProducts from './TopProducts'
import NewArrivals from './NewArrivals'
import Features from "./Features"
import Newsletter from "./Newsletter"
import Footer from "./Footer";
import CartDrawer from './Cart'
import { useNavigate } from 'react-router'


const HomeLayout = () => {

  return (
    <>
    <Navbar/>
    
     <Hero/>
     <Categories/>
     {/* <TopProducts/> */}
     <NewArrivals/>
     <Features/>
     <Newsletter/>
     <Footer />
    </>
   
  )
}

export default HomeLayout