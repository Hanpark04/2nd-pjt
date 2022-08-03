import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// 달력 api
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { ko } from "date-fns/esm/locale";
import "./AddPlanModal.scss";
import useOutSideClick from "../../utils/useOutSideClick";

function Modal({ onClose }) {
  const navigate = useNavigate();
  const handleClose = () => {
    onClose?.();
  };
  // const locale = { ko };

  // useEffect(() => {
  //   const $body = document.querySelector("body");
  //   $body.style.overflow = "hidden";
  //   return () => ($body.style.overflow = "auto");
  // }, []);

  const modalRef = useRef(null);
  const tripRef = useRef(""); // 여행 제목 입력 값

  useOutSideClick(modalRef, handleClose); // ref 밖의 요소 선택하면 함수 실행

  const addPlan = () => {
    navigate("/plan/detail");
  };

  // 현재 날짜값으로 초기화
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="overlay">
      <div
        ref={modalRef}
        className="modal flex column align-center justify-center"
      >
        <div className="modal_body flex column align-center justify-center">
          <div className="modal_body_txt flex column align-center">
            <div className="modal_body_txt_title notoBold fs-32">
              수완동 캠핑장
            </div>
            <div className="modal_body_txt_days flex align-center notoMid fs-24">
              날짜 :
              <div className="flex modal_body_txt_days_select flex ">
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  // locale={ko}
                  dateFormat="yyyy/MM/dd"
                  className="calen notoMid fs-22"
                />
                ~
                <DatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  // locale={ko}
                  dateFormat="yyyy/MM/dd"
                  className="calen notoMid fs-22"
                />
              </div>
            </div>
            <div className="modal_body_txt_trip notoMid fs-24">
              제목 :
              <input
                className="fs-24 notoMid modal_body_txt_trip_input"
                ref={tripRef}
                placeholder="어떤 여행인가요?"
              />
            </div>
          </div>
          <div className="modal_body_btn flex">
            <button
              type="button"
              className="modal_body_btn_add notoBold fs-18 flex align-center justify-center"
              onClick={addPlan}
            >
              일정 추가
            </button>
            <button
              type="button"
              className="modal_body_btn_close notoBold fs-18 flex align-center justify-center"
              onClick={handleClose}
            >
              창 닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
