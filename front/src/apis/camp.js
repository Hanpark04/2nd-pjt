import API from "./index";

// 캠핑장 전체 리스트 불러오기
export const getCamplist = async page => {
  // console.log(page);
  const res = await API.get("/camp", {
    params: {
      page
    }
  });
  return res.data;
};

// 캠핑장 상세페이지 불러오기
export const campDetailInfo = async campId => {
  const res = await API.get(`/camp/${campId}`);
  // console.log(res.data);
  return res.data;
};

// 캠핑장 전체 검색
export const searchAll = async keyword => {
  const res = await API.get(`/camp/search/${keyword}`);
  return res.data;
};

// export const getLocation = async () => {
//   const res = await API.get(`/camp/`);
//   return res.data;
// }

export const ex = () => {};
