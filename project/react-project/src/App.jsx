import { useState } from 'react'
import './App.css'
// import AboutUs from "./AboutUs";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MoviesList from "./Movies/MoviesList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AboutUs /> */}

        <h1>Click to load movies</h1>
        <MoviesList />
    </>
  )
}

export default App
