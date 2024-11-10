import { useState } from "react";
import { ArrowLeft, ChevronDown, Settings } from "lucide-react";
import mindMentorImage from "../../assets/mindmentorz.png";
import { useNavigate } from "react-router-dom";

const ParentRegistration = () => {
  const navigate = useNavigate()
  const [mobile, setMobile] = useState("");
  const [isMobileWhatsapp, setIsMobileWhatsapp] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [childName, setChildName] = useState("");
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("sky");

  const themes = {
    sky: "bg-sky-600",
    indigo: "bg-indigo-600",
    green: "bg-green-600",
    red: "bg-red-600",
    purple: "bg-purple-600",
  };

  const changeTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login submitted", {
      mobile,
      email,
      name,
      childName,
      isMobileWhatsapp,
    });
    const data = {
      mobile,
      email,
      name,
      childName,
      isMobileWhatsapp,

    }
    navigate("/parent/parent-kids-registration",{state:data})
    

  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div
        className={`${themes[theme]} text-white lg:w-2/5 p-8 flex flex-col justify-between relative`}
      >
        <div className="flex-grow flex flex-col justify-center">
          <h2 className="text-4xl font-bold leading-tight mb-4">Welcome to</h2>
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

      <div className="lg:w-3/5 p-8 bg-white ml-38 mt-32 ">
         <div className="">
          <div className=" mb-8">
            <h2 className=" ml-48 text-3xl font-bold text-purple-600 mb-2">
              Update More Details to your Profile
            </h2>
            <h2 className=" ml-44 text-sm text-gray-600">
              The Details given will be kept confidential and will not be used
              for any marketing purposes
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 ml-40 mr-16">
            <div className="space-y-1 ">
              <div className="flex items-start mb-2">
                <input
                  id="isMobileWhatsapp"
                  type="checkbox"
                  checked={isMobileWhatsapp}
                  onChange={(e) => setIsMobileWhatsapp(e.target.checked)}
                  className="mt-1 h-4 w-4 text-purple-600 rounded"
                />
                <label
                  htmlFor="isMobileWhatsapp"
                  className="ml-2 text-sm font-medium text-gray-700"
                >
                  Is Phone Number same as whatsapp number
                </label>
              </div>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your whatsapp number"
                maxLength={10}
              />
              <p className="text-xs text-purple-600 mt-1">
                Will also be used for class notifications and to avoid calls
              </p>
            </div>

            <div className="space-y-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email ID"
              />
              <p className="text-xs text-purple-600">
                Will be used for sending payment invoices
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
                <p className="text-xs text-purple-600">
                  Display name / Invoice name
                </p>
              </div>
              <div className="space-y-1">
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your child name"
                />
                <p className="text-xs text-purple-600">Participant name</p>
              </div>
            </div>

            <button
              type="submit"
              className={`${themes[theme]} w-full py-3 px-4 text-white font-medium rounded-md hover:bg-opacity-90 transition duration-300 flex items-center justify-center`}
            >
              CONTINUE
              <span className="ml-2">→</span>
            </button>
          </form>
         </div>
      </div>
      
    </div>
  );
};

export default ParentRegistration;
