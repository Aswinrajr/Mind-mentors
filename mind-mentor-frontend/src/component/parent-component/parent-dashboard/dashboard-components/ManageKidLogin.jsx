import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  changeChildPin,
  ParentManageChildLogin,
} from "../../../../api/service/parent/ParentService";
import { toast } from "react-toastify";
import { Lock,  Pencil } from "lucide-react";

const ManageChildLogin = () => {
  const { id } = useParams();
  const [child, setChild] = useState(null);
  const [pin, setPin] = useState("");
  const [isEditingPin, setIsEditingPin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChildData = async () => {
      try {
        const response = await ParentManageChildLogin(id);
        if (response && response.data) {
          setChild(response.data);
          setPin(response.data.kidPin || "");
        }
      } catch (error) {
        console.error("Error fetching child data:", error);
        toast.error("Failed to load child data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchChildData();
  }, [id]);

  const handleSavePin = async () => {
    if (!pin || pin.length !== 4) {
      toast.error("PIN must be 4 digits");
      return;
    }

    if (pin !== child.kidPin) {
      try {
        const response = await changeChildPin(id, pin);
        if (response.status === 200) {
          setChild((prev) => ({ ...prev, kidPin: pin }));
          toast.success(response.data.message);
          setIsEditingPin(false);
        }
      } catch (error) {
        console.error("Error updating PIN:", error);
        toast.error("Failed to update PIN");
      }
    } else {
      setIsEditingPin(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!child) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">No child data found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg">
        {/* Header Section */}
        <div className="p-8 text-center border-b border-gray-100">
          <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-yellow-600" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Manage Child Login
          </h1>
          <p className="text-gray-500 text-sm">
            Update your childs PIN for secure account access
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          {/* Child Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Child Name
              </label>
              <input
                type="text"
                value={child.kidsName || ""}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chess ID
              </label>
              <input
                type="text"
                value={child.chessId || ""}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
                disabled
              />
            </div>
          </div>

          {/* PIN Management Section */}
         
           

            {isEditingPin ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={pin}
                  onChange={(e) =>
                    setPin(e.target.value.replace(/\D/g, "").slice(0, 4))
                  }
                  maxLength={4}
                  className="flex-1 px-4 py-2.5 border border-blue-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter 4-digit PIN"
                />

                <button
                  onClick={handleSavePin}
                  className="w-full py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors"
                >
                  Change PIN
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-blue-100">
                <span className="font-mono text-lg text-gray-900">
                  {child.kidPin}
                </span>
                <button
                  onClick={() => setIsEditingPin(true)}
                  className="text-blue-600 hover:text-blue-700 p-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Pencil className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
     
    </div>
  );
};

export default ManageChildLogin;
