import { useState, useEffect } from 'react';
import Sidebar from "../component/parent-component/parent-dashboard/layout/SideBar";
import Topbar from "../component/parent-component/parent-dashboard/layout/Topbar";
import KidsDetails from "../component/parent-component/parent-dashboard/dashboard-components/KidsDetails";
import ChessLoader from '../landingPage/loader/ChessLoader';  

const ParentKidsDetailsPage = () => {
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
          <Sidebar className="h-full" />  
          <div className="flex-1 flex flex-col h-full">
            <Topbar className="h-16" />  

            <div className="flex-1 p-8 overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 h-full">
                <div className="lg:w-full h-full">
                  <KidsDetails className="h-full" />  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentKidsDetailsPage;
