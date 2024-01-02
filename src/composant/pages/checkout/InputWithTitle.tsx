import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";

export default function InputWithTitle({ title, placeholder }) {
    return (
        <InputWithTitleStyled>
            <p>{title}</p>
            <input className="inputText" type="text" placeholder={placeholder} />
        </InputWithTitleStyled>
    )
}


const InputWithTitleStyled = styled.div`
    display: grid;
    gap: 9px;
    p{
        
        text-transform: capitalize;
        color: ${theme.colors.black};
        font-weight: ${theme.fonts.weigth.bold};
        letter-spacing: -0.21px;
        font-size: 12px;
   
    }

    .inputText{
        width: 100%;
        height: 56px;
        padding: 0 24px;
        border: 1px solid hsl(0, 0%, 81%);
        color: #000000;
        border-radius: ${theme.radius.light};
    }
`;

