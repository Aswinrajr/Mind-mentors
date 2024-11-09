import mindmentors from "../../images/mindmentorz.png"
import { HelpCircle, LogOut } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top bar with logo and icons */}
      <div className="flex justify-between items-center px-5 py-2 bg-white">
        {/* Logo container */}
        <div className="flex items-center">
          <img 
            src={mindmentors}
            alt="MindMentorz Logo" 
            className="w-[200px] h-[50px] object-contain mr-5"
          />
        </div>

        {/* Icons container */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
            <HelpCircle className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
            <LogOut className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

    
     
    </div>
  );
};

export default Topbar;