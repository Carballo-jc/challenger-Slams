import types from "../types";

const championList = [
  "us-open",
  "australian-open",
  "wimbledon",
  "roland-garros",
];

export const SlamReducer = (state = { championList }, action) => {
  switch (action.type) {
    case types.slams:
      return {
        slams: [{ ...state }],
      };
    default:
      return state;
  }
};
