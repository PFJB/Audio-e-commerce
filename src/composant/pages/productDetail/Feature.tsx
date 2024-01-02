import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";

type arraylist =
    {
        quantity: number,
        item: string
    }

export default function Feature({ feature, listBox }: { feature: string | undefined, listBox: Array<arraylist> | undefined }) {
    return (
        <FeatureStyled>
            <div>
                <h2>features</h2>
                <p>{feature}</p>
            </div>
            <div className="box">
                <h2>in the box</h2>
                <ul>
                    {listBox &&
                        listBox.map((product) => {
                            return <li key={product.item}><span>{product.quantity}x</span> {product.item}</li>
                        })
                    }
                </ul>
            </div>

        </FeatureStyled>
    )
}

const FeatureStyled = styled.section`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    width: 100%;
    white-space: pre-line;
    row-gap: 88px;
    column-gap: 125px;

    .box{
        display: grid;
        grid-template-columns: 1fr;
    }

    div{
        display: grid;
        gap: 32px;
        place-content: start;

        h2{
            text-transform: uppercase;
            font-weight: ${theme.fonts.weigth.bold};
            line-height: ${theme.fonts.lineSpace.line_s4};
            letter-spacing: clamp(0.86px, 0.0125rem + 0.0005vw ,1.16px);
            font-size: clamp(${theme.fonts.size.font_s4}, 0.2rem + 5vw, ${theme.fonts.size.font_s6});
        }
        p, li {
            color: ${theme.colors.blackL};
            font-size: ${theme.fonts.size.font_s2};
            font-weight: ${theme.fonts.weigth.medium};
            line-height: ${theme.fonts.lineSpace.line_s2};
        }

        ul li{
            display: flex;
            gap: 1.5rem;
            span{
                font-weight: ${theme.fonts.weigth.bold};
                color: ${theme.colors.brown};
            }
        }
}
    @media (min-width: 426px){
        .box{ grid-template-columns: 1fr 1fr; }
    }
    @media (min-width: 769px){
        grid-template-rows: auto;
        grid-template-columns: 2fr 1fr;
        .box{ grid-template-columns: 1fr; }
    }
`;