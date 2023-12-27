import styled from "styled-components";
import { theme } from "../../theme/theme";

export default function Card() {
    return (
        <CardStyled>
            <div className="background"></div>
            <img src="../../../../public/images/shared/desktop/image-category-thumbnail-headphones.png" alt="" />
            <div className="description">
                <p >Headphone</p>
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
