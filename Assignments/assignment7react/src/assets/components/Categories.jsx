import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  FaLaptop,
  FaMobileAlt,
  FaTshirt,
  FaGamepad,
  FaCouch,
  FaGem,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router";
import { MyContext } from "./Contextapi";

export default function Categories() {
  const{products,setProducts,categoryFilter,setCategoryFilter}=useContext(MyContext)
      const[categories,setCategories]=useState([])
     async function FetchCategory(){
        let data= await  axios.get("https://dummyjson.com/products/categories")
         setCategories(data.data)
        
      }
     async  function callCategory(url,slug){
             let data= await  axios.get(`${url}`)
             console.log(data.data.products)
              setProducts(data.data.products)
              setCategoryFilter([slug])
       }
      
      useEffect(()=>{
           FetchCategory()
      },[])
//  const categoriesIcons = [
//     {
//       name: "Electronics",
//       products: "1,250+",
//       icon: <FaLaptop />,
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       name: "Smartphones",
//       products: "850+",
//       icon: <FaMobileAlt />,
//       color: "from-lime-400 to-green-500",
//     },
//     {
//       name: "Fashion",
//       products: "2,100+",
//       icon: <FaTshirt />,
//       color: "from-pink-500 to-rose-500",
//     },
//     {
//       name: "Gaming",
//       products: "700+",
//       icon: <FaGamepad />,
//       color: "from-purple-500 to-indigo-500",
//     },
//     {
//       name: "Furniture",
//       products: "500+",
//       icon: <FaCouch />,
//       color: "from-orange-500 to-yellow-500",
//     },
//     {
//       name: "Accessories",
//       products: "980+",
//       icon: <FaGem />,
//       color: "from-teal-400 to-cyan-500",
//     },
//    ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="flex items-center justify-between mb-14">

          <div>

            <p className="text-lime-400 font-semibold tracking-widest uppercase">

              Categories

            </p>

            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">

              Shop By Category

            </h2>

          </div>

          <Link to={'/shop'} className="hidden md:flex items-center gap-2 text-lime-400 hover:gap-4 transition-all">

            View All

            <FiArrowUpRight />

          </Link>

        </div>

        {/* Cards */}

        <div className="flex flex-row flex-wrap  lg:grid-cols-6 gap-4">

          {categories?.map((item, index) => {
            // console.log(item)
      return  ( 
      <div
                key={index}
                className="group w-fit relative p-3 rounded-3xl border border-white/10 bg-[#171717] flex justify-center items-center  overflow-hidden hover:-translate-y-3 transition-all duration-500 cursor-pointer"
              >
                {/* <Link
                  className={` inset-0 opacity-0 group-hover:opacity-20 transition-all flex justify-center items-center duration-500 bg-gradient-to-br `}
                />          
             
              </Link> */}
              <Link to={'/shop'} onClick={()=>callCategory(item.url,item.slug)} className={`  transition-all flex justify-center items-center duration-500 bg-gradient-to-br `}>
             
                 <h4 className="relative text-shadow-white text-white  text-nowrap text-xl font-bold">
                  {item.name}
                </h4>
            </Link>
           </div>
              )
})}

        </div>

      </div>

    </section>
  );
}