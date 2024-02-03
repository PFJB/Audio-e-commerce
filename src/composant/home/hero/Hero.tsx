import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";
import LinkButton from "../../../reusable-ui/button/LinkButton";

export default function Hero() {
    return (
        <HeroStyled>
            <div className="container">
                <picture className="pic">
                    <source media="(min-width: 769px)" srcSet={"images/home/desktop/image-hero.jpg"} />
                    <source media="(min-width: 429px)" srcSet={"images/home/tablet/image-header.jpg"} />
                    <img src={"images/home/mobile/image-header.jpg"} alt={"image header"} />
                </picture>
                <div className="description">
                    <p className="ad">NEW PRODUCT</p>
                    <h2 className="title">ef</h2>
                    <p className="text">ef</p>
                    <LinkButton label={"gg"} version={1} destination={"/"} />
                </div>
            </div>
        </HeroStyled>
    )
}

const HeroStyled = styled.section`
display: grid;
width: 100%;
place-content: center;
.container {
    position: relative;
    width: 100%;
    max-width: 1110px;
    .pic{
    width: 100%;
    height: auto;
    object-fit: contain;

    img{
        width: 100%;
        height: auto;
    }
}
  .description{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    display: grid;
    place-content: center;
    place-items: center;
    text-align: center;
    .ad{
        color: ${theme.colors.brown};
        font-weight: ${theme.fonts.weigth.regular};
        font-size: ${theme.fonts.size.font_s1};
        letter-spacing: ${theme.fonts.letterSpacing.char_s6};
        margin-bottom: 24px;
    }
    .title{
        color: ${theme.colors.black};
        font-weight: ${theme.fonts.weigth.bold};
        font-size: ${theme.fonts.size.font_s5};
        letter-spacing: ${theme.fonts.letterSpacing.char_s0};
        margin-bottom: 24px;

    }
    .text{
        color: ${theme.colors.blackL};
        font-weight: ${theme.fonts.weigth.medium};
        font-size: ${theme.fonts.size.font_s2};
        line-height: ${theme.fonts.lineSpace.line_s2};
        margin-bottom: 24px;

    }

}}
`;
