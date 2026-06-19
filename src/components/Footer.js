function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <div className="footer-brand">
                        <img
                            src="/images/logo.png"
                            alt="Trends Logo"
                            className="footer-logo"
                        />

                        <h2 className="logo">Trends</h2>
                    </div>

                    <p>123 Shopping Street</p>
                    <p>Winnipeg, Canada</p>
                    <p>+1 234 567 890</p>
                    <p>support@trends.com</p>

                    <div className="social-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
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

                <div className="footer-section">
                    <h3>Information</h3>

                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
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