import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const temp = useParams();
    console.log('id - ', temp.id);

    const [product, setProduct] = useState({});

    const callApi = async(productId) => {
        const response = await fetch('https://fakestoreapi.com/products/'+productId)
        const data = await response.json();
        console.log(data);
        setProduct(data);
    }

    useEffect(() => {
        callApi(temp.id);
    }, [temp.id])
    return (
        <div>
            <h2>Product Detail Page</h2>
            <img src={product.image}/>
        </div>
    )
}

export default ProductDetail
