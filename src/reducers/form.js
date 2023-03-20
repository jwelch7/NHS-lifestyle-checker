const defaultState = {
  modalIsShowing: false,
};

const form = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_MODAL_IS_SHOWING":
      return {
        ...state,
        modalIsShowing: action.payload,
      };
    default:
      return state;
  }
};

export default form;
