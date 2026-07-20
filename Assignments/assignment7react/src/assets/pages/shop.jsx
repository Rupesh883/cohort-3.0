// import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import ShopHeader from "../components/ShopingHeader";
import { MyContext } from "../components/Contextapi";
import ProductCard from "../components/productCard"
import SearchFilter from "../components/ShopSearch"
// import SearchFilter from "../components/shop/SearchFilter";
// import FilterSidebar from "../components/shop/FilterSidebar";
// import ProductGrid from "../components/shop/ProductGrid";
// import Pagination from "../components/shop/Pagination";

export default function Shop() {
 

  const {products,setProducts,filter,setFilter}=useContext(MyContext)


  return (
    <div className="min-h-screen bg-[#0D0D0D]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-5 pt-32 pb-20">

        <ShopHeader />

        <SearchFilter />

        <div className="mt-10 grid lg:grid-cols-[1fr_1fr_1fr] gap-8">

          {/* <FilterSidebar /> */}
           { filter.length !=0?filter.map((elem)=>{
              return  <ProductCard key ={elem.id} product={elem}/>
              }): products?.map((elem)=>{
              return  <ProductCard key ={elem.id} product={elem}/>
              })
            }

          <div>
           
{/*  
            <ProductGrid />

            <Pagination /> */}

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}