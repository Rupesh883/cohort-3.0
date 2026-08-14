import {api} from "../../../config/api"

 export const AllProductData= async(endPoint)=>{

   try {
     let res=await api.get(endPoint)
     return res.data
   } catch (error) {
     console.log(error)
   }
}

export const FetchCategory= async()=>{
    try {
     let res=await api.get("products/categories")
    //  console.log(res.data);
     return res.data
   } catch (error) {
     console.log(error)
   }
}



 export const FetchByCategory= async(endPoint)=>{
   try {
     let res=await api.get(`products/category/${endPoint}`)
     console.log(res.data);
      return res.data
   } catch (error) {
     console.log(error)
   }
}