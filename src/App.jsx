import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
