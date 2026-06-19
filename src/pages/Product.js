import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

function Product() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    useEffect(() => {

        setLoading(true);

        axios
            .get("https://fakestoreapi.com/products")
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });

    }, []);

    useEffect(() => {
        setSearch("");
    }, [category]);

    let filteredProducts = category
        ? products.filter(
              item => item.category === category
          )
        : products;

    if (search.trim() !== "") {

        filteredProducts = filteredProducts.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
);

    }

    return (
        <section className="product-page container">

            <h2 className="page-title">
                Products
            </h2>

            <div className="search-wrapper">

                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="search-box"
                />

            </div>

            {loading ? (

                <h3>Loading Products...</h3>

            ) : filteredProducts.length > 0 ? (

                <ProductGrid
                    products={filteredProducts}
                />

            ) : (

                <div className="no-products">

                    <h2>
                        No Products Found
                    </h2>

                    <p>
                        Try different search keywords.
                    </p>

                </div>

            )}

        </section>
    );
}

export default Product;