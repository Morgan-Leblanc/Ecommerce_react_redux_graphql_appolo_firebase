import React from "react";
import { useSelector } from "react-redux";
import "./checkout.styles.scss";

export default function CheckoutItem() {
  const item = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {item.map((items) => (
        <div className="checkout-item">
          <div className="image-container">
            <img src={items.imageUrl} alt="item" />
          </div>
          <span className="name">{items.name}</span>
          <span className="quantity">{items.quantity}</span>
          <span className="price">${items.price}</span>
          <div className="remove-button">X</div>
        </div>
      ))}
    </>
  );
}
