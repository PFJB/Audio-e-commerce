import styled from "styled-components";

export default function Feature({ feature }: { feature: string }) {
    return (
        <FeatureStyled>
            <div>
                <h2>features</h2>
                <p>{feature}</p>
            </div>
            <div>
                <h2>in the box</h2>
                <ul></ul>
            </div>

        </FeatureStyled>
    )
}


const FeatureStyled = styled.section`
display: grid;
grid-template-rows: auto auto;


@media (min-width: 769px){
    grid-template-columns: 2fr 1fr;

}
  
`;