import styled from 'styled-components';
import Button from '../../../reusable-ui/button/Button';
import { theme } from '../../../assets/theme/theme';

export default function OtherChoice() {
    return (
        <OtherChoiceStyled>
            <p className='header'>you may also like</p>
            <div className='other-card'>
                <picture>
                    <source media="(min-width: 769px)" srcSet="\images\shared\desktop\image-zx7-speaker.jpg" />
                    <source media="(min-width: 600px)" srcSet="\images\shared\tablet\image-zx7-speaker.jpg" />
                    <img src="\images\shared\mobile\image-zx7-speaker.jpg" alt="" /></picture>
                <div className="description">
                    <h3>ZX9 SPEAKER</h3>
                    <Button label='see product' version={1} />
                </div>
            </div>

            <div className='other-card'>
                <picture>
                    <source media="(min-width: 769px)" srcSet="\images\shared\desktop\image-zx7-speaker.jpg" />
                    <source media="(min-width: 600px)" srcSet="\images\shared\tablet\image-zx7-speaker.jpg" />
                    <img src="\images\shared\mobile\image-zx7-speaker.jpg" alt="" /></picture>
                <div className="description">
                    <h3>XX99 MARK I</h3>
                    <Button label='see product' version={1} />
                </div>
            </div>
            <div className='other-card'>
                <picture>
                    <source media="(min-width: 769px)" srcSet="\images\shared\desktop\image-zx7-speaker.jpg" />
                    <source media="(min-width: 600px)" srcSet="\images\shared\tablet\image-zx7-speaker.jpg" />
                    <img src="\images\shared\mobile\image-zx7-speaker.jpg" alt="" /></picture>
                <div className="description">
                    <h3>XX59</h3>
                    <Button label='see product' version={1} />
                </div>
            </div>
        </OtherChoiceStyled>
    )
}

const OtherChoiceStyled = styled.section`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
    width: 100;
    row-gap: 56px;
    column-gap: 16px;
    text-align: center;
    & .header,
    & h3{
        font-weight: ${theme.fonts.weigth.bold};
        color: ${theme.colors.black};
    }
    .header{
            
        font-size: clamp(${theme.fonts.size.font_s4}, 1rem +  2vw, 32px);
        letter-spacing: clamp(0.86px, 0.05rem + 0.10vw, 1.14px);
    }
   
    .other-card{
        display: grid;
        width: 100%;
        gap: clamp(25px, 5vw ,40px);
        
        .description {
            display: grid;
            gap: 32px;
            place-items: center;
            letter-spacing: ${theme.fonts.letterSpacing.char_s4};
            font-size: ${theme.fonts.size.font_s4};
        }
            picture{
            width: 100%;
            object-fit: contain;
            img{
                width: 100%;
                height: auto;
            }
        }
    }

    @media (min-width: 600px){
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto;

      p{
        grid-area: auto / span 3;
      }
    }
`;
