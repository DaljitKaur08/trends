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
                if (!res.data?.id) {
                    navigate("/notfound");
                    return;
                }

                setProduct(res.data);

                axios
                    .get("https://fakestoreapi.com/products")
                    .then(simRes =>
                        setSimilar(
                            simRes.data
                                .filter(
                                    p =>
                                        p.category === res.data.category &&
                                        p.id !== res.data.id
                                )
                                .slice(0, 4)
                        )
                    );
            })
            .catch(err => {
                console.log(err);
                navigate("/notfound");
            });
    }, [id, navigate]);

    function addToCart() {
        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(
            item => item.id === product.id
        );

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

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        window.dispatchEvent(
            new Event("cartUpdated")
        );

        alert("Added to Cart");
    }

    if (!product) {
        return (
            <h2 style={{ padding: "20px" }}>
                Loading Product...
            </h2>
        );
    }

    return (
        <div className="product-detail container">

            <div className="detail-container">

                <img
                    src={product.image}
                    alt={product.title}
                    className="detail-img"
                />

                <div className="detail-info">
                    <h2>{product.title}</h2>
                    <p>Category: {product.category}</p>
                    <p>Rating: {product.rating?.rate} ⭐</p>
                    <p>{product.description}</p>
                    <h3>${product.price}</h3>

                    <div>
                        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                        <span style={{ margin: "0 10px" }}>{qty}</span>
                        <button onClick={() => setQty(qty + 1)}>+</button>
                    </div>

                    <button onClick={addToCart}>
                        Add To Cart
                    </button>
                </div>

            </div>

            {similar.length > 0 && (
                <div className="similar-products">

                    <h2>You Might Also Like</h2>

                    <div className="similar-grid">
                        {similar.map(item => (
                            <div
                                key={item.id}
                                className="similar-card"
                                onClick={() =>
                                    navigate(`/product/${item.id}`)
                                }
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                                <h4>
                                    {item.title.length > 40
                                        ? item.title.slice(0, 40) + "..."
                                        : item.title}
                                </h4>

                                <p>${item.price}</p>
                            </div>
                        ))}
                    </div>

                </div>
            )}

        </div>
    );
}

export default ProductDetail;