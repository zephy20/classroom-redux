import { SET_ACTIVE_CLASS, SHOW_AVERAGE_MARKS } from "./types";

export const setActiveClass = activeClass => ({
  type: SET_ACTIVE_CLASS,
  payload: {
    activeClass: activeClass
  }
});

export const setAverage = status => ({
  type: SHOW_AVERAGE_MARKS,
  payload: {
    showAverage: status
  }
});
