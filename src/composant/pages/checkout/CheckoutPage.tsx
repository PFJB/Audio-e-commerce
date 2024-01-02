import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../home/header/Header";
import Footer from "../../home/footer/Footer";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";
import { theme } from "../../../assets/theme/theme";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutPage() {

    window.onunload = function () { window.scrollTo(0, 0); }
    const { cart } = useContext(CartContext)

    const navigate = useNavigate()
    const goBack = () => { navigate(-1) }

    return (
        <CategoryPageStyled>
            <Header />
            <div className="body">
                <div className="container">
                    <button className="goBack" onClick={goBack}>Go Back</button>
                    <CheckoutForm />



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
background-color: #f2f2f2;


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
