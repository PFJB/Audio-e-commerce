import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";
import { theme } from "../../../assets/theme/theme";
import CartCard from "./CartCard";

export default function Cart() {
    return (
        <CartStyled>
            <div className="header">
                <p>{"cart (1)"}</p>
                <button>remove all</button>
            </div>
            <div className="cart_product">
                <CartCard />
                <CartCard />
                <CartCard />
            </div>
            <div className="">
                <div className="price_cart">
                    <p className="total">total</p>
                    <p className="number">1684.12$</p>
                </div>
                <Button className="button" label="checkout" version={1} />
            </div>

        </CartStyled>
    )
}


const CartStyled = styled.div`

    position: absolute;
    width: min(100%, 377px);
    z-index: 5;
    background-color: white;
    top: 100%;
    right: 0;
    padding: 32px 28px ;
    border: 1px solid black;

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        p{
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
            cursor: pointer;
            color: ${theme.colors.blackL};
            font-size: ${theme.fonts.size.font_s2};
            line-height: ${theme.fonts.lineSpace.line_s2};
            font-weight: ${theme.fonts.weigth.medium};
            &:hover, &:focus{ color: ${theme.colors.brown}; }
        }
    }

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

    .cart_product{
        display: grid;
        gap: 24px;
        margin: 32px 0;
    }

    .button{
        width: 100%;
    }
`;
