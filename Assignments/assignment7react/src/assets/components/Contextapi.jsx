import axios from 'axios'
import React, { useEffect } from 'react'
import { createContext,useState } from 'react'
import api from "../configs/ApiCallcenter"
export const MyContext=createContext()

export function ContextProvider({ children }) {
  const[products,setProducts]=useState([])
  const[cartOpen,setCartOpen]=useState(false)
  const[filter,setFilter]=useState([])
  const[categoryFilter,setCategoryFilter]=useState()
  const[cartItems,setCArtItems]=useState(JSON.parse(localStorage.getItem("cart"))||[])
  

 async function fetchProducts(){
   let result=await  api.get("products?limit=100")
   setProducts(result.data.products)

  }
  useEffect(()=>{
     fetchProducts()
  },[])
  const [allUserData, setAllUserData] = useState(JSON.parse(localStorage.getItem("AllUserData"))||[]);
  const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem("CurrentUser"))||[]);
  
    return (
    <MyContext.Provider value={{allUserData, setAllUserData,loginData, setLoginData,products,setProducts,cartOpen,setCartOpen,filter,setFilter,cartItems,setCArtItems,categoryFilter,setCategoryFilter}}>
      {children}
    </MyContext.Provider>
  );
 
}
