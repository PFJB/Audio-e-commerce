import styled from "styled-components";

export default function Header() {
    return (
        <HeaderStyled className="header">
            <nav>
                <img className="burger" src="../../../../public/images/shared/tablet/icon-hamburger.svg" alt="" />
                <div className="logo">
                    <img src="/images/shared/desktop/logo.svg" alt="Logo audiophile" />
                </div>
                <ul className="nav-list">
                    <li>Home</li>
                    <li>Headphones</li>
                    <li>Speakers</li>
                    <li>Earphones</li>
                </ul>
                <div className="cart"><img src="/images/shared/desktop/icon-cart.svg" alt="" /></div>
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
    width: 100%;
    max-width: 1110px;
    gap: 42px;

    .cart{
        position: absolute;
        right: 24px;
    }
    .logo{
        background-color: red;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .nav-list{
        display: none;
        color: white;
        transition: all 1s;
    }
}

@media screen and (min-width: 425px) {
    nav {
        .logo{
            position: relative;
            left: 0;
            transform: none;
        }

    }
}

@media screen and (min-width: 768px) {
    nav {
        .burger{
            display: none;
        }
        ul{
            display: block;
            background-color: orange;
        }

        .nav-list{
            display: flex;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);

            text-transform: uppercase;
            gap: 34px;
            color: white;
        }
    }
}
`;
