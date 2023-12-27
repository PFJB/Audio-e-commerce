import styled from "styled-components";
import { theme } from "../../theme/theme";
import { FaChevronRight } from "react-icons/fa6";

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
                <div className="shop">
                    <p>shop</p><div><FaChevronRight /></div>
                </div>
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
    padding-bottom: 22px;
    width: 100%;
    height: 217px;

    img{
        position: absolute;
        top: 0;
        aspect-ratio: 1/1;
        width: auto;
        height: 60%;
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
        gap: 17px;
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
        .shop{
            display: flex;
            color: ${theme.colors.blackL};
            font-size: ${theme.fonts.size.font_s0};
            div{
                display: grid;
                place-content: center;
                font-size: 0.625rem;
                margin-left: 0.5rem;
                color: ${theme.colors.brown};
            }
        }
    }

    &:hover  .shop{
        color: ${theme.colors.brown};
    }
`;
