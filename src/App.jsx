import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import PainBar from './components/PainBar'
import Pillars from './components/Pillars'
import About from './components/About'
import Security from './components/Security'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <PainBar />
        <Pillars />
        <About />
        <Security />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
