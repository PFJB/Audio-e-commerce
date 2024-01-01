import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";
import { theme } from "../../../assets/theme/theme";
import { useNavigate } from "react-router-dom";
import { scrollToTopSmooth } from "../../../utils/window";

export default function OtherCard({ product }) {

    const navigate = useNavigate()
    const navigateTo = (slug: string) => {
        scrollToTopSmooth()
        navigate(`/product-detail/${slug}`)
    }

    return (
        <OtherCardStyled>
            <picture>
                <source media="(min-width: 769px)" srcSet={product.image.desktop} />
                <source media="(min-width: 600px)" srcSet={product.image.tablet} />
                <img src={product.image.tablet} alt={product.name} /></picture>
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
    gap: clamp(25px, 5vw ,40px);

    
    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 32px;
      
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
