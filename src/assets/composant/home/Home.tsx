import styled from "styled-components";
import { theme } from "../../theme/theme";

export default function Home() {
    return (
        <HomeStyled>
            <header className="header">
                <nav>
                    <div className="logo">logo</div>
                    <ul>
                        <li>Home</li>
                        <li>Headphones</li>
                        <li>Speakers</li>
                        <li>Earphones</li>
                    </ul>
                    <div className="cart">cart</div>
                </nav>
            </header>
        </HomeStyled>
    )
}

const HomeStyled = styled.div`

width: 100vw;
height: auto;

    header {
        display: grid;
        place-items: center;
        height: 96px;
        width: 100%;
        padding: 0 3em;
        color: ${theme.colors.white};
        background: ${theme.colors.black};

        nav{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
            width: 100%;
            max-width: 1110px;

            ul{
                display: flex;
                flex-direction: row;
                gap: 24px;
                li{
                    width: auto;
                    cursor: pointer;
                }
            }

        }
    }
  
`;
