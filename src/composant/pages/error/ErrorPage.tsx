import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
    return (
        <ErrorPageStyled><p>Redirection...</p>
            <Link className="zd" to={"/"}>Home</Link>
        </ErrorPageStyled>
    )
}


const ErrorPageStyled = styled.div`
width: 100vw;
height: 100vh;
display: grid;
place-content: center;
background-color: aliceblue;

.zd{
    display: grid;
    place-content: center;
    background-color: #aaa2a2be;
    cursor: pointer;
}
  
`;