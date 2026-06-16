import { useState, useEffect } from 'react';

function Cart() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        const cart =
            JSON.parse(localStorage.getItem('cart')) || [];

        setCartItems(cart);

    }, []);

    function updateQuantity(id, amount) {

        const updatedCart = cartItems.map(item => {

            if (item.id === id) {

                return {
                    ...item,
                    quantity: Math.max(
                        1,
                        item.quantity + amount
                    )
                };
            }

            return item;
        });

        setCartItems(updatedCart);

        localStorage.setItem(
            'cart',
            JSON.stringify(updatedCart)
        );
    }

    function removeItem(id) {

        const updatedCart =
            cartItems.filter(item => item.id !== id);

        setCartItems(updatedCart);

        localStorage.setItem(
            'cart',
            JSON.stringify(updatedCart)
        );
    }

    const total = cartItems.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    return (
        <section>

            <h2>Shopping Cart</h2>

            {
                cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        {
                            cartItems.map(item => (
                                <div
                                    key={item.id}
                                    className="cart-item"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        width="80"
                                    />

                                    <h3>{item.title}</h3>

                                    <p>
                                        ${item.price}
                                    </p>

                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                -1
                                            )
                                        }
                                    >
                                        -
                                    </button>

                                    <span>
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                1
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                    <button
                                        onClick={() =>
                                            removeItem(item.id)
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>
                            ))
                        }

                        <h3>
                            Total: $
                            {total.toFixed(2)}
                        </h3>
                    </>
                )
            }

        </section>
    );
}

export default Cart;