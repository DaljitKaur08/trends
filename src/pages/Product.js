import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductGrid from '../components/ProductGrid';

function Product() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios
            .get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });

    }, []);

    return (
        <>
            <h2>Products</h2>

            <ProductGrid products={products} />
        </>
    );
}

export default Product;