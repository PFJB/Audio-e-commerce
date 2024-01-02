import styled from "styled-components";
import InputWithTitle from "./inputWithTitle";
import { theme } from "../../../assets/theme/theme";

export default function CheckoutForm() {
    return (
        <CheckoutFormStyled>
            <h1>checkout</h1>
            <section className="formSection">
                <h2 className="title">billing details</h2>
                <div className="inputField">
                    <InputWithTitle title={"name"} placeholder={"Alexei Ward"} />
                    <InputWithTitle title={"Email Address"} placeholder={"alexei@mail.com"} />
                    <InputWithTitle title={"Phone Number"} placeholder={"+1 202-555-0136"} />
                </div>
            </section>
            <section className="formSection">
                <h2 className="title">shipping info</h2>
                <div className="inputField">
                    <InputWithTitle title={"Your Address"} placeholder={"1137 Williams Avenue"} />
                    <InputWithTitle title={"ZIP Code"} placeholder={"10001"} />
                    <InputWithTitle title={"City"} placeholder={"New York"} />
                    <InputWithTitle title={"Country"} placeholder={"United States"} />
                </div>

            </section>
            <section className="formSection">
                <h2 className="title">payment details</h2>
                <div className="inputField">
                    <InputWithTitle title={"e-Money Number"} placeholder={"238521993"} />
                    <InputWithTitle title={"e-Money PIN"} placeholder={"6891"} />
                </div>
            </section>

        </CheckoutFormStyled>
    )
}


const CheckoutFormStyled = styled.section`
    display: grid;
    gap: 32px;
    padding: 23px;
    background-color: white;    
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
        }
    }
`;