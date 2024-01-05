import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";
import CartCard from "../../home/header/cart/composant/CartCard";
import { theme } from "../../../assets/theme/theme";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";
import { data } from "../../../assets/data";
import { formatPrice } from "../../../utils/math";

export default function Summary({ set }) {

    const { cart, sum } = useContext(CartContext)

    const sumToPay = sum("price")
    const vat = sumToPay * (20 / 100)
    const total = sumToPay + vat + 50

    return (
        <SummaryStyled>
            <h2 className="title">summary</h2>
            <div className="products">
                {cart && cart.map((product) => {
                    const find = data.find((d) => d.id === product.id)
                    if (find) {
                        return <CartCard
                            key={product.id}
                            id={product.id}
                            image={find.cart}
                            price={find.price}
                            title={find.name}
                            quantity={product.quantity}
                        />
                    }
                })}
            </div>
            <div className="priceField">
                <div className="flex-space">
                    <p>TOTAL</p>
                    <p>{formatPrice(sumToPay)}</p>
                </div>
                <div className="flex-space">
                    <p>SHIPPING</p>
                    <p>50 €</p>
                </div>
                <div className="flex-space">
                    <p>VAT (INCLUDED)</p>
                    <p>{formatPrice(vat)}</p>
                </div>
                <div className="flex-space">
                    <p>GRAND TOTAL</p>
                    <p className="brown">{formatPrice(total)}</p>
                </div>
            </div>
            <Button className="button" label="continue & pay" version={1} onClick={set} />
        </SummaryStyled>
    )
}

const SummaryStyled = styled.section`
    display: grid;
    gap: 32px;
    padding: 32px 28px;
    background-color: white;
    height: fit-content;
    border-radius: ${theme.radius.light};

    .products{
        display: grid;
        gap: 24px;
    }
    .button{
        margin-top: 32px;
        width: 100%;
    }
    .title{
        text-transform: uppercase;
        color: ${theme.colors.black};
        font-weight: ${theme.fonts.weigth.bold};
        font-size: ${theme.fonts.size.font_s3};
        letter-spacing: ${theme.fonts.letterSpacing.char_s3};
    }

    .priceField{
        display: grid;
        gap: 8px;
        & > :last-child{ margin-top: 16px; }
        .flex-space{
            display: flex;
            justify-content: space-between;
            & :first-child{
                font-size: ${theme.fonts.size.font_s2};
                color: ${theme.colors.blackL};
                font-weight: ${theme.fonts.weigth.medium};
                line-height: ${theme.fonts.lineSpace.line_s2};
            }
            & :last-child{
                font-size: ${theme.fonts.size.font_s3};
                color: ${theme.colors.black};
                font-weight: ${theme.fonts.weigth.bold};
            }
            .brown{color: ${theme.colors.brown}; }
        }
    }
  
    @media (min-width: 769px){
        min-width: 290px;
    }
`;
