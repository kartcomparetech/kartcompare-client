import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { IoRocketOutline } from 'react-icons/io5'
import './Hero.css'

const Hero = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || loading) return
        setLoading(true)
        try {
            await fetch('https://formsubmit.co/ajax/kartcomparetech@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    _subject: '🚀 New KartCompare Waitlist Signup!',
                    source: 'Hero Section',
                }),
            })
            setSubmitted(true)
            setEmail('')
            setTimeout(() => setSubmitted(false), 5000)
        } catch (err) {
            console.error('Signup error:', err)
            alert('Something went wrong. Please try again!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="hero section" id="hero">
            {/* Background Effects */}
            <div className="hero__bg-glow hero__bg-glow--green" />
            <div className="hero__bg-glow hero__bg-glow--blue" />
            <div className="hero__grid-overlay" />

            <div className="container hero__container">
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className="section-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <IoRocketOutline />
                        Launching Soon
                    </motion.div>

                    <h1 className="hero__title">
                        Never <span className="gradient-text">Overpay</span> Again.
                    </h1>

                    <p className="hero__subtitle">
                        Compare prices across ecommerce platforms, track deals in real time,
                        and let AI tell you the perfect moment to buy.
                    </p>

                    <form className="hero__form" onSubmit={handleSubmit}>
                        <div className="hero__input-wrapper">
                            <input
                                type="email"
                                className="input-field hero__input"
                                placeholder="Enter your email for early access"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={loading}
                            />
                            <button type="submit" className="btn-primary hero__submit" disabled={loading}>
                                {loading ? 'Sending...' : submitted ? '✓ You\'re In!' : 'Notify Me'}
                                {!submitted && !loading && <HiOutlineArrowRight />}
                            </button>
                        </div>
                        {submitted && (
                            <motion.p
                                className="hero__success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                🎉 You're on the list! We'll notify you when we launch.
                            </motion.p>
                        )}
                    </form>

                    <p className="hero__trust">
                        Join <span className="gradient-text">2,000+</span> early adopters waiting to save smarter
                    </p>
                </motion.div>

                <motion.div
                    className="hero__launch-soon"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    <p className="hero__launch-label">Launching</p>
                    <h2 className="hero__launch-text">
                        <span className="gradient-text">Sooner</span> than you expect
                    </h2>
                    <div className="hero__launch-pulse" />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
