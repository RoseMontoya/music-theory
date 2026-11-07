import { useState } from 'react'
import { KeyOfTheWeek } from './keyOfTheWeek/KeyOfTheWeek'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <KeyOfTheWeek />
    </div>
  )
}

export default App
