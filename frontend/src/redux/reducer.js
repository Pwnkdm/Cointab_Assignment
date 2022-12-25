import { FILTER, GET_DETAILS } from "./actionTypes";

const initState = {
  Data: [],
  pages: 6,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DETAILS: {
      return {
        ...state,
        Data: payload.Profiles,
        pages: payload.toatalPages,
      };
    }
    case FILTER: {
      return {
        ...state,
        Data: payload,
      };
    }
    default:
      break;
  }
};
