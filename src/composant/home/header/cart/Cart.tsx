import styled from "styled-components";
import { theme } from "../../../../assets/theme/theme";
import CartFooter from "./composant/CartFooter";
import CartProduct from "./composant/CartProduct";
import CartHeader from "./composant/CartHeader";

export default function Cart() {
    return (
        <CartStyled>
            <CartHeader />
            <CartProduct />
            <CartFooter />
        </CartStyled>
    )
}

const CartStyled = styled.div`

    position: absolute;
    width: min(100%, 377px);
    z-index: 5;
    border-radius: ${theme.radius.light};
    background-color: white;
    top: 130%;
    right: 0;
    padding: 32px 28px ;
    border: 1px solid black;
`;