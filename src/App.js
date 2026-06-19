import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

import "./css/cart.css";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />

            <main>
                <div className="container">

                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />

                        
                        <Route path="/notfound" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />

                    </Routes>

                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;