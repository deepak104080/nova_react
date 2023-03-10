import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ProductCategory = () => {
    const [products, setProducts] = useState([]);

    const callApi = async() => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }
    useEffect(() => {
        callApi();
    }, [])
    return (
        <div>
            <div className='row'>
                {
                    products && products.map((item, index) => (
                        <div className='col-3'>
                            <Link to={`/product/${item.id}`}>
                                <img src={item.image} className="img-fluid"/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductCategory
