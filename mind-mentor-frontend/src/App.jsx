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
import 'react-toastify/dist/ReactToastify.css';
import ParentKidsRegistration from "./components/parent/ParentKidsRegistarion";
import LoginPage from "./employee-component/LoginPage";


function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Routes */}
        <Route path="/parent/login" element={<ParentLogin />} />
        <Route path="/parent/enter-otp" element={<ParentOtpPage />} />
        <Route path="/parent/registration" element={<ParentRegistration />} />
        <Route path="/parent/parent-kids-registration" element={<ParentKidsRegistration />} />


        {/* Kids Routes */}
        <Route path="/kids/login" element={<KidsLoginPage />} />
        <Route path="/kids/otp" element={<KidsOtpPage />} />
        <Route path="/kids/demo" element={<KidsRegistration />} />

        {/* Other Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/kid1" element={<AttendancePage />} />
        <Route path="/attendance" element={<KidsPage />} />
        <Route path="/fee-details" element={<FeeDetailsPage />} />
        <Route path="/class-schedule" element={<ClassShedulePage />} />



        <Route path="/employee-login" element={<LoginPage />} />


      </Routes>
    </Router>
  );
}

export default App;
