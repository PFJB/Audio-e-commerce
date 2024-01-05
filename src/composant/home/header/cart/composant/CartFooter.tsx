import styled from "styled-components";
import Button from "../../../../../reusable-ui/button/Button";
import { formatPrice } from "../../../../../utils/math";
import { theme } from "../../../../../assets/theme/theme";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../../../../context/CartContext";

export default function CartFooter() {

    const navigate = useNavigate()
    const { setIsCartOpen, sum } = useContext(CartContext)

    return (
        <CartFooterStyled>
            <div className="price_cart">
                <p className="total">total</p>
                <p className="number">{formatPrice(sum("price"))}</p>
            </div>
            <Button
                className="button"
                label="checkout"
                version={1}
                onClick={() => {
                    setIsCartOpen(false)
                    navigate("/checkout")
                }} />
        </CartFooterStyled>
    )
}

const CartFooterStyled = styled.div`

        .price_cart{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 24px;

        .number{
            text-transform: uppercase;
            color: ${theme.colors.black};
            font-size: ${theme.fonts.size.font_s3};
            font-weight: ${theme.fonts.weigth.bold};
        }
        .total{
            text-transform: uppercase;
            color: ${theme.colors.blackL};
            font-size: ${theme.fonts.size.font_s2};
            line-height: ${theme.fonts.lineSpace.line_s2};
            font-weight: ${theme.fonts.weigth.medium};
        }
    }
    
    .button{ width: 100%; }
`;