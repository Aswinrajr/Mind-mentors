import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, MapPin, AlertCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const DashboardDemoClass = () => {
  const {id}  =useParams()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [demoClass, setDemoClass] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDemoClass = async () => {
      try {
        setLoading(true);

        const response = await new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                status: "scheduled",
                dateTime: "2024-11-20T14:00:00",
                location: "Room 101, Learning Center",
                subject: "Mathematics",
                teacherName: "Ms. Sarah Johnson",
              }),
            1000
          )
        );
        setDemoClass("");
      } catch (err) {
        console.log("Error in getting demo class", err);
        setError("Failed to fetch demo class details");
      } finally {
        setLoading(false);
      }
    };

    fetchDemoClass();
  }, []);

  const handleRequestDemo = () => {
    console.log("Requesting demo class");
    navigate(`/parent/kid/demo-class-shedule/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate("/parent/kid/attendance/:id")}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {demoClass ? "Upcoming Demo Class" : "No Demo Class Scheduled"}
            </h2>
          </div>

          <div className="p-6">
            {demoClass ? (
              <div className="space-y-6">
                {/* Class Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date & Time</p>
                      <p className="text-gray-700">
                        {new Date(demoClass.dateTime).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-700">{demoClass.location}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="border-t border-gray-100 pt-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">Subject</p>
                      <p className="text-gray-700 font-medium">
                        {demoClass.subject}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teacher</p>
                      <p className="text-gray-700 font-medium">
                        {demoClass.teacherName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-center">
                    Confirm Attendance
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center"  onClick={handleRequestDemo} >
                    Reschedule
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="mb-4 bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Demo Class Scheduled
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Would you like to schedule a demo class? Our team will help
                  you find the perfect time slot.
                </p>
                <button
                  onClick={handleRequestDemo}
                  className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Request Demo Class
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDemoClass;
