import KidsLoginPage from "./components/child/KidsLoginPage";
import KidsOtpPage from "./components/child/KidsOtpPage";
import KidsRegistration from "./components/child/KidsRegistration";
import ParentLogin from "./components/parent/ParentLogin";
import ParentOtpPage from "./components/parent/ParentOtpPage";
import ParentRegistration from "./components/parent/ParentRegistartion";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import KidsPage from "./pages/KidsPage";
import AttendancePage from "./pages/AttandancePage";
import FeeDetailsPage from "./pages/FeeDetailsPage";
import ClassShedulePage from "./pages/ClassShedulePage";

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
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/kid1" element={<KidsPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/fees-details" element={<FeeDetailsPage />} />
          <Route path="/class-shedule" element={<ClassShedulePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
