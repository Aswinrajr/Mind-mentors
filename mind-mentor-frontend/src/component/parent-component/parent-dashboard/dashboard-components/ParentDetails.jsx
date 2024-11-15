import { useState, useEffect } from "react";
import axios from "axios";
import { getParentData } from "../../../../api/service/parent/ParentService";
import parentImage from "../../../../images/boy.png";

const ParentDetailsCard = () => {
  const parentId = localStorage.getItem("parentId");
  const [parent, setParent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [parentDetails, setParentDetails] = useState({
    parentName: "",
    parentEmail: "",
    parentMobile: "",
    parentPin: "",
  });

  useEffect(() => {
    const fetchParentData = async () => {
      try {
        const response = await getParentData(parentId);
        setParent(response.data.parent);
        setParentDetails(response.data.parent);
      } catch (error) {
        console.error("Error fetching parent data:", error);
      }
    };

    fetchParentData();
  }, [parentId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setParentDetails(parent);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        `/api/parents/${parentId}`,
        parentDetails
      );
      setParent(response.data.parent);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving parent details:", error);
    }
  };

  if (!parent) return <div>Loading...</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg flex items-start">
      <div className="flex-shrink-0 mr-8">
        <img
          src={parentImage}
          alt="Parent"
          className="w-32 h-32 rounded-full"
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-6">
          {isEditing ? (
            <input
              type="text"
              value={parentDetails.parentName}
              onChange={(e) =>
                setParentDetails({
                  ...parentDetails,
                  parentName: e.target.value,
                })
              }
              className="text-3xl font-bold"
            />
          ) : (
            <h1 className="text-3xl font-bold">{parent.parentName}</h1>
          )}
          {isEditing ? (
            <div className="flex space-x-4">
              <button
                onClick={handleSaveClick}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Save
              </button>
              <button
                onClick={handleCancelClick}
                className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={handleEditClick}
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            >
              Edit
            </button>
          )}
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                value={parentDetails.parentEmail}
                onChange={(e) =>
                  setParentDetails({
                    ...parentDetails,
                    parentEmail: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-600">{parent.parentEmail}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Mobile
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={parentDetails.parentMobile}
                onChange={(e) =>
                  setParentDetails({
                    ...parentDetails,
                    parentMobile: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-600">{parent.parentMobile}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDetailsCard;