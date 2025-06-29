import React, {useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
const ProductListing = () =>{
  const products = useSelector((state)=> state);
  const dispatch = useDispatch();

  const fetchProducts = async() =>{
    const response  = await axios.get("https://fakestoreapi.com/products").catch((err) =>{
      console.log("error hai ", err)
    })
    dispatch(setProducts(response));
  }
  useEffect(() =>{
    fetchProducts()
  },[]);

  return(
    <div className='ui grid container'>
      <h1><ProductComponent/></h1>
    </div>
  )
}
export default ProductListing;