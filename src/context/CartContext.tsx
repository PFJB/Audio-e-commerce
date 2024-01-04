import { createContext } from "react";
import { cart_type } from "../type/type";

interface cart {
    sum: (type: "price" | "quantity") => number,
    addToCart: (id: number, quantity: number, price: number) => void,
    plusMinusCart: (id: number, type: "minus" | "plus") => void,
    cart: cart_type[],
    resetCart: () => void,
    isNavOpen: boolean,
    setIsNavOpen: (arg: boolean) => void,
    isCartOpen: boolean,
    setIsCartOpen: (arg: boolean) => void,
    openNav: () => void,
    openCart: () => void,
}

const CartContext = createContext<cart>(
    {} as cart
)

export default CartContext