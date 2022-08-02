import API from "./index";

export const getCamplist = async page => {
  console.log(page);
  const res = await API.get("/camp", {
    params: {
      page
    }
  });
  return res.data;
};

export const campDetailInfo = async campId => {
  const res = await API.get(`/camp/${campId}`);
  // console.log(res.data);
  return res.data;
};
export const ex = () => {};
