export const initialState = {
  photoRedux: {},
  isFetching: null,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "START_SEARCH":
      return { ...state, isFetching: action.isFetching };
    case "GET_PHOTOS":
      return {
        ...state,
        photoRedux: action.payload,
        isFetching: action.isFetching,
      };
    case "NOT_GET_PHOTOS":
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
}
