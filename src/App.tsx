import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './composant/home/Home'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={} />

      {/* <Route path="*" element={<ErrorPage />} /> */}
    </ Routes>
  )
}

export default App
