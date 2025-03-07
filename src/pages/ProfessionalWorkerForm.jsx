import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginpic from "/assets/loginpic.jpg";
export default function ProfessionalWorkerForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    profession: "",
    experience: "",
    phone: "",
    email: "",
    location: "",
    skills: "",
    document: "",
    bankDetails: "",
    profilePicture: null,
    aadharPicture: null,
    panPicture: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      {/* <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-5xl flex"> */}
        {/* Left Side - Registration Form */}
        <div className="w-1/2 p-6 bg-white rounded-3xl">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Register as a Professional Worker
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <input type="text" name="profession" placeholder="Profession (e.g., Plumber, Electrician)" value={formData.profession} onChange={handleChange} className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <input type="number" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <input type="text" name="location" placeholder="Location (City, Area)" value={formData.location} onChange={handleChange} className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <textarea name="skills" placeholder="Skills (Comma separated)" value={formData.skills} onChange={handleChange} className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
            <input type="text" name="document" placeholder="Aadhar Card/PAN Card Number" value={formData.document} onChange={handleChange} className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <input type="text" name="bankDetails" placeholder="Bank Account Details" value={formData.bankDetails} onChange={handleChange} className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            <label className="block text-green-700">Upload Profile Picture:</label>
            <button type="file" name="aadharPicture" onChange={handleFileChange} className="w-half p-2 border  bg-gray-300 rounded-lg hover:bg-gray-200 cursor-pointer" accept="image/*" required  >Choose a File</button>
            <label className="block text-green-700">Upload Aadhar Card Photo:</label>
            <button type="file" name="aadharPicture" onChange={handleFileChange} className="w-half p-2 border  bg-gray-300 rounded-lg hover:bg-gray-200 cursor-pointer" accept="image/*" required >Choose a File</button>
            <label className="block text-green-700">Upload PAN Card Photo:</label>
            <button type="file" name="panPicture" onChange={handleFileChange} className="w-half p-2 border bg-gray-300 rounded-lg hover:bg-gray-200 cursor-pointer" accept="image/*" required >Choose a File </button>
            <button onClick={navigate('/worker-profile')} type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 cursor-pointer">Submit</button>
          </form>
        </div>

        {/* Right Side - Image of Workers */}
        <div className="w-1/2 flex items-center justify-center">
          <img src={loginpic} alt="Professional Workers" className="w-full h-auto rounded-2xl" />
        </div>
      </div>
   // </div>
  );
}