import styled from "styled-components";
import Header from "../../home/header/Header";
import TitleCategorie from "./TitleCategorie";
import Footer from "../../home/footer/Footer";
import Presentation from "../../home/presentation/Presentation";
import NavigationCard from "../../home/navigationCard/NavigationCard";
import ContentCategory from "./ContentCategory";
import { useParams } from "react-router-dom";
import ErrorPage from "../error/ErrorPage";

export default function CategoryPage() {

    window.onunload = function () { window.scrollTo(0, 0); }
    const { category } = useParams()
    const pages = ["headphones", "earphones", "speakers"]
    if (!pages.find((d) => category === d)) {
        return (<ErrorPage />)
    }

    return (
        <CategoryPageStyled>
            <Header />
            <TitleCategorie title={category} />
            <div className="body">
                <div className="container">
                    <ContentCategory category={category} />
                    <NavigationCard />
                    <Presentation />
                </div>
            </div>
            <Footer />
        </CategoryPageStyled>
    )
}

const CategoryPageStyled = styled.div`
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
`;
