import styled from 'styled-components';
import { theme } from '../../../assets/theme/theme';
import OtherCard from './OtherCard';

export default function OtherChoice() {
    return (
        <OtherChoiceStyled>
            <p className='header'>you may also like</p>
            <OtherCard />
            <OtherCard />
            <OtherCard />
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

    .header{
        font-weight: ${theme.fonts.weigth.bold};
        color: ${theme.colors.black};
        font-size: clamp(${theme.fonts.size.font_s4}, 1rem +  2vw, 32px);
        letter-spacing: clamp(0.86px, 0.05rem + 0.10vw, 1.14px);
    }
   
    @media (min-width: 600px){
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto;

      p{ grid-area: auto / span 3; }
    }
`;
