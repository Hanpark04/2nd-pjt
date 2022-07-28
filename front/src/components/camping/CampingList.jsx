import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { v4 } from "uuid";
import { getCamplist } from "../../apis/camp";
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import CampingCard from "./CampingCard";

function CampingList() {
  // { facltNm, add1, homepage }
  const [campList, setCampList] = useState([]);
  // const [campList, setCampList] = useState([
  //   {
  //     campId: "",
  //     facltNm: "",
  //     add1: "",
  //     homepage: "",
  //     firstImageUrl: ""
  //   }
  // ]); // 배열 선언

  // const [sizeList, setSizeList] = useState(0); // 캠프 리스트의 갯수 세기
  useEffect(
    () => {
      // await 를 사용하기 위해서 Async 선언
      async function getAndSetCampList() {
        const res = await getCamplist();
        // if (res.length !== 0) {
        //   setCampList(campList);
        //   console.log(campList.length);
        //   console.log(campList);
        // }
        console.log(res);
        // setCampList(res.slice(10));
        setCampList(res);
        // console.log(campInfoList);
      }
      getAndSetCampList();
    },
    []
    // [campConditions]
  );
  return (
    <div className="">
      {campList.length !== 0 &&
        campList.map(({ campId, facltNm, addr1, homepage, firstImageUrl }) => (
          <CampingCard
            key={v4()}
            campId={campId}
            facltNm={facltNm}
            addr1={addr1}
            homepage={homepage}
            firstImageUrl={firstImageUrl}
          />
        ))}
      {/* <CampingCard /> */}
    </div>
  );
}

// CampingList.defaultProps = {
//   facltNm: null,
//   add1: null,
//   homepage: null
// };
// CampingList.propTypes = {
//   facltNm: PropTypes.string,
//   add1: PropTypes.string,
//   homepage: PropTypes.string
// };
export default CampingList;
