import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../../../ProductsContext/ProductContext'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Mens = () => {
  const [mensClothData, setmensClothData] = useState([])
  const {updateState}=useContext(productContext)
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/men's clothing").then((res) => {
      console.log(res.data);
      setmensClothData(res.data)
      updateState("mensProducts",res.data)
    }).catch((error) => {
      alert("error found")
    })
  },[])
  return (
    <div className='electronic'>
      <h1>MEN'S CLOTHING PRODUCTS</h1>
      {mensClothData.map((ele)=>{
        return<>
        <Link to={`/productDetails/${ele.category}/${ele.id}`}>
        <h3>{ele.title}</h3>
        </Link>
        </>
      })}
    </div>
  )
}

export default Mens