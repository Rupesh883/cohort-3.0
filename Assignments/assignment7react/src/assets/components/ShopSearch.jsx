import { FiSearch, FiX } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "./Contextapi";

export default function SearchFilter() {
    const {products,setProducts,filter,setFilter}=useContext(MyContext)
    function searchFilter(input){
     let val= input.target.value
      // console.log(elem.brand ,elem.category)
  let FilteredValue = products.filter((elem) => {
  return (
    elem.brand?.toLowerCase().includes(val.toLowerCase()) ||
    elem.category?.toLowerCase().includes(val.toLowerCase())||
    elem.tags[0]?.toLowerCase().includes(val.toLowerCase())||
    elem.tags[1]?.toLowerCase().includes(val.toLowerCase()) 
  );
});
      setFilter(FilteredValue)
    }
  return (
    <section className="mt-12">

      <div className="rounded-3xl border border-white/10 bg-[#151515] p-6">

        {/* Top Row */}

        <div className="flex flex-col gap-5 lg:flex-row">

          {/* Search */}

          <div className="relative flex-1">

            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-gray-500" />

            <input
              onChange={(e)=>searchFilter(e)}
              type="text"
              placeholder="Search products..."
              className="h-16 w-full rounded-2xl border border-white/10 bg-[#1E1E1E] pl-14 pr-5 text-white placeholder:text-gray-500 outline-none transition focus:border-lime-400"
            />

          </div>

          {/* Category */}

          <select
            className="h-16 rounded-2xl border border-white/10 bg-[#1E1E1E] px-6 text-white outline-none focus:border-lime-400 lg:w-60"
          >
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Jewelery</option>
            <option>Men's Clothing</option>
            <option>Women's Clothing</option>
          </select>

          {/* Sort */}

          <select
            className="h-16 rounded-2xl border border-lime-400 bg-[#1E1E1E] px-6 text-white outline-none lg:w-64"
          >
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
            <option>Highest Rated</option>
            <option>Newest</option>
          </select>

          {/* Clear */}

          <button
            className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-red-500/10 px-8 text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            <FiX />

            Clear
          </button>

        </div>

        {/* Divider */}

        <div className="my-6 h-px bg-white/10" />

        {/* Active Filters */}

        <div className="flex flex-wrap gap-3">

         {filter?.map((item)=>{
           <button className="flex items-center gap-2 rounded-full bg-lime-400/10 px-5 py-2 text-lime-400">
          {item.text}
            

            <FiX size={14} />

          </button>
})}

          <button className="flex items-center gap-2 rounded-full bg-lime-400/10 px-5 py-2 text-lime-400">

            Price Low → High

            <FiX size={14} />

          </button>

        </div>

      </div>

    </section>
  );
}