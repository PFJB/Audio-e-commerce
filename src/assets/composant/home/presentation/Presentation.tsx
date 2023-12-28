import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function Presentation() {

    const [image, setImage] = useState("/images/shared/mobile/image-best-gear.jpg")

    const GetImageUrl = () => {
        const largeur = window.innerWidth
        if (largeur <= 425) setImage("/images/shared/mobile/image-best-gear.jpg")
        if (largeur > 425 && largeur <= 768) setImage("/images/shared/tablet/image-best-gear.jpg")
        if (largeur > 768) setImage("/images/shared/desktop/image-best-gear.jpg")
    }

    window.onresize = GetImageUrl

    return (
        <PresentationStyled>
            <div className="picture"><img src={image} alt="men with a headphone" /></div>
            <div className="text">
                <h2>Bringing you the <span>best</span> audio gear</h2>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                    available for you to browse and experience a wide range of our products. Stop by our store to meet
                    some of the fantastic people who make Audiophile the best place to buy your portable audio
                    equipment.
                </p>
            </div>
        </PresentationStyled>
    )
}

const PresentationStyled = styled.section`
  
display: grid;
text-align: center;
width: 100%;
height: fit-content;
row-gap: 2.5rem;
column-gap: 1.875rem;

    .picture{
        width: 100%;
        object-fit: cover;
        img{
            border-radius: ${theme.radius.light};
            width: 100%;
        }
    }

    .text{
        height: 100%;
        display: grid;
        place-content: center;
        gap: 2rem;
        h2{
            text-transform: uppercase;
            color: ${theme.colors.black};
            font-weight: ${theme.fonts.weigth.bold};
            font-size: ${theme.fonts.size.font_s5};
            line-height: ${theme.fonts.lineSpace.line_s6};
            letter-spacing: ${theme.fonts.letterSpacing.char_s0};
            span { color: ${theme.colors.brown};}
        }
        p{
            color: ${theme.colors.blackL};
            font-weight: ${theme.fonts.weigth.medium};
            font-size: ${theme.fonts.size.font_s2};
            line-height: ${theme.fonts.lineSpace.line_s2};

        }
    }
@media screen and (min-width: 469px) {
    .text{
        padding-inline: 4rem;
        h2{
            font-size: ${theme.fonts.size.font_s7};
            letter-spacing: ${theme.fonts.letterSpacing.char_s5};

        }
    }
}

@media screen and (min-width: 769px) {

    grid-template-columns: 1fr 1fr;
    text-align: start;
    .picture{
        order: 1;
    }
    .text{
        padding-inline: 0;
        max-width: 26.5625rem;
        h2{
            line-height: clamp(1rem , 4vw ,${theme.fonts.lineSpace.line_s6});
            font-size: clamp(1rem , 4vw ,${theme.fonts.size.font_s7});
        }
            
        p{
            line-height: clamp(1rem , 2.5vw ,${theme.fonts.lineSpace.line_s2});
            font-size: clamp(0.4rem , 1.5vw ,${theme.fonts.size.font_s2});
        }
    }
    
}  

`;
