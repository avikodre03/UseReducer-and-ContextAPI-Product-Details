import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../../../../ProductsContext/ProductContext'

import '../Electronic/Electronic.css'
const Jewelery = () => {

  const [jeweleryData, setjeweleryData] = useState([])
const {updateState}=useContext(productContext);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/jewelery").then((res) => {
      console.log(res.data);
      setjeweleryData(res.data)
      updateState("jeweleryProducts",res.data)
    }).catch((error) => {
      alert("error found")
    })
  },[])
  return (
    <div className='electronic'>
      <h1>JEWELERY PRODUCTS</h1>
      {jeweleryData.map((ele)=>{
        return<>
        <Link to={`/productDetails/${ele.category}/${ele.id}`}>
        <h3>{ele.title}</h3>
        </Link>
        </>
      })}
    </div>
  )
}

export default Jewelery