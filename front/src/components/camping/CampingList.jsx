import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { getCamplist } from "../../apis/camp";
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import CampingCard from "./CampingCard";

function CampingList() {
  const [campList, setCampList] = useState([]);

  useEffect(() => {
    // await 를 사용하기 위해서 Async 선언
    async function getAndSetCampList() {
      const res = await getCamplist();
      // setCampList(res.slice(10));
      setCampList(res);
      console.log(res);
    }
    getAndSetCampList();
  }, []);
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
