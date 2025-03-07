import { useState } from 'react';

function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Jennifer Parker",
    email: "jennifer.parker@email.com",
    phone: "(555) 123-4567",
    address: "123 Maple Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94110",
    profileImage: null, // URL would go here
    notificationPreferences: {
      email: true,
      sms: false,
      app: true
    },
    paymentMethods: [
      { type: "Credit Card", last4: "4321", default: true },
      { type: "PayPal", email: "jen.parker@email.com", default: false }
    ],
    recentRequests: [
      { id: "REQ-23451", service: "Plumbing Repair", date: "Feb 24, 2025", status: "Completed" },
      { id: "REQ-23422", service: "Furniture Assembly", date: "Feb 15, 2025", status: "Scheduled" }
    ]
  });

  const [formData, setFormData] = useState({...userData});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNotificationChange = (type) => {
    setFormData({
      ...formData,
      notificationPreferences: {
        ...formData.notificationPreferences,
        [type]: !formData.notificationPreferences[type]
      }
    });
  };

  const handleSave = () => {
    setUserData({...formData});
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({...userData});
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white p-6 rounded-3xl shadow-md w-full max-w-5xl">
        {/* Profile Header */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-green-700">
            My Account
          </h2>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button 
                  onClick={handleCancel} 
                  className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave} 
                  className="px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button 
                onClick={() => setIsEditing(true)} 
                className="px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Profile Information */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">Personal Information</h3>
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                    required 
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                    required 
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                    required 
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{userData.name}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium">{userData.email}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="font-medium">{userData.phone}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Address Information */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">Address</h3>
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <input 
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                      required 
                    />
                  </div>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                    required 
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                      required 
                    />
                    <input 
                      type="text" 
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                      required 
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg md:col-span-2">
                    <p className="text-sm text-gray-500">Street Address</p>
                    <p className="font-medium">{userData.address}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">City</p>
                    <p className="font-medium">{userData.city}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">State</p>
                      <p className="font-medium">{userData.state}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">ZIP Code</p>
                      <p className="font-medium">{userData.zipCode}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Notification Preferences */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">Notification Preferences</h3>
              {isEditing ? (
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="email-notifications"
                      checked={formData.notificationPreferences.email}
                      onChange={() => handleNotificationChange('email')}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="email-notifications" className="ml-2 text-sm text-gray-700">
                      Email Notifications
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="sms-notifications"
                      checked={formData.notificationPreferences.sms}
                      onChange={() => handleNotificationChange('sms')}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="sms-notifications" className="ml-2 text-sm text-gray-700">
                      SMS Notifications
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="app-notifications"
                      checked={formData.notificationPreferences.app}
                      onChange={() => handleNotificationChange('app')}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="app-notifications" className="ml-2 text-sm text-gray-700">
                      App Notifications
                    </label>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Email Notifications</p>
                    <p className="font-medium">{userData.notificationPreferences.email ? 'Enabled' : 'Disabled'}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">SMS Notifications</p>
                    <p className="font-medium">{userData.notificationPreferences.sms ? 'Enabled' : 'Disabled'}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">App Notifications</p>
                    <p className="font-medium">{userData.notificationPreferences.app ? 'Enabled' : 'Disabled'}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Side - Payment Methods & Recent Requests */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Payment Methods */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-green-700">Payment Methods</h3>
                {!isEditing && (
                  <button className="text-sm text-green-600 hover:text-green-700">
                    Manage
                  </button>
                )}
              </div>
              
              <div className="space-y-3">
                {userData.paymentMethods.map((method, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{method.type}</p>
                        <p className="text-sm text-gray-500">
                          {method.type === 'Credit Card' ? `•••• ${method.last4}` : method.email}
                        </p>
                      </div>
                      {method.default && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Default</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent Requests */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-green-700">Recent Requests</h3>
                <button className="text-sm text-green-600 hover:text-green-700">
                  View All
                </button>
              </div>
              
              <div className="space-y-3">
                {userData.recentRequests.map((request, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium">{request.service}</p>
                      <span 
                        className={`text-xs px-2 py-1 rounded-full ${
                          request.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {request.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {request.id} • {request.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;