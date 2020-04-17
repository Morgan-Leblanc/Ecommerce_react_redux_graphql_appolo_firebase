const INTIAL_STATE = {
  hidden: false,
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "TOOGLE_TO_HIDDEN":
      return {
        ...state,
        hidden: state.hidden = !action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer
