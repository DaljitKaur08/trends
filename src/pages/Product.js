import { useState, useEffect } from 'react';
import axios from 'axios';

import FilterSection from '../components/FilterSection';
import SortSection from '../components/SortSection';
import ProductGrid from '../components/ProductGrid';

function Product() {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('name-asc');

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

    // Filter
    if (category !== 'all') {
        displayProducts = displayProducts.filter(product =>
            product.category === category
        );
    }

    // Sort by Name A-Z
    if (sort === 'name-asc') {
        displayProducts.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    // Sort by Name Z-A
    if (sort === 'name-desc') {
        displayProducts.sort((a, b) =>
            b.title.localeCompare(a.title)
        );
    }

    // Sort by Price Low to High
    if (sort === 'low-high') {
        displayProducts.sort((a, b) =>
            a.price - b.price
        );
    }

    // Sort by Price High to Low
    if (sort === 'high-low') {
        displayProducts.sort((a, b) =>
            b.price - a.price
        );
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