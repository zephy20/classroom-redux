import { SHOW_AVERAGE_MARKS } from "../actions/types";

let initialData = {
  showAverage: false
};

const mainPanel = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_AVERAGE_MARKS:
      return {
        ...state,
        showAverage: action.payload.showAverage
      };

    default:
      return state;
  }
};

export default mainPanel;
