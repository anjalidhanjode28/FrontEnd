import React from "react";
import { Route, Routes } from "react-router-dom";
import MusicRecords from "./MusicRecords";
import {SingleMusicRecord} from "./SingleMusicRecord";
import EditMusicRecord from "./EditMusicRecord";
import Login from "./Login";
import ReqAuth from "./ReqAuth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicRecords />} />
      <Route path="/music/:id" element={<SingleMusicRecord />} />
      <Route path="/music/:id/edit" element={<ReqAuth><EditMusicRecord /></ReqAuth>} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoutes;