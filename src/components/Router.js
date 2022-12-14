import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//Pages
import HistoryCreate from '../pages/HistoryCreate'
import HistoryEdit from '../pages/HistoryEdit'
import HistoryView from '../pages/HistoryView'
import HistoryList from '../pages/HistoryList'
import Map from '../pages/Map'
import Home from '../pages/Home'
import Help from '../pages/Help'
import Like from '../pages/Like'
import Notice from '../pages/Notice'
import Modal from '../components/Modal'
import Navbar from './Navbar'
import Test from '../pages/Test'
import KakaoCallback from '../pages/KakaoCallback'
import MapHis from '../pages/MapHis'

const Router = ({ user }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/oauth/kakao/callback" element={<KakaoCallback />} />
        <Route path="/map" element={<Map />} />
        <Route path="/maphis/:studio_id" element={<MapHis />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/like" element={<Like />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/all_history" element={<HistoryList />} />
        <Route
          path="/history/view/:hashed_history_id"
          element={<HistoryView />}
        />
        <Route
          path="/history/edit/:hashed_history_id"
          element={<HistoryEdit user={user} />}
        />
        <Route
          path="/history/create/"
          element={<HistoryCreate user={user} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router