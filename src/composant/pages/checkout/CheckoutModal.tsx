import styled from "styled-components";
import Button from "../../../reusable-ui/button/Button";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../assets/theme/theme";
import { FaCheck } from "react-icons/fa6";
import CartCard from "../../home/header/CartCard";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";
import { data } from "../../../assets/data";


export default function CheckoutModal() {

    const navigate = useNavigate()
    const { cart } = useContext(CartContext)
    const copyFirst = cart.slice(0, 1).shift()
    const product = copyFirst ? data.find((t) => t.id === copyFirst.id) : null

    return (
        <CheckoutModalStyled>
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
                        <div className="line"></div>
                        <p>and 2 other item(s)</p>
                    </div>
                    <div className="second_field">
                        <p>GRAND TOTAL</p>
                        <p>$ 5,446</p>
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
    padding-top: 150px;
    padding-bottom: 100px;
    padding-left: 23px;
    padding-right: 23px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 
  
    .container{
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
            background-color: ${theme.colors.grey};
            padding: 24px 25px;
            border-radius: 5px 5px 0 0;
            & > p { text-align: center;}
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
`;