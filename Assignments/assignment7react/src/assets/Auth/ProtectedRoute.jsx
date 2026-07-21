import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../components/Nav'
const ProtectedRoute = ({children}) => {
    let Navigate=useNavigate()
    useEffect(()=>{
            let isLog_in=localStorage.getItem("CurrentUser")|| false
           
            if(!isLog_in) Navigate("/login")
    })
  return (<>
  <Navbar/>
  {children}
  </>
      
  )
}

export default ProtectedRoute