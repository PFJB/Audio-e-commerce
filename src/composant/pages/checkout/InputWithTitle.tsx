import styled from "styled-components";

export default function InputWithTitle({ title, placeholder }) {
    return (
        <InputWithTitleStyled>


            <p>{title}</p>
            <input type="text" placeholder={placeholder} />

        </InputWithTitleStyled>
    )
}


const InputWithTitleStyled = styled.div`
  
`;
