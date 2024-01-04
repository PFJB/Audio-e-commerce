import styled from "styled-components";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { theme } from "../../../assets/theme/theme";
import { Link } from "react-router-dom";
const LOGO = "/images/shared/desktop/logo.svg"

export default function Footer() {
    return (
        <FooterStyled>
            <div className="container">
                <a className="logo" href=""><img src={LOGO} alt="" /></a>
                <ul className="nav-list">
                    <li className="navigation_title"><Link to="/">Home</Link></li>
                    <li className="navigation_title"><Link to="/category/headphones">Headphones</Link></li>
                    <li className="navigation_title"><Link to="/category/speakers">Speakers</Link></li>
                    <li className="navigation_title"><Link to="/category/earphones">Earphones</Link></li>
                </ul>
                <p className="description">Audiophile is an all in one stop to fulfill your audio needs.
                    We're a small team of music lovers and sound specialists who are
                    devoted to helping you get the most out of personal audio.
                    Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <p className="copyright">Copyright 2021. All Rights Reserved</p>
                <ul className="media_list">
                    <li><FaXTwitter /></li>
                    <li><FaFacebookSquare /></li>
                    <li><FaInstagram /></li>
                </ul>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`

display: grid;
place-items: center;
position: relative;
background-color: ${theme.colors.black};
bottom: 0;
width: 100%;
padding: 3.75rem 2.4375rem 2.875rem 2.4375rem;
margin-top: 7.5rem;

.container{

    display: grid;
    text-align: center;
    place-items: center;
    gap: 3rem;
    color: white;

    .nav-list{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-transform: uppercase;
        row-gap: 1rem;
        column-gap: 2.125rem;
        .navigation_title{
            font-size: ${theme.fonts.size.font_s0};
            font-weight: ${theme.fonts.weigth.bold};
            letter-spacing: ${theme.fonts.letterSpacing.char_s5};
    
            a {color: white;}
        }
    }

    .description{
        font-weight: ${theme.fonts.weigth.regular};
        font-size: ${theme.fonts.size.font_s2};
        line-height: ${theme.fonts.lineSpace.line_s2};
        color: ${theme.colors.white50};
    }

    .copyright{
        font-weight: ${theme.fonts.weigth.bold};
        font-size: ${theme.fonts.size.font_s2};
        line-height: ${theme.fonts.lineSpace.line_s2};
        color: ${theme.colors.white50};
    }

    .media_list{
        display: flex;
        gap: 1rem;
        li {
            display: grid;
            font-size: 1.5rem;
        }
    }

    .nav-list li a:hover,
    .nav-list li a:focus,
    .media_list li:hover,
    .media_list li:focus{
        color: ${theme.colors.brown};
        cursor: pointer;
    }
}

@media screen and (min-width: 34.375rem) {

padding: 3.75rem 2.4375rem 2.875rem 2.4375rem;
    .container{
        grid-template-rows: auto min-content auto auto;
        grid-template-columns: 3fr 1fr;
        place-items: start;
        text-align: start;
        gap: 32px;
        .logo{
            display: grid;
            place-items: center;
        }
        .nav-list{
            flex-direction: row;
            flex-wrap: wrap;
        }
        .copyright{
            margin-top: 1.875rem;
            place-self:  end start;
        }
        .media_list{ place-self: end; }
        .nav-list, .description, .logo{ grid-area: auto / span 2; }
    }
}

@media screen and (min-width: 48.0625rem) {
padding: 4.4375rem 2.4375rem 3.25rem 2.4375rem;

    .container{
        max-width: 69.375rem;
        grid-template-rows: auto auto auto;
        grid-template-columns: auto auto 1fr 1fr;
        gap: 2.25rem;

        .logo{
            place-self:center start;
            grid-area: auto / span 1;
            }
        .nav-list{
            place-self:center end;
            grid-area: auto / span 3;
        }
        .media_list{grid-area: auto / span 1;}
        .description{
            
            grid-area: auto / span 3;
        }
        .copyright{
            margin-top: 0;
            grid-area:3 / 1 / -1 / -1;}
        }
    }
`;