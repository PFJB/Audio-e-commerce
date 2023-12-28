import styled from "styled-components";
import Header from "./header/Header";
import NavigationCard from "./navigationCard/NavigationCard";
import Footer from "./footer/Footer";

export default function Home() {
    window.onunload = function () { window.scrollTo(0, 0); }

    return (
        <HomeStyled>
            <Header />
            <div className="body">
                <div className="container">
                    <NavigationCard />
                </div>
                <div className="l"></div>

            </div>
            <Footer />
        </HomeStyled>
    )
}

const HomeStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 24px;
    height: 100%;

    /* .l {
        width: 100%;
        height: 500px;
        background-color: aqua;
    } */
}
.body > .container{
    width: 100%;
    max-width: 1110px;
    height: 100%;
    min-height: 100vh;
}




`;
