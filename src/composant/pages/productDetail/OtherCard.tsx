import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";
import { theme } from "../../../assets/theme/theme";
import { useNavigate } from "react-router-dom";
import { scrollToTopSmooth } from "../../../utils/window";


type Others = {

    slug: string,
    name: string,
    image: {
        mobile: string,
        tablet: string,
        desktop: string
    }

}

export default function OtherCard({ product }: { product: Others }) {

    const navigate = useNavigate()
    const navigateTo = (slug: string) => {
        scrollToTopSmooth()
        navigate(`/product-detail/${slug}`)
    }

    return (
        <OtherCardStyled>
            <picture>
                <source media="(min-width: 48.0625rem)" srcSet={product.image.desktop} />
                <source media="(min-width: 37.5rem)" srcSet={product.image.tablet} />
                <img src={product.image.mobile} alt={product.name} /></picture>
            <div className="description">
                <p>{product.name}</p>
                <Button label='see product' version={1} onClick={() => navigateTo(product.slug)} />
            </div>
        </OtherCardStyled>
    )
}

const OtherCardStyled = styled.div`

    display: grid;
    width: 100%;
    gap: clamp(1.5625rem, 5vw ,2.5rem);

    
    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 2rem;
      
        letter-spacing: ${theme.fonts.letterSpacing.char_s4};
        font-size: ${theme.fonts.size.font_s4};
        color: ${theme.colors.black};
        p{ font-weight: ${theme.fonts.weigth.bold};
}
    }
        picture{
        width: 100%;
        object-fit: contain;
        img{
            width: 100%;
            height: auto;
        }
    }


`;
