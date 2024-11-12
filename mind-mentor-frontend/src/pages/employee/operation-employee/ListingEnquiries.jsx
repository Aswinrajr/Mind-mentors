import EnquiryList from "../../../employee-component/operation-new/dashboard/EnquiryList";
import Sidebar from "../../../employee-component/operation-new/layout/Sidebar";

const ListingEnquiries = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="fixed inset-y-0 left-0 z-50 w-64">
        <Sidebar />
      </div>
      <div className="ml-64 p-4 w-full">
        <EnquiryList />
      </div>
    </div>
  );
};

export default ListingEnquiries;