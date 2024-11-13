import DashboardDemoClass from "../component/parent-component/parent-dashboard/dashboard-components/DashboardDemoClass"
import Sidebar from "../component/parent-component/parent-dashboard/layout/SideBar"
import Topbar from "../component/parent-component/parent-dashboard/layout/Topbar"


const ParentDemoClassPage = () => {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1">
      <Topbar />
     <DashboardDemoClass/>
    </div>
  </div>
  )
}

export default ParentDemoClassPage