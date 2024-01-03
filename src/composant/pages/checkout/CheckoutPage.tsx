import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../home/header/Header";
import Footer from "../../home/footer/Footer";
import { useContext, useState } from "react";
import CartContext from "../../../context/CartContext";
import { theme } from "../../../assets/theme/theme";
import CheckoutForm from "./CheckoutForm";
import Summary from "./Summary";

export default function CheckoutPage() {

    window.onunload = function () { window.scrollTo(0, 0); }
    const { cart } = useContext(CartContext)
    const [scrollable, setScrollable] = useState<boolean>(true)

    const navigate = useNavigate()
    const goBack = () => { navigate(-1) }

    return (
        <CategoryPageStyled $scrollable={scrollable}>
            <div className="main">
                <Header />
                {scrollable && <CheckoutModal />}
                <div className="body">
                    <div className="container">
                        <button className="goBack" onClick={goBack}>Go Back</button>
                        <div className="form">
                            <CheckoutForm />
                            <Summary />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </CategoryPageStyled>

    )
}



const CategoryPageStyled = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: auto;
max-height: 100vh;
background-color: #f2f2f2;
overflow: ${({ $scrollable }) => $scrollable ? "scroll" : "hidden"};

    .main{
        width: 100%;
        height: 100%;
    }
    .body {
        display: flex; 
        position :relative ;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-inline: 1.5rem;
    }
    .body > .container{
        display: grid;
        position: relative;
        width: 100%;
        max-width: 69.375rem;
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
    .form{
        display: grid;
        gap: 30px;
    }

    @media (min-width: 769px){
        .form{ grid-template-columns: auto auto; }
    }
`;
