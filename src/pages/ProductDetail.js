import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [similar, setSimilar] = useState([]);
    const [qty, setQty] = useState(1);

    useEffect(() => {

        setProduct(null);
        setSimilar([]);
        setQty(1);

        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {

                // FIX 1: invalid product
                if (!res.data || !res.data.id) {
                    navigate("/notfound");
                    return;
                }

                const data = res.data;
                setProduct(data);

                axios
                    .get(`https://fakestoreapi.com/products/category/${data.category}`)
                    .then(simRes => {

                        const filtered = simRes.data
                            .filter(p => p.id !== data.id)
                            .slice(0, 4);

                        setSimilar(filtered);
                    });

            })
            .catch(err => {
                console.log(err);
                navigate("/notfound"); // FIX 2
            });

    }, [id, navigate]);

    function addToCart() {

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(item => item.id === product.id);

        if (existing) {
            existing.quantity += qty;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: qty
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to Cart");
    }

    if (!product) {
        return <h2 style={{ padding: "20px" }}>Loading Product...</h2>;
    }

    return (
        <div className="product-detail container">

            <div className="detail-container">

                <img src={product.image} alt={product.title} className="detail-img" />

                <div className="detail-info">

                    <h2>{product.title}</h2>

                    <p>Category: {product.category}</p>

                    <p>Rating: {product.rating?.rate} ⭐</p>

                    <p>{product.description}</p>

                    <h3>${product.price}</h3>

                    <div>
                        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                        <span>{qty}</span>
                        <button onClick={() => setQty(qty + 1)}>+</button>
                    </div>

                    <button onClick={addToCart}>
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProductDetail;