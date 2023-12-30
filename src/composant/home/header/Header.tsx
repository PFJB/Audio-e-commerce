import { useState } from "react";
import styled from "styled-components";
import NavigationCard from "../navigationCard/NavigationCard";
import { theme } from "../../../assets/theme/theme";
import { Link } from "react-router-dom";
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
                <a href="/"><img className="logo" src={LOGO} alt="Logo audiophile" /></a>
                <ul className="nav-list">
                    <li className="navigation_title"><Link to="/">Home</Link></li>
                    <li className="navigation_title"><Link to="/category/headphones">Headphones</Link></li>
                    <li className="navigation_title"><Link to="/category/speakers">Speakers</Link></li>
                    <li className="navigation_title"><Link to="/category/earphones">Earphones</Link></li>
                </ul>

                <img className="cart" src={CART} alt="Cart button" />
            </nav>
            {isOpen && <ul className="nav-card"><NavigationCard /></ul>}
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`

    display: flex;
    justify-content: center;
    height: 90px;
    width: 100%;
    background-color: black;
    padding: 0 24px;

nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: 100%;
    width: min(100%, 1110px);
    border-bottom: solid 2px hsl(0 0% 100% / 20%);
    gap: 42px;

    .cart{
        position: absolute;
        right: 0;
        place-self: center;
    }
    .logo{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
    }
    .nav-list{
        display: none;
        text-transform: uppercase;

        .navigation_title{
            font-size: ${theme.fonts.size.font_s0};
            font-weight: ${theme.fonts.weigth.bold};
            letter-spacing: ${theme.fonts.letterSpacing.char_s5};
            a{
                color: white;
            }
        }
        }

}
    .nav-card{
        display: ${({ $isOpen }) => $isOpen ? "block" : "none"};
        position: absolute;
        padding: 32px 24px 35px 24px;
        z-index: 200;
        border-bottom: solid 1px black;
        height: auto;
        background-color: white;
        left: 0;
        right: 0;
        top: 90px;
            
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

       .nav-card{display:none;}
    nav {
        .burger{ display: none; }

        .nav-list{
            position: relative;
            display: flex;
            width: auto;
            height: auto;
            top: auto;
            left: auto;
            gap: 34px;
            color: white;
            li a:hover,
            li a:active {
                cursor: pointer;
                color: ${theme.colors.brown};

            }
        }
    }
}
`;
