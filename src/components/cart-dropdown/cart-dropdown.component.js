import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function CartDropDown({ history }) {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);

  const hiddeAndRedirection = (history) => {
    {
      dispatch({ type: "TOOGLE_TO_HIDDEN", payload: hidden });
      history.push("/checkout");
    }
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CartItem />
      </div>

      <CustomButton onClick={() => hiddeAndRedirection(history)}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}
export default withRouter(CartDropDown);
