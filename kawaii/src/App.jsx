import { useState } from 'react'
import './index.css'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative min-h-screen w-screen overflow-hidden'>
      <Hero/>
    </main>
  )
}

export default App
