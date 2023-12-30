import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './composant/home/Home'
import CategoryPage from './composant/pages/categorie/Categorie/CategoryPage'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/category/:category" element={<CategoryPage />} />


      {/* <Route path="/" element={} />

      {/* <Route path="*" element={<ErrorPage />} /> */}
    </ Routes>
  )
}

export default App
