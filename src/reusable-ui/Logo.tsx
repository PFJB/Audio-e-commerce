import styled from "styled-components";
const LOGO = "/images/shared/desktop/logo.svg"

export default function Logo({ className }: { className: string }) {
    return (
        <LogoStyled className={className} href="/">
            <img src={LOGO} alt="audiophile logo" />
        </LogoStyled>

    )
}

const LogoStyled = styled.a`
  display: grid;
  place-content: center;
`;