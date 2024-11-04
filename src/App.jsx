import { useState } from 'react'
import './App.css'
import Sidebar from './assets/components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "pageContainer">
      <Sidebar/>
    </div>
  )

}

export default App
