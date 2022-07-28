import API from "./index";

export const getCamplist = async body => {
  const res = await API.get("/camp", body);
  console.log(res.data.data);
  return res.data;
};

export const ex = () => {};
