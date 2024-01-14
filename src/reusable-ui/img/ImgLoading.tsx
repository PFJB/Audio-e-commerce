import { useState } from "react";
import ReactLoading from 'react-loading';
import styled from "styled-components";

export default function ImgLoading({ src, alt, className }: { src: string, alt: string, className?: string }) {

    const [isLoading, setIsLoading] = useState(true)

    return (
        <ImgLoadingStyled className={className}>
            <img src={src} onLoad={() => setIsLoading(false)} alt={alt} style={{ display: isLoading ? "none" : "block" }} />
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