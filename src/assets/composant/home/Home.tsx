import styled from "styled-components";
import Header from "./header/Header";
import NavigationCard from "./navigationCard/NavigationCard";
import Footer from "./footer/Footer";
import Presentation from "./presentation/Presentation";


export default function Home() {

    window.onunload = function () { window.scrollTo(0, 0); }


    return (
        <HomeStyled>
            <Header />
            <div className="body">
                <div className="container">
                    <NavigationCard />
                    <Presentation />




                </div>


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
height: 100%;

    .body {
        display: flex;  
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 1.5rem;
        height: 100%;
    }
    .body > .container{
        display: grid;
        width: 100%;
        max-width: 69.375rem;
        height: 100%;
        gap: 120px;
    }

@media screen and (min-width: 426px) {

  

}
@media screen and (min-width: 769px) {
    .body .l{ grid-template-columns: 1fr 1fr; }
}
`;
