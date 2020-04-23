import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

export default function CheckoutPage() {
  const items = useSelector((state) => state.cart.cartItems);

  const total = items.reduce(
    (accumaltedPrice, item) => accumaltedPrice + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <CheckoutItem />
      <div className="total">
        <span> TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp : 01/2022 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  );
}
