import React from "react";
import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes
  // useNavigationType,
  // useLocation,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Addfile from './Pages/AddFile';
import FormPage from './Pages/FormPage';
import CREATESURVEY from './Pages/CreateSurvey';
import DashBoard from './Pages/Dashboard';
import Desktop1 from './Pages/Desktop1';

function App() {
  const [formData, setFormData] = useState({ question: "", inputType: "" });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/desktop1" element={<Desktop1 />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="/addfile" element={<Addfile onFormSubmit={handleFormSubmit} />} />
        <Route path="/formpage" element={<FormPage formData={formData} />} />
        <Route path="/createsurvey" element={<CREATESURVEY />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
