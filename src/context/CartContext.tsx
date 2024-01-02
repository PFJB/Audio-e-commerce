import { createContext } from "react";

const CartContext = createContext({
    addToCart: () => { },
    delToCart: () => { },
    cart: [],
    setCart: () => { },
    resetCart: () => { },
})

export default CartContext