import React, { useEffect,useState } from 'react'
import FilterCard from '../compunents/FilterCard'
import {AllProductData}  from '../../api/ProductApis'
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiLogOut,
  FiUser,
} from "react-icons/fi";
import ProductCard from '../compunents/ProductCard';
import { useAllCategory, UseCategoryHook, UseProductHook } from '../../hooks/UseProductHook';

const ProductPage = () => {
  const [Products, setProducts] = useState([])
  // const {data,isPending}=UseProductHook()
     const {data,isPending,Search, setSearch}=UseProductHook()
     const {data:productByCategory}=useAllCategory()
     const {data:CategoriesData ,category, setCategory}=UseCategoryHook()
     console.log(CategoriesData)
      
  return (
  <>  
  {isPending && <p>Loading..........</p>}
  <FilterCard category={category} setCategory={setCategory} data={productByCategory} setSearch={setSearch}/>
     <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {CategoriesData?.products.length ? CategoriesData.products.map((product) => {
          // console.log(product)
         return <ProductCard key={product.id} product={product} />
         }):data?.products.map((product) => {
          // console.log(product)
         return <ProductCard key={product.id} product={product} />
})}
     </div>
  
    </>
  )
}

export default ProductPage