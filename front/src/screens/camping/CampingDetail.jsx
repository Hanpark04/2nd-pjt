import React, { useEffect, useState } from "react";
import "./CampingDetail.scss";
import temp from "@images/temp_1.jpeg";
import Location from "@components/common/Location";
import { useParams } from "react-router-dom";
import { campDetailInfo } from "../../apis/camp";

function CampingDetail() {
  const distance = "77";
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const [tel, setTel] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [homepage, setHomepage] = useState("");
  const [intro, setIntro] = useState("");
  const [sbrsCl, setSbrsCl] = useState("");
  const [posblFcltyCl, setPosblFcltyCl] = useState("");

  // const [campInfo, setCampInfo] = useState();
  const { id: campId } = useParams(); // 파라미터 정보 가져오기
  const moveSite = () => {
    window.open(`${homepage}`);
  };

  const getCampDetailInfo = async () => {
    const res = await campDetailInfo(campId);
    setName(res.facltNm);
    setAddr(res.addr1);
    setImgUrl(res.firstImageUrl);
    setIntro(res.lineIntro);
    setHomepage(res.homepage);
    setTel(res.tel);
    console.log(tel);
    setSbrsCl(res.sbrsCl);
    setPosblFcltyCl(res.posblFcltyCl);
    console.log(name);
  };

  useEffect(() => {
    getCampDetailInfo(); // 초기에 정보 받아오기
  }, [campId]);

  return (
    <div className="container flex justify-center">
      <div className="detail">
        <div className="detail_title notoBold fs-52">{name}</div>
        <div className="detail_camp">
          <div className="detail_camp_img_box">
            {imgUrl === "null" && (
              <img src={imgUrl} alt="campingImage" title="test" />
            )}
            {imgUrl && <img src={temp} alt="campingImage" title="test" />}
          </div>
          <div className="detail_camp_intro notoBold fs-30">
            {/* {intro !== "\\N" && { intro }} */}
            {intro}
            {/* {intro === "\\N" && <div>한줄 소개가 없습니다</div>} */}
          </div>
          <div className="detail_camp_sub notoMid fs-20 flex">
            <div className="detail_camp_sub_add">{addr}</div>
            <div className="detail_camp_sub_distance">~{distance}km</div>
          </div>
          <div className="detail_camp_sub notoMid fs-20">
            {tel}
            {/* {tel !== "\\N" && { tel }}
            {tel === "\\N" && <div> 사이트에서 연락처를 확인해 주세요 </div>} */}
          </div>
          <div className="detail_camp_btn flex justify-center">
            <button
              type="button"
              className="detail_camp_btn_plan notoBold fs-20"
            >
              일정에 추가하기
            </button>
            <button
              type="button"
              className="detail_camp_btn_site notoBold fs-20"
              onClick={moveSite}
            >
              사이트 바로가기
            </button>
          </div>
          <div className="detail_camp_text">
            <div className="divide" />
            <div className="detail_camp_text_info">
              <div className="detail_camp_text_info_title notoBold fs-30">
                기본 정보
              </div>
              <div className="detail_camp_text_info_sub notoMid fs-20">
                <div className="detail_camp_text_info_sub_basic">
                  기본 시설 : {sbrsCl}
                </div>
                <div className="detail_camp_text_info_sub_basic">
                  부대 시설 : {posblFcltyCl}
                </div>
              </div>
            </div>
            <div className="divide" />
          </div>
          <div className="detail_camp_map">
            <div className="detail_camp_map_title notoBold fs-30">약도</div>
            <Location className="detail_map_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampingDetail;
