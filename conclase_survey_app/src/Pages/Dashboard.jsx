import React, {useEffect, useState} from "react";
import "../Styles/Dashboard/Dashboard.css";
import Logo from "../assets/Image/Coclase logo.png";
import Empty from "../assets/Image/No Content.png";
import { Link } from "react-router-dom";
import DashSidebar from "../Component/DashSidebar";
import axios from 'axios'

const DashBoard = () => {

  //  //logout
  //  const logout = async () => {
  //   try {
  //     // Send a request to the logout API endpoint
  //     await axios.post("https://conclase-app-api.onrender.com/auth/logout", { userId: sessionStorage.getItem('id') });
  //     // Clear session storage
  //     sessionStorage.clear();
  //     // Redirect to the login page
  //     window.location.href = "/login";
  //   } catch (error) {
  //     console.error("Error logging out:", error.message);
  //   }
  // };

//set username dynamically
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetchUserName();
  }, []);

  axios.defaults.withCredentials = true;

  const fetchUserName = async () => {
    try {
      // Retrieve the id from session storage
      const id = sessionStorage.getItem("id");
      
      if (!id) {
        throw new Error("User ID not found in session storage");
      }

      // Send a request to the user API endpoint
      const response = await axios.get(`https://conclase-app-api.onrender.com/users/${id}`);
      console.log(response.data.data);

      if (response.data.success === true ) {
        const { firstname, lastname } = response.data.data;
        // Update the userName state
        setUserName(`${firstname} ${lastname}`);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error fetching user name:", error.message);
    }
  };



  return (
    <div className="dash-container">
      {/* <div className="oval5" /> */}
      <div className="box">
        <div className="section">
          <div className="box-2">
            <div className="wrapper">
              <span className="text">Welcome, {userName}</span>
              <span className="text-2">
                To begin please create a new survey
              </span>
            </div>
          </div>
          <div className="section-2">
            <div className="box-3">
              <div className="bi bi-search" />
              <div className="bi bi-bell" />
            </div>
            <div className="section-3">
              <div className="icon bi bi-person-circle " />
              <div className="wrapper-2">
                <span className="text-3">John Doe</span>
                <div className="pic-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-4">
          <div className="wrapper-3">
            <div className="wrapper-4">
              <div className="section-5">
                <div className="group">
                  <span className="text-4">Total Surveys</span>
                  <div className="section-6">
                    <div className="pic-5" />
                  </div>
                </div>
                <div className="group-2">
                  <span className="text-5">0</span>
                </div>
              </div>
            </div>
            <div className="section-7">
              <div className="group-3">
                <div className="group-4">
                  <span className="text-6">Total Active Surveys</span>
                  <div className="box-4">
                    <div className="pic-6" />
                  </div>
                </div>
                <div className="wrapper-5">
                  <span className="text-7">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-6">
            <div className="section-8">
              <img className="img-2" alt="Empty" src={Empty} />
            </div>
            <span className="text-8">
              Looks like you don’t have any survey yet!!!
            </span>
            <button className="section-9">
              <Link
                style={{ textDecoration: "none" }}
                className="wrapper-7"
                to="/addfile"
              >
                <span className="text-9">Create New Survey</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="pic-7" />
      </div>

      <div className="section-a">
        <div className="box-5">
          <img className="img-3" alt="Image" src={Logo} />
        </div>
        
        <DashSidebar />
        <div className="wrapper-b">
          <div className="bi bi-caret-left" />
        </div>
      </div>
      <div className="oval-3" />
      <div className="oval-4" />
      <div className="img-9" />
    </div>
  );
}
export default DashBoard;