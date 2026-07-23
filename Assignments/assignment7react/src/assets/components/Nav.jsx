import { useContext, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { NavLink, useNavigate } from "react-router";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router";
import { MyContext } from "./Contextapi";

export default function Navbar() {
  let Navigate=useNavigate()

  const [menuOpen, setMenuOpen] = useState(false);


  const {cartOpen,setCartOpen,cartItems,setCArtItems}=useContext(MyContext)
  function handelLogout(){
    localStorage.removeItem("CurrentUser")
   Navigate("/login")
  }

  // const navLinks = [
  //   "Home",
  //   "Shop",
  //   "About",
  // ];

  return (
    <header className="fixed top-0 left-0 w-full z-20">

      <div className="max-w-7xl mx-auto px-5">

        <nav className="mt-5 h-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-between px-6">

          {/* Logo */}

          <div className="flex items-center gap-3 cursor-pointer group">

            <div onClick={()=>Navigate('/')} className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">

              <FaShoppingBag className="text-black text-xl" />

            </div>

            <div>

              <h2 className="text-2xl font-black text-white">
                SkyMart
              </h2>

              <p className="text-xs text-gray-400">
                Premium Shopping
              </p>

            </div>

          </div>

          {/* Desktop Nav */}

          <ul className="hidden lg:flex items-center gap-10">

              <NavLink  to="/"
                    className={({isActive})=>isActive?"text-lime-400" :"relative cursor-pointer text-gray-300 hover:text-lime-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-all hover:after:w-full"}>
                Home
              </NavLink>
              <NavLink to={"/shop"} className={({isActive})=>isActive?"text-lime-400" :"relative cursor-pointer text-gray-300 hover:text-lime-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-all hover:after:w-full"}>
                Shop
              </NavLink>
              <NavLink  onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            } className={"relative cursor-pointer text-gray-300 hover:text-lime-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-all hover:after:w-full"}>
                About
              </NavLink>

          </ul>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-4">

            {/* <button className="w-11 h-11 rounded-xl bg-[#181818] text-white flex justify-center items-center hover:bg-lime-400 hover:text-black transition-all duration-300 hover:scale-110">

              <FiSearch />

            </button> */}

            {/* <NavLink to={'/favorite'} className="relative w-11 h-11 rounded-xl bg-[#181818] text-white flex justify-center items-center hover:bg-lime-400 hover:text-black transition-all duration-300 hover:scale-110">

              <FiHeart />

              <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">

                2

              </span>

            </NavLink> */}

            <button onClick={()=>setCartOpen(!cartOpen)} className="relative w-11 h-11 rounded-xl bg-[#181818] text-white flex justify-center items-center hover:bg-lime-400 hover:text-black transition-all duration-300 hover:scale-110">

              <FiShoppingCart />

              <span className="absolute -top-1 -right-1 bg-lime-400 text-black w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold">

                {cartItems.length}

              </span>

            </button>

           <button onClick={()=>handelLogout()} className="w-11 h-11 rounded-xl bg-[#181818] text-white flex justify-center items-center hover:bg-lime-400 hover:text-black transition-all duration-300 hover:scale-110">
              <IoMdLogOut className="text-2xl" />

            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </nav>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 mt-3" : "max-h-0"
          }`}
        >

          <div className="rounded-2xl bg-[#181818] border border-white/10 p-6">

            <ul className="space-y-5 flex flex-row gap-4">
                   <Link onClick={()=>setMenuOpen(false)}  to="/"
                          className="relative cursor-pointer text-lime-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-all hover:after:w-full">
                      Home
                    </Link>
                    <Link onClick={()=>setMenuOpen(false)} to={"/shop"} className="relative cursor-pointer text-lime-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-all hover:after:w-full">
                      Shop
                    </Link>
                    <Link onClick={() =>{
                  setMenuOpen(false)
                  window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
                  })}  }
                  className="relative cursor-pointer text-lime-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-all hover:after:w-full">
                      About
                    </Link>

            </ul>

            <div className="flex gap-4 mt-6">
              <button onClick={()=>{
                setMenuOpen(false)
                setCartOpen(true)}} className="w-11 h-11 rounded-xl bg-lime-400 flex justify-center items-center">
                <FiShoppingCart />
              </button>
               <button onClick={()=>{
                setMenuOpen(false)
                handelLogout()}} className="w-11 h-11 rounded-xl bg-lime-400 flex justify-center items-center">
              <IoMdLogOut className="text-2xl" />
            </button>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}