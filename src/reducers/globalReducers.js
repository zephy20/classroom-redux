import { SET_ACTIVE_CLASS } from "../actions/types";
import data from "../classroom_data.json";

let initialData = {
  classroomData: data,
  activeClass: null
};

const globals = (state = initialData, action) => {
  switch (action.type) {
    case SET_ACTIVE_CLASS:
      return {
        ...state,
        activeClass: action.payload.activeClass
      };

    default:
      return state;
  }
};

export default globals;
