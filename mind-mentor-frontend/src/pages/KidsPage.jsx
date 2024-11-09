import Calendar from "../components/kidsNav/Calender";
import Stats from "../components/kidsNav/Stats";
import Sidebar from "../components/layout/SideBar";
import Topbar from "../components/layout/Topbar";

const KidsPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex-1 p-8 overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <Stats />
            </div>

            <div className="lg:w-2/3">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
