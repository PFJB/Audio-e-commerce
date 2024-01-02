import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './composant/pages/productDetail/ProductDetailPage.tsx'
import CategoryPage from './composant/pages/categorie/CategoryPage'
import Home from './composant/home/Home.tsx'
import { useState } from 'react'
import { deepCopyArray } from './utils/arrays.tsx'
import CartContext from './context/CartContext.tsx'


function App() {

  const [cart, setCart] = useState([])
  const addToCart = (id, quantity, price) => {
    const copy = deepCopyArray(cart)
    const alreadyInCart = copy.find((product) => product.id === id)

    if (alreadyInCart) {
      alreadyInCart.quantity += quantity
      setCart(copy)
      return
    }
    const newProduct = { id: id, quantity: quantity, price: price }
    copy.push(newProduct)
    setCart(copy)
  }

  const delToCart = () => {
  }
  const resetCart = () => { setCart([]) }

  const cartContext = { addToCart, delToCart, cart, setCart, resetCart }
  return (
    <CartContext.Provider value={cartContext}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product-detail/:slug" element={<ProductDetail />} />
        {/* <Route path="/" element={} />

      {/* <Route path="*" element={<ErrorPage />} /> */}
      </ Routes>
    </CartContext.Provider>
  )
}

export default App
