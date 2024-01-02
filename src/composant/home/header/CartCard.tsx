import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";

type cart = {
    id: number,
    title: string,
    price: string,
    quantity: number,
    image: string
}

export default function CartCard({ title, price, quantity, image, id }: cart) {

    const { plusMinusCart } = useContext(CartContext)

    return (
        <CartCardStyled>
            <div className="picture"><img src={image} alt="" /></div>
            <div className="description">
                <div className="title">{title}</div>
                <p className="price">{price}</p>
            </div>
            <div className="plus_minus">
                <button onClick={() => plusMinusCart(id, "minus")} >-</button>
                <div>{quantity}</div>
                <button onClick={() => plusMinusCart(id, "plus")} > +</button>
            </div>


        </CartCardStyled >
    )
}

const CartCardStyled = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 16px;
    row-gap: 10px;
    min-height: 64px;
    .picture{
        aspect-ratio: 1 / 1;
        width: 64px;
        height: 64px;
        object-fit: contain;
        img{
            border-radius: ${theme.radius.light};
            height: auto;
            width: 100%;
        }
    }
    .d{
        place-self: center;
        width: 96px;
        height: 32px;
        background-color: aquamarine;
    }

    .description{
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        .title{
            color: ${theme.colors.black};
            font-size: ${theme.fonts.size.font_s2};
            font-weight: ${theme.fonts.weigth.bold};
        }
        .price{
            color: ${theme.colors.blackL};
            font-size: ${theme.fonts.size.font_s1};
            font-weight: ${theme.fonts.weigth.bold};
        }
        
    }
.plus_minus{
        display: grid;
        grid-template-columns: 1fr 0.5fr 1fr;
        place-self: center;
        width: 96px;
        height: 32px;
        background-color: ${theme.colors.grey};
        font-size: ${theme.fonts.size.font_s0};

        div{
            display: grid;
            place-content: center;
            color: ${theme.colors.black};
            font-weight: ${theme.fonts.weigth.bold};

        }
        button{
            display: grid;
            place-content: center;
            background: none;
            border: none;
            grid-area: auto / span 1;
            color: #00000082;
            font-weight: ${theme.fonts.weigth.bold};

            &:hover{color: ${theme.colors.brown};}
            cursor: pointer;
        }
    }
    @media screen and (max-width: 350px) {
        grid-template-columns: auto 1fr;
        grid-row: auto auto;
    }
`;
