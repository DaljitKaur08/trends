import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {

    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {

        const updateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];

            setCartCount(
                cart.reduce((sum, item) => sum + item.quantity, 0)
            );
        };

        updateCartCount();

        window.addEventListener("cartUpdated", updateCartCount);

        return () => {
            window.removeEventListener("cartUpdated", updateCartCount);
        };

    }, []);

    return (
        <header className="header">

            {/* LOGO */}
            <div
                className="logo-section"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
            >
                <img src="/images/logo.png" alt="logo" />
            </div>

            {/* NAV LINKS */}
            <nav className="nav-links">

                <Link to="/">Home</Link>
                <Link to="/product">Products</Link>
                <Link to="/product?category=men's clothing">Men</Link>
                <Link to="/product?category=women's clothing">Women</Link>
                <Link to="/product?category=jewelery">Accessories</Link>

            </nav>

            {/* RIGHT ICONS */}
            <div className="header-right">

                {/* SEARCH ICON (FIXED) */}
                <i
                    className="fa-solid fa-magnifying-glass"
                    onClick={() => navigate("/product")}
                    style={{ cursor: "pointer" }}
                ></i>

                <i className="fa-regular fa-user"></i>

                <div
                    className="cart-link"
                    onClick={() => navigate("/cart")}
                >
                    <i className="fa-solid fa-bag-shopping"></i>

                    {cartCount > 0 && (
                        <span className="cart-count">
                            {cartCount}
                        </span>
                    )}
                </div>

                <div className="language">
                    EN <i className="fa-solid fa-chevron-down"></i>
                </div>

            </div>

        </header>
    );
}

export default Header;