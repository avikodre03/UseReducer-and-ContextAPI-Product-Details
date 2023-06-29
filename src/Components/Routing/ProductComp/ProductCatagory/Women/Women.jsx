import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../../../../ProductsContext/ProductContext'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Women = () => {
  const [womenClothData, setwomenClothData] = useState([])
  const { updateState } = useContext(productContext)
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/women's clothing").then((res) => {
      console.log(res.data);
      setwomenClothData(res.data)
      updateState("womensProducts", res.data)
    }).catch((error) => {
      alert("error found")
    })
  }, [])
  return (
    <div className='electronic'>
      <h1>WOMENS CLOTHING PRODUCTS</h1>
      {womenClothData.map((ele) => {
        return <>
          <Link to={`/productDetails/${ele.category}/${ele.id}`}>
            <h3>{ele.title}</h3>
          </Link>
        </>
      })}
    </div>
  )
}

export default Women