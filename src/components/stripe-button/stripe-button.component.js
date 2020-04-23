import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_XQjJMr8vzaMRS0NWIooaqCzk00HFHOz5JB'

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="ECommerce Ltd"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total  is $ ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};
export default StripeButton;
