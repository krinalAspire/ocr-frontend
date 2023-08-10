import React from "react";
import { Route, Routes } from 'react-router-dom';
import Profile from "../pages/accountsettings/Profile";
import Payment from "../pages/payment-history/Payment";
import Pages from "../../Pages";
import Invoice from "../pages/invoice/Invoice";
import UploadFile from "../pages/invoice-management/upload-documents/UploadFile";
import NavUpload from "../pages/invoice-management/upload-documents/NavUpload";
import Main from "../pages/invoice-management/invoice-tabs/TabSection";
import Allinvoice from "../pages/invoice-management/allinvoice/Allinvoice";
import Navinvoice from "../pages/invoice-management/allinvoice/NavInvoice";

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
      <Route path="/main" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/payment" element={<Payment />}/>
      <Route path="/invoice" element={<Invoice />}/>
      {/* <Route path="/upload" element={<UploadFile />}/> */}
      {/* <Route path="/allinvoice" element={<Allinvoice />} /> */}
      <Route path="/allinvoice" element={<Navinvoice />}/>
      <Route path="/upload" element={<NavUpload />}/>
    </Routes>
  );
}

export default RoutesPath;
