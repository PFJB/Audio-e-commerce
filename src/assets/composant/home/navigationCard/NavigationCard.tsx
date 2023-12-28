import styled from "styled-components";
import Card from "./Card";
import { card_configs } from "./card_configs";

export default function NavigationCard() {

    const cardConfigs = card_configs

    return (
        <NavigationCardStyled>
            {cardConfigs.map(({ picture, title, id }) => {
                return <Card key={id} picture={picture} title={title} />
            })}
        </NavigationCardStyled>
    )
}

const NavigationCardStyled = styled.section`
    display: grid;
    place-items: end;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    gap: 16px;

@media screen and (min-width: 550px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
}
`;
