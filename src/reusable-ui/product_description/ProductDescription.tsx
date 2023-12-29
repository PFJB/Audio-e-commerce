import styled from "styled-components";
import Button from "../button/Button";
import { theme } from "../../assets/theme/theme";


type ProductDescriptionProps = {
    image: string
    title: string,
    ad: string,
    description: string,
    button: {
        label: string,
        version: number
    }
}

export default function ProductDescription({ image, title, ad, description, button }: ProductDescriptionProps) {
    return (
        <ProductDescriptionStyled>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="description">
                <p className="ad">{ad}</p>
                <h2 className="title">{title}</h2>
                <p className="text">{description}</p>
                <Button label={button.label} version={button.version} />
            </div>


        </ProductDescriptionStyled>
    )
}


const ProductDescriptionStyled = styled.div`
display: grid;
grid-template-rows: auto auto;
grid-column: 1fr;
width: 100%;
row-gap: 32px;
place-items: center;

.image{
    display: grid;
    place-content: center;
    width: 100%;
    background-color: ${theme.colors.grey};

    object-fit: contain;
img{
        width: 100%;
        max-width: 600px;
        height: auto;
    }
}
.description{
    display: grid;
    place-content: center;
    place-items: center;
    text-align: center;
    .ad{
        color: ${theme.colors.brown};
        font-weight: ${theme.fonts.weigth.regular};
        font-size: ${theme.fonts.size.font_s1};
        letter-spacing: ${theme.fonts.letterSpacing.char_s6};
        margin-bottom: 24px;
    }
    .title{
        color: ${theme.colors.black};
        font-weight: ${theme.fonts.weigth.bold};
        font-size: ${theme.fonts.size.font_s5};
        letter-spacing: ${theme.fonts.letterSpacing.char_s0};
        margin-bottom: 24px;

    }
    .text{
        color: ${theme.colors.blackL};
        font-weight: ${theme.fonts.weigth.medium};
        font-size: ${theme.fonts.size.font_s2};
        line-height: ${theme.fonts.lineSpace.line_s2};
        margin-bottom: 24px;

    }

}
@media screen and (min-width: 426px) {
    row-gap: 52px;



    .description{
        .ad{
            margin-bottom: 16px;
        }
        .title{
            margin-bottom: 32px;
        }
    }
}

@media screen and (min-width: 769px) {
	grid-template-columns: 1fr 1fr;
    .description{
        padding-left: clamp(45px,10vw,125px);
        padding-right: 15px;
        place-items: start;
        text-align: start;
    }
}
`;