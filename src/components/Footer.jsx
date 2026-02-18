import { motion } from 'framer-motion'
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <a href="/" className="footer__logo">
                            <img src="/logo.png" alt="KartCompare" className="footer__logo-img" />
                            <span className="footer__logo-text">KartCompare</span>
                        </a>
                        <p className="footer__tagline">
                            Compare prices. Track deals. Buy smarter.
                        </p>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__links-title">Company</h4>
                        <a href="#features" className="footer__link">Features</a>
                        <a href="#how-it-works" className="footer__link">How It Works</a>
                        <a href="#early-access" className="footer__link">Early Access</a>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__links-title">Legal</h4>
                        <a href="#" className="footer__link">Privacy Policy</a>
                        <a href="#" className="footer__link">Terms of Service</a>
                        <a href="#" className="footer__link">Contact</a>
                    </div>

                    <div className="footer__social-section">
                        <h4 className="footer__links-title">Follow Us</h4>
                        <div className="footer__social">
                            <motion.a
                                href="https://twitter.com/kartcompare"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-icon"
                                whileHover={{ scale: 1.15, y: -2 }}
                                aria-label="Twitter"
                            >
                                <FaXTwitter />
                            </motion.a>
                            <motion.a
                                href="https://instagram.com/kartcompare"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-icon"
                                whileHover={{ scale: 1.15, y: -2 }}
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/company/kartcompare"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-icon"
                                whileHover={{ scale: 1.15, y: -2 }}
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </motion.a>
                            <motion.a
                                href="https://facebook.com/kartcompare"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-icon"
                                whileHover={{ scale: 1.15, y: -2 }}
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} KartCompare. All rights reserved.
                    </p>
                    <p className="footer__launch">
                        🚀 Launching 2026
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
