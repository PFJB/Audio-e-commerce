import styled from "styled-components";
import { theme } from "../../../theme/theme";
import Button from "../../../../reusable-ui/button/Button";

interface card_props {
    picture: string,
    title: string
}

export default function Card({ picture, title }: card_props) {
    return (
        <CardStyled href={"/"}>
            <div className="background"></div>
            <img src={picture} alt="" />
            <div className="description">
                <p className="title">{title}</p>
                <Button className="button" label="shop" version={3} />
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.a`

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding-bottom: 0.5rem;
    width: 100%;
    height: 13.5625rem;

    img{
        position: absolute;
        top: 0;
        aspect-ratio: 1/1;
        width: auto;
        height: 65%;
        z-index: 2;
    }

    .background{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 76%;
        background-color: ${theme.colors.grey};
        border-radius: ${theme.radius.light};
    }
    .description{
        position: relative;
        display: grid;
        place-items: center;
        gap: 1.0625rem;
        z-index: 2;

        *  {
            text-transform: uppercase;
            letter-spacing: ${theme.fonts.letterSpacing.char_s0};
            font-weight: ${theme.fonts.weigth.bold};
        }
        .title{
            color: ${theme.colors.black};
            font-size: ${theme.fonts.size.font_s2};
        }

    }

    &:hover  .button{
        color: ${theme.colors.brown};
    }
`;
