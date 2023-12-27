import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { refreshPage } from "../../../../utils/window";
const CART = "/images/shared/desktop/icon-cart.svg"
const LOGO = "/images/shared/desktop/logo.svg"
const BURGER = "/images/shared/tablet/icon-hamburger.svg"


export default function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const open = () => { setIsOpen(isOpen ? false : true) }

    return (
        <HeaderStyled className="header" $isOpen={isOpen}>
            <nav>
                <img className="burger" onClick={open} src={BURGER} alt="burger button" />
                <img className="logo" onClick={refreshPage} src={LOGO} alt="Logo audiophile" />
                <ul className="nav-list">
                    <li className="navigation_title">Home</li>
                    <li className="navigation_title">Headphones</li>
                    <li className="navigation_title">Speakers</li>
                    <li className="navigation_title">Earphones</li>
                </ul>
                <img className="cart" src={CART} alt="Cart button" />
            </nav>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`

    display: flex;
    justify-content: center;
    height: 90px;
    width: 100%;
    background-color: black;


nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding: 0 24px;
    height: 100%;
    width: min(100%, 1110px);
    gap: 42px;

    .cart{
        position: absolute;
        right: 24px;
        place-self: center;
    }
    .logo{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
    }
    .nav-list{
        display: ${({ $isOpen }) => $isOpen ? "flex" : "none"};
        position: absolute;
        width: 100%;
        height: 340px;
        left: 0;
        top: 100%;
        color: black;

        .navigation_title{
            font-size: ${theme.fonts.size.font_s0};
            font-weight: ${theme.fonts.weigth.bold};
            letter-spacing: ${theme.fonts.letterSpacing.char_s5};
        }
    }
}

@media screen and (min-width: 425px) {
    nav .logo{
            position: relative;
            left: 0;
            transform: none;
    }
}

@media screen and (min-width: 769px) {
    height: 97px; 
    nav {
        .burger{ display: none; }
        ul{ display: block; }

        .nav-list{
            position: absolute;
            display: flex;
            width: auto;
            height: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-transform: uppercase;
            gap: 34px;
            color: white;

            li:hover,
            li:focus {
                cursor: pointer;
                color: ${theme.colors.brown};

            }
        }
    }
}
`;
