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
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/product"
                        >
                            Product
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/cart">
                            Cart ({cartCount})
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;