import styled from "styled-components";

export default function Button({ label }: { label: string }) {
    return (
        <ButtonStyled>
            {label}
        </ButtonStyled>
    )
}


const ButtonStyled = styled.button`
  
`;
