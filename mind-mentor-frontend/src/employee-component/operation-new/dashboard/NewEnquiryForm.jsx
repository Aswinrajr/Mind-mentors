import { Mail } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const NewEnquiryForm = () => {
  return (
    <div className="p-8 w-full mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Enquiry Form</h2>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Parent Name */}
            <div className="flex items-center space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700">Parent Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 p-2 border rounded text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 p-2 border rounded text-sm focus:outline-none"
              />
            </div>

            {/* WhatsApp Number */}
            <div className="flex items-center space-x-4">
              <label className="w-auto text-sm font-medium text-gray-700">
                Parents WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country={'in'}
                inputProps={{ placeholder: '81234 56789' }}
                containerClass="w-full "
                inputClass="w-full  text-sm border rounded focus:outline-none"
             
                preferredCountries={['in']}
              />
            </div>

            {/* Parent Email */}
            <div className="flex items-center space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700">Parents Email ID</label>
              <div className="relative w-full">
                <input
                  type="email"
                  className="w-full p-2 border rounded text-sm focus:outline-none"
                  placeholder="example@email.com"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Message */}
            <div className="flex items-start space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700 pt-1">Message</label>
              <textarea
                rows={4}
                className="w-full p-2 border rounded text-sm focus:outline-none resize-none"
                placeholder="Enter your message here..."
              />
            </div>

            {/* Source */}
            <div className="flex items-center space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700">Source</label>
              <select className="w-full p-2 border rounded text-sm focus:outline-none bg-white">
                <option value="">-Select-</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Kid's Name */}
            <div className="flex items-center space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700">Kids Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 p-2 border rounded text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 p-2 border rounded text-sm focus:outline-none"
              />
            </div>

            {/* Kid's Age */}
            <div className="flex items-center space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700">Kids Age</label>
              <input
                type="number"
                placeholder="Age"
                className="w-full p-2 border rounded text-sm focus:outline-none"
              />
            </div>

            {/* Kid's Gender */}
            <div className="flex items-center space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700">Kids Gender</label>
              <select className="w-full p-2 border rounded text-sm focus:outline-none bg-white">
                <option value="">-Select-</option>
              </select>
            </div>

            {/* Programs */}
            <div className="flex items-center space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700">Programs</label>
              <select className="w-full p-2 border rounded text-sm focus:outline-none bg-white">
                <option value="">-Select-</option>
              </select>
            </div>

            {/* Intention of Parents */}
            <div className="flex items-center space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700">Intention of Parents</label>
              <select className="w-full p-2 border rounded text-sm focus:outline-none bg-white">
                <option value="">-Select-</option>
              </select>
            </div>

            {/* School Name */}
            <div className="flex items-center space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700">School Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm focus:outline-none"
                placeholder="Enter school name"
              />
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4">
              <label className="w-36 text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                placeholder="Place"
                className="w-full p-2 border rounded text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 justify-center">
          <button
            type="submit"
            className="px-8 py-2 bg-emerald-500 text-white rounded text-sm font-medium hover:bg-emerald-600 focus:outline-none transition-all"
          >
            Submit
          </button>
          <button
            type="reset"
            className="px-8 py-2 bg-white border border-gray-300 rounded text-sm font-medium hover:bg-gray-100 focus:outline-none transition-all"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewEnquiryForm;
