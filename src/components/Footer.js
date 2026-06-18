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
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
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