import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";
import NavigationList from "./NavigationList";
import MediaList from "./MediaList";
import Logo from "../../../reusable-ui/Logo";

export default function Footer() {
    return (
        <FooterStyled>
            <div className="container">
                <Logo className="logo" />
                <NavigationList className="nav_list" />
                <p className="description">Audiophile is an all in one stop to fulfill your audio needs.
                    We're a small team of music lovers and sound specialists who are
                    devoted to helping you get the most out of personal audio.
                    Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <p className="copyright">Copyright 2021. All Rights Reserved</p>
                <MediaList />
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

    .nav_list{
        flex-direction: column;
        align-items: center;
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
        .nav_list{
            flex-direction: row;
            flex-wrap: wrap;
            grid-area: auto / span 2;
        }
        .copyright{
            margin-top: 1.875rem;
            place-self:  end start;
        }
        .description, .logo{ grid-area: auto / span 2; }
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
            place-self: center start;
            grid-area: auto / span 1;
        }
        .nav_list{
            place-self: center end;
            grid-area: auto / span 3;
        }
        
        .description{ grid-area: auto / span 3; }
        .copyright{
            margin-top: 0;
            grid-area:3 / 1 / -1 / -1;}
        }
    }
`;