import * as type from './actionTypes';

const initialState = [];

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case type.ADD_COURSE:
      return [...state, action.payload];

    case type.DELETE_COURSE:
      return state.filter((course) => course.id !== action.payload);

    default:
      return state;
  }
}
