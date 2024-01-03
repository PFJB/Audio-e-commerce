import styled from "styled-components";
import Header from "../../home/header/Header";
import Footer from "../../home/footer/Footer";
import Presentation from "../../home/presentation/Presentation";
import NavigationCard from "../../home/navigationCard/NavigationCard";
import { useNavigate, useParams } from "react-router-dom";
import OtherChoice from "./OtherChoice";
import ProductDetail from "./ProductDetail";
import { data } from "../../../assets/data";
import Feature from "./Feature";
import GalleryDetail from "./GalleryDetail";
import { theme } from "../../../assets/theme/theme";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";

export default function CategoryPage() {

    window.onunload = function () { window.scrollTo(0, 0); }
    const { slug } = useParams()
    const { isCartOpen, isNavOpen } = useContext(CartContext)

    const product = data.find((product) => product.slug === slug)
    const navigate = useNavigate()
    const goBack = () => { navigate(-1) }

    return (
        <CategoryPageStyled>
            <Header />
            <div className="body">
                <div className="container">
                    <button className="goBack" onClick={goBack}>Go Back</button>
                    {product && <ProductDetail
                        ad={product.ad}
                        title={product.name}
                        description={product.description}
                        image={{
                            mobile: product.image?.mobile ?? "",
                            tablet: product.image?.tablet ?? "",
                            desktop: product.image?.desktop ?? ""
                        }}
                        onLeft={false}
                        price={product.price}
                        id={product.id}
                    />}
                    <Feature feature={product?.features} listBox={product?.includes} />
                    <GalleryDetail
                        first={{
                            desktop: product?.gallery?.first.desktop,
                            tablet: product?.gallery?.first.tablet,
                            mobile: product?.gallery?.first.mobile
                        }}
                        second={{
                            desktop: product?.gallery?.second.desktop,
                            tablet: product?.gallery?.second.tablet,
                            mobile: product?.gallery?.second.mobile
                        }}
                        third={{
                            desktop: product?.gallery?.third.desktop,
                            tablet: product?.gallery?.third.tablet,
                            mobile: product?.gallery?.third.mobile
                        }}
                    />
                    <OtherChoice product={product} />
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
        position :relative ;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-inline: 1.5rem;
        height: 100%;
    }
    .body > .container{
        display: grid;
        position: relative;
        width: 100%;
        max-width: 69.375rem;
        height: 100%;
        gap: 7.5rem;
        padding-top: 82px;
    }

.goBack{
    position: absolute;
    left: 0;
    top: 33px;
    border: none;
    background: none;
    padding: 0;
    color: ${theme.colors.blackL};
    font-size: ${theme.fonts.size.font_s2};
    font-weight: ${theme.fonts.weigth.medium};
    cursor: pointer;
    
    &:is(:hover, :focus) { color: ${theme.colors.brown}; }
}
`;
