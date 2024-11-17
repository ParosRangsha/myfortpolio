import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './assets/components/banner/Banner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
    </>
  )
}

export default App
