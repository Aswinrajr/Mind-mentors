import Sidebar from "../component/parent-component/parent-dashboard/layout/SideBar";
import Topbar from "../component/parent-component/parent-dashboard/layout/Topbar";
import KidsDetails from "../component/parent-component/parent-dashboard/dashboard-components/KidsDetails";

const ParentKidsDetailsPage = () => {
  return (
    <div className="flex h-screen">
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
  );
};

export default ParentKidsDetailsPage;
