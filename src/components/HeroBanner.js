import { motion } from "framer-motion";

function HeroBanner() {
    return (

        // Framer Motion animation 

        <motion.section
            className="hero-banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h2>Trends</h2>

            <p>
                Discover Fashion, Jewelry and Electronics
            </p>

        </motion.section>
    );
}

export default HeroBanner;