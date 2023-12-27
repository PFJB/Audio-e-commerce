import styled from "styled-components";
import { theme } from "../../theme/theme";

interface card_props {
    picture: string,
    title: string
}

export default function Card({ picture, title }: card_props) {
    return (
        <CardStyled>
            <div className="background"></div>
            <img src={picture} alt="" />
            <div className="description">
                <p >{title}</p>
                <p >blabla</p>
            </div>

        </CardStyled>
    )
}

const CardStyled = styled.div`

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
        gap: 17px;
        place-items: center;
        z-index: 2;
    }

`;
