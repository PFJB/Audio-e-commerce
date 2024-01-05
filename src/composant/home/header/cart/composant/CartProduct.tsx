import styled from "styled-components";
import CartCard from "./CartCard";
import { data } from "../../../../../assets/data";
import { useContext } from "react";
import CartContext from "../../../../../context/CartContext";

export default function CartProduct() {

    const { cart } = useContext(CartContext)

    return (
        <CartProductStyled>
            {cart && cart.map((product) => {
                const find = data.find((d) => d.id === product.id)
                if (find) {
                    return <CartCard
                        key={product.id}
                        id={product.id}
                        image={find.cart}
                        price={find.price ?? 0}
                        title={find.name}
                        quantity={product.quantity}
                        button
                    />
                }
            })}
        </CartProductStyled>
    )
}

const CartProductStyled = styled.div`
   
    display: grid;
    gap: 24px;
    margin: 32px 0;
`;