import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";
import { theme } from "../../../assets/theme/theme";
import { useContext, useState } from "react";
import CartContext from "../../../context/CartContext";
import ImgLoading from "../../../reusable-ui/img/ImgLoading";

type ProductDescriptionProps = {
    className?: string,
    id: number
    image: {
        mobile: string,
        tablet: string,
        desktop: string
    }
    title: string,
    ad?: boolean,
    description: string | undefined,
    onLeft?: boolean,
    price: number
}

export default function ProductDetail({ className, id, image, title, ad, description, onLeft = true, price }: ProductDescriptionProps) {

    const [count, setCount] = useState(0)

    const { addToCart } = useContext(CartContext)
    const plus = () => { setCount(count + 1) }
    const minus = () => { setCount(count !== 0 ? count - 1 : 0) }

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });


    return (
        <ProductDetailStyled className={className} $onleft={onLeft}>
            <div className="image" >
                <ImgLoading desktop={image.desktop} mobile={image.mobile} tablet={image.tablet} alt={title} />
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
                    <Button
                        label="add to cart"
                        version={1}
                        onClick={() => { count !== 0 && addToCart(id, count, price) }}
                    />
                </div>
            </div>


        </ProductDetailStyled>
    )
}


const ProductDetailStyled = styled.div<{ $onleft: boolean }>`
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

    object-fit: contain;
img{
        width: 100%;
        max-width: 540px;
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
        margin-bottom: 1.5rem;
    }
    .title{
        color: ${theme.colors.black};
        font-weight: ${theme.fonts.weigth.bold};
        font-size: ${theme.fonts.size.font_s5};
        letter-spacing: ${theme.fonts.letterSpacing.char_s0};
        margin-bottom: 1.5rem;
    }
    .text{
        color: ${theme.colors.blackL};
        font-weight: ${theme.fonts.weigth.medium};
        font-size: ${theme.fonts.size.font_s2};
        line-height: ${theme.fonts.lineSpace.line_s2};
        margin-bottom: 1.5rem;
    }

    .price{
        color: ${theme.colors.black};
        font-weight: ${theme.fonts.weigth.bold};
        font-size: ${theme.fonts.size.font_s3};
        letter-spacing: ${theme.fonts.letterSpacing.char_s2};
        margin-bottom: 1.5rem;
    }

    .add_to_cart{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .plus_minus{
        display: grid;
        grid-template-columns: 1fr 0.5fr 1fr;
        width: 7.5rem;
        height: 3rem;
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
@media screen and (min-width: 640px) {
    row-gap: 3.25rem;
	grid-template-columns: 1.5fr 2fr;
    grid-template-rows: auto;
    gap: clamp(3.125rem, 2rem + 6vw,7.8125rem);

    .description .ad{ margin-bottom: 1rem; }
    .description .title{ margin-bottom: 2rem; }
}

@media screen and (min-width: 64rem) {
	grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto;
    gap: 124px;
    .image{ order: ${({ $onleft }) => $onleft ? "1" : "0"}; }
    .description{ padding-right: 0.9375rem; }
}
`;