import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {

        const updateCartCount = () => {

            const cart =
                JSON.parse(localStorage.getItem("cart")) || [];

            setCartCount(
                cart.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                )
            );
        };

        updateCartCount();

        window.addEventListener(
            "cartUpdated",
            updateCartCount
        );

        return () =>
            window.removeEventListener(
                "cartUpdated",
                updateCartCount
            );

    }, []);

    return (
    <header className="header">

        <div className="logo-section">
            <img
                src="/images/logo.png"
                alt="Trends Logo"
            />
        </div>

        <nav className="nav-links">

            <NavLink to="/">
                Home
            </NavLink>

            <NavLink to="/product">
                Product
            </NavLink>

        </nav>

        <div className="cart-link">

           <NavLink to="/cart">
    <i className="fa-solid fa-cart-shopping"></i>
    {" "}Cart ({cartCount})
</NavLink>

        </div>

    </header>
);
}

export default Header;