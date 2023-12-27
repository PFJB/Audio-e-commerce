import Home from './assets/composant/home/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'


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
