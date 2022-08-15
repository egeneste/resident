import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Location from './components/Location';

function App() {
  const randomNumber = Math.floor(Math.random() * 125) + 1
  console.log(randomNumber);
  return (
    <div className="App">
      <img className='banner' src="https://rickandmortyapi.com/api/character/avatar/400.jpeg" alt="banner" />
      <Location locationNumber={randomNumber}/>
    </div>
  )
}

export default App
