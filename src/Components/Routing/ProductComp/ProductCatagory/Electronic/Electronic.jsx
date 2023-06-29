import React, { useContext, useEffect, useState } from 'react'
import axios  from 'axios'
import './Electronic.css'
import {Link} from 'react-router-dom'
import { productContext } from '../../../../ProductsContext/ProductContext'
const Electronic = () => {
const [electronicdata, setelectronicdata] = useState([])
  
const {updateState}= useContext(productContext)
console.log(updateState);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/electronics").then((res) => {
      console.log(res.data);
      setelectronicdata(res.data)
      updateState("electronicProducts",res.data)
    }).catch((error) => {
      alert("error found")
    })
  }, [])
  return (
    <div className='electronic'>
      <h1>ELECTRONICS PRODUCTS</h1>
      {electronicdata.map((ele)=>{
        return<>
        <Link to={`/productDetails/${ele.category}/${ele.id}`}>
        <h3>{ele.title}</h3>
        </Link>
        </>
      })}
    </div>
  )
}

export default Electronic