import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import {
  FiHeart,
  FiShoppingCart,
  FiEye,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router";
import { MyContext } from "./Contextapi";
import Swal from "sweetalert2";

export default function ProductCard({ product,minWidth }) {
 let massage=()=> toast.success("Add To Cart successfully!");
  const {cartItems,setCArtItems}=useContext(MyContext)

      const showAlert = (pro) =>{
      return   Swal.fire({
        position: "top-end",
        icon: "success",
        title: `product Added To Cart Scceussfully`,
        showConfirmButton: false,
        timer: 1900
      });}

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  function AddToCart(pro){ 
    let isExist=cartItems.find((elem)=> elem.id === pro.id)
     if(isExist){
     const updatedCart = cartItems.map((item) => {
    if (item.id === pro.id) {
      return {
        ...item,
        qty: item.qty + 1,
      };
    }
    return item;
    massage()
  });

        setCArtItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }else{

      let newProduct={
        ...pro,
        qty:1,
        isFavorite:false
      }
      // showAlert()
      massage()
      localStorage.setItem("cart",JSON.stringify([...cartItems,newProduct]))
      setCArtItems((prev)=>[...prev,newProduct])
    

      }
    
  }
  return (
    <div className={`group min-w-[${minWidth}] overflow-hidden rounded-3xl border border-white/10 bg-[#171717] transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40`}>

      {/* IMAGE */}

      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-white p-8">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-56 object-contain transition duration-500 group-hover:scale-110"
        />

        {/* Discount */}

        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">

          -{Math.round(product.discountPercentage)}%

        </span>

        {/* Wishlist */}

        <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur hover:bg-red-500 transition">

          <FiHeart />

        </button>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        {/* Category + Brand */}

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs capitalize text-lime-400">

            {product.category}

          </span>

          <span className="text-sm text-gray-400">

            {product.brand}

          </span>

        </div>

        {/* Title */}

        <h2 className="mt-4 line-clamp-2 text-lg font-bold text-white">

          {product.title}

        </h2>

        {/* Description */}

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-400">

          {product.description}

        </p>

        {/* Rating */}

        <div className="mt-4 flex items-center gap-2">

          <FiStar className="fill-yellow-400 text-yellow-400" />

          <span className="font-medium text-white">

            {product.rating}

          </span>

          <span className="text-gray-500">

            ({product.stock} in stock)

          </span>

        </div>

        {/* Price */}

        <div className="mt-5 flex items-end gap-3">

          <h2 className="text-3xl font-black text-lime-400">

            ${discountedPrice}

          </h2>

          <span className="text-lg text-gray-500 line-through">

            ${product.price}

          </span>

        </div>

        {/* Buttons */}

        <div className="mt-6 flex gap-3">

          <Link to={`/product/${product.id}`} className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#222] text-white transition hover:border-lime-400 hover:text-lime-400">

            <FiEye />
          </Link>

          <button onClick={()=>AddToCart(product)} className="flex-1 rounded-xl bg-lime-400 py-3 font-semibold text-black transition hover:bg-lime-300">

            <span  className="flex items-center justify-center gap-2">

              <FiShoppingCart />

              Add To Cart

            </span>

          </button>

        </div>

      </div>

    </div>
  );
}