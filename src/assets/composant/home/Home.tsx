import styled from "styled-components";
import Header from "./header/Header";
import NavigationCard from "./navigationCard/NavigationCard";
import Footer from "./footer/Footer";
import { useState } from "react";
import { theme } from "../../theme/theme";

export default function Home() {

    window.onunload = function () { window.scrollTo(0, 0); }

    const [image, setImage] = useState("/images/shared/mobile/image-best-gear.jpg")
    const GetImageUrl = () => {
        const largeur = window.innerWidth
        if (largeur <= 425) setImage("/images/shared/mobile/image-best-gear.jpg")
        if (largeur > 425 && largeur <= 768) setImage("/images/shared/tablet/image-best-gear.jpg")
        if (largeur > 768) setImage("/images/shared/desktop/image-best-gear.jpg")
    }
    window.onresize = GetImageUrl

    return (
        <HomeStyled>
            <Header />
            <div className="body">
                <div className="container">
                    <NavigationCard />



                    <section className="l">
                        <div className="picture"><img src={image} alt="" /></div>
                        <div className="text">
                            <h2>Bringing you the best audio gear</h2>
                            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                                available for you to browse and experience a wide range of our products. Stop by our store to meet
                                some of the fantastic people who make Audiophile the best place to buy your portable audio
                                equipment.</p>
                        </div>
                    </section>
                </div>


            </div>
            <Footer />
        </HomeStyled>
    )
}

const HomeStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;

    .body {
        display: flex;  
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 1.5rem;
        height: 100%;
    
        .l {
            display: grid;
            text-align: center;
            width: 100%;
            height: fit-content;
            row-gap: 2.5rem;
            .picture{
                width: 100%;
                object-fit: cover;
                img{
                    width: 100%;
                }
            }
            .text{
                height: 100%;
                display: grid;
                place-content: center;
                gap: 2rem;
                h2{
                    font-size: ${theme.fonts.size.font_s5};
                    padding-inline: 2px;
                }
            }
        }
    }
    .body > .container{
        display: grid;
        width: 100%;
        max-width: 69.375rem;
        height: 100%;
        min-height: 100vh;
        gap: 120px;
    }

@media screen and (min-width: 426px) {

    .body .l .picture{
     
    }

}
@media screen and (min-width: 769px) {
    .body .l{ grid-template-columns: 1fr 1fr; }
}
`;
