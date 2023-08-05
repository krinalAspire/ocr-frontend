import React from "react";
import { Route, Routes } from 'react-router-dom';
import Profile from "../pages/accountsettings/Profile";
import Payment from "../pages/payment-history/Payment";
import Pages from "../../Pages";
import Invoice from "../pages/invoice/Invoice";
import UploadFile from "../pages/uploadfile/UploadFile";
import NavUpload from "../pages/uploadfile/NavUpload";

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/payment" element={<Payment />}/>
      <Route path="/invoice" element={<Invoice />}/>
      {/* <Route path="/upload" element={<UploadFile />}/> */}
      <Route path="/upload" element={<NavUpload />}/>
    </Routes>
  );
}

export default RoutesPath;
