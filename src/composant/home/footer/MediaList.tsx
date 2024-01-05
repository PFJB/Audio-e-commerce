import styled from "styled-components";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { theme } from "../../../assets/theme/theme";

export default function MediaList() {
    return (
        <MediaListStyled>
            <li><FaXTwitter /></li>
            <li><FaFacebookSquare /></li>
            <li><FaInstagram /></li>
        </MediaListStyled>
    )
}

const MediaListStyled = styled.ul`

    display: flex;
    gap: 1rem;
    li {
        display: grid;
        font-size: 1.5rem;
    }
    
    li:hover,
    li:focus{
        color: ${theme.colors.brown};
        cursor: pointer;
    }
    
    @media screen and (min-width: 34.375rem) {
        place-self: end; 
    }
    @media screen and (min-width: 48.0625rem) {
        grid-area: auto / span 1;
    }

`;