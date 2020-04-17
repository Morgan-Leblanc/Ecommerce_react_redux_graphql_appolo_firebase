import  {addItemToCart} from "./cart.utils"

const INTIAL_STATE = {
  hidden: false,
  cartItems: []
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "TOOGLE_TO_HIDDEN":
      return {
        ...state,
        hidden: state.hidden = !action.payload,
      };
    case "ADD_ITEM":
      return{
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer
