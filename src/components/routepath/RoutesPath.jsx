import React from "react";
import { Route, Routes } from 'react-router-dom';
import Profile from "../pages/accountsettings/Profile";
import Payment from "../pages/payment-history/Payment";

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/payment" element={<Payment />}/>
    </Routes>
  );
}

export default RoutesPath;
