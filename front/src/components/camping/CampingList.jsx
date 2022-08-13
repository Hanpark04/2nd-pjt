/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@components/common/Loading";
import { getCamplist } from "../../apis/camp";
import CampingCard from "./CampingCard";
import { reset, setCampList } from "../../store/camp";

function CampingList({ searchClick }) {
  const dispatch = useDispatch();
  // const [viewList, setViewList] = useState([]);
  const campInfo = useSelector(state => state.campSearch); // redux의 선택 정보
  const [page, setPage] = useState(0); // 현재 페이지
  const [loading, setLoading] = useState(false);
  const list = useSelector(state => state.campSearch.campList);
  const [ref, inView] = useInView();

  async function getAndSetCampList() {
    const res = await getCamplist({
      arrange: campInfo.arrange,
      keyword: campInfo.keyword,
      sido: campInfo.sido,
      gugun: campInfo.gugun,
      tags: campInfo.tag,
      page
    });
    console.log(res);
    console.log("출력입니다");
    dispatch(setCampList({ campList: res }));
    // dispatch(setCampList({ campList: [...list, res] }));
    // dispatch(setCampList({ page }));
    setLoading(false);
  }
  // page 달라질때마다 요청보내기
  useEffect(() => {
    console.log(campInfo);
    console.log(page);
    // setLoading(false);
    getAndSetCampList();
  }, [page]);

  // 사용자가 마지막 요소를 보고 있고 로딩 중이 아니라면
  useEffect(() => {
    if (inView && !loading) {
      setLoading(true);
      setPage(page + 1);
      // getAndSetCampList();
      // setLoading(false);
    }
  }, [inView, loading]);

  return (
    <div className="">
      {/* <Loading /> */}
      {list.length !== 0 &&
        list.map(({ campId, facltNm, addr1, homepage, firstImageUrl }) => (
          <CampingCard
            key={v4()}
            campId={campId}
            facltNm={facltNm}
            addr1={addr1}
            homepage={homepage}
            firstImageUrl={firstImageUrl}
          />
        ))}
      {loading ? <Loading /> : <div ref={ref} className="obe" />}
    </div>
  );
}

export default CampingList;
