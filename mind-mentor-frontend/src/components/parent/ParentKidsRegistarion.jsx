import { useState } from "react";
import { ArrowLeft, ChevronDown, Settings } from "lucide-react";
import mindMentorImage from "../../assets/mindmentorz.png";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { parentKidsRegistration } from "../../api/service/parent/ParentService";

const ParentKidsRegistration = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {state} = location
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    programs: [],
    chessLevel: "",
    intention: "",
    schoolName: "",
    address: "",
  });

  const [theme, setTheme] = useState("sky");
  const [language, setLanguage] = useState("English");

  const themes = {
    sky: "bg-sky-600",
    indigo: "bg-indigo-600",
    green: "bg-green-600",
    red: "bg-red-600",
    purple: "bg-purple-600",
  };

  const programs = ["Chess", "Rubik's Cube"];

  const chessLevels = [
    "Absolute Beginner - Not yet started playing",
    "Lower Beginner - Knows Castling",
    "Upper Beginner - Rating less than 1099",
    "Lower Intermediate - Rating is 1100 < 1299",
    "Upper Intermediate - Rating is 1300 < 1499",
    "Advanced - Rating is 1500+",
  ];

  const intention = ["Compitative", "Life Skill Improvement", "Summer Camp"];

  const handleProgramSelect = (program) => {
    setFormData((prev) => ({
      ...prev,
      programs: prev.programs.includes(program)
        ? prev.programs.filter((p) => p !== program)
        : [...prev.programs, program],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
     try{
        const result = await parentKidsRegistration(formData,state)
        console.log(result)
        if(result.status===201){
            toast.success(result?.data?.message)
            setTimeout(() => {
                navigate("/kids/demo",{state:result?.data?.data})
                
            }, 2000);
        }

     }catch(err){
        console.log("Error in submit the data",err)
     }

  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div
        className={`${themes[theme]} text-white lg:w-2/5 p-4 flex flex-col justify-between relative`}
      >
        <div className="flex-grow flex flex-col justify-center">
          <h2 className="text-3xl font-bold leading-tight mb-4">Welcome to</h2>
          <img src={mindMentorImage} alt="mindMentorImage" className="mb-4" />
        </div>
        <div className="flex justify-between items-center">
          <button className="flex items-center text-sm hover:underline transition duration-300">
            <ArrowLeft size={16} className="mr-2" /> back to site
          </button>
          <div className="relative">
            <button
              className="flex items-center text-sm focus:outline-none hover:bg-opacity-20 hover:bg-black p-3 rounded transition duration-300"
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
          className="absolute top-1/2 -translate-y-1/2 right-0 p-3 rounded-l-full bg-white text-sky-600 hover:bg-opacity-90 transition duration-300"
          onClick={changeTheme}
        >
          <Settings size={24} />
        </button>
      </div>

      <div className="lg:w-3/5 p-4 bg-gray-50 flex flex-col justify-between overflow-hidden">
        <div className="w-full mx-auto flex-grow  overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Student Registration Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Personal Information
              </h3>
              <div className="space-y-4">
                {/* Kid's Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kids Name
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  {/* Kid's Age */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kids Age
                    </label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Enter age"
                      className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                  {/* Kid's Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kids Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* School Name and Address Card */}

            {/* Program Selection Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Program Selection
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Selected Programs
                  </label>
                  <div className="min-h-[45px] p-3 bg-gray-50 border border-gray-200 rounded-lg mb-4">
                    {formData.programs.map((program) => (
                      <span
                        key={program}
                        className="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 mr-2 mb-2"
                      >
                        {program}{" "}
                        <span
                          className="cursor-pointer"
                          onClick={() => handleProgramSelect(program)}
                        >
                          ✖
                        </span>
                      </span>
                    ))}
                  </div>
                  <div className="space-x-4">
                    {programs.map((program) => (
                      <button
                        key={program}
                        type="button"
                        onClick={() => handleProgramSelect(program)}
                        className={`${
                          formData.programs.includes(program)
                            ? "bg-sky-600 text-white"
                            : "bg-gray-200 text-gray-600"
                        } rounded-lg px-4 py-2 text-sm`}
                      >
                        {program}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Chess Level Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Chess Knowledge Level
              </h3>
              <div className="space-y-4">
                <select
                  name="chessLevel"
                  value={formData.chessLevel}
                  onChange={handleChange}
                  className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                >
                  <option value="">Select Chess Level</option>
                  {chessLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Intention of Parents
              </h3>
              <div className="space-y-4">
                <select
                  name="intention"
                  value={formData.intention}
                  onChange={handleChange}
                  className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                >
                  <option value="">Select Chess Level</option>
                  {intention.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                School Information
              </h3>
              <div className="space-y-4">
                {/* School Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School Name
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="Enter school name"
                    className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter address"
                    className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-sky-600 text-white px-6 py-2 rounded-lg text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </div>
  );
};

export default ParentKidsRegistration;
