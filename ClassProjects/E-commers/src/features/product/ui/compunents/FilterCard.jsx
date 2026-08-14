import React, { useEffect, useState } from 'react'
import {
  FiSearch,
} from "react-icons/fi";
import { FetchCategory } from '../../api/ProductApis';
import { useAllCategory, UseProductHook } from '../../hooks/UseProductHook';

const FilterCard = ({ setSearch,data,category, setCategory}) => {

    
   
  //  const {data:UserProduct,isPending,Search, setSearch}=UseProductHook()  
  return (
    <div className="mt-5 z-20 mb-8 rounded-2xl border border-white/10 bg-zinc-900/60 p-5 backdrop-blur-xl">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

    {/* Search */}
    <div className="flex w-full lg:max-w-md items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <FiSearch className="text-zinc-400" />

      <input
        type="text"
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full bg-transparent outline-none text-white placeholder:text-zinc-500"
      />
    </div>

    {/* Sort */}
    <select
    onChange={(e)=>setCategory(e.target.value)}
      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
    >
      <option value={"products"} className=' text-black'>All</option>   

      {
        data?.map((ct,index)=>{
      return <option value={ct.slug} className=' text-black'>{ct.name}</option>   
        })
      }
 
    </select>
  </div>

  {/* Categories
  <div className="mt-5 flex flex-wrap gap-3">

    <button className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-white">
      All
    </button>

    <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5">
      Beauty
    </button>

    <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5">
      Fragrances
    </button>

    <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5">
      Furniture
    </button>

    <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5">
      Groceries
    </button>

  </div> */}

</div>
  )
}

export default FilterCard