import Dashboard from "../components/dashboard/Dashboard"
import Sidebar from "../components/layout/SideBar"
import Topbar from "../components/layout/Topbar"


const DashboardPage = () => {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1">
      <Topbar />
      <Dashboard />
    </div>
  </div>
  )
}

export default DashboardPage