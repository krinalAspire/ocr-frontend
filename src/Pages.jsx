import React from "react";
import { Link } from "react-router-dom";

function Pages() {
  return (
    <>
      <Link to={"/profile"}>profile</Link>
      <Link to={"/payment"}>Payment</Link>
      <Link to={"/invoice"}>Invoice</Link>
      <Link to={"/upload"}>upload</Link>
      <Link to={"/allinvoice"}>allinvoice</Link>
    </>
  );
}

export default Pages;
