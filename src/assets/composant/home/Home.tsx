import styled from "styled-components";
import Header from "./header/Header";

export default function Home() {
    return (
        <HomeStyled>
            <Header />
            <div className="body">
                <div className="container">
                    <section className="navigation_card">
                        <div className="card">
                            <div className="background"></div>
                            <img src="../../../../public/images/shared/desktop/image-category-thumbnail-headphones.png" alt="" />
                            <div className="description">
                                <p >Headphone</p>
                                <p >blabla</p>
                            </div>

                        </div>
                        <div className="card">b</div>
                        <div className="card">c</div>
                    </section>
                </div>
            </div>

        </HomeStyled>
    )
}

const HomeStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: auto;

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 24px;
}
.body .container{
    width: 100%;
    max-width: 1110px;
}

.navigation_card{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    place-items: end;
    width: 100%;
    gap: 16px;
    background-color: aqua;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 22px;
    width: 100%;
    height: 217px;
    background-color: bisque;

    img{
        aspect-ratio: 1/1;
        width: auto;
        height: 60%;
  
        z-index: 2;
    }

    .background{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 76%;
        background-color: red;
    }
    .description{
        position: relative;
        display: grid;
        gap: 17px;
        place-items: center;
        z-index: 2;
    }
}




@media screen and (min-width: 425px) {
    .navigation_card{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;

    }
}
@media screen and (min-width: 768px) {
    .navigation_card{

    }
}

 
`;
