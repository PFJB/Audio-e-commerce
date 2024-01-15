import { useState } from "react";
import ReactLoading from 'react-loading';
import styled from "styled-components";

interface image {
    mobile: string,
    desktop?: string,
    tablet?: string,
    alt: string,
    className?: string
}

export default function ImgLoading({ mobile, desktop, tablet, alt, className }: image) {

    const [isLoading, setIsLoading] = useState(true)

    return (
        <ImgLoadingStyled className={className}>

            <picture>
                {desktop && <source media="(min-width: 1024px)" srcSet={desktop} />}
                {tablet && <source media="(min-width: 640px)" srcSet={tablet} />}
                <img src={mobile} onLoad={() => setIsLoading(false)} alt={alt} style={{ display: isLoading ? "none" : "block" }} />
            </picture>
            <div className="loader" style={{ display: isLoading ? "grid" : "none" }}><ReactLoading type="spin" color="black" /></div>
        </ImgLoadingStyled>
    )
}

const ImgLoadingStyled = styled.div`
    width: 100%;
    height: 100%;
    object-fit: contain;
    img{
        width: 100%;
        height: auto;
        animation: 1s fadeIn;
    }
    .loader{
        display: grid;
        place-content: center;
        width: 100%;
        height: 100%;
    }
  

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
`;