import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BagLogo from "../../assets/bagshop.svg";
import "./cart-icon.styles.scss";

export default function CartIcon() {
  const hidden = useSelector((state) => state.cart.hidden);
  const itemQuantity = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch({ type: "TOOGLE_TO_HIDDEN", payload: hidden })}
      className="cart-icon"
    >
      <img className="shopping-icon" src={BagLogo} alt="bagshop logo" />
      <span className="item-count">{itemQuantity.reduce((accumaltedQuantity,cartItem) => accumaltedQuantity + cartItem.quantity,0 )}</span>
    </div>
  );
}
