import { FiSearch, FiX } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "./Contextapi";
import axios from "axios";

export default function SearchFilter() {
    const {products,setProducts,filter,setFilter,categoryFilter,setCategoryFilter}=useContext(MyContext)
    function searchFilter(input){
     let val= input.target.value
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

  async  function DeleteFilter(item){
    let fil=categoryFilter.filter((elem)=> elem !== item)
         setCategoryFilter(fil)
         if (fil.length==0) {
             let result=await  axios.get("https://dummyjson.com/products?limit=100")
            setProducts(result.data.products)

         }

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


     {categoryFilter?.map((item)=>{
    return   <button className="flex items-center gap-2 rounded-full bg-lime-400/10 px-5 py-2 text-lime-400">
           {item}
            <FiX size={14} onClick={()=>DeleteFilter(item)} />
       </button>
     })}
  

        </div>

      </div>

    </section>
  );
}