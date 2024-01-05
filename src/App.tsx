import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './composant/pages/productDetail/ProductDetailPage.tsx'
import CategoryPage from './composant/pages/categorie/CategoryPage'
import Home from './composant/home/Home.tsx'
import { useState } from 'react'
import CartContext from './context/CartContext.tsx'
import CheckoutPage from './composant/pages/checkout/CheckoutPage.tsx'
import { useCart } from './hook/useCart.tsx'
import ErrorPage from './composant/pages/error/ErrorPage.tsx'

function App() {

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const { addToCart, cart, plusMinusCart, resetCart, sum } = useCart()

  const openNav = () => { setIsNavOpen(isNavOpen ? false : true) }
  const openCart = () => { setIsCartOpen(isCartOpen ? false : true) }

  const cartContext = {
    addToCart, plusMinusCart, cart,
    resetCart, isNavOpen, setIsNavOpen,
    isCartOpen, setIsCartOpen, openNav,
    openCart, sum
  }

  return (
    <CartContext.Provider value={cartContext}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product-detail/:slug" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="*" element={<ErrorPage />} />
      </ Routes>
    </CartContext.Provider>
  )
}

export default App