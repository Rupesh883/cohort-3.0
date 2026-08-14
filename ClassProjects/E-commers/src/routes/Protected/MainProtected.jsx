import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const MainProtected = () => {
  const {loadingState,user}=useSelector((store)=>store.auth)
  console.log(loadingState)

if (loadingState){
      return (
  <div className="fixed inset-0 bg-slate-950 flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>

        <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>

        <div className="absolute inset-3 border-4 border-transparent border-b-indigo-500 rounded-full animate-spin [animation-direction:reverse]"></div>
      </div>
    </div>
  );
  }
  if (!user) {
   return <Navigate to={"/"} />
  }
  return <Outlet />
}

export default MainProtected