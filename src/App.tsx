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

  const plusMinusCart = (id: number, type: "minus" | "plus") => {
    const copy = deepCopyArray(cart)
    const copyProduct = copy.find((product) => product.id === id)
    type === "plus" ? copyProduct.quantity += 1 : copyProduct.quantity -= 1

    if (copyProduct.quantity <= 0) {
      const index = copy.findIndex((product) => product.id === id)
      copy.splice(index, 1)
    }
    setCart(copy)
  }

  const resetCart = () => { setCart([]) }


  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const openNav = () => { setIsNavOpen(isNavOpen ? false : true) }
  const openCart = () => { setIsCartOpen(isCartOpen ? false : true) }


  const cartContext = {
    addToCart, plusMinusCart, cart, setCart, resetCart, isNavOpen, setIsNavOpen,
    isCartOpen, setIsCartOpen, openNav, openCart
  }
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
