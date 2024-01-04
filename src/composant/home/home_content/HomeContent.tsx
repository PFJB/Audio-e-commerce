import styled from "styled-components";
import ProductDescription from "../../../reusable-ui/product_description/ProductDescription";
import { HOME_EARPHONE_DESKTOP, HOME_EARPHONE_MOBILE, HOME_EARPHONE_TABLET, HOME_PRESENTATION_SPEAKER_DESKTOP, HOME_PRESENTATION_SPEAKER_MOBILE, HOME_PRESENTATION_SPEAKER_TABLET, HOME_SPEAKER_DESKTOP, HOME_SPEAKER_MOBILE, HOME_SPEAKER_TABLET } from "../../../enums/product";
import { theme } from "../../../assets/theme/theme";
import LinkButton from "../../../reusable-ui/button/LinkButton";


export default function HomeContent() {

	return (
		<HomeContentStyled>

			<ProductDescription
				className="descriptionModified"
				title="ZX9 SPEAKER"
				description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
				button={{ label: "see product", version: 2 }}
				image={{
					mobile: HOME_PRESENTATION_SPEAKER_MOBILE,
					tablet: HOME_PRESENTATION_SPEAKER_TABLET,
					desktop: HOME_PRESENTATION_SPEAKER_DESKTOP
				}}
				onLeft={false}
			/>


			<div className="pic2">
				<div className="text2">
					<p>ZX7 SPEAKER</p>
					<LinkButton label="see product" version={2} destination="/product-detail/zx7-speaker" />
				</div>
				<picture>
					<source media="(min-width: 769px)" srcSet={HOME_SPEAKER_DESKTOP} />
					<source media="(min-width: 429px)" srcSet={HOME_SPEAKER_TABLET} />
					<img src={HOME_SPEAKER_MOBILE} alt={"image speaker zx7"} />
				</picture>
			</div>

			<div className="pic4">
				<div className="pic3">
					<picture>
						<source media="(min-width: 769px)" srcSet={HOME_EARPHONE_DESKTOP} />
						<source media="(min-width: 429px)" srcSet={HOME_EARPHONE_TABLET} />
						<img src={HOME_EARPHONE_MOBILE} alt={"image earphones yx1"} />
					</picture>
				</div>
				<div className="text">
					<p>YX1 EARPHONES</p>
					<LinkButton label="see product" version={2} destination="/product-detail/yx1-earphones" />
				</div>
			</div>
		</HomeContentStyled>
	)
}


const HomeContentStyled = styled.section`
	display: grid;
	gap: 32px;
  	width: 100%;


.descriptionModified{
	background-color: orange;
	.image{
		position: relative;
		
	
		height: 493px;
		width: 100%;
		img{
			bottom: 0;
			left: 0;
			height: 50%;
			width: auto;
		}
	}
}





	.pic1{
		display: grid;
		grid-template-columns: 1fr 1fr;
    	background-color: ${theme.colors.brown};
    	width: 100%;
		height: auto;
		.image2{
			width: 100%;
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