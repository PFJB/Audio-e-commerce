import { useContext } from "react";
import styled from "styled-components";
import NavigationCard from "../navigationCard/NavigationCard";
import { theme } from "../../../assets/theme/theme";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import { PiShoppingCart } from "react-icons/pi";
import CartContext from "../../../context/CartContext";
import Logo from "../../../reusable-ui/Logo";
import NavigationList from "../footer/NavigationList";

const BURGER = "/images/shared/tablet/icon-hamburger.svg"


export default function Header() {

    const { isNavOpen, openNav, isCartOpen, openCart } = useContext(CartContext)

    return (
        <HeaderStyled className="header" $isOpen={isNavOpen}>

            <nav>
                <img className="burger" onClick={openNav} src={BURGER} alt="burger button" />
                <Logo className="logo" />
                <NavigationList className="nav_list" />
                <PiShoppingCart className='cart' onClick={openCart} />
                {isCartOpen && <Cart />}
            </nav>

            {isNavOpen &&
                <ul className="nav_card"><NavigationCard /></ul>}
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`

    display: flex;
    justify-content: center;
    position: relative;
    z-index: 4;
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
        font-size: 1.25rem;
        color: white;
        cursor: pointer;
        user-select: none;
        
        &:hover, &:focus{color: ${theme.colors.brown};}
    }
    .logo{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .nav_list{ display: none; }

}
    .nav_card{
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

    .nav_card{ display:none; }
    nav {
        display: flex;
        .burger{ display: none; }
        .nav_list{
            display: flex;
            justify-self: center;
        }
    }
}
`;
