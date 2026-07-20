import {
  IoClose,
} from "react-icons/io5";

import {
  FiTag,
  FiShield,
} from "react-icons/fi";

import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

import CartItem from "./CartItems";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "./Contextapi";

export default function CartDrawer() {
//   const {cartItems,setCArtItems}=useContext(MyContext)

      const {cartOpen,setCartOpen,cartItems,setCArtItems}=useContext(MyContext)
      const[totalPrice,setTotalPrice]=useState()
      console.log("cart open")

     function CalculateCartTotal() {
  const total = cartItems.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  setTotalPrice((total+25));
  console.log(total);
}
      useEffect(()=>{
          CalculateCartTotal()
      },[cartOpen])
 return (
     cartOpen ?(<>
    //   {/* Overlay */}

      <div onClick={()=> setCartOpen(false)} className="fixed inset-0 z-40 w-full h-screen bg-black/60 backdrop-blur-sm" />

    //   {/* Drawer */}

        <aside className="fixed transition-all duration-75 ease-in right-0 top-0 rounded-3xl z-50 flex h-screen overflow-y-auto w-full flex-col border-l border-white/10 bg-[#0D0D0D] shadow-2xl pb-4 sm:w-[420px]">

            // {/* Header */}

            <div className="border-b border-white/10 p-6">

            <div className="flex items-center justify-between">

                <div>

                <h2 className="text-2xl font-bold text-white">
                    Shopping Cart
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    {cartItems.length} Items Added
                </p>

                </div>

                <button onClick={()=> setCartOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1C1C1C] text-white transition hover:bg-red-500">

                <IoClose size={22} />

                </button>

            </div>

            {/* Shipping Banner */}
            </div>

            // {/* Cart Items */}

            <div className="flex-1 space-y-5 p-5">
            {cartItems?.map((product)=>{
             return   <CartItem key={product.id} pro={product} />

            })

            }
            {/* <CartItem />
            <CartItem /> */}

            </div>

            // {/* Bottom Summary */}

            <div className="border-t border-white/10 bg-[#111111] p-5">

            {/* Coupon */}

            <div>

                <label className="mb-2 flex items-center gap-2 text-sm text-gray-300">

                <FiTag />

                Coupon Code

                </label>

                <div className="flex gap-3">

                <input
                    type="text"
                    placeholder="Enter coupon..."
                    className="h-12 flex-1 rounded-xl border border-white/10 bg-[#1B1B1B] px-4 text-white outline-none placeholder:text-gray-500 focus:border-lime-400"
                />

                <button className="rounded-xl bg-lime-400 px-5 font-semibold text-black transition hover:bg-lime-300">

                    Apply

                </button>

                </div>

            </div>

            {/* Summary */}

            <div className="mt-6 space-y-3 text-sm">

                <div className="flex justify-between text-gray-400">

                <span>Subtotal</span>

                <span>${(totalPrice-25)}</span>

                </div>

                <div className="flex justify-between text-gray-400">

                <span>Shipping</span>

                <span className="text-green-400">

                    FREE

                </span>

                </div>

                <div className="flex justify-between text-gray-400">

                <span>Discount</span>

                <span className="text-red-400">

                    -$0

                </span>

                </div>

                <div className="flex justify-between text-gray-400">

                <span>Tax</span>

                <span>$25</span>

                </div>

            </div>

            <div className="my-5 h-px bg-white/10" />

            {/* Total */}

            <div className="flex items-center justify-between">

                <span className="text-lg font-semibold text-white">

                Total

                </span>

                <span className="text-3xl font-black text-lime-400">

                ${totalPrice}

                </span>

            </div>

            {/* Buttons */}

            <button className="mt-6 h-14 w-full rounded-2xl bg-lime-400 font-bold text-black transition duration-300 hover:scale-[1.02] hover:bg-lime-300">

                Proceed to Checkout

            </button>

            <button className="mt-3 h-14 w-full rounded-2xl border border-white/10 bg-[#191919] text-white transition hover:border-lime-400 hover:text-lime-400">

                Continue Shopping

            </button>

            {/* Payment */}

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#181818] p-4">

                <div className="flex items-center gap-2 text-gray-300">

                <FiShield />

                Secure Payment

                </div>

                <div className="mt-4 flex justify-center gap-5 text-4xl text-gray-400">

                <FaCcVisa />

                <FaCcMastercard />

                <FaCcPaypal />

                </div>

            </div>

            </div>

        </aside>
    </>):null
  );
}