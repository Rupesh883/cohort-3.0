import React, { useContext,useEffect,useState } from 'react'
import { MyContext } from '../components/Contextapi'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';


const CheckOut = () => {
   const {loginData, setLoginData,cartOpen,setCartOpen,cartItems,setCArtItems}=useContext(MyContext)

   const[totalPrice,setTotalPrice]=useState()
    let Order=(orderID)=>Swal.fire({
    position: "top-end",
    icon: "success",
    title: `Order placed Scceussfully With Orderid:${orderID}`,
    showConfirmButton: false,
    timer: 4500
  });

  const navigate=useNavigate()
    
 
  const[deliveryData,setDeliveryData]=useState({
    name:loginData.username,
    email:loginData.email,
    phone:loginData.number,
    address:"",
    paymentMethod:"online",
    city:"",
    zipcode:"",

  })

        function CalculateCartTotal() {
        if(cartItems.length==0)return setTotalPrice(0)
        const total = cartItems.reduce((acc, cur) => {
            return acc + cur.price*cur.qty
  }, 0);
     if(total>0){
        setTotalPrice(total+25);
     }
  
 
}

useEffect(()=>{
  CalculateCartTotal()
},[])

      function handleChanges(e){
            const { name, value,type,checked } = e.target;
          setDeliveryData((prevData) => ({
            ...prevData,
            [name]:type === 'checkbox' ? checked : value
          }));

        //  setDeliveryData((prev)=> [e.target.name]=e.target.value)
      }

    function handelSubmit(event){
    event.preventDefault()
    Order(uuidv4())
    setCArtItems([])
    localStorage.removeItem("cart")
    navigate("/")
    }


  return (
   <form onSubmit={(e)=>handelSubmit(e)} className="min-h-screen bg-[#0D0D0D] text-white px-6 py-10 pt-30">
  <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">

    {/* Left */}
    <div className="lg:col-span-2 rounded-3xl bg-[#181818] p-8 border border-white/10">

      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      {/* Shipping */}
      <h2 className="text-xl font-semibold mb-5">
        Shipping Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <input
        required
        value={deliveryData.name}
        name='name'
        onChange={(e)=>handleChanges(e)}
        // defaultValue={loginData.username}
          // placeholder={loginData.username}
          className="h-12 rounded-xl bg-[#111] border border-white/10 px-4 outline-none focus:border-lime-400"
        />

        <input
        //  defaultValue={loginData.number}
          onChange={(e)=>handleChanges(e)}
          required
          value={deliveryData.phone}
          name='phone'
          // placeholder={loginData.number}
          className="h-12 rounded-xl bg-[#111] border border-white/10 px-4 outline-none focus:border-lime-400"
        />

        <input
          required
        onChange={(e)=>handleChanges(e)}
        //  defaultValue={loginData.email}
        //   placeholder={loginData.email}
        value={deliveryData.email}
        name='email'
          placeholder="Email Address"
          className="h-12 rounded-xl bg-[#111] border border-white/10 px-4 outline-none focus:border-lime-400 md:col-span-2"
        />

        <input
        onChange={(e)=>handleChanges(e)}
        value={deliveryData.address}
        name='address'
          required
          placeholder="Street Address"
          className="h-12 rounded-xl bg-[#111] border border-white/10 px-4 outline-none focus:border-lime-400 md:col-span-2"
        />

        <input
        onChange={(e)=>handleChanges(e)}
        name='city'
        value={deliveryData.city}
          required
          placeholder="City"
          className="h-12 rounded-xl bg-[#111] border border-white/10 px-4 outline-none focus:border-lime-400"
        />

        <input
          onChange={(e)=>handleChanges(e)}
          name='zipcode'
          value={deliveryData.zipcode}
          required
          placeholder="ZIP Code"
          className="h-12 rounded-xl bg-[#111] border border-white/10 px-4 outline-none focus:border-lime-400"
        />

      </div>

      {/* Payment */}

      <h2 className="text-xl font-semibold mt-10 mb-5">
        Payment Method
      </h2>

      <div className="space-y-4">

        <label className="flex items-center gap-3 rounded-xl border border-lime-400 bg-[#111] p-4 cursor-pointer">

          <input 
           name="paymentMethod" 
           value="cod"   
           checked={deliveryData.paymentMethod === "cod"}
           onChange={handleChanges}  type="radio" name="paymentMethod" defaultChecked className='cursor-pointer' />

          <span>Cash On Delivery</span>

        </label>

        <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111] p-4 cursor-pointer">

          <input value="online"
          name="paymentMethod"
           checked={deliveryData.paymentMethod === "online"}
           onChange={handleChanges}
           type="radio" name="paymentMethod" className='cursor-pointer' />

          <span>Online Payment</span>

        </label>

      </div>

    </div>

    {/* Right */}

    <div className="rounded-3xl bg-[#181818] border border-white/10 p-6 h-fit sticky top-6">

      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span>${(totalPrice-25)?.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Shipping</span>
          <span className="text-green-400">FREE</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Tax</span>
          <span>$25</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Discount</span>
          <span>-$0</span>
        </div>

        <div className="border-t border-white/10 pt-4 flex justify-between">

          <span className="text-lg font-bold">
            Total
          </span>

          <span className="text-3xl font-black text-lime-400">
            ${totalPrice?.toFixed(2)}
          </span>

        </div>

      </div>

      <button type='submit' className="mt-8 h-14 w-full rounded-2xl bg-lime-400 text-black font-bold hover:bg-lime-300 transition">

        Place Order

      </button>
    </div>

  </div>
</form>
  )
}

export default CheckOut