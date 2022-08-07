import { configureStore } from "@reduxjs/toolkit";
import campReducer from "./camp";

//-----------------------------------------------------------------
// 객체 전달, 하나의 거대한 store, 모든 state 관리
const store = configureStore({
  // root reducer
  reducer: { campSearch: campReducer }
});

export default store;
