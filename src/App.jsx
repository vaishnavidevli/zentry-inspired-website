import { useState } from 'react'
import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative min-h-screen w-screen overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features />
      <Story />
      <Footer />
    </main>
  )
}

export default App


