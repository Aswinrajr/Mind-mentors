import { useState } from "react";
import { ArrowLeft, ChevronDown, Settings } from "lucide-react";
import mindMentorImage from "../../assets/mindmentorz.png";
import { useLocation } from "react-router-dom";
import { parentBookDemoClass} from "../../api/service/parent/ParentService.js"

const KidsRegistration = () => {
  const location =useLocation()
  const {state} = location
  console.log("state",state)
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("sky");
  const [program, setProgram] = useState("");
  const [programLevel, setProgramLevel] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const themes = {
    sky: "bg-sky-600",
    indigo: "bg-indigo-600",
    green: "bg-green-600",
    red: "bg-red-600",
    purple: "bg-purple-600",
  };

  const textColors = {
    sky: "text-sky-600",
    indigo: "text-indigo-600",
    green: "text-green-600",
    red: "text-red-600",
    purple: "text-purple-600",
  };

  const changeTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    const formData = {
      program,
      programLevel,
      date,
      time,
    };

    try {
     
      console.log("Registration successful:", formData);
      const response = await parentBookDemoClass(formData,state)
      console.log(response)
      
    } catch (error) {
      console.error("Error during registration:", error);
    
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div
        className={`${themes[theme]} text-white lg:w-2/5 p-8 flex flex-col justify-between relative`}
      >
        <div className="flex-grow flex flex-col justify-center">
          <h2 className={`text-4xl font-bold leading-tight mb-4 ${textColors[theme]}`}>
            Welcome to
          </h2>
          <img src={mindMentorImage} alt="mindMentorImage" />
        </div>
        <div className="flex justify-between items-center">
          <button className="flex items-center text-sm hover:underline transition duration-300">
            <ArrowLeft size={16} className="mr-2" /> back to site
          </button>
          <div className="relative">
            <button
              className="flex items-center text-sm focus:outline-none hover:bg-opacity-20 hover:bg-black p-2 rounded transition duration-300"
              onClick={() =>
                setLanguage(language === "English" ? "Hindi" : "English")
              }
            >
              <span className="mr-2">🇬🇧</span>
              <span>{language}</span>
              <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
        </div>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-0 p-2 rounded-l-full bg-white text-sky-600 hover:bg-opacity-90 transition duration-300"
          onClick={changeTheme}
        >
          <Settings size={24} />
        </button>
      </div>

      <div className="lg:w-3/5 p-8 bg-white flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <h2 className={`text-3xl font-bold ${textColors[theme]}`}>Enroll your Kid</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="program" className="font-medium block mb-2">
                  Program
                </label>
                <select
                  id="program"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                >
                  <option value="">Choose a program</option>
                  <option value="Chess">Chess</option>
                  <option value="Coding">Coding</option>
                  <option value="Rubiks Cube">Rubiks Cube</option>
                  <option value="Robotics">Robotics</option>
                </select>
              </div>
              <div>
                <label htmlFor="program-level" className="font-medium block mb-2">
                  Program Level
                </label>
                <select
                  id="program-level"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full"
                  value={programLevel}
                  onChange={(e) => setProgramLevel(e.target.value)}
                >
                  <option value="">Choose a level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="date-time" className="font-medium block mb-2">
                Suitable Date & Time
              </label>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="date" className="text-sm mb-2">Date</label>
                  <input
                    type="date"
                    id="date"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="time" className="text-sm mb-2">Time</label>
                  <input
                    type="time"
                    id="time"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`${themes[theme]} text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300 w-full`}
            >
              ENROLL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KidsRegistration;
