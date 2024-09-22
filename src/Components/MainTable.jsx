import React, { useEffect, useState } from "react";
import threedot from "../assets/images/png/three dot.png";
import { Link } from "react-router-dom";
import view from "../assets/images/png/view.png";
import edit from "../assets/images/png/edit.png";
import del from "../assets/images/png/del.png";

export default function MainTable(props) {
  const [data, setData] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [popup, setPopup] = useState(false);
  const [id, setId] = useState("");

  function togglePopup() {
    setPopup(!popup);
    setDropdownVisible(!isDropdownVisible);
  }


  function handledelete() {
    const delurl = `https://crud-django-c7ri.onrender.com/api/user/${id}`;

    fetch(delurl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

    const filterData = data.filter((item) => item.id !== id);
    setData(filterData);
    setDropdownVisible("");
    setPopup("");
  }

  function threedothandler(ids) {
    setDropdownVisible(ids);
    setId(ids);
  }

  const propdetail = props.value;

  useEffect(() => {
    if (propdetail && propdetail.length > 0 && propdetail[0].data) {
      setData(propdetail[0].data);
    }
  }, [propdetail]);

  return (
    <>
      <div className="bg-white p-5 mt-5">
        <p className="font-normal text-lg">Recent Registrations</p>
        <table className="w-full mt-5">
          <tr>
            <th className="text-start font-normal text-base padding_17_20">
              Sr N.
            </th>
            <th className="text-start font-normal text-base padding_17_20">
              Name
            </th>
            <th className="text-start font-normal text-base padding_17_20">
              Registration
            </th>
            <th className="text-start font-normal text-base padding_17_20">
              City / State
            </th>
            <th className="text-start font-normal text-base padding_17_20">
              E-Mail
            </th>
            <th className="text-start font-normal text-base padding_17_20">
              Action
            </th>
          </tr>

          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td className="text-base font-normal padding_17_20">
                  {index + 1}
                </td>
                <td className="text-base font-normal padding_17_20">
                  {item.first_name} {item.last_name}
                </td>
                <td className="text-base font-normal padding_17_20">
                  {item.registration}
                </td>
                <td className="text-base font-normal padding_17_20">
                  {item.city} / {item.state}
                </td>
                <td className="text-base font-normal padding_17_20">
                  {item.email} / {item.state}
                </td>
                <td
                  className="text-base font-normal padding_17_20 relative"
                  onClick={() => threedothandler(item.id)}
                >
                  <img src={threedot} alt="Options" />

                  {isDropdownVisible === item.id && (
                    <ul className="dropdown-menu">
                      <Link to={`/viewdetail/${item.id}`}>
                        <li className="flex gap-3 cursor-pointer">
                          <img src={view} alt="view" />
                          <span>View</span>
                        </li>
                      </Link>
                      <Link to={`/addnewuser/${item.id}`}>
                        <li className="flex gap-3 cursor-pointer">
                          <img src={edit} alt="edit" />
                          <span>Edit</span>
                        </li>
                      </Link>
                      <li
                        className="flex gap-3 cursor-pointer"
                        onClick={togglePopup}
                      >
                        <img src={del} alt="delete" />
                        <span>Delete</span>
                      </li>
                    </ul>
                  )}
                </td>
              </tr>
            ))}

          {popup && (
            <div className="pos_set">
              <div className="bg-white p-2.5 rounded-xl w-[250px] text-center">
                <div className="flex justify-center">
                  <img src={del} alt="delete" />
                </div>
                <p className="text-center font-normal text-sm mt-2.5">Delete</p>
                <p className="font-normal text-xs mt-2.5">
                  Are you sure you want to delete?
                </p>
                <div className="mt-2.5 flex justify-center">
                  <button
                    className="cancel_btn"
                    onClick={() => setPopup(false)}
                  >
                    No, Cancel
                  </button>
                  <button
                    className="delete_btn ms-2.5"
                    onClick={() => handledelete()}
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </table>
      </div>
    </>
  );
}
