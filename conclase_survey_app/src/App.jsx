import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Reset from './Pages/Resetpage';
import DashBoard from './Pages/DashBoard';
import Addfile from './Pages/AddFile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/addfile" element={<Addfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
