import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToEarlyAccess = () => {
        document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="navbar__container container">
                <a href="/" className="navbar__logo">
                    <img src="/logo.png" alt="KartCompare" className="navbar__logo-img" />
                    <span className="navbar__logo-text">KartCompare</span>
                </a>
                <button className="btn-primary navbar__cta" onClick={scrollToEarlyAccess}>
                    Get Early Access
                </button>
            </div>
        </motion.nav>
    )
}

export default Navbar
