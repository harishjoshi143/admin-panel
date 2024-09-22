import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminpanel from "./Pages/Adminpanel";
import Catalog from "./Pages/Catalog";
import Users from "./Pages/Users";
import SIPs from "./Pages/Sip";
import Marketing from "./Pages/Marketing";
import Communications from "./Pages/Communication";
import Transactions from "./Pages/Transaction";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Settings from "./Pages/Setting";
import Sidebar from "./Pages/Sidebar";
import Addnewuser from "./Components/Addnewuser";
import Viewdetail from "./Components/Viewdetail";
import { useEffect, useState } from "react";

const getapi = "https://crud-django-c7ri.onrender.com/api/user/";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getdata() {
      const getsdata = await fetch(getapi);
      const result = await getsdata.json();
      setData([...data, result]);
    }
    getdata();
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <div className="flex">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Adminpanel value={data} />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/users" element={<Users />} />
              {/* <Route path="/addnewuser" element={<Addnewuser />} /> */}
              <Route
                path="/addnewuser/:id?"
                element={<Addnewuser value={data} />}
              />
              <Route path="viewdetail/:id" element={<Viewdetail />} />
              <Route path="/SIPs" element={<SIPs />} />
              <Route path="/Marketing" element={<Marketing />} />
              <Route path="/communications" element={<Communications />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
