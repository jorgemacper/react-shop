import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import AppContext from "../context/AppContext";
import "../styles/components/Payment.css";

const Payment = () => {

    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const navigate = useNavigate();

    const paypalOptions = {
        clientId: 'AWldtUaKoi5R1sCO4EAH3JAr3oE6x3Kq6ZtM_BJBJErl04k_evcMJeVMjT0W31zpwSOBMB5X1J0Bwpwg',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = data => {
        console.log(data);
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            navigate('/checkout/success')
        }
    }
    
    const handleCheckoutSuccess = () => {
        const newOrder = {
            buyer,
            product: cart,
            payment: false
        }
        addNewOrder(newOrder);
        navigate('/checkout/success');
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>

                {cart.map(item => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}

                <div className="Payment-button">
                   <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log('Start Payment...')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.error(error)}
                        onPaymentCancel={data => console.log(data)}
                   />
                </div>
            </div>
            <p><button type="button" onClick={handleCheckoutSuccess}>Pagar a la recepción del envío</button></p>
            <div>

            </div>
        </div>
    );
}

export default Payment;