import React from "react";
import { Link } from "react-router-dom";
import wheelchair from "../assets/images/png/logo.png";
import dashbord from "../assets/images/png/dashbord.png";
import catalog from "../assets/images/png/catalog.png";
import Users from "../assets/images/png/user.png";
import sip from "../assets/images/png/sip.png";
import Marketing from "../assets/images/png/marketing.png";
import Communications from "../assets/images/png/comm.png";
import Transactions from "../assets/images/png/transaction.png";
import Privacy from "../assets/images/png/privacy.png";
import Terms from "../assets/images/png/terms.png";
import Settings from "../assets/images/png/setting.png";

export default function Sidebar() {
  return (
    <>
      <aside className="w-2/12 h-lvh sticky top-0 ">
        <div className="side_nav flex items-center justify-center">
          <img src={wheelchair} alt="" />
          <p className="font-normal text-lg mx-2.5">STSM</p>
          <button className="adnin_btn font-normal text-xs">ADMIN</button>
        </div>
        <div className="links_nav pt-3">
          <Link
            to="/"
            className="text-white flex items-center padding_12_20 links_hover"
          >
            <img className="mx-2.5" src={dashbord} alt="" />
            Dashboard
          </Link>
          <Link
            to="/Catalog"
            className="text-white flex items-center padding_12_20 links_hover"
          >
            <img className="mx-2.5" src={catalog} alt="" />
            Catalog
          </Link>
          <Link
            to="/Users"
            className="text-white flex items-center padding_12_20 links_hover"
          >
            <img className="mx-2.5" src={Users} alt="" />
            Users
          </Link>
          <Link
            to="/SIPs"
            className="text-white flex items-center padding_12_20 links_hover"
          >
            <img className="mx-2.5" src={sip} alt="" />
            SIPs
          </Link>
          <Link
            to="/Marketing"
            className="text-white flex items-center padding_12_20 links_hover"
          >
            <img className="mx-2.5" src={Marketing} alt="" />
            Marketing
          </Link>
          <Link
            to="/Communications"
            className="text-white flex items-center padding_12_20 links_hover"
          >
            <img className="mx-2.5" src={Communications} alt="" />
            Communications
          </Link>
          <Link
            to="/Transactions"
            className="text-white flex items-center padding_12_20 links_hover"
          >
            <img className="mx-2.5" src={Transactions} alt="" />
            Transactions
          </Link>
          <Link
            to="/Privacy"
            className="text-white flex items-center padding_12_20 links_hover"
          >
            <img className="mx-2.5" src={Privacy} alt="" />
            Privacy Policy
          </Link>
          <Link
            to="/Terms"
            className="text-white flex items-center padding_12_20 links_hover"
          >
            <img className="mx-2.5" src={Terms} alt="" />
            Terms and Conditions
          </Link>
          <Link
            to="/Settings"
            className="text-white flex items-center padding_12_20 links_hover"
          >
            <img className="mx-2.5" src={Settings} alt="" />
            Settings
          </Link>
        </div>
      </aside>
    </>
  );
}
