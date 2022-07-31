import API from "./index";

export const getCamplist = async body => {
  const res = await API.get("/camp", body);
  console.log(res.data);
  return res.data;
};

export const campDetailInfo = async campId => {
  const res = await API.get(`/camp/${campId}`);
  // console.log(res.data);
  return res.data;
};
export const ex = () => {};
