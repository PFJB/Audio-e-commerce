import { useState } from "react"
import { deepCopyArray } from "../utils/arrays"
import { cart_type } from "../type/type"

export function useCart() {

    const [cart, setCart] = useState<cart_type[]>([],)

    const addToCart = (id: number, quantity: number, price: number) => {
        const copy = deepCopyArray(cart)
        const alreadyInCart = copy.find((product: cart_type) => product.id === id)

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
        const copyProduct = copy.find((product: cart_type) => product.id === id)
        type === "plus" ? copyProduct.quantity += 1 : copyProduct.quantity -= 1

        if (copyProduct.quantity <= 0) {
            const index = copy.findIndex((product: cart_type) => product.id === id)
            copy.splice(index, 1)
        }
        setCart(copy)
    }

    const sum = (type: "quantity" | "price") => {
        let sum = 0
        cart.map((product) => {
            if (type === "quantity") sum += product.quantity
            if (type === "price") sum += product.price * product.quantity
        })
        return sum
    }

    const resetCart = () => { setCart([]) }

    return { cart, plusMinusCart, addToCart, resetCart, sum }
}