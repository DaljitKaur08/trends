import { useState, useEffect } from 'react';
import axios from 'axios';

import FilterSection from '../components/FilterSection';
import SortSection from '../components/SortSection';
import ProductGrid from '../components/ProductGrid';

function Product() {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('default');

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

    let displayProducts = [...products];

    if (category !== 'all') {
        displayProducts = displayProducts.filter(product =>
            product.category === category
        );
    }

    if (sort === 'low-high') {
        displayProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === 'high-low') {
        displayProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <>
            <h2>Products</h2>

            <FilterSection setCategory={setCategory} />

            <SortSection setSort={setSort} />

            <ProductGrid products={displayProducts} />
        </>
    );
}

export default Product;