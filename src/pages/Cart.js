import "../css/cart.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    function updateQty(id, delta) {
        const updated = cart.map(item =>
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item
        );

        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
        window.dispatchEvent(new Event("cartUpdated"));
    }

    function removeItem(id) {
        const updated = cart.filter(item => item.id !== id);

        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
        window.dispatchEvent(new Event("cartUpdated"));
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <section className="cart-page container">
            <h2 className="cart-title">Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <p className="empty-cart">
                    Your cart is empty. Start shopping now.
                </p>
            ) : (
                <div className="cart-layout">
                    <div>
                        {cart.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.title} />

                                <div className="cart-info">
                                    <h4>{item.title}</h4>
                                    <div className="cart-price">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>

                                <div className="qty-box">
                                    <button onClick={() => updateQty(item.id, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                                </div>

                                <button
                                    className="btn-danger"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <aside className="summary">
                        <h3>Order Summary</h3>

                        <p>
                            Items:
                            <span>
                                {cart.reduce((sum, item) => sum + item.quantity, 0)}
                            </span>
                        </p>

                        <p>
                            Total:
                            <span>${total.toFixed(2)}</span>
                        </p>

                        <button
                            className="btn-primary"
                            onClick={() => navigate("/checkout")}
                        >
                            Checkout
                        </button>
                    </aside>
                </div>
            )}
        </section>
    );
}

export default Cart;