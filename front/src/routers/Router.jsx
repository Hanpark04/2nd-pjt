import React from "react";
import { Route, Routes } from "react-router-dom";
import MainNavBar from "@components/common/MainNavBar";

import Home from "@screens/Home";
import Login from "@screens/Login";
import Join from "@screens/Join";
import JoinFinish from "@screens/JoinFinish";

// community
import CommunityMain from "@screens/community/CommunityMain";
import PhotoRegist from "@screens/community/PhotoRegist";
import TalkRegist from "@screens/community/TalkRegist";
import PhotoDetail from "@screens/community/PhotoDetail";
import TalkDetail from "@screens/community/TalkDetail";

// camping
import CampingMain from "@screens/camping/CampingMain";
import CampingDetail from "@screens/camping/CampingDetail";

function Router() {
  return (
    <>
      <MainNavBar />

      <Routes>
        {/* main */}
        <Route path="/" element={<Home />} />

        {/* login */}
        <Route path="/login" element={<Login />} />

        {/* join */}
        <Route path="/join/*">
          <Route index element={<Join />} />
          <Route path="finish" element={<JoinFinish />} />
        </Route>

        {/* community */}
        <Route path="/board/*">
          <Route index element={<CommunityMain />} />
          <Route path="photo/regist" element={<PhotoRegist />} />
          <Route path="talk/regist" element={<TalkRegist />} />
          <Route path="photo/detail/:id" element={<PhotoDetail />} />
          <Route path="talk/detail/:id" element={<TalkDetail />} />
        </Route>

        <Route path="/camping/*">
          <Route index element={<CampingMain />} />
          <Route path="detail" element={<CampingDetail />} />
        </Route>
      </Routes>
    </>
  );
}
export default Router;
