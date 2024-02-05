import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Reset from './Pages/Resetpage';
import DashBoardd from './Pages/DashBoardd';
import Surveys from './Pages/Survey';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboardd" element={<DashBoardd />} />
        <Route path="/surveys" element={<Surveys />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
