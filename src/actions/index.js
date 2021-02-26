import types from "../types";

export const getSlam = (slams) => ({
  type: types.slams,
  payload: slams,
});
