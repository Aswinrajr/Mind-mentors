import SEnquiryForm from "../../../employee-component/operation/dashboard/SEnquiryForm";
import Sidebar from "../../../employee-component/operation/layout/Sidebar";

const SEnquiryFormPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0">
        <Sidebar />
      </div>

      {/* Add a flex-grow class to make the enquiry form take the full width */}
      <div className="flex-grow p-6">
        <SEnquiryForm />
      </div>
    </div>
  );
};

export default SEnquiryFormPage;
