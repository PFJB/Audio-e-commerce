import styled from "styled-components";
import { theme } from "../../../../assets/theme/theme";

export default function TitleCategorie({ title }: { title: string }) {
    return (
        <TitleCategorieStyled>
            {title}
        </TitleCategorieStyled>
    )
}

const TitleCategorieStyled = styled.section`
    display: grid;
    place-content: center;
    height: clamp(100px, 2rem + 15vw, 246px);
    width: 100%;
    margin-bottom: 64px;
    background-color: black;
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: clamp(${theme.fonts.size.font_s5}, 7.5vw,${theme.fonts.size.font_s7});
    letter-spacing: ${theme.fonts.letterSpacing.char_s5};
    line-height: ${theme.fonts.lineSpace.line_s6};
    font-weight: ${theme.fonts.weigth.bold};

    @media screen and (min-width: 34.375rem) {letter-spacing:${theme.fonts.letterSpacing.char_s3};}
`;
