import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useOutSideClick from "../../utils/useOutSideClick";
import "./AddPlanModal.scss";

function Modal({ onClose }) {
  const navigate = useNavigate();
  const handleClose = () => {
    onClose?.();
  };

  // useEffect(() => {
  //   const $body = document.querySelector("body");
  //   $body.style.overflow = "hidden";
  //   return () => ($body.style.overflow = "auto");
  // }, []);

  const modalRef = useRef(null);

  useOutSideClick(modalRef, handleClose); // ref 밖의 요소 선택하면 함수 실행

  const addPlan = () => {
    navigate("/plan/detail");
  };

  return (
    <div className="overlay">
      <div
        ref={modalRef}
        className="modal flex column align-center justify-center"
      >
        <div className="modal_body flex column align-center justify-center">
          <div className="modal_body_txt">
            <div className="modal_body_txt_title notoBold fs-32">
              수완동 캠핑장
            </div>
            <div className="modal_body_txt_days notoMid fs-20">날짜 : </div>
            <div className="modal_body_txt_trip notoMid fs-20">제목 : </div>
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
