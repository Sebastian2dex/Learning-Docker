import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessge] = useState("")

  useEffect( () =>  {
    fetch("http://127.0.0.1:12345/api/message")
    .then((res) => res.json())
    .then((data) => setMessge(data.message))
  }, [])

  return (
    <>
      <h1>Hello World!!</h1>
      <p>
        Fetched: { message }
      </p>
    </>
  )
}

export default App
