import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineArrowRight } from 'react-icons/hi'
import './EarlyAccess.css'

const EarlyAccess = () => {
    const [email, setEmail] = useState('')
    const [interest, setInterest] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
                    interest: interest || 'Not specified',
                    _subject: '🚀 New KartCompare Early Access Signup!',
                    source: 'Early Access Section',
                }),
            })
            setSubmitted(true)
            setEmail('')
            setInterest('')
            setTimeout(() => setSubmitted(false), 5000)
        } catch (err) {
            console.error('Signup error:', err)
            alert('Something went wrong. Please try again!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="early-access section" id="early-access" ref={ref}>
            <div className="early-access__bg-glow early-access__bg-glow--1" />
            <div className="early-access__bg-glow early-access__bg-glow--2" />

            <div className="container">
                <motion.div
                    className="early-access__wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="early-access__content">
                        <span className="section-badge">🚀 Early Access</span>
                        <h2 className="section-title">
                            Be the first to <span className="gradient-text">save smarter</span>
                        </h2>
                        <p className="section-subtitle">
                            Join our waitlist and get exclusive early access when we launch.
                            No spam, just smart savings.
                        </p>

                        {!submitted ? (
                            <form className="early-access__form" onSubmit={handleSubmit}>
                                <div className="early-access__fields">
                                    <input
                                        type="email"
                                        className="input-field"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <select
                                        className="input-field early-access__select"
                                        value={interest}
                                        onChange={(e) => setInterest(e.target.value)}
                                    >
                                        <option value="">What interests you most? (Optional)</option>
                                        <option value="price-comparison">Price Comparison</option>
                                        <option value="deal-alerts">Deal Alerts</option>
                                        <option value="price-prediction">AI Price Prediction</option>
                                        <option value="price-tracking">Price Tracking</option>
                                        <option value="all">All Features</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn-primary early-access__btn">
                                    Join the Waitlist
                                    <HiOutlineArrowRight />
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                className="early-access__success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="early-access__success-icon">🎉</div>
                                <h3>You're on the list!</h3>
                                <p>We'll reach out as soon as KartCompare is ready for you.</p>
                            </motion.div>
                        )}

                        <div className="early-access__stats">
                            <div className="early-access__stat">
                                <span className="early-access__stat-value">2,000+</span>
                                <span className="early-access__stat-label">On waitlist</span>
                            </div>
                            <div className="early-access__stat-divider" />
                            <div className="early-access__stat">
                                <span className="early-access__stat-value">5</span>
                                <span className="early-access__stat-label">Smart features</span>
                            </div>
                            <div className="early-access__stat-divider" />
                            <div className="early-access__stat">
                                <span className="early-access__stat-value">100%</span>
                                <span className="early-access__stat-label">Free to start</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default EarlyAccess
