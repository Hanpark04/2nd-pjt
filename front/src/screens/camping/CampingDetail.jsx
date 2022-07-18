import React from "react";
import "./CampingDetail.scss";
import test from "@images/test.jpg";

function CampingDetail() {
  //   const [campingName, setCampingName] = useState("수완동 캠핑장");
  const campingName = "수완동 캠핑장";
  const campingIntro = "한줄 소개소개소개";
  return (
    <div className="container flex justify-center">
      <div className="detail">
        <div className="detail_title notoBold fs-52">{campingName}</div>
        <div className="detail_camp">
          <img className="detail_camp_img" src={test} alt="imah" title="test" />
          <div className="detail_camp_intro notoBold fs-30">{campingIntro}</div>
          <div className="detail_camp_sub notoMid fs-20"></div>
        </div>
      </div>
    </div>
  );
}

export default CampingDetail;
