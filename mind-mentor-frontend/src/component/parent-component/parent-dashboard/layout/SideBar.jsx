import { Link, useLocation, useNavigate } from "react-router-dom";
import account from "../../../../images/boy.png";
import home from "../../../../images/homeicon.svg";
import kids from "../../../../images/kidsnew.webp";
import availability from "../../../../images/avail.svg";
import walkthrough from "../../../../images/walk.svg";
import support from "../../../../images/sup.svg";
import certification from "../../../../images/attendance.svg";
import attendence from "../../../../images/attendance.svg";
import refer from "../../../../images/Refer.png";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/parent/dashboard", icon: home, label: "Home", isHome: true },
    { path: "/parent/kid", icon: kids, label: "Kids", isKid: true },
    { path: "/parent/kid/attendance", icon: attendence, label: "Class schedules" },
    { path: "#", icon: availability, label: "Availability" },
    { path: "https://www.youtube.com/watch?v=zhkDRVRu6Rc", icon: walkthrough, label: "Walkthrough" },
    { path: "#", icon: support, label: "Support" },
    { path: "/parent/certificate", icon: certification, label: "Certificates" },
  ];

  return (
    <div className="w-[130px] bg-white flex flex-col shadow-lg h-screen">
      {/* Profile Section */}
      <div className="pt-6 pb-4 flex justify-center relative">
        <button 
          onClick={() => navigate("/parent/profile/manage")}
          className="relative group"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden transform transition-all duration-500 ease-in-out 
                        group-hover:scale-110 group-hover:shadow-lg group-hover:ring-4 group-hover:ring-purple-200">
            <img 
              src={account} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0 border-2 border-white 
                        transform transition-transform duration-500 ease-in-out group-hover:scale-125"></div>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col space-y-1 px-2 py-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`
              group relative flex flex-col items-center justify-center
              py-3 px-2 rounded-lg
              transition-all duration-300 ease-in-out
              hover:shadow-md
              ${
                isActive(link.path) 
                  ? 'bg-purple-100 shadow-md' 
                  : 'hover:bg-purple-50'
              }
            `}
          >
            {/* Active Indicator */}
            <div className={`
              absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8
              bg-[rgb(177,21,177)] rounded-r-full
              transform transition-all duration-300 ease-in-out
              ${
                isActive(link.path) 
                  ? 'opacity-100 scale-y-100' 
                  : 'opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-75'
              }
            `}></div>
            
            {/* Icon Container */}
            <div className={`
              relative mb-2 
              transition-all duration-300 ease-in-out
              ${link.isKid ? 'w-16 h-16' : 'w-7 h-7'}
              transform 
              ${
                isActive(link.path) 
                  ? 'scale-110 rotate-3' 
                  : 'group-hover:scale-110 group-hover:rotate-3'
              }
            `}>
              <div className="relative">
                <img 
                  src={link.icon} 
                  alt={link.label} 
                  className={`
                    w-full h-full object-contain
                    transition-all duration-00 ease-in-out
                    ${link.isKid ? '' : 'filter'}
                    ${
                      link.isKid 
                      ? '' 
                      : isActive(link.path)
                        ? 'brightness-0 invert-0 opacity-100 [filter:opacity(1)_brightness(0)_saturate(100%)_invert(0.4)_sepia(1)_saturate(10000%)_hue-rotate(240deg)]'
                        : 'brightness-0 opacity-60 group-hover:[filter:opacity(1)_brightness(1)_saturate(100%)_invert(0.4)_sepia(1)_saturate(10000%)_hue-rotate(240deg)]'
                    }
                  `}
                />
              </div>
            </div>

            {/* Label */}
            <span className={`
              text-xs font-medium text-center leading-tight
              transition-all duration-300 ease-in-out
              transform
              ${
                isActive(link.path) 
                  ? 'text-[rgb(177,21,177)] scale-105 font-semibold' 
                  : 'text-gray-600 group-hover:text-[rgb(177,21,177)] group-hover:scale-105'
              }
            `}>
              {link.label}
            </span>

            {/* Hover Glow Effect */}
            <div className={`
              absolute inset-0 rounded-lg
              bg-[rgb(177,21,177)]/0 
              transition-all duration-300 ease-in-out
              group-hover:bg-[rgb(177,21,177)]/4
              group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]
              ${isActive(link.path) ? 'shadow-[0_0_20px_rgba(168,85,247,0.2)]' : ''}
            `}></div>
          </Link>
        ))}
      </nav>

      {/* Refer Section */}
      <div className="mt-auto p-4 flex justify-center">
        <div className="w-full relative group transform transition-all duration-500 ease-in-out 
                      hover:scale-110 hover:rotate-2 cursor-pointer">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[rgb(177,21,177)]/0 to-[rgb(177,21,177)]/0 
                        transition-opacity duration-300 group-hover:from-[rgb(177,21,177)]/10 group-hover:to-[rgb(177,21,177)]/10"></div>
          <img 
            src={refer} 
            alt="refer" 
            className="w-full h-auto object-contain relative z-10 
                     transition-all duration-500 ease-in-out 
                     group-hover:opacity-90 group-hover:shadow-lg 
                     rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;