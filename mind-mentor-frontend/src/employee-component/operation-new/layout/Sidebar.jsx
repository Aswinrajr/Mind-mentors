import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from 'lucide-react';
import account from "../../../images/accountInage.webp";
import refer from "../../../images/Refer.png";

const Sidebar = () => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});

  const isActive = (path) => location.pathname === path;

  const toggleSubmenu = (path) => {
    setExpandedMenus(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const purpleFilter = 'invert(24%) sepia(70%) saturate(1400%) hue-rotate(245deg) brightness(95%) contrast(96%)';

  const navLinks = [
    {
      title: 'Dashboard',
      icon: '📊',
      path: '/employee-operation-dashboard',
      svgIcon: true
    },
    {
      title: 'CRM',
      icon: '💼',
      path: '/crm',
      svgIcon: true,
      submenu: [
        { title: 'Enquiry Form', icon: '📝', path: '/crm/employee-operation-enquiry-form' },
        { title: 'Enquiries', icon: '📋', path: '/crm/employee-operation-enquiry-list' },
        { title: 'Prospects', icon: '👥', path: '/crm/prospects' },
        { title: 'Refer Friend', icon: '📢', path: '/crm/refer-friend' },
      ]
    },
    {
      title: 'Tasks',
      icon: '✓',
      path: '/tasks',
      svgIcon: true,
      submenu: [
        { title: 'My Tasks', icon: '📋', path: '/tasks/my-tasks' },
        { title: 'Team Tasks', icon: '👥', path: '/tasks/team-assign' },
      ]
    },
    { title: 'Invoices', icon: '📄', path: '/invoices', svgIcon: true },
    { title: 'Programs', icon: '🔄', path: '/programs', svgIcon: true },
    {
      title: 'Schedule',
      icon: '📅',
      path: '/schedule',
      svgIcon: true,
      submenu: [
        { title: 'All Classes', icon: '👁️', path: '/all-class-schedule' },
        { title: 'Available Slots', icon: '📅', path: '/available-slot' },
      ]
    },
    {
      title: 'Support',
      icon: '🔧',
      path: '/support',
      svgIcon: true,
      submenu: [
        { title: 'System Admin', icon: '🔧', path: '/support/system-admin' },
        { title: 'MyKart Status', icon: '📊', path: '/support/my-kart' },
      ]
    }
  ];

  return (
    <div className="w-[150px] bg-white flex flex-col shadow-md h-screen"> 
      {/* Profile Section */}
      <div className="relative pt-4 pb-8 flex justify-center">
        <img src={account} alt="Profile" className="w-12 h-12 rounded-full" /> 
        <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-7 right-5 border-2 border-white"></div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col">
        {navLinks.map((link) => (
          <div key={link.path} className="relative">
            <button
              onClick={() => link.submenu && toggleSubmenu(link.path)}
              className={`
                w-full group flex flex-col items-center py-4 px-2  {/* Increased padding */}
                transition-colors duration-200 relative
                ${isActive(link.path) ? 'bg-purple-50' : ''} 
                ${!isActive(link.path) ? 'hover:bg-purple-50' : ''} 
                hover:bg-purple-100 cursor-pointer
              `}
            >
              <div className={` 
                absolute left-0 top-0 w-1 h-full bg-purple-700 
                transition-opacity duration-200 
                ${isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
              `}></div>


              {link.submenu && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {expandedMenus[link.path] ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" /> 
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" /> 
                  )}
                </div>
              )}

              <div className="relative w-12 h-8 mb-1 transition-all duration-200"> 
                <span className={`text-2xl transition-[filter] duration-200 ${isActive(link.path) ? '[filter:var(--purple-filter)]' : ''}`} 
                  style={{ filter: isActive(link.path) ? purpleFilter : 'none' }}>
                  {link.icon}
                </span>
              </div>

              <span className={`text-[14px] font-semibold transition-colors duration-200 ${isActive(link.path) ? 'text-purple-700' : 'text-gray-600 group-hover:text-purple-700'}`}> 
                {link.title}
              </span>
            </button>

         
            {link.submenu && expandedMenus[link.path] && (
              <div className="bg-gray-50 py-2 ml-2">
                {link.submenu.map((subLink) => (
                  <Link
                    key={subLink.path}
                    to={subLink.path}
                    className={`
                      flex flex-col items-center py-3 px-2 ml-2 
                      transition-colors duration-200 relative
                      ${isActive(subLink.path) ? 'bg-purple-50' : ''} 
                      ${!isActive(subLink.path) ? 'hover:bg-purple-50' : ''} 
                      hover:bg-purple-100 cursor-pointer
                    `}
                  >
                    <div className={`absolute left-0 top-0 w-1 h-full bg-purple-700 transition-opacity duration-200 ${isActive(subLink.path) ? 'opacity-100' : 'opacity-0'}`}></div>

                    <div className="relative w-6 h-6 mb-1 transition-all duration-200"> 
                      <span className={`text-xl transition-[filter] duration-200 ${isActive(subLink.path) ? '[filter:var(--purple-filter)]' : ''}`}
                        style={{ filter: isActive(subLink.path) ? purpleFilter : 'none' }}>
                        {subLink.icon}
                      </span>
                    </div>

                    <span className={`text-[12px] font-medium text-center ${isActive(subLink.path) ? 'text-purple-700' : 'text-gray-600 group-hover:text-purple-700'}`}> 
                      {subLink.title}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

   
      <div className="mt-auto py-4 px-2">
        <img src={refer} alt="refer" className="w-16 h-16 mb-1" /> 
      </div>
    </div>
  );
};

export default Sidebar;
