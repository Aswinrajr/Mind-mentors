
import ClassSchedule from "../components/fee/ClassShedule";
import Sidebar from "../components/layout/SideBar";
import Topbar from "../components/layout/Topbar";

const ClassShedulePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex-1 p-8 overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-full">
              <ClassSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassShedulePage;
