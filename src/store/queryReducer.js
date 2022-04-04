const initialState = { query: '' };

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "set":
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

export default accountReducer;