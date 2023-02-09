import React, { useEffect} from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";


function ProductContainer() {

  const {products , isLoading , isError , isSuccess} = useSelector(state => state.product)

    const dispatch = useDispatch()



    useEffect(()=>{

        
        dispatch(fetchProducts())
        

    },[])


    if(isLoading){
      return (
        <h1>Loading...</h1>
      )
    }

    
    if(isError){
      return (
        <h1>Something Went Wrong...</h1>
      )
    }

  return (
    <div className="container">
      <h1 className="all-products-title">All Products</h1>

    {
        products.map(product => <ProductCard key={product.id} product={product} />)
    }
      
    </div>
  );
}

export default ProductContainer;
