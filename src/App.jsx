import { useState } from 'react'
import './App.css'
import HeightPractice from "./practice/height_pro"
import HomePage from './pages/HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <HomePage />
    </div>
  )
}

export default App
