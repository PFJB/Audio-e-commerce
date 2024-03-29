import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import LinkButton from "../button/LinkButton";

type ProductDescriptionProps = {
    className?: string,
    image: {
        mobile: string,
        tablet: string,
        desktop: string
    }
    title: string,
    ad?: boolean,
    description: string,
    button: {
        label: string,
        version: number
    },
    onLeft?: boolean,
    destination: string
}

export default function ProductDescription({ className, image, title, ad, description, button, onLeft = true, destination }: ProductDescriptionProps) {
    return (
        <ProductDescriptionStyled className={className} $onleft={onLeft}>
            <div className="image" >
                <picture>
                    <source media="(min-width: 769px)" srcSet={image.desktop && image.desktop} />
                    <source media="(min-width: 429px)" srcSet={image.tablet && image.tablet} />
                    <img src={image.mobile && image.mobile} alt={title} />
                </picture>
            </div>
            <div className="description">
                <p className="ad">{ad && "NEW PRODUCT"}</p>
                <h2 className="title">{title}</h2>
                <p className="text">{description}</p>
                <LinkButton label={button.label} version={button.version} destination={destination} />
            </div>


        </ProductDescriptionStyled>
    )
}


const ProductDescriptionStyled = styled.div<{ $onleft: boolean }>`
display: grid;
grid-template-rows: auto auto;
grid-column: 1fr;
position: relative;
width: 100%;
row-gap: 32px;

.image{
    display: grid;
    place-content: center;
    object-fit: contain;
img{
        width: 100%;
        
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

.image{
img{
        width: 100%;
        height: auto;
    }
}

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
    grid-template-rows: auto;
    gap: clamp(30px, 0.5rem + 8vw,125px);
    .image{
        img{
        width: 100%;
        max-width: 540px;
        height: auto;
    }
        order: ${({ $onleft }) => $onleft ? "1" : "0"};
    }
    .description{
        padding-right: 15px;
        place-items: start;
        text-align: start;
    }
}
`;