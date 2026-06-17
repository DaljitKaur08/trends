import { useState, useEffect } from 'react';
import axios from 'axios';

import HeroBanner from '../components/HeroBanner';
import ProductGrid from '../components/ProductGrid';

function Home() {

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
        <main className="home-page">

            <section className="hero-section">
                <HeroBanner />
            </section>

            <section className="products-section">
                <div className="container">
                    <ProductGrid products={products} />
                </div>
            </section>

        </main>
    );
}

export default Home;