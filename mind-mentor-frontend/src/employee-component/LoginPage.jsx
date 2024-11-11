import  { useState } from "react";
import { employeeEmailVerification, operationPasswordVerification } from "../api/service/employee/employeeService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailSubmit = async(e) => {
    e.preventDefault();
    const existEmployee = await employeeEmailVerification(email)
    console.log(existEmployee)
    if(existEmployee.status===200){
        setStep(2); 

    }
  };

  const handlePasswordSubmit = async(e) => {
    e.preventDefault();

    console.log("Logging in with", email, password);
    try{
        console.log("Welcome to opertaopn dept")
        const response = await operationPasswordVerification(email,password)
        console.log(response)
        if(response.status===200){
            toast.success(response?.data?.message)
            localStorage.setItem("email",response?.data?.email||"operationdept@gmail.com")
            setTimeout(() => {
                navigate("/employee-operation-dashboard")
                
            }, 1500);
        }

    }catch(err){
        console.log("Error in opertaion dept login ",err)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-center text-gray-900">
            Sign In
          </h1>
        </div>

        {/* Step 1: Email */}
        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operations@sensitive.co.in"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Next
            </button>

            <div className="text-center space-y-2">
              <div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-sm text-gray-600">
                Dont have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        )}

        {/* Step 2: Password */}
        {step === 2 && (
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Sign In
            </button>

            <div className="text-center space-y-2">
              <div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-sm text-gray-600">
                Dont have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
