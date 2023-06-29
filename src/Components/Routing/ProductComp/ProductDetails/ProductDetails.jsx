import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductDetails.css'
import { productContext } from '../../../ProductsContext/ProductContext';

const ProductDetails = () => {
    const [productDetails, setproductDetails] = useState([{}])
    const navigate = useNavigate();
    const { id,category } = useParams();
    const { state } = useContext(productContext);
    console.log(state);
    useEffect(() => {
        switch (category) {
            case "electronics":
                setproductDetails(state.electronicProducts.filter((ele) => ele.id == id))
                break;
            case "jewelery":
                setproductDetails(state.jeweleryProducts.filter((ele) => ele.id == id))
                break;
            case "men's clothing":
                setproductDetails(state.mensProducts.filter((ele) => ele.id == id))
                break;
            case "women's clothing":
                setproductDetails(state.womensProducts.filter((ele) => ele.id == id))
                break;
        };

    }, [])
    return (
        <div className='productDetails'>ProductDetails
            <br />
            <button onClick={() => {
                navigate('/product')
            }
            }>Go back product component</button>
            {console.log(productDetails[0])}
            <h1>{productDetails[0] && productDetails[0].category}</h1>
            <div className="detaisCard">
                <img src={productDetails[0] && productDetails[0].image} alt="" height='200px' width="300px" />
                <h3>{productDetails[0] && productDetails[0].title}</h3>
            </div>
        </div>
    )
}

export default ProductDetails