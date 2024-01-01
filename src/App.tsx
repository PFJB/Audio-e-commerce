import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './composant/pages/productDetail/ProductDetail.tsx'
import CategoryPage from './composant/pages/categorie/CategoryPage'


function App() {

  return (
    <Routes>
      <Route path="/" element={<ProductDetail />} />

      <Route path="/category/:category" element={<CategoryPage />} />


      {/* <Route path="/" element={} />

      {/* <Route path="*" element={<ErrorPage />} /> */}
    </ Routes>
  )
}

export default App
