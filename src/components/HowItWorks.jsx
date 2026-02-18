import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineSearch, HiOutlineChartBar, HiOutlineBell } from 'react-icons/hi'
import './HowItWorks.css'

const steps = [
    {
        icon: <HiOutlineSearch />,
        step: '01',
        title: 'Search or Add Product',
        description: 'Paste a product link or search by name. We\'ll find it across all major ecommerce platforms.',
    },
    {
        icon: <HiOutlineChartBar />,
        step: '02',
        title: 'Compare & Track',
        description: 'See side-by-side price comparisons and price history charts. Set your desired price.',
    },
    {
        icon: <HiOutlineBell />,
        step: '03',
        title: 'Get Notified',
        description: 'Receive instant alerts when the price drops or our AI predicts the best time to buy.',
    },
]

const HowItWorks = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="how-it-works section" id="how-it-works" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge">How It Works</span>
                    <h2 className="section-title">
                        Simple. <span className="gradient-text">Smart.</span> Savings.
                    </h2>
                    <p className="section-subtitle">
                        Three easy steps to never overpay again.
                    </p>
                </motion.div>

                <div className="how-it-works__steps">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.step}
                            className="how-it-works__step"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 * i }}
                        >
                            <div className="how-it-works__step-number">{step.step}</div>
                            <div className="how-it-works__step-icon">{step.icon}</div>
                            <h3 className="how-it-works__step-title">{step.title}</h3>
                            <p className="how-it-works__step-desc">{step.description}</p>

                            {i < steps.length - 1 && (
                                <div className="how-it-works__connector">
                                    <svg width="40" height="20" viewBox="0 0 40 20">
                                        <path d="M0 10 H30 L25 5 M30 10 L25 15" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
