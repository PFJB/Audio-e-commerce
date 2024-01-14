import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../home/header/Header";
import Footer from "../../home/footer/Footer";
import { useState } from "react";
import { theme } from "../../../assets/theme/theme";
import CheckoutForm from "./CheckoutForm";
import Summary from "./Summary";
import CheckoutModal from "./CheckoutModal";

export default function CheckoutPage() {

    window.onunload = function () { window.scrollTo(0, 0); }

    const [modalShowed, setModalShowed] = useState<boolean>(false)
    const navigate = useNavigate()
    const goBack = () => { navigate(-1) }

    return (
        <CategoryPageStyled $isshowed={modalShowed}>
            {modalShowed && <CheckoutModal />}
            <div className="main">
                <Header />
                <div className="body">
                    <div className="container">
                        <button className="goBack" onClick={goBack}>Go Back</button>
                        <div className="form">
                            <CheckoutForm />
                            <Summary set={() => setModalShowed(modalShowed ? false : true)} />

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </CategoryPageStyled>

    )
}



const CategoryPageStyled = styled.div<{ $isshowed: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
    overflow: ${({ $isshowed }) => $isshowed ? "hidden" : "scroll"};

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
        .form{ grid-template-columns: 2fr 1fr; }
    }
`;
