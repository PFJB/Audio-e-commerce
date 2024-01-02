import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";

export default function CartCard() {
    return (
        <CartCardStyled>
            <div className="picture">q</div>
            <div className="description">
                <div className="title">dzsefsefq</div>
                <p className="price">qzd</p>
            </div>
            <div className="d"></div>


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
        background-color: aliceblue;
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
