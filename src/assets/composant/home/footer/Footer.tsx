import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <FooterStyled>
            <div className="container">
                <div className="logo"><img src="../../../../../public/images/shared/desktop/logo.svg" alt="" /></div>
                <ul className="nav-list">
                    <li className="navigation_title">Home</li>
                    <li className="navigation_title">Headphones</li>
                    <li className="navigation_title">Speakers</li>
                    <li className="navigation_title">Earphones</li>
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
padding: 60px 39px 46px 39px;

.container{

    display: grid;
    text-align: center;
    place-items: center;
    gap: 48px;
    color: white;

    .nav-list{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-transform: uppercase;
        row-gap: 16px;
        column-gap: 34px;
        .navigation_title{
            font-size: ${theme.fonts.size.font_s0};
            font-weight: ${theme.fonts.weigth.bold};
            letter-spacing: ${theme.fonts.letterSpacing.char_s5};
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
        gap: 16px;
        li {
            font-size: 24px;
        }
    }
}

@media screen and (min-width: 550px) {

padding: 60px 39px 46px 39px;
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
            margin-top: 30px;
            place-self:  end start;
        }
        .media_list{ place-self: end; }
        .nav-list, .description, .logo{ grid-area: auto / span 2; }
    }
}

@media screen and (min-width: 1024px) {
padding: 71px 39px 52px 39px;

    .container{
        max-width: 1110px;
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr 1fr;
        gap: 36px;

        .logo{
            place-self:center start;
            grid-area: auto / span 1;
            }
        .nav-list{
            place-self:center end;
            grid-area: auto / span 1;
            }
        .description{grid-area: auto / span 1;}
        .copyright{
            margin-top: 0;
            grid-area:3 / 1 / -1 / -1;}
        }
    }
`;
