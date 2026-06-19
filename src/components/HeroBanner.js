import { motion } from "framer-motion";

function HeroBanner() {
    const scrollToProducts = () => {
        document
            .getElementById("products-section")
            .scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.section
            className="hero-banner"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/herobanner.jpg')"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="hero-content">
                <h2>Trends</h2>
                <p>Fashion That Defines You</p>

                <button
                    className="shop-btn"
                    onClick={scrollToProducts}
                >
                    Shop Now
                </button>
            </div>
        </motion.section>
    );
}

export default HeroBanner;