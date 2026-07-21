import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Login from './assets/components/Login'
import './App.css'
import Register from './assets/components/Register'
import LoginRegisterLayout from './assets/components/Login&registerLayout'
import {  Routes, Route } from "react-router";
import HomeLayout from './assets/components/Homelayout'
import Navbar from './assets/components/Nav'
import Shop from './assets/pages/shop'
import SingleProduct from './assets/pages/SingleProduct'
import ProtectedRoute from "../src/assets/Auth/ProtectedRoute"
import CartDrawer from './assets/components/Cart'
import CheckOut from './assets/pages/CheckOut'

function App() {


  
  const [count, setCount] = useState(0)

  return (<>
  <CartDrawer/>
    <Routes>
     <Route element={<LoginRegisterLayout/>}>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
      </Route>
      {/* <Route path='/' element={<Navbar/>}/> */}
        <Route path='/' element={<ProtectedRoute><HomeLayout/></ProtectedRoute>}></Route>
        <Route path='/checkout' element={<ProtectedRoute><CheckOut/></ProtectedRoute>}></Route>

         <Route path='/shop' element={<ProtectedRoute><Shop/></ProtectedRoute>}> </Route>
         <Route path='/product/:id' element={<ProtectedRoute><SingleProduct/></ProtectedRoute>}/>
   </Routes>
 </>
  )
}

export default App
