import KidsLoginPage from "./components/child/KidsLoginPage";
import KidsOtpPage from "./components/child/KidsOtpPage";
import KidsRegistration from "./components/child/KidsRegistration";
import ParentLogin from "./components/parent/ParentLogin";
import ParentOtpPage from "./components/parent/ParentOtpPage";
import ParentRegistration from "./components/parent/ParentRegistartion";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/parent/login" element={<ParentLogin />} />
          <Route path="/parent/enter-otp" element={<ParentOtpPage />} />
          <Route path="/parent/registration" element={<ParentRegistration />} />
        </Routes>

        <Routes>
          <Route path="/kids/login" element={<KidsLoginPage />} />
          <Route path="/kids/otp" element={<KidsOtpPage />} />

          <Route path="/kids/register" element={<KidsRegistration />} />
        </Routes>

        <Routes>
          <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
