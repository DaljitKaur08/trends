import { useState, useEffect } from 'react';
import axios from 'axios';

import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';
import FilterSection from '../components/FilterSection';
import SortSection from '../components/SortSection';

function Home() {

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

    if (category !== 'all') {
        displayProducts = displayProducts.filter(product =>
            product.category === category
        );
    }

    if (sort === 'name-asc') {
        displayProducts.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    if (sort === 'name-desc') {
        displayProducts.sort((a, b) =>
            b.title.localeCompare(a.title)
        );
    }

    if (sort === 'low-high') {
        displayProducts.sort((a, b) =>
            a.price - b.price
        );
    }

    if (sort === 'high-low') {
        displayProducts.sort((a, b) =>
            b.price - a.price
        );
    }

    return (
        <main className="home-page">

            <section className="hero-section">
                <HeroBanner />
            </section>

            <section className="products-section">
                <div className="container">

                    <div className="controls">
                        <FilterSection setCategory={setCategory} />
                        <SortSection setSort={setSort} />
                    </div>

                    <ProductGrid products={displayProducts} />

                </div>
            </section>

        </main>
    );
}

export default Home;