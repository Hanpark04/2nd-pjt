import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useInView } from "react-intersection-observer";
// import InfiniteScroll from "react-infinite-scroll-component";
import { getCamplist } from "../../apis/camp";
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import CampingCard from "./CampingCard";

function CampingList() {
  const [campList, setCampList] = useState([]);
  const [page, setPage] = useState(1); // 현ㅈㅐ 페이지
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();

  // const observer = new IntersectionObserver(callback, o);

  useEffect(() => {
    // await 를 사용하기 위해서 Async 선언
    async function getAndSetCampList() {
      const res = await getCamplist(page);
      // setCampList(res.slice(10));
      setCampList([...campList, ...res]);
      // setCampList(res);
    }
    getAndSetCampList();
    setLoading(false);
  }, [page]);

  // 사용자가 마지막 요소를 보고 있고 로딩 중이 아니라면
  useEffect(() => {
    if (inView && !loading) {
      setLoading(true);
      setPage(page + 1);
    }
  }, [inView, loading]);

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

      {loading ? <div>로딩중</div> : <div ref={ref} className="obe" />}
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
