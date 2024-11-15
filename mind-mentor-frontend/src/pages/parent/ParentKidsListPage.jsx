import { useState, useEffect } from 'react';
import ChessLoader from '../../landingPage/loader/ChessLoader';
import Sidebar from '../../component/parent-component/parent-dashboard/layout/SideBar';
import Topbar from '../../component/parent-component/parent-dashboard/layout/Topbar';
import KidsDetails from '../../component/parent-component/parent-dashboard/dashboard-components/KidsDetails';
import { gettingKidsData } from '../../api/service/parent/ParentService';

const ParentKidsDetailsPage = () => {
  const [loading, setLoading] = useState(true);  
  const [kids, setKids] = useState([]);

  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  
    }, 1500);  
  }, []);

  const parentId = localStorage.getItem("parentId");
  console.log("parent id", parentId);

  useEffect(() => {
    const fetchKidsData = async () => {
      const response = await gettingKidsData(parentId);
      console.log("response in fetch kids data", response?.data?.kidsData);
      if (response.status === 200) {
        setKids(response?.data?.kidsData);
      }
    };
    fetchKidsData();
  }, [parentId]);

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
                  <KidsDetails kids={kids} className="h-full" />  
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
