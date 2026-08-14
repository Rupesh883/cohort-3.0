
import { useState } from "react";
import { NavLink, redirect, useNavigate } from "react-router";
import {
  FiHeart,
  FiShoppingCart,
  FiLogOut,
  FiUser,
  FiMenu,
  FiX,
  FiShoppingBag,
} from "react-icons/fi";
import { HiOutlineHome, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineInfo } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../features/auth/state/authSlice";

const Navbar = () => {
  const navigate=useNavigate()
  const [open, setOpen] = useState(false);
  const dispatch=useDispatch()

  const navLinks = [
    {
      path: "/main",
      name: "Home",
      icon: <HiOutlineHome size={18} />,
    },
    {
      path: "/main/product",
      name: "Products",
      icon: <HiOutlineShoppingBag size={18} />,
    },
    {
      path: "/about",
      name: "About",
      icon: <MdOutlineInfo size={18} />,
    },
  ];

  function Logout(){
    localStorage.removeItem("accessToken")
    dispatch(removeUser())
    navigate("/")

  }

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-600">
      <nav className="w-full border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30">
                <FiShoppingBag size={22} />
              </div>

              <div>
                <h1 className="text-lg font-bold text-white">
                  Fresh
                  <span className="text-emerald-400">Cart</span>
                </h1>

                <p className="hidden sm:block text-xs text-zinc-400">
                  Smart Shopping
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-2">

              <button className="relative rounded-xl bg-white/5 p-3 text-zinc-300 transition-all hover:text-pink-400 hover:bg-white/10">
                <FiHeart size={18} />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] text-white">
                  2
                </span>
              </button>

              <button className="relative rounded-xl bg-white/5 p-3 text-zinc-300 transition-all hover:text-emerald-400 hover:bg-white/10">
                <FiShoppingCart size={18} />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">
                  5
                </span>
              </button>

              <button className="rounded-xl bg-white/5 p-3 text-zinc-300 transition-all hover:bg-white/10 hover:text-white">
                <FiUser size={18} />
              </button>

              <button onClick={Logout} className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105">
                <FiLogOut />
                Logout
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-xl bg-white/5 p-2 text-white"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-zinc-950">
            <div className="space-y-2 p-4">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                      isActive
                        ? "bg-emerald-500 text-white"
                        : "bg-white/5 text-zinc-300"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}

              <div className="mt-4 grid grid-cols-4 gap-2">

                <button className="flex flex-col items-center gap-1 rounded-xl bg-white/5 py-3 text-zinc-300">
                  <FiHeart />
                  <span className="text-xs">Fav</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-xl bg-white/5 py-3 text-zinc-300">
                  <FiShoppingCart />
                  <span className="text-xs">Cart</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-xl bg-white/5 py-3 text-zinc-300">
                  <FiUser />
                  <span className="text-xs">Profile</span>
                </button>

                <button onClick={Logout} className="flex flex-col items-center gap-1 rounded-xl bg-emerald-500 py-3 text-white">
                  <FiLogOut />
                  <span className="text-xs">Logout</span>
                </button>

              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
