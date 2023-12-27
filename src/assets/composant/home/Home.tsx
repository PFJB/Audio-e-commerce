import styled from "styled-components";
import Header from "./header/Header";
import NavigationCard from "./NavigationCard";

export default function Home() {
    return (
        <HomeStyled>
            <Header />
            <div className="body">
                <div className="container">
                    <NavigationCard />
                </div>
            </div>

        </HomeStyled>
    )
}

const HomeStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: auto;

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 24px;
}
.body .container{
    width: 100%;
    max-width: 1110px;
}




`;
