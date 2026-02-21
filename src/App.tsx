import { useState } from 'react'
import './App.css'
import GetCandidateData from './components/GetCandidateData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="h1-custom">Nimble Gravity React Challenge</h1>
        <GetCandidateData></GetCandidateData>
      </div>
      
    </>
  )
}

export default App
