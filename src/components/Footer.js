import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">
                    <h2 className="logo">Trends</h2>
                    <p>123 Shopping Street</p>
                    <p>Winnipeg, Canada</p>
                    <p>+1 234 567 890</p>
                    <p>support@trends.com</p>

                    <div className="social-icons">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>

                <div className="footer-section">
                    <h3>About</h3>
                    <ul>
                        <li>Our Story</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>


            </div>

            <div className="footer-bottom">
                <p>© 2026 Trends. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;