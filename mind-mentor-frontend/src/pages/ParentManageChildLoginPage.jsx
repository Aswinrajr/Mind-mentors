import ManageKidLogin from "../component/parent-component/parent-dashboard/dashboard-components/ManageKidLogin";
import Sidebar from "../component/parent-component/parent-dashboard/layout/SideBar";
import Topbar from "../component/parent-component/parent-dashboard/layout/Topbar";

const ParentManageChildLoginPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar className="h-full" />

      <div className="flex-1 flex flex-col h-full">
        <Topbar className="h-16" />

        <div className="flex-1 p-8 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8 h-full">
            <div className="lg:w-full h-full">
              <ManageKidLogin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentManageChildLoginPage;
