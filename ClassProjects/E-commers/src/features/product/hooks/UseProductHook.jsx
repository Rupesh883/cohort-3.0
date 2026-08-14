import { useState } from "react"
import { AllProductData, FetchByCategory, FetchCategory } from "../api/ProductApis"
import {
  useQuery,
} from '@tanstack/react-query'

 export const UseProductHook=()=>{
    const [Search, setSearch] = useState(null)
         console.log(Search);
         
         let endPoint= Search?`products/search?q=${Search}`:"products"
         const { isPending, error, data } = useQuery({
            queryKey: ['productData',Search],
            queryFn: ()=>AllProductData(endPoint)
        })

        

  return(
    { isPending, error, data ,Search, setSearch
  })
}

export const useAllCategory=()=>{
         const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => FetchCategory("products")
  })

  return{
    data
  }
}

 export const UseCategoryHook=()=>{
    const [category, setCategory] = useState([])
         const { isPending, error, data } = useQuery({
            queryKey: ['categoryData',category],
            queryFn: ()=>FetchByCategory(category)
        })
        console.log(data)
  return(
    { isPending, error, data ,category, setCategory
  })
}
