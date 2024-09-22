import React, { useEffect, useState } from "react";
import navbar from "../assets/images/png/navbar.png";
import { SearchIcon } from "../Components/Icon";
import { Link, useParams } from "react-router-dom";

export default function Viewdetail() {
  const { id } = useParams();

  const [view, setView] = useState({});

  useEffect(() => {
    fetch(`https://crud-django-c7ri.onrender.com/api/user/${id}/`)
      .then((res) => res.json())
      .then((ans) => setView(ans.data));
  }, []);

  return (
    <>
      <div className="w-full">
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
            <p className="text-3xl font-medium">View Customer Details</p>
            <Link>
              <button className="flex button_add items-center">
                Reset Password
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white p-5 mt-5">
          <p className="font-normal text-lg">Recent Registrations</p>

          <div className="mt-5">
            <table>
              <div className="flex gap-60">
                <tr className="flex flex-col">
                  <td className="pt-5">Name :</td>
                  <td className="pt-5">Email :</td>
                  <td className="pt-5">Phone number :</td>
                  <td className="pt-5">City :</td>
                  <td className="pt-5">State :</td>
                </tr>
                <tr className="flex flex-col">
                  <td className="pt-5">
                    {view.first_name} {view.last_name}
                  </td>
                  <td className="pt-5">{view.email}</td>
                  <td className="pt-5">{view.phone_no}</td>
                  <td className="pt-5">{view.city}</td>
                  <td className="pt-5">{view.state}</td>
                </tr>
              </div>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
