import React, { useEffect } from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../../features/auth/ui/pages/Login'
import Register from '../../features/auth/ui/pages/Register'
import DashboardLayout from '../layouts/DashboardLayout'
import Home from '../../features/dashboard/ui/page/Home'
import { useDispatch } from 'react-redux'
import { currentLoggedIn } from '../../features/auth/state/auth/authAction'

const AppRoutes = () => {
    const dispatch=useDispatch()
    let router=createBrowserRouter([
        {
            path:'/',
            element: <AuthLayout />,
            children:[
                {
                    path:"",
                    element: <Login />
                },
                {
                    path:'register',
                    element: <Register />
                }
            ]
        },
        {
            path:"/home",
            element: <DashboardLayout />,
            children:[
                {
                    path:'',
                    element: <Home />
                }
            ]
        }
    ])
    useEffect(()=>{
        console.log("hydration working");
        
        (()=>{
        dispatch(currentLoggedIn())   
        })()
    },[])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes