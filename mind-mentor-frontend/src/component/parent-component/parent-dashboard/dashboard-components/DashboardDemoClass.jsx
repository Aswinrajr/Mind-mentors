
import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardDemoClass = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <button className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
            <ArrowLeftIcon onClick={()=>navigate("/parent/kid/attendance/:id")} className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-gray-800">
            Demo Class Announcement
          </h2>
          <div className="w-5 h-5"></div>
        </div>
        <p className="text-gray-600 mb-6">
          The date and time for the upcoming demo class will be scheduled soon. Stay tuned for more details!
        </p>
        <button className="bg-indigo-500 text-white font-medium py-3 px-6 rounded-full hover:bg-indigo-600 transition-colors duration-300">
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default DashboardDemoClass;