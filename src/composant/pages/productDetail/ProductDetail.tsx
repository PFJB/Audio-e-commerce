import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";
import { theme } from "../../../assets/theme/theme";
import { useState } from "react";


type ProductDescriptionProps = {
    className?: string,
    image: {
        mobile: string,
        tablet: string,
        desktop: string
    }
    title: string,
    ad?: boolean,
    description: string | undefined,
    onLeft?: boolean,
    price: number | bigint
}

export default function ProductDetail({ className, image, title, ad, description, onLeft = true, price }: ProductDescriptionProps) {

    const [count, setCount] = useState(0)
    const plus = () => { setCount(count + 1) }
    const minus = () => { setCount(count !== 0 ? count - 1 : 0) }
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <ProductDetailStyled className={className} $onLeft={onLeft}>
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
                <p className="price">{USDollar.format(price)}</p>
                <div className="add_to_cart">
                    <div className="plus_minus">
                        <button onClick={minus}>-</button>
                        <div>{count}</div>
                        <button onClick={plus}>+</button>
                    </div>
                    <Button label="add to cart" version={1} />
                </div>
            </div>


        </ProductDetailStyled>
    )
}


const ProductDetailStyled = styled.div`
display: grid;
grid-template-rows: auto auto;
grid-column: 1fr;
position: relative;
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
        place-items: start;
        text-align: start;
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

    .price{
        color: ${theme.colors.black};
        font-weight: ${theme.fonts.weigth.bold};
        font-size: ${theme.fonts.size.font_s3};
        letter-spacing: ${theme.fonts.letterSpacing.char_s2};
        margin-bottom: 24px;
    }

    .add_to_cart{
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }

    .plus_minus{
        display: grid;
        grid-template-columns: 1fr 0.5fr 1fr;
        width: 120px;
        height: 48px;
        background-color: ${theme.colors.grey};
        font-size: ${theme.fonts.size.font_s0};

        div{
            display: grid;
            place-content: center;
            color: ${theme.colors.black};
            font-weight: ${theme.fonts.weigth.bold};

        }
        button{
            display: grid;
            place-content: center;
            background: none;
            border: none;
            grid-area: auto / span 1;
            color: #00000082;
            font-weight: ${theme.fonts.weigth.bold};

            &:hover{color: ${theme.colors.brown};}
            cursor: pointer;
        }
    }

}
@media screen and (min-width: 426px) {
    row-gap: 52px;

    .description .ad{ margin-bottom: 16px; }
    .description .title{ margin-bottom: 32px; }
}

@media screen and (min-width: 769px) {
	grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: clamp(50px, 2rem + 6vw,125px);
    .image{ order: ${({ $onLeft }) => $onLeft ? "1" : "0"}; }
    .description{ padding-right: 15px; }
}
`;