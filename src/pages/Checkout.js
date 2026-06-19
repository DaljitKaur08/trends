import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../css/checkout.css";

function Checkout() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const shipping = 15;
    const tax = subtotal * 0.12;
    const grandTotal = subtotal + shipping + tax;

    function onSubmit(data) {
        alert(`Thank you ${data.firstName} ${data.lastName}! Order Placed Successfully.`);
        localStorage.removeItem("cart");
        window.dispatchEvent(new Event("cartUpdated"));
        window.location.href = "/";
    }

    return (
        <section className="checkout-page container">
            <div className="checkout-layout">

                <div className="checkout-form">
                    <Link to="/cart" className="back-link">
                        ← Back To Cart
                    </Link>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Billing Details</h2>

                        <div className="two-columns">

                            <div className="form-group">
                                <label>FIRST NAME</label>
                                <input
                                    placeholder="First Name"
                                    {...register("firstName", {
                                        required: "First Name is required"
                                    })}
                                />
                                {errors.firstName && (
                                    <span className="error">
                                        {errors.firstName.message}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>LAST NAME</label>
                                <input
                                    placeholder="Last Name"
                                    {...register("lastName", {
                                        required: "Last Name is required"
                                    })}
                                />
                                {errors.lastName && (
                                    <span className="error">
                                        {errors.lastName.message}
                                    </span>
                                )}
                            </div>

                        </div>

                        <button type="submit" className="place-order-btn">
                            Pay ${grandTotal.toFixed(2)}
                        </button>
                    </form>
                </div>

                <aside className="checkout-summary">
                    <h3>Order Summary</h3>

                    {cart.map(item => (
                        <div key={item.id} className="summary-item">
                            <img src={item.image} alt={item.title} />
                            <div>
                                <p>{item.title}</p>
                                <p>Qty: {item.quantity}</p>
                            </div>
                        </div>
                    ))}

                    <hr />

                    <p>Subtotal <span>${subtotal.toFixed(2)}</span></p>
                    <p>Shipping <span>$15.00</span></p>
                    <p>VAT (12%) <span>${tax.toFixed(2)}</span></p>

                    <hr />

                    <h3>
                        Total <span>${grandTotal.toFixed(2)}</span>
                    </h3>
                </aside>

            </div>
        </section>
    );
}

export default Checkout;