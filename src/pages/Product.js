import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

function Product() {

    const [products, setProducts] = useState([]);

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

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

    const filteredProducts = category
        ? products.filter(item => item.category === category)
        : products;

    return (
        <>
            <h2>Products</h2>

            <ProductGrid products={filteredProducts} />
        </>
    );
}

export default Product;