import { useState, useEffect } from "react";
import ChessLoader from "../../landingPage/loader/ChessLoader";
import Sidebar from "../../component/parent-component/parent-dashboard/layout/SideBar";
import Topbar from "../../component/parent-component/parent-dashboard/layout/Topbar";
import Dashboard from "../../component/parent-component/parent-dashboard/dashboard-components/Dashboard";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <ChessLoader />
        </div>
      ) : (
        <>
          {/* Topbar fixed at the top */}
          <Topbar />

          {/* Main content with Sidebar and Dashboard */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar with full height */}
            <div className="h-full">
              <Sidebar />
            </div>

            {/* Content area set to grow and scroll if needed */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                {/* Main Dashboard area */}
                <div className="bg-white rounded-lg shadow-sm lg:col-span-2 p-4">
                  <Dashboard />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
