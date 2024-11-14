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
    <div className="flex h-screen">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <ChessLoader />
        </div>
      ) : (
        <div className="flex w-full h-full">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Topbar />
            <Dashboard />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
