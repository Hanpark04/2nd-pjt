import API from "./index";

export const camplist = async body => {
  const res = await API.get("/camp", body);
  return res.data;
};

export const ex = () => {};
