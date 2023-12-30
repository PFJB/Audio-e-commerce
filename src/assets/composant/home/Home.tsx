import styled from "styled-components";
import Header from "./header/Header";
import NavigationCard from "./navigationCard/NavigationCard";
import Footer from "./footer/Footer";
import Presentation from "./presentation/Presentation";
import HomeContent from "./home_content/HomeContent";
import ProductDescription from "../../../reusable-ui/product_description/ProductDescription";
import HeadphoneCategorie from "../headphones_categorie/HeadphoneCategorie";


export default function Home() {

    window.onunload = function () { window.scrollTo(0, 0); }

    return (
        <HomeStyled>
            <Header />
            <div className="body">







                <div className="container">

                    <HeadphoneCategorie />

                    <NavigationCard />
                    <Presentation />
                    <HomeContent />




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
        gap: 7.5rem;
    }

@media screen and (min-width: 26.625rem) {

  

}
@media screen and (min-width: 48.0625rem) {
    .body .l{ grid-template-columns: 1fr 1fr; }
}
`;
