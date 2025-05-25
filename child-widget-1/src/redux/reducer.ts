import { Action } from "redux";

const initialState = {
  product: 1,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "MULTIPLY":
      return { ...state, product: state.product * 2 };
    case "DIVIDE":
      return { ...state, product: state.product / 2 };
    default:
      return state;
  }
};

export default reducer;
