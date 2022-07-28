import React from "react";
import { Link } from "react-router-dom";
import "./CampingCard.scss";
// import coverImg from "@images/temp_1.jpeg"; // url string으로 가져오기
import placeIcon from "@images/icon/place_black_24dp.svg";

function CampingCard({ campId, facltNm, addr1, homepage, firstImageUrl }) {
  const moveSite = () => {
    window.open(`${homepage}`);
  };

  const detailUrl = `/camping/detail/${campId}`;

  return (
    <div className="camping_card flex column">
      <Link to={detailUrl} className="camping_card_img">
        <img
          className="camping_card_img_cover"
          src={firstImageUrl}
          alt="coverImg"
        />
      </Link>

      <div className="camping_card_info flex align-center">
        <div className="camping_card_info_txt">
          <p className="camping_card_info_txt_name notoBold fs-30">{facltNm}</p>
          <div className="camping_card_info_txt_place flex align-center">
            <Link to="/">
              <img
                src={placeIcon}
                alt="icon"
                className="camping_card_info_txt_place_icon"
                type="button"
              />
            </Link>
            <div className="camping_card_info_txt_place_text notoMid fs-22">
              {addr1}
            </div>
          </div>
        </div>

        <div className="camping_card_info_btn">
          <button
            type="button"
            className="camping_card_info_btn_plan notoBold fs-20"
          >
            일정에 추가하기
          </button>
          <button
            type="button"
            className="camping_card_info_btn_move notoBold fs-20"
            onClick={moveSite}
          >
            사이트 바로가기
          </button>
        </div>
      </div>
      <div className="divide" />
    </div>
    // <>dd</>
  );
}

// CampingCard.PropTypes = {
//   campingInfo : PropTypes.objectOf(PropTypes.string).isRequired
// };

export default CampingCard;
