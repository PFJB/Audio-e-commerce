import { Link } from "react-router-dom";
import styled from "styled-components";
import { scrollToTopSmooth } from "../../../utils/window";
import { theme } from "../../../assets/theme/theme";

export default function NavigationList({ className }: { className: string }) {
    return (
        <NavigationListStyled className={className}>
            <li className="navigation_title"><Link to="/" onClick={scrollToTopSmooth}>Home</Link></li>
            <li className="navigation_title"><Link to="/category/headphones" onClick={scrollToTopSmooth}>Headphones</Link></li>
            <li className="navigation_title"><Link to="/category/speakers" onClick={scrollToTopSmooth}>Speakers</Link></li>
            <li className="navigation_title"><Link to="/category/earphones" onClick={scrollToTopSmooth}>Earphones</Link></li>
        </NavigationListStyled>
    )
}

const NavigationListStyled = styled.ul`
   
    display: flex;
    text-transform: uppercase;
    row-gap: 1rem;
    column-gap: 2.125rem;
    
    .navigation_title{
        font-size: ${theme.fonts.size.font_s0};
        font-weight: ${theme.fonts.weigth.bold};
        letter-spacing: ${theme.fonts.letterSpacing.char_s5};
        a {color: white;}
    }
    li a:hover,
    li a:focus{
        color: ${theme.colors.brown};
        cursor: pointer;
    }
`;