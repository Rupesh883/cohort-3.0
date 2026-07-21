
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";

import Navbar from "../components/Nav";
import Footer from "../components/Footer";

import {
  FiHeart,
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiStar,
} from "react-icons/fi";
import LoadingPage from "../components/Loading";
import { MyContext } from "../components/Contextapi";

export default function SingleProduct() {
  const { id } = useParams();
  let{cartItems,setCArtItems}=useContext(MyContext)

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function getProduct() {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

      setProduct(data);
      setSelectedImage(data.thumbnail);
    }

    getProduct();
  }, [id]);

  if (!product) {
    return (
      <LoadingPage />
    );
  }

  const discountPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  // product add
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
 
  });

        setCArtItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }else{

      let newProduct={
        ...pro,
        qty:quantity,
        isFavorite:false
      }
      // showAlert()
   
      localStorage.setItem("cart",JSON.stringify([...cartItems,newProduct]))
      setCArtItems((prev)=>[...prev,newProduct])
    

      }
    
  }

  return (
    <>
      {/* <Navbar /> */}

      <main className="bg-[#0D0D0D] text-white pt-32 pb-24">

        <div className="max-w-7xl mx-auto px-5">

          {/* Breadcrumb */}

          <p className="text-gray-500">

            Home /
            <Link to={"/shop"} className="text-lime-400"> Shop </Link>/
            <span className="text-white"> {product.title}</span>

          </p>

          {/* Product */}

          <div className="grid lg:grid-cols-2 gap-16 mt-10">

            {/* LEFT */}

            <div>

              {/* Main Image */}

              <div className="relative rounded-3xl bg-white h-[520px] flex items-center justify-center overflow-hidden">

                <img
                  src={selectedImage}
                  alt=""
                  className="h-[400px] object-contain transition duration-500 hover:scale-110"
                />

                <span className="absolute left-5 top-5 bg-red-500 px-4 py-2 rounded-full font-semibold">

                  -{Math.round(product.discountPercentage)}%

                </span>

                <button className="absolute right-5 top-5 w-12 h-12 rounded-full bg-black/70 flex items-center justify-center hover:bg-red-500 transition">

                  <FiHeart />

                </button>

              </div>

              {/* Gallery */}

              <div className="grid grid-cols-4 gap-4 mt-6">

                {product.images.map((img) => (
                  <div
                    key={img}
                    onClick={() => setSelectedImage(img)}
                    className={`cursor-pointer rounded-2xl p-3 transition border ${
                      selectedImage === img
                        ? "border-lime-400"
                        : "border-white/10"
                    } bg-white`}
                  >
                    <img
                      src={img}
                      className="h-24 w-full object-contain"
                    />
                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <span className="bg-lime-400/10 text-lime-400 px-4 py-2 rounded-full capitalize">

                {product.category}

              </span>

              <h1 className="text-5xl font-black mt-5 leading-tight">

                {product.title}

              </h1>

              {/* Rating */}

              <div className="flex items-center gap-3 mt-6">

                <FiStar className="text-yellow-400 fill-yellow-400" />

                <span>{product.rating}</span>

                <span className="text-gray-500">

                  ({product.stock} Reviews)

                </span>

              </div>

              {/* Brand */}

              <div className="mt-6">

                <p className="text-gray-500">

                  Brand

                </p>

                <h2 className="text-2xl font-bold">

                  {product.brand}

                </h2>

              </div>

              {/* Price */}

              <div className="flex items-end gap-4 mt-8">

                <h2 className="text-5xl font-black text-lime-400">

                  ${discountPrice}

                </h2>

                <h3 className="text-2xl text-gray-500 line-through">

                  ${product.price}

                </h3>

              </div>

              {/* Stock */}

              <div className="mt-6">

                <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">

                  {product.stock} In Stock

                </span>

              </div>

              {/* Description */}

              <p className="text-gray-400 leading-8 mt-8">

                {product.description}

              </p>

              {/* Quantity */}

              <div className="flex items-center gap-5 mt-10">

                <div className="flex items-center rounded-xl overflow-hidden border border-white/10">

                  <button
                    onClick={() =>
                      quantity > 1 &&
                      setQuantity(quantity - 1)
                    }
                    className="w-12 h-12 flex items-center justify-center hover:bg-lime-400 hover:text-black transition"
                  >
                    <FiMinus />
                  </button>

                  <span className="w-16 text-center">

                    {quantity}

                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-lime-400 hover:text-black transition"
                  >
                    <FiPlus />
                  </button>

                </div>

                <button  onClick={()=>AddToCart(product)} className="flex-1 h-14 rounded-xl bg-lime-400 text-black font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition">

                  <FiShoppingCart />

                  Add To Cart

                </button>

              </div>



              {/* Service */}

              <div className="grid md:grid-cols-3 gap-4 mt-10">

                <div className="rounded-2xl border border-white/10 bg-[#171717] p-5 text-center">

                  <FiTruck className="mx-auto text-3xl text-lime-400" />

                  <h3 className="mt-3 font-bold">

                    Free Delivery

                  </h3>

                </div>

                <div className="rounded-2xl border border-white/10 bg-[#171717] p-5 text-center">

                  <FiShield className="mx-auto text-3xl text-lime-400" />

                  <h3 className="mt-3 font-bold">

                    Secure Payment

                  </h3>

                </div>

                <div className="rounded-2xl border border-white/10 bg-[#171717] p-5 text-center">

                  <FiRefreshCw className="mx-auto text-3xl text-lime-400" />

                  <h3 className="mt-3 font-bold">

                    Easy Returns

                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}