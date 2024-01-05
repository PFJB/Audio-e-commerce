import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../assets/theme/theme";
import { FaCheck } from "react-icons/fa6";
import CartCard from "../../home/header/cart/composant/CartCard";
import { useContext, useState } from "react";
import CartContext from "../../../context/CartContext";
import { data } from "../../../assets/data";
import { formatPrice } from "../../../utils/math";

export default function CheckoutModal() {

    const navigate = useNavigate()
    const [display, setDisplay] = useState(false)
    const { cart, sum } = useContext(CartContext)
    const copyFirst = cart.slice(0, 1).shift()
    const product = copyFirst ? data.find((productData) => productData.id === copyFirst.id) : null

    return (
        <CheckoutModalStyled $display={display}>
            <div className="container">
                <div className="orange"><FaCheck /></div>
                <h2>THANK YOU FOR YOUR ORDER</h2>
                <p >You will receive an email confirmation shortly.</p>
                <div className="recap">
                    <div className="firstField">

                        {product && copyFirst && <CartCard
                            id={product.id}
                            title={product.name}
                            image={product.cart}
                            price={copyFirst.price}
                            quantity={copyFirst.quantity}
                        />}
                        <div className="product">
                            <div>
                                {cart && cart.map((product) => {
                                    const find = data.find((d) => d.id === product.id)
                                    if (find && find.id !== copyFirst?.id) {
                                        return <CartCard
                                            key={product.id}
                                            id={product.id}
                                            image={find.cart}
                                            price={find.price ?? 0}
                                            title={find.name}
                                            quantity={product.quantity}
                                        />
                                    }
                                })}
                            </div>
                        </div>
                        <div className="line"></div>
                        <button onClick={() => setDisplay(display ? false : true)}>
                            {!display ? `and ${cart.length - 1} other item(s)` : "View less"}
                        </button>
                    </div>
                    <div className="second_field">
                        <p>GRAND TOTAL</p>
                        <p>{formatPrice(sum("price") + 50 + (sum("price") * 20 / 100))}</p>
                    </div>
                </div>
                <Button
                    className="button"
                    label="back to home"
                    onClick={() => navigate("/")} />
            </div>
        </CheckoutModalStyled>
    )
}


const CheckoutModalStyled = styled.div`

    display: flex;
    position: fixed; 
    z-index: 3;
    padding-left: 23px;
    padding-right: 23px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 

    .product{
        display: grid;
        grid-template-rows: ${({ $display }) => $display ? "1fr" : "0fr"};
        transition:   0.8s  ;
        & > div{
            display:grid;
            grid-row:1 / span 2;
            overflow: hidden;
        }
    }
    .container{
        position: relative;
        height: fit-content;
        margin: auto;
        padding: 32px;
        background-color: white;
        border-radius: ${theme.radius.light};
        
        & > h2{
            font-size: ${theme.fonts.size.font_s4};
            font-weight: ${theme.fonts.weigth.bold};
            line-height: 25px;
            letter-spacing: 0.86px;
            margin-bottom: 1rem;
        }

        & > p{
            color: ${theme.colors.blackL};
            font-size: ${theme.fonts.size.font_s2};
            font-weight: ${theme.fonts.weigth.medium};
            line-height: 25px;
            margin-bottom: 1.5rem;
        }
        .firstField{
            display: grid;
            padding: 24px 25px;
            border-radius: 5px 5px 0 0;
            background-color: ${theme.colors.grey};

            & > button {
                background-color: transparent;
                border: none;
                color: ${theme.colors.blackL};
                font-size: ${theme.fonts.size.font_s0};
                font-weight: ${theme.fonts.weigth.bold};
                cursor: pointer;
                &:hover{text-decoration: underline;}
            }
            & .line{
                margin: 12px 0;
                border: 1px solid #00000010;
                border-color: #00000010;
            }
        }

        .second_field{
            
            padding: 15px 24px 19px 24px;
            background-color: ${theme.colors.black};
            border-radius: 0 0 5px 5px;

            :first-child{
                margin-bottom: 8px;
                color: ${theme.colors.white50};
            }
            :last-child{ color: white; }
        }

        .orange{
            display: grid;
            place-content: center;
            aspect-ratio: 1;
            width: 64px;
            border-radius: 50%;   
            background-color: ${theme.colors.brown};
            color: white;
            font-size: 30px;
            margin-bottom: 23px;
        }
    }
    .button{
        margin-top: 23px;
        width:100%;
    }

    @media (min-width: 769px){
        .recap{
            display: grid;
            grid-template-columns: 1fr 1fr;

            .second_field{
                display: grid;
                padding-left: 32px;
                padding-bottom: 41px;
                transition: 1s;
                place-content: end start;
            }
        }
    }
`;