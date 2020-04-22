import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout.component"

export default function CheckoutPage() {
  const items = useSelector((state) => state.cart.cartItems);
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
        <span>
          {" "}
          TOTAL: $
          {items.reduce(
            (accumaltedPrice, item) => accumaltedPrice + (item.price * item.quantity),
            0
          )}
        </span>
      </div>
    </div>
  );
}
