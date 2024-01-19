import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";
import LinkButton from "../../../reusable-ui/button/LinkButton";
import { HOME_PRESENTATION_SPEAKER_DESKTOP, HOME_PRESENTATION_SPEAKER_MOBILE, HOME_PRESENTATION_SPEAKER_TABLET } from "../../../enums/product";

export default function HeaderContent() {
    return (
        <HeaderContentStyled>

            <div className="image">

                <svg className="dd" viewBox="0 0 944 944" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fillRule="evenodd" opacity="0.3"><circle cx="472" cy="472" r="235.5" /><circle cx="472" cy="472" r="270.5" /><circle cx="472" cy="472" r="471.5" /></g></svg>
                <picture>
                    <source media="(min-width: 1024px)" srcSet={HOME_PRESENTATION_SPEAKER_DESKTOP} />
                    <source media="(min-width: 769px)" srcSet={HOME_PRESENTATION_SPEAKER_TABLET} />
                    <img src={HOME_PRESENTATION_SPEAKER_MOBILE} alt={"zx9 speaker"} />
                </picture>


            </div>

            <div className="description">
                <h2 className="title">{"ZX9 SPEAKER"}</h2>
                <p className="text">{"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."}</p>
                <LinkButton className="button" label="see product" version={2} destination={"/product-detail/zx9-speaker"} />
            </div>


        </HeaderContentStyled>
    )
}


const HeaderContentStyled = styled.div`

    display: grid;
    grid-template-rows: auto auto;
    grid-column: 1fr;
    position: relative;
    width: 100%;
    row-gap: 32px;
    background-color: #D87D4A;
    padding:52px 0 64px 0 ;
    overflow: hidden;
    .image{
        display: grid;
        position: relative;
        width: 100%;
        height: 40vw;
        
            .dd{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
            }
            
        picture{
            display: grid;
            place-content: center;
            position: relative;
        }
        
        img{
            aspect-ratio: 198/237;
                height: auto;
                width: 30vw;
                max-width: 197px;
            }
    }
    .description{
        display: grid;
        place-content: center;
        place-items: center;
        text-align: center;
  
        .title{
            color: ${theme.colors.white};
            font-weight: ${theme.fonts.weigth.bold};
            font-size: ${theme.fonts.size.font_s5};
            letter-spacing: ${theme.fonts.letterSpacing.char_s0};
            margin-bottom: 24px;

        }
        .text{
            color: #ffffffab;
            font-weight: ${theme.fonts.weigth.medium};
            font-size: ${theme.fonts.size.font_s2};
            line-height: ${theme.fonts.lineSpace.line_s2};
            margin-bottom: 24px;
            width: 80%;
        }
        .button{
            position: relative;
            z-index: 2;
        }

    }
    @media screen and (min-width: 426px) {
        row-gap: 52px;

        .description{
            .ad{
                margin-bottom: 16px;
            }
            .title{
                margin-bottom: 32px;
            }
        }
    }

    @media screen and (min-width: 769px) {
    	grid-template-columns: 1.3fr 1fr;
        grid-template-rows: auto;
        gap: 100px;
    padding:0 ;

            
    .image{
        display: grid;
        position: relative;
        width: 100%;
        height: 560px;
        max-height: 560px;
            .dd{
             bottom: -40%;
            right: -300px;
            left: auto;
            top: auto;
                width: auto;
                transform: none;
                width: 1000px;
            }
        img{
            position: absolute;
            bottom: -5%;
            right: 0;


                width: 390px;
                max-width: 390px;
            }
    }
    .description{
        place-items: start;
        text-align: start;
    }
}
`;