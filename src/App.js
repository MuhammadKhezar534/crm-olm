import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./pages/AdminLayout";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
