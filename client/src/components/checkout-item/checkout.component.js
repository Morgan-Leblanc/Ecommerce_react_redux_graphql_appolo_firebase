import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./checkout.styles.scss";

export default function CheckoutItem({}) {
  const item = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();


  return (
    <>
      {item.map((items) => (
        <div className="checkout-item">
          <div className="image-container">
            <img src={items.imageUrl} alt="item" />
          </div>
          <span className="name">{items.name}</span>
          <span className="quantity">
            <div  onClick={() => dispatch({ type: "DECREASE_ITEM", payload: items })} className="arrow">&#10094;</div>
            <span className="value">{items.quantity}</span>
            <div onClick={() => dispatch({ type: "ADD_ITEM", payload: items })} className="arrow">&#10095;</div>
          </span>
          <span className="price">${items.price}</span>
          <div
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: items.id })}
            className="remove-button"
          >
            &#10005;
          </div>
        </div>
      ))}
    </>
  );
}
