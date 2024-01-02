import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";

export default function Cart() {
    return (
        <CartStyled>
            <div className="header">
                <p>{"cart (1)"}</p>
                <button>remove all</button>
            </div>
            <div></div>
            <div className="">
                <div className="price">
                    <p>total</p>
                    <p>1684.12$</p>
                </div>
                <Button className="button" label="checkout" version={1} />
            </div>

        </CartStyled>
    )
}


const CartStyled = styled.div`

    position: absolute;
    width: 100%;
    z-index: 5;
    background-color: white;
    top: 100%;
    padding: 32px 28px ;
    border: 1px solid black;

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 60px;

        button{
            border: none;
            background: none;
            padding: 0;
            text-decoration: underline;
        }
    }

    .price{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 24px 0;
        border-top: solid 1px black;
    }

    .button{
        width: 100%;
    }
`;
