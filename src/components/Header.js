import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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

        return () =>
            window.removeEventListener("cartUpdated", updateCartCount);

    }, []);

    return (
        <header className="header">

            {/* LEFT - LOGO */}
            <div className="logo-section" onClick={() => navigate("/")}>
                <img src="/images/logo.png" alt="logo" />
            </div>

            {/* CENTER - NAV */}
            <nav className="nav-links">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/summer">Summer Collection</NavLink>
                <NavLink to="/men">Men</NavLink>
                <NavLink to="/women">Women</NavLink>
                <NavLink to="/kids">Kids</NavLink>
                <NavLink to="/shoes">Accessories</NavLink>
                <NavLink to="/jeans">Trends Jeans</NavLink>

            </nav>

            {/* RIGHT - ICONS */}
            <div className="header-right">

                <i className="fa-solid fa-magnifying-glass"></i>

                <i className="fa-regular fa-user"></i>

                <div className="cart-link" onClick={() => navigate("/cart")}>
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