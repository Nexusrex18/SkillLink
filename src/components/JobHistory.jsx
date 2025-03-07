import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobHistory() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("current");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  
  // Sample job history data - this would come from your database
  const currentJobs = [
    {
      id: "JOB0023",
      title: "Electrical Repair",
      location: "Andheri East, Mumbai",
      client: "Arjun Mehta",
      startDate: "2025-03-05",
      status: "in-progress",
      payment: "₹2,500",
      description: "Repair electrical wiring in bedroom and kitchen area",
      phone: "9876543210"
    },
    {
      id: "JOB0024",
      title: "Ceiling Fan Installation",
      location: "Bandra West, Mumbai",
      client: "Priya Singh",
      startDate: "2025-03-08",
      status: "scheduled",
      payment: "₹1,800",
      description: "Install 3 new ceiling fans in living room and bedrooms",
      phone: "9988776655"
    }
  ];
  
  const pastJobs = [
    {
      id: "JOB0022",
      title: "Light Fixture Replacement",
      location: "Dadar, Mumbai",
      client: "Vikram Desai",
      startDate: "2025-02-28",
      endDate: "2025-03-01",
      status: "completed",
      payment: "₹1,200",
      description: "Replace 5 light fixtures throughout the apartment",
      rating: 4.8,
      feedback: "Excellent work, very professional and clean."
    },
    {
      id: "JOB0021",
      title: "Electric Water Heater Installation",
      location: "Malad West, Mumbai",
      client: "Sanjay Kumar",
      startDate: "2025-02-25",
      endDate: "2025-02-25",
      status: "completed",
      payment: "₹2,000",
      description: "Install new water heater in bathroom and connect to electrical system",
      rating: 5.0,
      feedback: "Did a perfect job. Very knowledgeable and efficient."
    },
    {
      id: "JOB0020",
      title: "Home Rewiring",
      location: "Powai, Mumbai",
      client: "Nita Patel",
      startDate: "2025-02-20",
      endDate: "2025-02-22",
      status: "completed",
      payment: "₹7,500",
      description: "Complete rewiring of 2BHK apartment with safety upgrades",
      rating: 4.7,
      feedback: "Good work overall, took slightly longer than estimated but quality was excellent."
    },
    {
      id: "JOB0019",
      title: "Generator Installation",
      location: "Juhu, Mumbai",
      client: "Raj Malhotra",
      startDate: "2025-02-15",
      endDate: "2025-02-16",
      status: "completed",
      payment: "₹5,000",
      description: "Install backup generator and connect to home electrical system",
      rating: 4.9,
      feedback: "Very professional service. Explained everything clearly."
    },
    {
      id: "JOB0018",
      title: "Circuit Breaker Repair",
      location: "Colaba, Mumbai",
      client: "Aarav Sharma",
      startDate: "2025-02-10",
      endDate: "2025-02-10",
      status: "completed",
      payment: "₹1,500",
      description: "Diagnose and repair faulty circuit breaker",
      rating: 4.6,
      feedback: "Fixed the problem quickly. Fair pricing."
    },
    {
      id: "JOB0017",
      title: "Doorbell Installation",
      location: "Worli, Mumbai",
      client: "Mira Shah",
      startDate: "2025-02-05",
      endDate: "2025-02-05",
      status: "cancelled",
      cancelReason: "Client cancelled due to scheduling conflict",
      payment: "₹0"
    }
  ];

  // Filter jobs based on search term and status filter
  const filterJobs = (jobs) => {
    return jobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = 
        filterStatus === "all" || 
        job.status === filterStatus;
      
      return matchesSearch && matchesStatus;
    });
  };

  const filteredCurrentJobs = filterJobs(currentJobs);
  const filteredPastJobs = filterJobs(pastJobs);

  // Get status badge based on job status
  const getStatusBadge = (status) => {
    switch(status) {
      case "completed":
        return <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Completed</span>;
      case "in-progress":
        return <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">In Progress</span>;
      case "scheduled":
        return <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Scheduled</span>;
      case "cancelled":
        return <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">Cancelled</span>;
      default:
        return <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">{status}</span>;
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Back navigation
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="bg-white p-6 rounded-3xl shadow-md max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button 
              onClick={goBack} 
              className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-green-700">Your Job History</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="font-medium">Total Jobs: {currentJobs.length + pastJobs.length}</span>
            </div>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search by job title, location, client name, or job ID..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="in-progress">In Progress</option>
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex space-x-6">
            <button 
              className={`py-2 px-1 font-medium text-lg ${activeTab === "current" 
                ? "text-green-700 border-b-2 border-green-500" 
                : "text-gray-500 hover:text-green-600"}`}
              onClick={() => setActiveTab("current")}
            >
              Current Jobs ({currentJobs.length})
            </button>
            <button 
              className={`py-2 px-1 font-medium text-lg ${activeTab === "past" 
                ? "text-green-700 border-b-2 border-green-500" 
                : "text-gray-500 hover:text-green-600"}`}
              onClick={() => setActiveTab("past")}
            >
              Past Jobs ({pastJobs.length})
            </button>
          </div>
        </div>
        
        {/* Job Listings */}
        <div className="space-y-4">
          {activeTab === "current" ? (
            <>
              {filteredCurrentJobs.length > 0 ? (
                filteredCurrentJobs.map(job => (
                  <div key={job.id} className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-bold text-lg text-green-800">{job.title}</h3>
                          {getStatusBadge(job.status)}
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-8 text-sm">
                          <div className="mb-2 md:mb-0">
                            <span className="text-gray-500">Job ID:</span> {job.id}
                          </div>
                          <div className="mb-2 md:mb-0">
                            <span className="text-gray-500">Location:</span> {job.location}
                          </div>
                          <div className="mb-2 md:mb-0">
                            <span className="text-gray-500">Start Date:</span> {formatDate(job.startDate)}
                          </div>
                          <div>
                            <span className="text-gray-500">Payment:</span> {job.payment}
                          </div>
                        </div>
                        <p className="text-gray-700 mt-2">{job.description}</p>
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-600">Client: {job.client}</span>
                            <div className="ml-4 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span className="ml-1 text-sm text-gray-500">{job.phone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-4 flex md:flex-col justify-end gap-2 md:gap-0">
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm w-full">
                          Update Status
                        </button>
                        <button className="mt-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 text-sm w-full">
                          Contact Client
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p>No current jobs match your search criteria</p>
                </div>
              )}
            </>
          ) : (
            <>
              {filteredPastJobs.length > 0 ? (
                filteredPastJobs.map(job => (
                  <div key={job.id} className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-bold text-lg text-green-800">{job.title}</h3>
                          {getStatusBadge(job.status)}
                        </div>
                        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-8 text-sm">
                          <div className="mb-2 md:mb-0">
                            <span className="text-gray-500">Job ID:</span> {job.id}
                          </div>
                          <div className="mb-2 md:mb-0">
                            <span className="text-gray-500">Location:</span> {job.location}
                          </div>
                          <div className="mb-2 md:mb-0">
                            <span className="text-gray-500">Date:</span> {formatDate(job.startDate)}
                            {job.endDate && job.endDate !== job.startDate && ` to ${formatDate(job.endDate)}`}
                          </div>
                          <div>
                            <span className="text-gray-500">Payment:</span> {job.payment}
                          </div>
                        </div>
                        <p className="text-gray-700 mt-2">{job.description}</p>
                        
                        {job.status === "completed" && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <div className="flex items-center mb-2">
                              <span className="text-gray-500">Rating:</span>
                              <div className="ml-2 flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <svg 
                                    key={i} 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className={`h-4 w-4 ${i < Math.floor(job.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                                <span className="ml-1 text-sm font-medium">{job.rating}</span>
                              </div>
                            </div>
                            {job.feedback && (
                              <div>
                                <span className="text-gray-500">Client Feedback:</span>
                                <p className="text-gray-700 italic mt-1">{job.feedback}</p>
                              </div>
                            )}
                          </div>
                        )}
                        
                        {job.status === "cancelled" && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <div>
                              <span className="text-gray-500">Cancellation Reason:</span>
                              <p className="text-gray-700 mt-1">{job.cancelReason}</p>
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <div className="flex items-center">
                            <span className="font-medium text-gray-600">Client: {job.client}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 md:ml-4 flex md:flex-col justify-end gap-2 md:gap-0">
                        <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 text-sm w-full">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p>No past jobs match your search criteria</p>
                </div>
              )}
            </>
          )}
        </div>
        
        {/* Bottom Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-green-50 p-4 rounded-xl border border-green-100">
            <div className="text-3xl font-bold text-green-700">124</div>
            <div className="text-sm text-green-600">Total Jobs Completed</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-700">4.7</div>
            <div className="text-sm text-blue-600">Average Rating</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
            <div className="text-3xl font-bold text-yellow-700">₹245,000</div>
            <div className="text-sm text-yellow-600">Total Earnings</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
            <div className="text-3xl font-bold text-purple-700">8 mo</div>
            <div className="text-sm text-purple-600">Average Job Length</div>
          </div>
        </div>
      </div>
    </div>
  );
}