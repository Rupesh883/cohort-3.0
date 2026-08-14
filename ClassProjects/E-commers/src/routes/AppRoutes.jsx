import React, { useEffect } from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router';
import HomePage from '../shared/ui/pages/Home';
import ProductPage from "../features/product/ui/pages/ProductPage"
import OrderPage from "../features/order/ui/pages/orderPage"
import CartPage from "../features/cart/ui/pages/CartPage"

import LoginPage from "../features/auth/ui/pages/LoginPage"
import RegisterPage from "../features/auth/ui/pages/RegisterPage"
import PublicProtected from "../routes/Protected/PublicProtected"
import AuthLayout from "../app/layout/AuthLayout"
import MainProtected from "../routes/Protected/MainProtected"
import MainLayout from "../app/layout/MainLayout"
import { hydrateUser } from '../features/auth/api/AuthApi';
import { useDispatch } from 'react-redux';
import { hydrateUserAction } from '../features/auth/state/authAction';
// import { addUser } from '../features/auth/state/authSlice';
// import Home from '../shared/ui/pages/Home';
// import Login from "../shared/ui/pages/Login"


const AppRoutes = () => {
   const dispatch =useDispatch()
  useEffect(()=>{
      (async()=>{
        try {
           dispatch(hydrateUserAction())
             console.log("im hear")
        } catch (error) {
          console.log(error.message)
        }
     })()
  },[])

    

    const router = createBrowserRouter([
        {
            path: "/",
            element: <PublicProtected/>,
            children:[
              {path:"",
                element: <AuthLayout />,
                children:[
                  {
                    path:"",
                    element: <LoginPage />
                  },
                  {
                    path:"register",
                    element: <RegisterPage />
                  }
                ]
              }
            ]
        },{
            path: "/main",
            element: <MainProtected/>,
            children:[
              {
                path:'',
                element: <MainLayout />,
                children:[
                  {
                    path:"",
                    element: <HomePage/>
                  },
                   {
                    path:"product",
                    element: <ProductPage/>
                  }, {
                    path:"order",
                    element: <OrderPage/>
                  },
                  {
                    path:"cart",
                    element: <CartPage/>
                  },
                ]
              }
            ]
        },
    ]);

  return  <RouterProvider router={router}/>
}

export default AppRoutes