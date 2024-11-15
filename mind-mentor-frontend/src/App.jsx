import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// parent login part
import ParentLogin from "./component/parent-component/ParentLogin";
import ParentOtpPage from "./component/parent-component/ParentOtpPage";
import ParentRegistration from "./component/parent-component/ParentRegistartion";
import ParentKidsRegistration from "./component/parent-component/ParentKidsRegistarion";
import KidsRegistration from "./component/parent-component/KidsRegistration";

// parent dashboard part
import DashboardPage from "./pages/parent/DashboardPage";
import KidsPage from "./pages/parent/KidsPage";
import ParentKidsDetailsPage from "./pages/parent/ParentKidsListPage";

import KidsLoginPage from "./components/child/KidsLoginPage";
import KidsOtpPage from "./components/child/KidsOtpPage";

import AttendancePage from "./pages/AttandancePage";
import FeeDetailsPage from "./pages/FeeDetailsPage";
import ClassShedulePage from "./pages/ClassShedulePage";

// import LoginPage from "./employee-component/LoginPage";
// import OperationDashboardPage from "./pages/employee/operation-employee/OperationDashboardPage";
// import SEnquiryFormPage from "./pages/employee/operation-employee/SEnquiryFormPage";
import HomePage from "./landingPage/HomePage";
import OperationLoginPage from "./employee-component/operation-new/OperationLoginPage";
import OperationDashboardPage from "./pages/employee/operation-employee/OperationDashboardPage";
import SEnquiryFormPage from "./pages/employee/operation-employee/SEnquiryFormPage";
import ListingEnquiries from "./pages/employee/operation-employee/ListingEnquiries";
import AddKid from "./components/parent/AddKid";
import ParentDemoClassPage from "./pages/parent/ParentDemoClassPage";
import ParentManageChildLoginPage from "./pages/ParentManageChildLoginPage";
import ParentReqNewDemoClass from "./pages/parent/ParentReqNewDemoClass";
import ParentProfilePage from "./pages/parent/ParentProfilePage";
import CertificatePage from "./pages/parent/CertificatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Parent Routes */}
        <Route path="/parent/login" element={<ParentLogin />} />
        <Route path="/parent/enter-otp" element={<ParentOtpPage />} />
        <Route path="/parent/registration" element={<ParentRegistration />} />
        <Route
          path="/parent/parent-kids-registration"
          element={<ParentKidsRegistration />}
        />
        <Route path="/parent/kids/demo" element={<KidsRegistration />} />

        <Route path="/parent/dashboard" element={<DashboardPage />} />
        <Route path="/parent/kid" element={<ParentKidsDetailsPage />} />
        <Route path="/parent/add-kid" element={<AddKid />} />
        <Route path="/parent/kid/attendance/:id" element={<AttendancePage />} />
        <Route
          path="/parent/kid/demo-class/:id"
          element={<ParentDemoClassPage />}
        />
        <Route
          path="/parent/kid/demo-class-shedule/:id"
          element={<ParentReqNewDemoClass />}
        />
        <Route
          path="/parent/kid/manage-login/:id"
          element={<ParentManageChildLoginPage />}
        />

        <Route path="/parent/profile/manage" element={<ParentProfilePage />} />

        <Route path="/parent/certificate" element={<CertificatePage />} />

        {/* Kids Routes */}
        <Route path="/kids/login" element={<KidsLoginPage />} />
        <Route path="/kids/otp" element={<KidsOtpPage />} />

        {/* Other Routes */}

        <Route path="/parent/kid/attendance" element={<KidsPage />} />
        <Route path="/fee-details" element={<FeeDetailsPage />} />
        <Route path="/class-schedule" element={<ClassShedulePage />} />

        <Route path="/employee-login" element={<OperationLoginPage />} />
        <Route
          path="/employee-operation-dashboard"
          element={<OperationDashboardPage />}
        />
        <Route
          path="/crm/employee-operation-enquiry-form"
          element={<SEnquiryFormPage />}
        />
        <Route
          path="/crm/employee-operation-enquiry-list"
          element={<ListingEnquiries />}
        />

        {/* 
        <Route path="/employee-login" element={<LoginPage />} />
        <Route path="/employee-operation-dashboard" element={<OperationDashboardPage />} />
        <Route path="/employee-operation-enquiry-form" element={<SEnquiryFormPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
