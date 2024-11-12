// /* eslint-disable react/prop-types */
// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const TextSlider = ({ text, className }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const containerWidth = 200; // Adjust based on your sidebar width
//   const textWidth = text.length * 8;
//   const shouldSlide = textWidth > containerWidth;

//   return (
//     <div 
//       className={`overflow-hidden ${className}`}
//       style={{ width: containerWidth }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div
//         className={`whitespace-nowrap transition-transform duration-[2000ms] ease-linear`}
//         style={{
//           transform: isHovered && shouldSlide ? `translateX(-${textWidth - containerWidth}px)` : 'translateX(0)',
//         }}
//       >
//         {text}
//       </div>
//     </div>
//   );
// };

// const Sidebar = () => {
//   const location = useLocation();
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   const menuItems = 
//   [
//     { 
//       title: 'Dashboard', 
//       icon: '📊', 
//       path: '/dashboard'
//     },
//     { 
//       title: 'CRM', 
//       icon: '💼', 
//       path: '/crm',
//       submenu: [
//         { 
//           title: 'S_Enquiry Form', 
//           icon: '📝', 
//           path: '/crm/enquiry-form' 
//         },
//         { 
//           title: 'Enquiries', 
//           icon: '📋', 
//           path: '/crm/enquiries' 
//         },
//         { 
//           title: 'Prospects', 
//           icon: '👥', 
//           path: '/crm/prospects' 
//         },
//         { 
//           title: 'Refer a Friend Report', 
//           icon: '📢', 
//           path: '/crm/refer-friend' 
//         },
//       ]
//     },
//     { 
//       title: 'Tasks', 
//       icon: '✓', 
//       path: '/tasks',
//       submenu: [
//         { 
//           title: 'My Tasks',
//           icon: '📋',
//           path: '/tasks/my-tasks' 
//         },
//         { 
//           title: 'Task assigned by me',
//           icon: '👥',
//           path: '/tasks/team-assign' 
//         },
//       ]
//     },
//     { 
//       title: 'Invoices', 
//       icon: '📄', 
//       path: '/invoices' 
//     },
//     { 
//       title: 'Other Programs', 
//       icon: '🔄', 
//       path: '/programs' 
//     },
//     { 
//       title: 'Class Schedule', 
//       icon: '📅', 
//       path: '/schedule',
//       submenu: [
//         { 
//           title: 'View all the class schedule',
//           icon: '👁️',
//           path: '/all-class-shedule' 
//         },
//         { 
//           title: 'Available slot',
//           icon: '📅',
//           path: '/vailable-slot' 
//         },
//       ]
//     },
//     { 
//       title: 'Support', 
//       icon: '🔧', 
//       path: '/support',
//       submenu: [
//         { 
//           title: 'My system admin support request',
//           icon: '🔧',
//           path: '/support/system-admin' 
//         },
//         { 
//           title: 'MyKart status checker',
//           icon: '📊',
//           path: '/support/my-kart' 
//         },
//       ]
//     }
//   ];

//   const toggleSubmenu = (index) => {
//     setOpenSubmenu(openSubmenu === index ? null : index);
//   };

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   const isSubmenuActive = (submenu) => {
//     return submenu?.some(item => location.pathname === item.path);
//   };

//   return (
//     <div className="h-full bg-[#2F3542] text-white">
//       <div className="p-4 bg-[#2F3542] border-b border-gray-700">
//         <TextSlider 
//           text="Copy of FMM Virtual Academy" 
//           className="text-lg font-semibold"
//         />
//       </div>

//       <nav className="mt-2 overflow-y-auto" style={{ height: 'calc(100vh - 160px)' }}>
//         {menuItems.map((item, index) => (
//           <div key={index}>
//             <div
//               onClick={() => item.submenu && toggleSubmenu(index)}
//               className={`flex items-center px-4 py-3 text-sm cursor-pointer
//                 hover:bg-gray-700 transition-colors
//                 ${isActive(item.path) || isSubmenuActive(item.submenu) ? 'bg-emerald-600' : ''}`}
//             >
//               <span className="mr-3 w-5 text-center">{item.icon}</span>
//               {item.submenu ? (
//                 <TextSlider text={item.title} className="flex-grow" />
//               ) : (
//                 <Link to={item.path} className="flex-grow">
//                   <TextSlider text={item.title} />
//                 </Link>
//               )}
//               {item.submenu && (
//                 <span className="ml-auto">
//                   <svg
//                     className={`w-4 h-4 transition-transform duration-200 
//                       ${openSubmenu === index ? 'rotate-90' : ''}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </span>
//               )}
//             </div>
            
//             {item.submenu && openSubmenu === index && (
//               <div className="bg-gray-800">
//                 {item.submenu.map((subItem, subIndex) => (
//                   <Link
//                     key={subIndex}
//                     to={subItem.path}
//                     className={`flex items-center pl-12 pr-4 py-2 text-sm
//                       hover:bg-gray-700 transition-colors
//                       ${isActive(subItem.path) ? 'bg-gray-700 text-emerald-400' : ''}`}
//                   >
//                     <span className="mr-3 w-5 text-center">{subItem.icon}</span>
//                     <TextSlider text={subItem.title} className="flex-grow" />
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </nav>

//       <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-[#2F3542]">
//         <div className="flex items-center">
//           <div className="w-8 h-8 rounded-full bg-gray-500 mr-3"></div>
//           <span className="text-sm">operations</span>
//           <span className="ml-auto">
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//               />
//             </svg>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from 'lucide-react';
import account from "../../../images/bag.webp";
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

  const navLinks = [
    {
      title: 'Dashboard',
      icon: '📊',
      path: '/dashboard'
    },
    {
      title: 'CRM',
      icon: '💼',
      path: '/crm',
      submenu: [
        { title: 'Enquiry Form', icon: '📝', path: '/crm/enquiry-form' },
        { title: 'Enquiries', icon: '📋', path: '/crm/enquiries' },
        { title: 'Prospects', icon: '👥', path: '/crm/prospects' },
        { title: 'Refer Friend', icon: '📢', path: '/crm/refer-friend' },
      ]
    },
    {
      title: 'Tasks',
      icon: '💼',
      path: '/tasks',
      submenu: [
        { title: 'My Tasks', icon: '📋', path: '/tasks/my-tasks' },
        { title: 'Team Tasks', icon: '👥', path: '/tasks/team-assign' },
      ]
    },
    { title: 'Invoices', icon: '📄', path: '/invoices' },
    { title: 'Programs', icon: '🔄', path: '/programs' },
    {
      title: 'Schedule',
      icon: '📅',
      path: '/schedule',
      submenu: [
        { title: 'All Classes', icon: '👁️', path: '/all-class-schedule' },
        { title: 'Available Slots', icon: '📅', path: '/available-slot' },
      ]
    },
    {
      title: 'Support',
      icon: '🔧',
      path: '/support',
      submenu: [
        { title: 'System Admin', icon: '🔧', path: '/support/system-admin' },
        { title: 'MyKart Status', icon: '📊', path: '/support/my-kart' },
      ]
    }
  ];

  return (
    <div className="w-[200px] bg-white flex flex-col shadow-md h-screen">
      {/* Profile Section */}
      <div className="relative pt-4 pb-8 flex justify-center">
        <img src={account} alt="Profile" className="w-10 h-10 rounded-full" />
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute bottom-7 right-5 border-2 border-white"></div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-0.5">
        {navLinks.map((link) => (
          <div key={link.path}>
            {/* Main Link */}
            <button
              onClick={() => link.submenu && toggleSubmenu(link.path)}
              className={`w-full group flex flex-col items-center py-2 px-2 transition-colors duration-200 relative ${isActive(link.path) ? 'bg-purple-50' : ''} ${!isActive(link.path) ? 'hover:bg-purple-50' : ''}`}
            >
              <div className={`absolute left-0 top-0 w-1 h-full bg-purple-700 transition-opacity duration-200 ${isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              <span className="text-xl mb-1">{link.icon}</span>
              <span className={`text-[10px] font-semibold text-center transition-colors duration-200 ${isActive(link.path) ? 'text-purple-700' : 'text-gray-600 group-hover:text-purple-700'}`}>
                {link.title}
              </span>
              {link.submenu && (
                <ChevronRight className={`w-3 h-3 mt-1 transition-transform ${expandedMenus[link.path] ? 'rotate-90' : ''}`} />
              )}
            </button>

            {/* Submenu */}
            {link.submenu && expandedMenus[link.path] && (
              <div className="bg-gray-50">
                {link.submenu.map((subLink) => (
                  <Link
                    key={subLink.path}
                    to={subLink.path}
                    className={`flex flex-col items-center py-2 px-4 transition-colors duration-200 ${isActive(subLink.path) ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-purple-50 hover:text-purple-700'}`}
                  >
                    <span className="text-sm mb-0.5">{subLink.icon}</span>
                    <span className="text-[9px] font-medium text-center">
                      {subLink.title}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Refer Section */}
      <div className="mt-auto py-4 px-2">
        <img src={refer} alt="refer" className="w-auto h-auto mb-1" />
      </div>
    </div>
  );
};

export default Sidebar;
