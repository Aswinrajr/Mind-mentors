import { useState, useEffect } from 'react';
import { ArrowLeftIcon, CheckIcon, EditIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { changeChildPin, ParentManageChildLogin } from '../../../../api/service/parent/ParentService';
import { toast, ToastContainer } from "react-toastify";

const ManageChildLogin = () => {
  const { id } = useParams();
  const [child, setChild] = useState(null);
  const [pin, setPin] = useState('');
  const [isEditingPin, setIsEditingPin] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchChildData = async () => {
      try {
        const response = await ParentManageChildLogin(id);
        if (response && response.data) {
          setChild(response.data);
          setPin(response.data.kidPin || '');
        }
      } catch (error) {
        console.log("Error fetching child data:", error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchChildData();
  }, [id]);

  const handleSavePin = () => {
    if (pin !== child.kidPin) {
      saveUpdatedPin(pin);
      setIsEditingPin(false);
    } else {
      setIsEditingPin(false);
    }
  };

  const saveUpdatedPin = async(newPin) => {
    console.log('Saving new PIN:', newPin);
    setChild((prevChild) => ({
      ...prevChild,
      kidPin: newPin,
    }));

    try {
        const response = await changeChildPin(id, newPin);
        console.log(response);

        if (response.status === 200) {
          toast.success(response.data.message);
        }
      } catch (error) {
        console.error('Error updating PIN:', error);
        toast.error('Error updating PIN');
      }
  };

  // Conditional rendering based on loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="bg-gray-800 shadow-xl rounded-lg p-8 animate-pulse space-y-4 w-full max-w-md">
          <div className="h-8 bg-gray-600 rounded-md"></div>
          <div className="h-8 bg-gray-600 rounded-md"></div>
          <div className="h-8 bg-gray-600 rounded-md"></div>
        </div>
      </div>
    );
  }

  if (!child) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="bg-gray-800 shadow-xl rounded-lg p-8 animate-pulse space-y-4 w-full max-w-md">
          <div className="h-8 bg-gray-600 rounded-md"></div>
          <div className="h-8 bg-gray-600 rounded-md"></div>
          <div className="h-8 bg-gray-600 rounded-md"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <button className="text-gray-600 hover:text-gray-500 transition-colors duration-300">
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold text-gray-800">Child Details</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800"
              value={child.kidsName}
              disabled
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <label htmlFor="chess-id" className="block text-gray-700 font-medium mb-2">
              Chess ID
            </label>
            <input
              type="text"
              id="chess-id"
              className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800"
              value={child.chessId}
              disabled
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <label htmlFor="pin" className="block text-gray-700 font-medium mb-2">
              PIN
            </label>
            {isEditingPin ? (
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  id ="pin"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  maxLength={4}
                />
                <button
                  className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-full hover:bg-indigo-600 transition-colors duration-300"
                  onClick={handleSavePin}
                >
                  <CheckIcon className="w-5 h-5 inline-block" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-medium">{child.kidPin}</span>
                <button
                  className="text-gray-600 hover:text-gray-500 transition-colors duration-300"
                  onClick={() => setIsEditingPin(true)}
                >
                  <EditIcon className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
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

export default ManageChildLogin;
