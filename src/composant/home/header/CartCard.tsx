import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";

type cart = {
    title: string,
    price: string,
    quantity: number,
    image: string
}

export default function CartCard({ title, price, quantity, image }: cart) {
    return (
        <CartCardStyled>
            <div className="picture"><img src={image} alt="" /></div>
            <div className="description">
                <div className="title">{title}</div>
                <p className="price">{price}</p>
            </div>
            <div className="d">{quantity}</div>


        </CartCardStyled>
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

    @media screen and (max-width: 350px) {
        grid-template-columns: auto 1fr;
        grid-row: auto auto;
        .d{
            place-self: auto;
            grid-area: auto / span 2;
        }
    }
`;
