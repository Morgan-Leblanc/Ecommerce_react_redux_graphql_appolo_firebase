import  {addItemToCart, decreaseItem} from "./cart.utils"

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
    case "REMOVE_ITEM":
      return{
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id != action.payload )
      }
    case "DECREASE_ITEM":
      return{
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer
