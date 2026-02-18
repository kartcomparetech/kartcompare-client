import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import EarlyAccess from './components/EarlyAccess'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Problems />
                <Features />
                <HowItWorks />
                <EarlyAccess />
            </main>
            <Footer />
        </>
    )
}

export default App
