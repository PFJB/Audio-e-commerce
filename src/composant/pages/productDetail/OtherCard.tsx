import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";
import { theme } from "../../../assets/theme/theme";

export default function OtherCard() {
    return (
        <OtherCardStyled>
            <picture>
                <source media="(min-width: 769px)" srcSet="\images\shared\desktop\image-zx7-speaker.jpg" />
                <source media="(min-width: 600px)" srcSet="\images\shared\tablet\image-zx7-speaker.jpg" />
                <img src="\images\shared\mobile\image-zx7-speaker.jpg" alt="" /></picture>
            <div className="description">
                <p>ZX9 SPEAKER</p>
                <Button label='see product' version={1} />
            </div>
        </OtherCardStyled>
    )
}

const OtherCardStyled = styled.div`

    display: grid;
    width: 100%;
    gap: clamp(25px, 5vw ,40px);

    
    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 32px;
      
        letter-spacing: ${theme.fonts.letterSpacing.char_s4};
        font-size: ${theme.fonts.size.font_s4};
        color: ${theme.colors.black};
        p{ font-weight: ${theme.fonts.weigth.bold};
}
    }
        picture{
        width: 100%;
        object-fit: contain;
        img{
            width: 100%;
            height: auto;
        }
    }
    
`;
