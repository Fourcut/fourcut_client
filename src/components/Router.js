import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Pages
import HistoryEdit from "../pages/HistoryEdit";
import HistoryView from "../pages/HistoryView";
import Home from '../pages/Home';
import Help from '../pages/Help';
import Navbar from './Navbar';
const Router = ({ user }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" element={<div>카카오톡로그인</div>} />
        <Route path="/map" element={<div>map</div>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/history/view" element={<HistoryView user={user} />} />
        <Route path="/history/edit" element={<HistoryEdit user={user} />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
