import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineFire, HiOutlineScale, HiOutlineBell, HiOutlineLightningBolt } from 'react-icons/hi'
import { IoSparklesOutline } from 'react-icons/io5'
import './Features.css'

const features = [
    {
        icon: <HiOutlineFire />,
        title: 'Trending Deals',
        description: 'Discover real-time trending offers across ecommerce platforms before they\'re gone.',
        color: '#FF6D00',
        gradient: 'linear-gradient(135deg, rgba(255, 109, 0, 0.15), rgba(255, 109, 0, 0.05))',
    },
    {
        icon: <HiOutlineScale />,
        title: 'Smart Price Comparison',
        description: 'Instantly compare prices for the same product across major ecommerce sites — in one view.',
        color: '#1E88E5',
        gradient: 'linear-gradient(135deg, rgba(30, 136, 229, 0.15), rgba(30, 136, 229, 0.05))',
    },
    {
        icon: <HiOutlineBell />,
        title: 'Price Drop Reminders',
        description: 'Set your target price and get notified the moment it drops. Never miss a deal again.',
        color: '#4CAF50',
        gradient: 'linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(76, 175, 80, 0.05))',
    },
    {
        icon: <HiOutlineLightningBolt />,
        title: 'Deal Notifications',
        description: 'Instant alerts for flash sales, limited-time offers, and exclusive deals across platforms.',
        color: '#AB47BC',
        gradient: 'linear-gradient(135deg, rgba(171, 71, 188, 0.15), rgba(171, 71, 188, 0.05))',
    },
    {
        icon: <IoSparklesOutline />,
        title: 'AI Price Prediction',
        description: 'Our AI analyzes price history to predict when prices will likely drop — so you buy at the perfect time.',
        color: '#00BFA5',
        gradient: 'linear-gradient(135deg, rgba(0, 191, 165, 0.15), rgba(0, 191, 165, 0.05))',
    },
]

const Features = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

    return (
        <section className="features section" id="features" ref={ref}>
            <div className="features__bg-glow" />
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge">✨ Features</span>
                    <h2 className="section-title">
                        Everything you need to <span className="gradient-text">shop smarter</span>
                    </h2>
                    <p className="section-subtitle">
                        One platform to compare, track, and predict — so every purchase is a smart one.
                    </p>
                </motion.div>

                <div className="features__grid">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className="features__card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            style={{ '--card-color': feature.color }}
                        >
                            <div className="features__card-inner">
                                <div className="features__icon" style={{ background: feature.gradient }}>
                                    {feature.icon}
                                </div>
                                <h3 className="features__card-title">{feature.title}</h3>
                                <p className="features__card-desc">{feature.description}</p>
                                <div className="features__card-glow" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
