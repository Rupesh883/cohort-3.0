import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
const ProtectedRoute = ({children}) => {
    let Navigate=useNavigate()
    useEffect(()=>{
            let isLog_in=localStorage.getItem("CurrentUser")|| false
            console.log(isLog_in)
            if(!isLog_in) Navigate("/login")
    })
  return (
      children
  )
}

export default ProtectedRoute