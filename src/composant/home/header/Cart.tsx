import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";
import { theme } from "../../../assets/theme/theme";
import CartCard from "./CartCard";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";
import { data } from "../../../assets/data";
import { formatPrice } from "../../../utils/math";
import { useNavigate } from "react-router-dom";

export default function Cart() {

    const { cart, resetCart, setIsCartOpen, sum } = useContext(CartContext)
    const navigate = useNavigate()

    return (
        <CartStyled>
            <div className="header">
                <p className="quantity_header">cart ({sum("quantity")})</p>
                <button onClick={resetCart}>remove all</button>
            </div>
            <div className="cart_product">
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
            </div>
            <div>
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
            </div>

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

    .header{
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
