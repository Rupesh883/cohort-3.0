import { useContext,useState } from "react";
import {
  FiHeart,
  FiTrash2,
  FiMinus,
  FiPlus,
  FiStar,
} from "react-icons/fi";
import { MyContext } from "./Contextapi";

export default function CartItem({pro}) {
        const {cartItems,setCArtItems}=useContext(MyContext)
        const[count,setCount]=useState(1)

    const discountedPrice = (
        pro.price -
        (pro.price * pro.discountPercentage) / 100
      ).toFixed(2);

   function DeleteCart(id){
        let FilteredValue=cartItems.filter((elem)=> elem.id != id)
        
        setCArtItems(FilteredValue)
        localStorage.setItem("cart",JSON.stringify(FilteredValue))
    
  }
 
function increase(id) {
  const updatedCart = cartItems.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        qty: item.qty + 1,
      };
    }
    return item;
  });

  setCArtItems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}
function decrease(id) {
  const product = cartItems.find((item) => item.id === id);

  if (product.qty === 1) {
    DeleteCart(id);
    return;
  }

  const updatedCart = cartItems.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        qty: item.qty - 1,
      };
    }
    return item;
  });

  setCArtItems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}

  return (
    <div className="group rounded-3xl border border-white/10 bg-[#181818] p-4 transition-all duration-300 hover:border-lime-400/40 hover:-translate-y-1">

      <div className="flex gap-4">

        {/* Product Image */}

        <div className="relative h-28 w-28 flex-shrink-0 rounded-2xl bg-white p-3">

          <span className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold text-white">

           {pro.discountPercentage}

          </span>

          <img
            src={pro.thumbnail}
            alt=""
            className="h-full w-full object-contain"
          />

        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col justify-between">

          <div>

            <div className="flex items-start justify-between">

              <div>


                <h3 className="mt-2 line-clamp-2 font-bold text-white">

                 {pro.title}

                </h3>

              </div>

              <button onClick={()=>DeleteCart(pro.id)} className="text-gray-400 transition hover:text-red-500">

                <FiTrash2 />

              </button>

            </div>

            <div className="mt-2 flex items-center gap-2">

              <FiStar className="fill-yellow-400 text-yellow-400" />

              <span className="text-sm text-gray-300">

                {pro.rating}

              </span>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-4 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-black text-lime-400">

                ${discountedPrice}

              </h2>

              <p className="text-sm text-gray-500 line-through">

                ${pro.price}


              </p>

            </div>

            <div className="flex items-center gap-2">

              <button onClick={()=>decrease(pro.id)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#222] text-white transition hover:border-lime-400">

                <FiMinus />

              </button>

              <span className="w-6 text-center text-white">

                {pro.qty}

              </span>

              <button onClick={()=>increase(pro.id)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#222] text-white transition hover:border-lime-400">

                <FiPlus />

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Actions */}

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

        <button className="flex items-center gap-2 text-gray-400 transition hover:text-pink-500">

          <FiHeart />

          Save for later

        </button>

        <p className="text-sm text-gray-500">

          Free Delivery

        </p>

      </div>

    </div>
  );
}