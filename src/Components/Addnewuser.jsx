import React, { useEffect, useState } from "react";
import navbar from "../assets/images/png/navbar.png";
import { SearchIcon } from "../Components/Icon";
import { Link, useParams } from "react-router-dom";

export default function Addnewuser() {
  const { id } = useParams();

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    city: "",
    state: "",
  });

  function handelInputChange(e) {
    let { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    
  }


  async function savedata() {
    const user = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_no: data.phone_no,
      city: data.city,
      state: data.state,
    };

    if (id === undefined) {
      await fetch("https://crud-django-c7ri.onrender.com/api/user/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).catch((err) => console.log("errr", err));
    } else {
      await fetch(`https://crud-django-c7ri.onrender.com/api/user/${id}/`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .catch((err) => console.log("errr", err));
    }
  }

  
  useEffect(() => {
    async function getData() {
      const getsdata = await fetch(
        "https://crud-django-c7ri.onrender.com/api/user/"
      );
      const result = await getsdata.json();
      let filterData = result.data.filter((items, i) => items.id == id);
      setData(filterData[0]);
    }
    if (id !== undefined) getData();
  }, []);

  return (
    <>
      <div>
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
            <p className="text-3xl font-medium">{} New User</p>
            <Link to={"/"}>
              <button
                onClick={savedata}
                className="flex button_add items-center"
              >
                {id === undefined ? "✔ Save" : "Update"}
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white p-5 mt-5">
          <p className="font-normal text-lg">Recent Registrations</p>
          <form className="flex flex-wrap gap-5">
            <div className="mt-5">
              <label htmlFor="fname">First Name</label> <br />
              <input
                className="input_newuser"
                type="text"
                name="first_name"
                value={data.first_name}
                placeholder="Enter first name"
                onChange={handelInputChange}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="fname">Last Name</label> <br />
              <input
                className="input_newuser"
                type="text"
                name="last_name"
                value={data.last_name}
                placeholder="Enter Last  name"
                onChange={handelInputChange}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="fname">E-Mail</label> <br />
              <input
                className="input_newuser"
                type="text"
                name="email"
                value={data.email}
                placeholder="Enter E-mail"
                onChange={handelInputChange}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="fname">Phone Number</label> <br />
              <input
                className="input_newuser"
                type="text"
                name="phone_no"
                value={data.phone_no}
                placeholder="Enter phone  number"
                onChange={handelInputChange}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="fname">State</label> <br />
              <input
                className="input_newuser"
                type="text"
                name="state"
                value={data.state}
                placeholder="Enter  name"
                onChange={handelInputChange}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="fname">City</label> <br />
              <input
                className="input_newuser"
                type="text"
                name="city"
                value={data.city}
                placeholder="Enter  name"
                onChange={handelInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import navbar from "../assets/images/png/navbar.png";
// import { SearchIcon } from "../Components/Icon";
// import { Link, useParams } from "react-router-dom";

// export default function Addnewuser() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [state, setState] = useState("");
//  const [city, setCity] = useState("");
// const [data, setData] = useState({});

//   const { id } = useParams();

//   useEffect(() => {
//     const getapi = `https:crud-django-c7ri.onrender.com/api/user/${id}`;
//     async function getdata() {
//       const getsdata = await fetch(getapi);
//       const result = await getsdata.json();
//       console.log(result.data);
//       console.log(id,"id")
//     }
//     getdata();
//   }, [])

//   useEffect(() => {
//     setFname(data.first_name);
//     setLname(data.last_name);
//     setEmail(data.email);
//     setPhone(data.phone_no);
//     setState(data.state);
//     setCity(data.city);
//   }, [data]);

//   function handlesave() {
//     if (id === undefined) {
//       fetch("https:crud-django-c7ri.onrender.com/api/user/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           first_name: fname,
//           last_name: lname,
//           email: email,
//           phone_no: phone,
//           city: city,
//           state: state,
//         }),
//       });
//     } else {
//       fetch(`https:crud-django-c7ri.onrender.com/api/user/${id}/`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           first_name: fname,
//           last_name: lname,
//           email: email,
//           phone_no: phone,
//           city: city,
//           state: state,
//         }),
//       });
//     }
//   }

//   return (
//     <>
//       <div>
//         <div className="nav_bar flex item-center p-2 bg-white sticky top-0">
//           <img src={navbar} alt="" />
//           <div className="flex items-center input_box_design ms-4">
//             <span className="ps-5">
//               <SearchIcon />
//             </span>
//             <input type="text" placeholder="Search in the admin panel" />
//           </div>
//         </div>
//         <div className="p-5">
//           <div className="flex items-center justify-between">
//             <p className="text-3xl font-medium">Add New User</p>
//             <Link>
//               <button
//                 className="flex button_add items-center"
//                 onClick={handlesave}
//               >
//                 ✔ {id === undefined ? "Save" : "Update"}
//               </button>
//             </Link>
//           </div>
//         </div>

//         <div className="bg-white p-5 mt-5">
//           <p className="font-normal text-lg">Recent Registrations</p>
//           <form className="flex flex-wrap gap-5" >
//             <div className="mt-5">
//               <label htmlFor="fname">First Name</label> <br />
//               <input
//                 className="input_newuser"
//                 type="text"
//                 value={fname}
//                 onChange={(e) => setFname(e.target.value)}
//                 placeholder="Enter first  name"
//               />
//             </div>

//             <div className="mt-5">
//               <label htmlFor="fname">Last Name</label> <br />
//               <input
//                 className="input_newuser"
//                 type="text"
//                 value={lname}
//                 onChange={(e) => setLname(e.target.value)}
//                 placeholder="Enter Last  name"
//               />
//             </div>
//             <div className="mt-5">
//               <label htmlFor="fname">E-Mail</label> <br />
//               <input
//                 className="input_newuser"
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter E-mail"
//               />
//             </div>
//             <div className="mt-5">
//               <label htmlFor="fname">Phone Number</label> <br />
//               <input
//                 className="input_newuser"
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter phone  number"
//               />
//             </div>
//             <div className="mt-5">
//               <label htmlFor="fname">State</label> <br />
//               <input
//                 className="input_newuser"
//                 type="text"
//                 value={state}
//                 onChange={(e) => setState(e.target.value)}
//                 placeholder="Enter  name"
//               />
//             </div>
//             <div className="mt-5">
//               <label htmlFor="fname">City</label> <br />
//               <input
//                 className="input_newuser"
//                 type="text"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 placeholder="Enter  name"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
