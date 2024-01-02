import { createContext } from "react";

const CartContext = createContext({
    addToCart: () => { },
    plusMinusCart: () => { },
    cart: [],
    setCart: () => { },
    resetCart: () => { },
    isNavOpen: false,
    setIsNavOpen: () => { },
    isCartOpen: false,
    setIsCartOpen: () => { },
    openNav: () => { },
    openCart: () => { }
})

export default CartContext