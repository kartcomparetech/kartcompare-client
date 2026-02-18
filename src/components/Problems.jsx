import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineShoppingCart, HiOutlineClock, HiOutlineTrendingDown, HiOutlineEmojiSad } from 'react-icons/hi'
import './Problems.css'

const painPoints = [
    {
        icon: <HiOutlineShoppingCart />,
        title: 'Endless Tab Switching',
        description: 'Jumping between Amazon, Flipkart, and other stores just to compare a single product\'s price.',
    },
    {
        icon: <HiOutlineClock />,
        title: 'Missing Flash Deals',
        description: 'Limited-time offers disappear before you even know they existed. Timing is everything.',
    },
    {
        icon: <HiOutlineTrendingDown />,
        title: 'Buying at the Wrong Time',
        description: 'You buy today, the price drops tomorrow. Without data, you\'re always guessing.',
    },
    {
        icon: <HiOutlineEmojiSad />,
        title: 'No Smart Tracking',
        description: 'Wishlists don\'t track prices. There\'s no tool watching out for your wallet 24/7.',
    },
]

const Problems = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="problems section" id="problems" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge">The Problem</span>
                    <h2 className="section-title">
                        Online shopping is <span className="gradient-text">broken</span>
                    </h2>
                    <p className="section-subtitle">
                        You're leaving money on the table every time you shop online. Sound familiar?
                    </p>
                </motion.div>

                <div className="problems__grid">
                    {painPoints.map((point, i) => (
                        <motion.div
                            key={point.title}
                            className="problems__card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 * i }}
                        >
                            <div className="problems__icon">{point.icon}</div>
                            <h3 className="problems__card-title">{point.title}</h3>
                            <p className="problems__card-desc">{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Problems
