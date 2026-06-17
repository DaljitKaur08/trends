import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

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

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {

                if (!res.data || res.data === "") {
                    navigate('/');
                    return;
                }

                const data = res.data;
                setProduct(data);

                // fetch similar products (same category)
                axios.get(`https://fakestoreapi.com/products/category/${data.category}`)
                    .then(simRes => {

                        const filtered = simRes.data
                            .filter(p => p.id !== data.id)
                            .slice(0, 4);

                        setSimilar(filtered);
                    });

            })
            .catch(err => {
                console.log(err);
                navigate('/');
            });

    }, [id, navigate]);

    // add to cart
    function addToCart() {

        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += qty;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: qty
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Added to Cart');
    }

    if (!product) {
        return <h2 style={{ padding: "20px" }}>Loading Product...</h2>;
    }

    return (
        <div className="product-detail">
            <div className="detail-container">

                <img
                    src={product.image}
                    alt={product.title}
                    className="detail-img"
                />

                <div className="detail-info">

                    <h2>{product.title}</h2>

                    <p>{product.description}</p>

                    <h3>${product.price}</h3>

                    <div style={{ margin: "10px 0" }}>

                        <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                            -
                        </button>

                        <span style={{ margin: "0 10px" }}>{qty}</span>

                        <button onClick={() => setQty(qty + 1)}>
                            +
                        </button>

                    </div>

                    <button onClick={addToCart}>
                        Add To Cart
                    </button>

                </div>
            </div>

            <h3 style={{ marginTop: "30px" }}>
                Similar Products
            </h3>

            <div className="similar-grid">

                {similar.map(item => (
                    <div
                        key={item.id}
                        className="similar-card"
                        onClick={() => navigate(`/product/${item.id}`)}
                        style={{ cursor: "pointer" }}
                    >

                        <img src={item.image} alt={item.title} />

                        <p>{item.title.slice(0, 40)}...</p>

                        <p>${item.price}</p>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default ProductDetail;