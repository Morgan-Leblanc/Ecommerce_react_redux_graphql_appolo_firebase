import React from "react";
import { useSelector } from "react-redux";
import "./cart-item.styles.scss";

export default function CartItem() {
  const item = useSelector((state) => state.cart.cartItems);
  console.log(item);
  return (
    <>
      {item.length ? (
        item.map((items) => (
          <div className="cart-item">
            <img src={items.imageUrl} alt="item" />
            <div className="item-details">
              <span className="name">{items.name}</span>
              <span className="price">
                {items.quantity} x ${items.price}
              </span>
            </div>
          </div>
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </>
  );
}
