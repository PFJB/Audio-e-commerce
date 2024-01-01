import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './composant/pages/productDetail/ProductDetailPage.tsx'
import CategoryPage from './composant/pages/categorie/CategoryPage'
import Home from './composant/home/Home.tsx'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/product-detail/:slug" element={<ProductDetail />} />


      {/* <Route path="/" element={} />

      {/* <Route path="*" element={<ErrorPage />} /> */}
    </ Routes>
  )
}

export default App
