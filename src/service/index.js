import axios from "axios";

const url = "http://localhost:4000/winner";

export const getWiner = (slam) => {
  // const URL = `${url}/${slam}`;
  return axios({
    method: "get",
    url: `${url}/${slam}`,
  }).then((res) => res.data);
};

export const getWinerDate = (player, slam) => {
  return axios({
    method: "post",
    url: `${url}/${slam}/date`,
    data: {
      player,
    },
  }).then((res) => res.data);
};
