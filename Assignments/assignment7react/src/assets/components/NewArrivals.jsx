import axios from "axios";
import { useState ,useEffect } from "react";
import {
  FiArrowUpRight,
  FiHeart,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";
import ProductCard from "./productCard";

export default function NewArrivals() {
  const[products,setProducts]=useState([])
 async function fetchProducts(){
   let result=await  axios.get("https://dummyjson.com/products?limit=10")
   setProducts(result.data.products)
   console.log()
  }
  useEffect(()=>{
     fetchProducts()
  },[])



  return (
    <section className="py-24" id="shop">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="flex items-center justify-between mb-14">

          <div>

            <p className="uppercase tracking-[5px] text-lime-400 font-semibold">

              Latest Collection

            </p>

            <h2 className="text-5xl font-black text-white mt-3">

              New Arrivals

            </h2>

          </div>

          {/* <button className="hidden md:flex items-center gap-2 text-lime-400 hover:gap-4 transition">

            Explore All

            <FiArrowUpRight/>

          </button> */}

        </div>

        {/* Horizontal Scroll */}

        <div className="flex gap-7 overflow-x-auto pb-4 no-scrollbar [&::-webkit-scrollbar]:hidden">

          {products.map((item) => (
            <ProductCard product={item} minWidth={"320px"}/>
            // <div
            //   key={item.id}
            //   className="group min-w-[320px] rounded-3xl border border-white/10 bg-[#171717] overflow-hidden hover:-translate-y-3 transition duration-500"
            // >

            //   {/* Image */}

            //   <div
            //     className={`relative h-72 bg-gradient-to-br  flex justify-center items-center`}
            //   >

            //     <img src={item.thumbnail} className="text-[130px] group-hover:scale-110 transition duration-500"/>

                  

                

            //     <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 backdrop-blur flex justify-center items-center text-white hover:bg-red-500 transition">

            //       <FiHeart/>

            //     </button>

            //     <span className="absolute left-5 top-5 bg-lime-400 text-black text-sm font-bold px-4 py-1 rounded-full">

            //       NEW

            //     </span>

            //   </div>

            //   {/* Content */}

            //   <div className="p-6">

            //     <p className="text-gray-400">

            //       {item.category}

            //     </p>

            //     <h3 className="text-white text-2xl font-bold mt-2">

            //       {item.title}

            //     </h3>

            //     <div className="flex items-center gap-2 mt-3 text-yellow-400">

            //       <FiStar/>

            //       <FiStar/>

            //       <FiStar/>

            //       <FiStar/>

            //       <FiStar/>

            //     </div>

            //     <div className="flex justify-between items-center mt-6">

            //       <h2 className="text-lime-400 text-2xl font-bold">

            //         {item.price}

            //       </h2>

            //       <button className="w-12 h-12 rounded-xl bg-lime-400 text-black flex justify-center items-center hover:scale-110 transition">

            //         <FiShoppingCart/>

            //       </button>

            //     </div>

            //   </div>

            // </div>

          ))}

        </div>

      </div>

    </section>
  );
}