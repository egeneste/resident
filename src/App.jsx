import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Location from './components/Location';

function App() {
  const randomNumber = Math.floor(Math.random() * 125) + 1
  console.log(randomNumber);
  return (
    <div className="App">
      <Location locationNumber={randomNumber}/>
    </div>
  )
}

export default App
