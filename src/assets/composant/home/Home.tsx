import styled from "styled-components";
import Header from "./header/Header";

export default function Home() {
    return (
        <HomeStyled>
            <Header />
        </HomeStyled>
    )
}

const HomeStyled = styled.div`

width: 100vw;
height: auto;

    
`;
