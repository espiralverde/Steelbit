import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"

const KEY = "pk_test_51LigZ5D3y0FXEzh90phCLqGGPlzraKbs7EV2XHZTvUTj5bkcyyDCjIu0iVsXqhL2tUzKPAXIgFNq5KB937vFBjVe00wLUJMrCi"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate() //uso navigate porque useHistory está deprecado


    const onToken = (token) => {
        setStripeToken(token)
    }
useEffect(() => {
    const makeRequest = async () => {
        try{
            const res = await axios.post(
                "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId : stripeToken.id,
                        amount: 2000,
                    }
                )
                console.log(res.data)
                navigate.push("/success")

        }catch(err){
            console.log(err)
        }
    };
    stripeToken && makeRequest();
}, [stripeToken, navigate])
    
    return (
        <div
            style={{
                height : "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        
        >
            {stripeToken ? (<span>Procesando pago...</span>) :(

            
            <StripeCheckout
                name="Steelbit"
                image="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D493401946124957&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FSteelBitps%2F&tbnid=q3vVT0yNeDxLhM&vet=12ahUKEwivs8SE1p76AhXdpZUCHbPSC34QMygAegQIARBH..i&docid=q-i4D9RSYOSmUM&w=1640&h=924&q=steel%20bit%20power%20store&ved=2ahUKEwivs8SE1p76AhXdpZUCHbPSC34QMygAegQIARBH"
                billingAddress
                shippingAddress
                description="Total a pagar: $20"
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}            
                >
                    Pagar
                </button>
            </StripeCheckout>
            )}
        </div>
    )
}
export default Pay;