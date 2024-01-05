import styled from "styled-components";
import { theme } from "../../../../../assets/theme/theme";
import { useContext } from "react";
import CartContext from "../../../../../context/CartContext";

export default function CartHeader() {

    const { resetCart, sum } = useContext(CartContext)

    return (
        <CartHeaderStyled>
            <p className="quantity_header">cart ({sum("quantity")})</p>
            <button onClick={resetCart}>remove all</button>
        </CartHeaderStyled>
    )
}

const CartHeaderStyled = styled.div`
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    .quantity_header{
        text-transform: uppercase;
        color: ${theme.colors.black};
        font-size: ${theme.fonts.size.font_s3};
        font-weight: ${theme.fonts.weigth.bold};
        letter-spacing: ${theme.fonts.letterSpacing.char_s2};
    }

    button{
        border: none;
        background: none;
        padding: 0;
        text-decoration: underline;
        text-transform: capitalize;
        cursor: pointer;
        color: ${theme.colors.blackL};
        font-size: ${theme.fonts.size.font_s2};
        line-height: ${theme.fonts.lineSpace.line_s2};
        font-weight: ${theme.fonts.weigth.medium};
        &:hover, &:focus{ color: ${theme.colors.brown}; }
    }
`;