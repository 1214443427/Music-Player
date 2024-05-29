import { useState } from 'react'
import './App.css'
import Music from './assets/components/Music'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Music />
    </>
  )
}

export default App
