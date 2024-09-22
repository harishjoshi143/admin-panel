import React from "react";
import navbar from "../assets/images/png/navbar.png";
import { SearchIcon } from "../Components/Icon";
import Table1 from "../Components/Table1";
import MainTable from "../Components/MainTable";
export default function Adminpanel(props) {
  // console.log(props,"value get")
  const val = props.value;

  return (
    <>
      <div className="w-10/12">
        <div className="nav_bar flex item-center p-2 bg-white sticky top-0">
          <img src={navbar} alt="" />
          <div className="flex items-center input_box_design ms-4">
            <span className="ps-5 ">
              <SearchIcon/>
            </span>
            <input type="text" placeholder="Search in the admin panel" />
          </div>
        </div>
        <div className="content_section p-2">
          <h1 className="font-medium text-[30px]">Dashboard</h1>
          <div className="flex mt-5">
            <div className="bg-white text-center w-[368px] p-[20px] rounded-lg">
              <p className="text-[#00000080;]">Total SIPs</p>
              <p className="mt-5 font-medium text-3xl">6</p>
            </div>
            <div className="bg-white text-center w-[368px] p-[20px] ms-[37px] rounded-lg">
              <p className="text-[#00000080;]">Total Inverster ‘s</p>
              <p className="mt-4 font-medium text-3xl">1000</p>
            </div>
          </div>
          <Table1 />
        </div>
        <MainTable value={val} />
      </div>
    </>
  );
}
