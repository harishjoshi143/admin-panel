import React from "react";
import navbar from "../assets/images/png/navbar.png";
import { SearchIcon } from "../Components/Icon";
import add from "../assets/images/png/add.png";
import Usertable from "../Components/Usertable";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <>
      <div className="w-10/12">
        <div className="nav_bar flex item-center p-2 bg-white sticky top-0">
          <img src={navbar} alt="" />
          <div className="flex items-center input_box_design ms-4">
            <span className="ps-5">
              <SearchIcon />
            </span>
            <input type="text" placeholder="Search in the admin panel" />
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-medium">Users</p>
            <Link to={"/addnewuser"}>
              <button className="flex button_add items-center">
                
                <img className="me-3" src={add} alt="" />
                Add New User
              </button>
            </Link>
          </div>
        </div>
        <Usertable />
      </div>
    </>
  );
}
