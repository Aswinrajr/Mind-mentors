import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { parentRegisterChampions } from "../../api/service/parent/ParentService";
import { useNavigate } from "react-router-dom";

const EnrolmentKid = () => {
  const parentId = localStorage.getItem("parentId")
  const navigate = useNavigate()
  
  
  const [formData, setFormData] = useState({
    kidsName:  "",
    age: "",
    gender: "",
    intention: "",
    schoolName: "",
    address: "",
    pincode: "",
  });

  const intentions = ["Compitative", "Life Skill Improvement", "Summer Camp"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("parentId,formData",parentId,formData)
      const response =await parentRegisterChampions(parentId,formData)
      console.log("result",response)
      if(response.status===201){
        toast.success(response?.data?.message);
        setTimeout(() => {
          navigate("/parent/kid")
          
        }, 1500);


      }
    } catch (err) {
      console.log("Err",err)
      toast.error("Error submitting the form");
    }
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center bg-gray-50">
      <div className="w-full  p-4 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[#b115b1] mb-2">
          Add new champions
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kids Name
                </label>
                <input
                  type="text"
                  name="kidsName"
                  value={formData.kidsName}
                  onChange={handleChange}
                  className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Kids Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
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

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Intention of Parents
            </h3>
            <select
              name="intention"
              value={formData.intention}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            >
              <option value="">Select Intention</option>
              {intentions.map((intent) => (
                <option key={intent} value={intent}>
                  {intent}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              School Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter your pincode"
                  className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full bg-[rgb(177,21,177)] text-white py-3 px-4 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(177,21,177)] transition duration-300"
            >
              Next →
            </button>
          </div>
        </form>
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

export default EnrolmentKid;
