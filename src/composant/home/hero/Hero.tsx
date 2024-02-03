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
                    <h2 className="title">XX99 Mark II HeadphoneS</h2>
                    <p className="text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <LinkButton label={"See Product"} version={1} destination={"/"} />
                </div>
            </div>
        </HeroStyled>
    )
}

const HeroStyled = styled.section`
display: grid;
position: relative;
width: 100%;
place-content: center;
background-color: #191919;
margin-bottom: 15px;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50% );
    display: grid;
    width: 80%;
    place-content: center;
    place-items: center;
    text-align: center;
    .ad{
        color: ${theme.colors.white50};
        font-weight: ${theme.fonts.weigth.regular};
        font-size: ${theme.fonts.size.font_s1};
        letter-spacing: ${theme.fonts.letterSpacing.char_s6};
        margin-bottom: 24px;
    }
    .title{
        text-transform: uppercase;
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.weigth.bold};
        font-size: ${theme.fonts.size.font_s5};
        letter-spacing: ${theme.fonts.letterSpacing.char_s0};
        margin-bottom: 24px;

    }
    .text{
        color: hsla(0, 0%, 100%, 0.75);
        font-weight: ${theme.fonts.weigth.medium};
        font-size: ${theme.fonts.size.font_s2};
        line-height: ${theme.fonts.lineSpace.line_s2};
        margin-bottom: 24px;

    }

}}



@media screen and (min-width: 426px) {

margin-bottom: 70px;
    .container{
        .description{
        max-width: 379px;
    }
    }
    
}

@media screen and (min-width: 769px) {

    margin-bottom: 100px;
    .container{
        .description{
        max-width: 379px;

        padding-left: 50px;
        place-items: start;
        text-align: start;
        left: auto;
        transform: translate(0%, -50%);


        .title{
        text-transform: uppercase;
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.weigth.bold};
        font-size: ${theme.fonts.size.font_s8};
        letter-spacing: ${theme.fonts.letterSpacing.char_s0};
        margin-bottom: 24px;

    }
    }
    }
    
}
`;
