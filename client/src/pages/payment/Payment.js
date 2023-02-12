import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import "./Payment.style.css";

const Payment = () => {
  const stripe = useStripe();
  const elemets = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://netflix-clone-v1-jithinppp.vercel.app/payment",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 1000,
          name: "jithin",
        }),
      }
    );
    const res = await response.json();
    console.log(res);
  };

  return (
    <div className="payment__container">
      <form onSubmit={paymentHandler} style={{ width: "500px" }}>
        <h3>credit card</h3>
        <CardElement />
        <button type="submit">pay now</button>
      </form>
    </div>
  );
};

export default Payment;
