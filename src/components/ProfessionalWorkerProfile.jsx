import { useState } from "react";
import workerProfilePic from "/assets/profile.webp"; // Placeholder for worker profile image

export default function ProfessionalWorkerProfile() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Sample worker data - this would come from your database
  const [workerData, setWorkerData] = useState({
    name: "Rahul Sharma",
    dob: "1985-06-15",
    profession: "Electrician",
    experience: "8",
    phone: "9876543210",
    email: "rahul.sharma@example.com",
    location: "Mumbai, Andheri West",
    skills: "Wiring, Circuit installation, Appliance repair, Lighting installation",
    document: "ABCDE1234F",
    bankDetails: "SBI Account ending with 4532",
    profilePicture: workerProfilePic,
    aadharNumber: "9876 5432 1098",
    panNumber: "ABCDE1234F",
    verificationStatus: "Verified",
    rating: 4.7,
    totalJobs: 124,
    activeJobs: 2
  });

  // Copy of the data for editing
  const [formData, setFormData] = useState({...workerData});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkerData({...formData});
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData({...workerData});
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white p-6 rounded-3xl shadow-md w-full max-w-5xl">
        {/* Profile Header */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-green-700">
            Your Professional Profile
          </h2>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button onClick={handleCancel} className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300">
                  Cancel
                </button>
                <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700">
                  Save Changes
                </button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700">
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Profile Information */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Profile Status Card */}
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-green-700">Verification Status:</span>
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    {workerData.verificationStatus}
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-700">{workerData.rating}</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-700">{workerData.totalJobs}</p>
                    <p className="text-xs text-gray-500">Jobs</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-700">{workerData.activeJobs}</p>
                    <p className="text-xs text-gray-500">Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">Personal Information</h3>
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{workerData.name}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">{new Date(workerData.dob).toLocaleDateString()}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="font-medium">{workerData.phone}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium">{workerData.email}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Professional Information */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">Professional Information</h3>
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="profession" placeholder="Profession" value={formData.profession} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="number" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="text" name="location" placeholder="Location (City, Area)" value={formData.location} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <textarea name="skills" placeholder="Skills (Comma separated)" value={formData.skills} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 md:col-span-2" required></textarea>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Profession</p>
                    <p className="font-medium">{workerData.profession}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Years of Experience</p>
                    <p className="font-medium">{workerData.experience} years</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{workerData.location}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg md:col-span-2">
                    <p className="text-sm text-gray-500">Skills</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {workerData.skills.split(',').map((skill, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Document Information */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">Document Information</h3>
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="aadharNumber" placeholder="Aadhar Card Number" value={formData.aadharNumber} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="text" name="panNumber" placeholder="PAN Card Number" value={formData.panNumber} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  <input type="text" name="bankDetails" placeholder="Bank Account Details" value={formData.bankDetails} onChange={handleChange} className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 md:col-span-2" required />
                  <div className="md:col-span-2">
                    <label className="block text-green-700 mb-1">Update Aadhar Card Photo:</label>
                    <input type="file" name="aadharPicture" onChange={handleFileChange} className="w-full p-2 border bg-gray-100 rounded-lg cursor-pointer" accept="image/*" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-green-700 mb-1">Update PAN Card Photo:</label>
                    <input type="file" name="panPicture" onChange={handleFileChange} className="w-full p-2 border bg-gray-100 rounded-lg cursor-pointer" accept="image/*" />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Aadhar Card Number</p>
                    <p className="font-medium">{workerData.aadharNumber}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">PAN Card Number</p>
                    <p className="font-medium">{workerData.panNumber}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg md:col-span-2">
                    <p className="text-sm text-gray-500">Bank Account Details</p>
                    <p className="font-medium">{workerData.bankDetails}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Aadhar Card</p>
                    <p className="text-xs text-green-600 mt-1">Document Uploaded</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">PAN Card</p>
                    <p className="text-xs text-green-600 mt-1">Document Uploaded</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Profile Picture and Stats */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-500">
                <img src={workerData.profilePicture} alt="Profile" className="w-full h-full object-cover" />
              </div>
              
              {isEditing ? (
                <div className="w-full">
                  <label className="block text-green-700 mb-1 text-center">Update Profile Picture:</label>
                  <input type="file" name="profilePicture" onChange={handleFileChange} className="w-full p-2 border bg-gray-100 rounded-lg cursor-pointer" accept="image/*" />
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="font-bold text-xl text-green-800">{workerData.name}</h3>
                  <p className="text-gray-600">{workerData.profession}</p>
                  <p className="text-sm text-gray-500 mt-1">{workerData.experience} years experience</p>
                </div>
              )}
            </div>

            {/* Current Jobs */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-green-700 mb-3">Current Jobs</h3>
              
              {workerData.activeJobs > 0 ? (
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Electrical Repair</p>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">In Progress</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Andheri East, Mumbai</p>
                    <p className="text-xs text-gray-400 mt-1">Started: March 5, 2025</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Ceiling Fan Installation</p>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Scheduled</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Bandra West, Mumbai</p>
                    <p className="text-xs text-gray-400 mt-1">Scheduled: March 8, 2025</p>
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-500 py-4">No active jobs at the moment</p>
              )}
            </div>

            {/* Availability Toggle */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-green-700 mb-3">Availability</h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Available for new jobs</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={true} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}