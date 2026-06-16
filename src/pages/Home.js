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
        <>
            <HeroBanner />
            <ProductGrid products={products} />
        </>
    );
}

export default Home;