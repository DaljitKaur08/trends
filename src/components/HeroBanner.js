import { motion } from "framer-motion";

function HeroBanner() {
    return (
        <motion.section
            className="hero-banner"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/herobanner.jpg')"
            }}
            initial={{ opacity: 8 }}
            animate={{ opacity: 6 }}
            transition={{ duration: 1.0 }}
        >
            <div className="hero-content">

                <h2>Trends</h2>

                <p>Fashion That Defines You</p>

                <button className="shop-btn">
                    Shop Now
                </button>

            </div>
        </motion.section>
    );
}

export default HeroBanner;