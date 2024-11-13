import {
  Award,
  Book,
  Calendar,
  ChevronRight,
  Sparkles,
  Star,
  Trophy,
  User,
  UserPlus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { gettingKidsData } from "../../../../api/service/parent/ParentService";
import { useNavigate } from "react-router-dom";

const KidsDetails = () => {
  const navigate = useNavigate();
  const [kids, setKids] = useState([]);
  const parentId = localStorage.getItem("parentId");
  console.log("parent id", parentId);

  useEffect(() => {
    const fetchKidsData = async () => {
      const response = await gettingKidsData(parentId);
      console.log("response in fetch kids data", response?.data?.kidsData);
      if (response.status === 200) {
        setKids(response?.data?.kidsData);
      }
    };
    fetchKidsData();
  }, []);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8">
          <div className="flex justify-between items-center">
            <div className="relative">
              <h2 className="text-3xl font-bold text-gray-800 mb-1">
                My Champions
                <Sparkles className="inline-block ml-2 w-5 h-5 text-yellow-400" />
              </h2>
              <p className="text-gray-600 text-sm">
                Nurturing young minds through the art of chess
              </p>
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-blue-200 rounded-full opacity-20 animate-pulse delay-300"></div>
            </div>
            <button
              onClick={() => navigate("/parent/add-kid")}
              className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 active:transform active:scale-95 group"
            >
              <UserPlus className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Add New Champion
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kids?.map((kid) => (
            <div
              key={kid?._id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="h-24 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute -right-3 top-3 w-16 h-16 bg-white opacity-10 rounded-full"></div>
                <div className="absolute -left-3 -bottom-3 w-12 h-12 bg-white opacity-10 rounded-full"></div>
              </div>

              <div className="px-6 pb-6">
                <div className="flex justify-center -mt-10 mb-4">
                  {kid?.imageUrl ? (
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity blur"></div>
                      <img
                        src={kid?.imageUrl}
                        alt={`${kid?.firstName}'s profile`}
                        className="relative w-20 h-20 rounded-full object-cover border-4 border-white"
                      />
                    </div>
                  ) : (
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity blur"></div>
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border-4 border-white">
                        <User size={32} className="text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {kid.kidsName || "Achu"}
                  </h3>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-1.5 inline-block shadow-md">
                    <span className="text-sm font-medium">
                      Chess ID: {kid.chessId}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-5">
                  <div className="flex items-center gap-2 text-gray-700 mb-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">Active Courses</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {kid?.programs?.length > 0 ? (
                      kid.programs.map((course, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm"
                        >
                          {course ? course : "Chess"}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 text-xs">
                        No active courses
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 rounded-2xl p-2 text-center">
                    <Book className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">Lessons</span>
                    <p className="text-base font-bold text-blue-600">12</p>
                  </div>
                  <div className="bg-purple-50 rounded-2xl p-2 text-center">
                    <Star className="w-4 h-4 text-purple-500 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">Level</span>
                    <p className="text-base font-bold text-purple-600">
                      Advanced
                    </p>
                  </div>
                </div>

            
                <div className="space-y-3">
                  <button
                    onClick={() =>
                      navigate(`/parent/kid/attendance/${kid._id}`)
                    }
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    View Progress
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center group">
                    <Award className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {kids && kids?.length === 0 && (
          <div className="relative bg-white rounded-3xl shadow-xl p-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>

            <div className="relative flex flex-col items-center justify-center min-h-[300px]">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-full mb-6 group hover:scale-110 transition-transform duration-300">
                <UserPlus className="w-12 h-12 text-blue-600 group-hover:rotate-12 transition-transform" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                Begin Your Childs Chess Journey
              </h3>

              <p className="text-gray-600 text-center mb-8 max-w-md text-base">
                Transform your childs potential into mastery. Start their chess
                adventure today and watch them develop strategic thinking,
                confidence, and excellence.
              </p>

              <button
                onClick={() => navigate("/parent/add-kid")}
                className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-xl transition-all duration-300 hover:shadow-2xl active:transform active:scale-95 group"
              >
                <UserPlus className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Add Your First Champion
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KidsDetails;
