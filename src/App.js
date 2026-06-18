import Header from './components/Header';
import Footer from "./components/Footer";
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />

            <main>
                <div className="container">

                    <Routes>

                        <Route path='/' element={<Home />} />

                        <Route path='/product' element={<Product />} />

                        <Route path='/product/:id' element={<ProductDetail />} />

                        <Route path='/cart' element={<Cart />} />

                        <Route path='*' element={<NotFound />} />

                    </Routes>

                </div>
            </main>

        <Footer />
        </>
    );
}

export default App;