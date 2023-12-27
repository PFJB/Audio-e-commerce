import styled from "styled-components";
import Card from "./Card";

export default function NavigationCard() {
    return (
        <NavigationCardStyled>
            <Card />
            <Card />
            <Card />
        </NavigationCardStyled>
    )
}

const NavigationCardStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    place-items: end;
    width: 100%;
    gap: 16px;


@media screen and (min-width: 425px) {
   
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;

    
}
`;
