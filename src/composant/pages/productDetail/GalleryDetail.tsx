import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";

type trois = {
    mobile: string,
    tablet: string,
    desktop: string,
}

type picture = {
    first: trois,
    second: trois,
    third: trois
}

export default function GalleryDetail({ first, second, third }: picture) {
    return (
        <GalleryDetailStyled>
            <picture className="first">
                <source media="(min-width: 48.0625rem)" srcSet={first.desktop} />
                <source media="(min-width: 26.8125rem)" srcSet={first.tablet} />
                <img src={first.mobile} alt="gallery one" />
            </picture>
            <picture className="second">
                <source media="(min-width: 48.0625rem)" srcSet={second.desktop} />
                <source media="(min-width: 26.8125rem)" srcSet={second.tablet} />
                <img src={second.mobile} alt="gallery two" />
            </picture>
            <picture className="third">
                <source media="(min-width: 48.0625rem)" srcSet={third.desktop} />
                <source media="(min-width: 26.8125rem)" srcSet={third.tablet} />
                <img src={third.mobile} alt="gallery three" />
            </picture>
        </GalleryDetailStyled>
    )
}


const GalleryDetailStyled = styled.section`
    display: grid;
    row-gap: 1.25rem;
    column-gap: clamp(0.625rem, 0.2rem + 2.5vw, 1.875rem);
    picture{
        object-fit: contain;
    }
    img{
        width: 100%;
        height: 100%;
        border-radius:${theme.radius.light};
    }

    @media screen and (min-width: 429px) {
        grid-template-columns: 1.5fr 2fr;
        grid-template-rows: 1fr 1fr;
        row-gap: clamp(10px, 0.05rem + 2.7vw, 32px);

        .first{ grid-area: auto / span 1; }
        .second{ grid-area: 2 / 1 / 3 / 2; }
        .third{ grid-area: 1 / 2 / 3 / 3; }
    }
`;