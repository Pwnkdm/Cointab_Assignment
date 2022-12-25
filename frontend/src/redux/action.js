import axios from "axios";
import { FILTER, GET_DETAILS } from "./actionTypes";

export const fetchApi = (payload) => (dispatch) => {
  axios
    .post("https://dull-red-gharial-robe.cyclic.app/user")
    .then((res) => alert(res.data.message))
    .catch((err) => console.log(err));
};

export const deleteApi = () => (dispatch) => {
  axios
    .delete("https://dull-red-gharial-robe.cyclic.app/user")
    .then((res) => alert(res.data.message))
    .catch((err) => console.log(err));
};

export const getUserApi = () => (dispatch) => {
  axios
    .get("https://dull-red-gharial-robe.cyclic.app/user")
    .then((res) => dispatch({ type: GET_DETAILS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const filterApi = (data) => (dispatch) => {
  axios
    .get(`https://dull-red-gharial-robe.cyclic.app/user/search/${data}`)
    .then((res) => dispatch({ type: FILTER, payload: res.data.Profiles }))
    .catch((err) => console.log(err));
};
