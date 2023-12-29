import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { useState } from "react";
import Button from "../../../../reusable-ui/button/Button";

export default function HomeContent() {

	const [image, setImage] = useState("")
	const [image1, setImage1] = useState("")
	const [image2, setImage2] = useState("")

	const GetImageUrl = () => {
		const largeur = window.innerWidth
		if (largeur <= 425) {
			setImage1("/images/home/mobile/image-speaker-zx7.jpg")
			setImage("/images/home/mobile/image-earphones-yx1.jpg")
			setImage2("/images/home/mobile/image-speaker-zx9.png")
		}
		if (largeur > 425 && largeur <= 768) {
			setImage("/images/home/tablet/image-earphones-yx1.jpg")
			setImage1("/images/home/tablet/image-speaker-zx7.jpg")
			setImage2("/images/home/tablet/image-speaker-zx9.png")

		}
		if (largeur > 768) {
			setImage1("/images/home/desktop/image-speaker-zx7.jpg")
			setImage("/images/home/desktop/image-earphones-yx1.jpg")
			setImage2("/images/home/desktop/image-speaker-zx9.png")
		}
	}

	window.onload = GetImageUrl
	window.onresize = GetImageUrl


	return (
		<HomeContentStyled>

			<div className="pic1">
				<div className="image2"><img src={image2} alt="" /></div>
				<div>
				</div>
			</div>


			<div className="pic2">
				<div className="text2">
					<p>ZX7 SPEAKER</p>
					<Button label="see product" version={2} />
				</div>
				<img src={image1} alt="" />
			</div>


			<div className="pic4">
				<div className="pic3"><img src={image} alt="" /></div>
				<div className="text">
					<p>YX1 EARPHONES</p>
					<Button label="see product" version={2} />
				</div>
			</div>
		</HomeContentStyled>
	)
}


const HomeContentStyled = styled.section`
	display: grid;
	gap: 32px;
  	width: 100%;


	.pic1{
		display: grid;
		grid-template-rows: 1fr 3fr;
    	background-color: ${theme.colors.brown};
    	width: 100%;
		.image2{
			width: 50%;
			object-fit: contain;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}



  .pic2{
	position: relative;
    background-color: ${theme.colors.grey};
    width: 100%;
	object-fit: contain;

	.text2{
		position: absolute;
		top: 50%;
		left:10%;
		z-index: 5;
		transform: translateY(-50%);
		display: flex;
    	flex-direction: column;
    	justify-content: center;
    
		gap: 32px;

    	p{
        	font-size: ${theme.fonts.size.font_s5};
			font-weight: ${theme.fonts.weigth.bold};

      	}

	}
	img{
		position: relative;
		width: 100%;
		height: 100%;
	}
  }

  .pic4{
    display: grid;
	grid-template-rows: 1fr 1fr;
	width: 100%;
    gap: 24px;

    & *{
        font-weight: ${theme.fonts.weigth.bold};
        text-transform: uppercase;
    }

    .pic3 {
    	width: 100%;
    	img{
    		width: 100%;
    		height: 100%;
    	}
    }
    .text{
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	width: 100%;
    	height: 100%;
    	padding-left: 10%;
		gap: 32px;
		background-color: ${theme.colors.grey};

    	p{
        	font-size: ${theme.fonts.size.font_s5};
      	}

    }
  }

@media screen and (min-width: 426px) {
    .pic4{
		grid-template-columns: 1fr 1fr;
		gap: 11px;

	}
}

@media screen and (min-width: 376px) {

}

@media screen and (min-width: 730px) {

}
`;