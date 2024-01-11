import styled, { css } from "styled-components";
import { theme } from "../../assets/theme/theme";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


type ButtonProps = {
    label: string,
    version?: number,
    className?: string,
    destination: string,
}

export default function LinkButton({ label, version = 1, className, destination }: ButtonProps) {
    return (
        <LinkButtonStyled className={className} version={version} to={destination} onClick={() => window.scrollTo(0, 0)}>
            {label} {version === 3 && <span><FaChevronRight /></span>}
        </LinkButtonStyled>
    )
}


const LinkButtonStyled = styled(Link) <{ version: number }>`
    display: grid;
    place-content: center;
    width: 160px;
    height: 48px;
    cursor: pointer;

    font-size: ${theme.fonts.size.font_s0};
    font-weight: ${theme.fonts.weigth.bold};
    letter-spacing: ${theme.fonts.letterSpacing.char_s0};

    text-transform: uppercase;

    span{
        display: grid;
        place-content: center;
    }

    ${({ version }) => getVersion(version)}
`;

const getVersion = (version: number) => {
    if (version === 1) return version1Style
    if (version === 2) return version2Style
    if (version === 3) return version3Style
}

const version1Style = css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.brown};
    border: none;
    &:hover{ background-color: ${theme.colors.lightBrown}; }
`

const version2Style = css`
    color: ${theme.colors.black};
    background: transparent;
    border: 1px solid black;
    &:hover{
        color:${theme.colors.white};
        background-color: ${theme.colors.black};
    }
`

const version3Style = css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.blackL};
    background: transparent;
    border: none;

    span{
        font-size: 0.625rem;
        margin-left: 0.5rem;
        color: ${theme.colors.brown};
    }

    &:hover{ color: ${theme.colors.brown}; }
`