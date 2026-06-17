import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  function updateQty(id, delta) {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function removeItem(id) {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <section className="cart-page container">

      <h2 className="cart-title">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-layout">

          <div>
            {cart.map(item => (
              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.title} />

                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <div className="cart-price">${item.price}</div>
                </div>

                <div className="qty-box">
                  <button onClick={() => updateQty(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, 1)}>+</button>
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          <aside className="summary">
            <h3>Order Summary</h3>
            <p>Total: ${total.toFixed(2)}</p>
            <button className="btn btn-primary">
              Checkout
            </button>
          </aside>

        </div>
      )}
    </section>
  );
}

export default Cart;