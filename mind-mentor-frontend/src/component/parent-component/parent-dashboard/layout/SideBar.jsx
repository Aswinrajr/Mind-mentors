import { Link, useLocation, useNavigate } from "react-router-dom";
import account from "../../../../images/boy.png";
import home from "../../../../images/homeimages.png";
import kids from "../../../../images/kidsnew.webp";
import availability from "../../../../images/clock.png";
import walkthrough from "../../../../images/briefing.png";
import support from "../../../../images/customer-service.png";
import certification from "../../../../images/diploma.png";
import attendence from "../../../../images/schedule.png";
import refer from "../../../../images/Refer.png";

const Sidebar = () => {
  const location = useLocation();
  const navigate  = useNavigate()

  const isActive = (path) => location.pathname === path;

 

  const navLinks = [
    { path: "/parent/dashboard", icon: home, label: "Home" ,isHome:true},
    { path: "/parent/kid", icon: kids, label: "Kids", isKid: true },
    { path: "/parent/kid/attendance", icon: attendence, label: "Class schedules" },
    { path: "#", icon: availability, label: "Availability" },
    { path: "https://www.youtube.com/watch?v=zhkDRVRu6Rc", icon: walkthrough, label: "Walkthrough" },
    { path: "#", icon: support, label: "Support" },
    { path: "/parent/certificate", icon: certification, label: "Certificates" },
  ];

  return (
    <div className="w-[130px] bg-white flex flex-col shadow-md h-screen">
   
      <div className="relative pt-4 pb-8 flex justify-center">
        <img src={account} onClick={()=>navigate("/parent/profile/manage")} alt="Profile" className="w-10 h-10 rounded-full" />
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute bottom-7 right-5 border-2 border-white"></div>
      </div>

      <nav className="flex flex-col space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`
              group flex flex-col items-center py-3 px-1 
              transition-colors duration-200 relative
              ${!link.isKid && isActive(link.path) ? 'bg-transparent' : ''} 
              ${!isActive(link.path) ? 'hover:bg-purple-50' : ''}
            `}
          >
           
            <div className={`
              absolute left-0 top-0 w-1 h-full bg-purple-700
              transition-opacity duration-200
              ${isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            `}></div>
            
            <div className={`relative ${link.isKid ? 'w-20 h-20' : 'w-6 h-6'} transition-all duration-200`}>
              <img 
                src={link.icon} 
                alt={link.label} 
                className={`w-full h-full mb-1 transition-[filter] duration-200`}
              />
            </div>
            <span className={`
              text-[10px] font-semibold
              transition-colors duration-200
              ${isActive(link.path) ? 'text-purple-700' : 'text-gray-600 group-hover:text-purple-700'}
            `}>
              {link.label}
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto py-4 px-2">
        <img src={refer} alt="refer" className="w-auto h-auto mb-1" />
      </div>
    </div>
  );
};

export default Sidebar;