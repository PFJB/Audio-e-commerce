import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";
import InputWithTitle from "./InputWithTitle";

export default function CheckoutForm() {
    return (
        <CheckoutFormStyled>
            <h1>checkout</h1>
            <section className="formSection">
                <h2 className="title">billing details</h2>
                <div className="inputField layout1">
                    <InputWithTitle title={"name"} placeholder={"Alexei Ward"} />
                    <InputWithTitle title={"Email Address"} placeholder={"alexei@mail.com"} />
                    <InputWithTitle title={"Phone Number"} placeholder={"+1 202-555-0136"} />
                </div>
            </section>
            <section className="formSection">
                <h2 className="title">shipping info</h2>
                <div className="inputField  layout1">
                    <InputWithTitle className={"span2"} title={"Your Address"} placeholder={"1137 Williams Avenue"} />
                    <InputWithTitle title={"ZIP Code"} placeholder={"10001"} />
                    <InputWithTitle title={"City"} placeholder={"New York"} />
                    <InputWithTitle title={"Country"} placeholder={"United States"} />
                </div>

            </section>
            <section className="formSection layout1">
                <h2 className="title">payment details</h2>
                <div className="inputField">
                    <div className="ratio">
                        <input type="radio" id="e-Money" name="payment" value="e-Money" checked />
                        <label htmlFor="e-Money">e-Money</label>
                    </div>
                    <div className="ratio">
                        <input type="radio" id="cash" name="payment" value="cash" />
                        <label htmlFor="cash">Cash on Delivery</label>
                    </div>

                </div>
                <InputWithTitle title={"e-Money Number"} placeholder={"238521993"} />
                <InputWithTitle title={"e-Money PIN"} placeholder={"6891"} />


            </section>

        </CheckoutFormStyled >
    )
}


const CheckoutFormStyled = styled.section`
    display: grid;
    gap: 32px;
    padding: 23px;
    border-radius: ${theme.radius.light};
    background-color: white;
    max-width: 730px;

    h1{
        text-transform: uppercase;
        color: ${theme.colors.black};
        font-weight: ${theme.fonts.weigth.bold};
        letter-spacing: ${theme.fonts.letterSpacing.char_s0};
        font-size: ${theme.fonts.size.font_s5};
    }

    .formSection{
        display: grid;
        gap: 16px;
        .title{
            font-size: ${theme.fonts.size.font_s0};
            color: ${theme.colors.lightBrown};
            letter-spacing: 0.93px;
            line-height: ${theme.fonts.lineSpace.line_s2};
            text-transform: uppercase;
            font-weight: ${theme.fonts.weigth.bold};
        }
        .inputField{
            display: grid;
            gap: 24px;
            color: black;


          .ratio{
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 16px;
            border: 1px solid hsl(0, 0%, 81%);
            color: #000000;
            border-radius: ${theme.radius.light};
            font-size: ${theme.fonts.size.font_s1};
            font-weight: ${theme.fonts.weigth.bold};
            gap: 16px;
            height: 56px;
            width: 100%;

  
            input[type=radio]{
         
                display: grid;
                place-content: center;
                padding: 0;
                appearance: none;
                background-color: #fff;
                margin: 0;
                appearance: none;
                color: currentColor;
                aspect-ratio: 1/1;
                width: 20px;
                height: 20px;
                border: 1px solid gray;
                border-radius: 50%;

            }
            input[type=radio]::before {
                content: "";
                width: 10px;
                height: 10px;
                border-radius: 50%;
                transform: scale(0);
                transition: 120ms transform ease-in-out;
                box-shadow: inset 10px 10px #D87D4A;

            }
            input[type=radio]:checked::before {
                transform: scale(1);
            }

            label{
                display: flex;
                align-items: center;
                width: 100%;
                height: 100%;
            }
          }
        }

    }

@media (min-width: 426px){
    .layout1{grid-template-columns: 1fr 1fr;}
    .span2{grid-area: auto /span 2;}
}

`;