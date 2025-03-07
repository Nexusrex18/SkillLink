import React, { useState } from 'react';
import { useParams, Link ,useNavigate } from 'react-router-dom';
import { Calendar, Clock, Star, MapPin, Phone, Mail, MessageSquare, Award, ThumbsUp, Briefcase } from 'lucide-react';

// Extended professional data with more details
const professionalsData = {
  painter: [
    { 
      id: "p1",
      name: "John Doe", 
      experience: "10+ years", 
      rating: 4.9,
      reviews: 127,
      hourlyRate: "$25-35",
      availability: "Weekdays & Weekends",
      location: "Downtown & Suburbs",
      specialties: ["Interior Painting", "Exterior Painting", "Decorative Finishes"],
      image: "🎨",
      bio: "Professional painter with expertise in both residential and commercial projects. Known for attention to detail and clean work."
    },
    { 
      id: "p2",
      name: "Emma Smith", 
      experience: "8+ years", 
      rating: 4.7,
      reviews: 98,
      hourlyRate: "$20-30",
      availability: "Weekdays Only",
      location: "North & East Districts",
      specialties: ["Mural Painting", "Restoration", "Cabinet Refinishing"],
      image: "🖌",
      bio: "Specialized in custom artistic finishes and color consultation. Trained in Europe with focus on eco-friendly materials."
    }
  ],
  mechanic: [
    { 
      id: "m1",
      name: "Mike Johnson", 
      experience: "15+ years", 
      rating: 4.8,
      reviews: 215,
      hourlyRate: "$40-60",
      availability: "Mon-Sat, Emergency Services",
      location: "Citywide",
      specialties: ["Engine Repair", "Brake Systems", "Diagnostics"],
      image: "🔧",
      bio: "Certified automotive technician specializing in both domestic and foreign vehicles. ASE Master Technician with dealership experience."
    },
    { 
      id: "m2",
      name: "Alex Brown", 
      experience: "12+ years", 
      rating: 4.5,
      reviews: 176,
      hourlyRate: "$35-50",
      availability: "Weekdays & Saturday Morning",
      location: "South District",
      specialties: ["Electrical Systems", "Performance Tuning", "Vintage Cars"],
      image: "🛠",
      bio: "Motorcycle and automotive specialist with background in racing. Expertise in custom modifications and restoration projects."
    }
  ],
  mason: [
    { 
      id: "ms1",
      name: "James Wilson", 
      experience: "20+ years", 
      rating: 4.9,
      reviews: 189,
      hourlyRate: "$45-65",
      availability: "Seasonal (Mar-Nov)",
      location: "Metro Area",
      specialties: ["Stone Walls", "Brick Restoration", "Concrete Work"],
      image: "🧱",
      bio: "Third-generation mason with historical restoration experience. Worked on landmark buildings and custom residential projects."
    },
    { 
      id: "ms2",
      name: "Robert Green", 
      experience: "18+ years", 
      rating: 4.6,
      reviews: 147,
      hourlyRate: "$40-60",
      availability: "Year-round",
      location: "West & Central Areas",
      specialties: ["Fireplace Construction", "Patio Design", "Retaining Walls"],
      image: "🔨",
      bio: "Specializes in outdoor living spaces and landscape masonry. Known for creative designs integrating natural elements."
    }
  ]
};

// Service descriptions to provide context
const serviceDescriptions = {
  painter: "Our skilled painters transform spaces with precision and style. Whether you need interior refreshing, exterior protection, or decorative finishes, our verified professionals deliver quality results within your timeline and budget.",
  mechanic: "From routine maintenance to complex repairs, our certified mechanics keep your vehicles running smoothly. With professional diagnostic equipment and years of hands-on experience, they provide reliable service at competitive rates.",
  mason: "Our expert masons bring craftsmanship to your stone, brick, and concrete projects. Specializing in both aesthetic and structural work, they create durable, beautiful masonry that enhances your property's value and appearance."
};

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const professionals = professionalsData[serviceSlug] || [];
  const [selectedPro, setSelectedPro] = useState(null);
  const [bookingMode, setBookingMode] = useState(false);
  
  // Format service name with proper capitalization
  const formatServiceName = (slug) => {
    return slug.charAt(0).toUpperCase() + slug.slice(1);
  };
  
  // Render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 fill-half" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={i + fullStars + (hasHalfStar ? 1 : 0)} className="w-4 h-4 text-yellow-400" />
        ))}
        <span className="ml-2 text-gray-600">{rating} ({professional.reviews} reviews)</span>
      </div>
    );
  };
  
  const handleBooking = (pro) => {
    setSelectedPro(pro);
    setBookingMode(true);
  };
  
  const closeBookingForm = () => {
    setBookingMode(false);
  };

  if (!serviceSlug || !professionalsData[serviceSlug]) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-red-600">Service Not Found</h1>
        <p className="text-center mt-4">The requested service is not available. Please try another service.</p>
        <div className="mt-6 text-center">
          <Link to="/services" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Browse All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {formatServiceName(serviceSlug)} Services
        </h1>
        <p className="text-lg opacity-90 mb-4">
          {serviceDescriptions[serviceSlug]}
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center bg-white text-green-600 bg-opacity-20 px-4 py-2 rounded-full">
            <ThumbsUp className="w-5 h-5 mr-2" />
            <span>Verified Professionals</span>
          </div>
          <div className="flex items-center bg-white text-green-600 bg-opacity-20 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 mr-2" />
            <span>Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center bg-white text-green-600 bg-opacity-20 px-4 py-2 rounded-full">
            <Briefcase className="w-5 h-5 mr-2" />
            <span>Secure Payments</span>
          </div>
        </div>
      </div>
      
      {/* Professional Listing */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Available {formatServiceName(serviceSlug)} Professionals</h2>
        
        {professionals.length === 0 ? (
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-gray-700 text-lg">No professionals available for this service at the moment.</p>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
              Request a Professional
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionals.map((professional) => (
              <div key={professional.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-4 text-3xl">
                      {professional.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{professional.name}</h3>
                      <div className="mt-1 flex items-center">
                        <span className="text-gray-600 mr-2">Rating:</span>
                        <div className="flex items-center">
                          {Array.from({ length: Math.floor(professional.rating) }).map((_, index) => (
                            <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {professional.rating % 1 > 0 && (
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          )}
                          <span className="ml-2 text-sm text-gray-600">({professional.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-700">{professional.bio}</p>
                  
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center text-gray-700">
                      <Briefcase className="w-4 h-4 mr-2 text-green-600" />
                      <span>{professional.experience}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-4 h-4 mr-2 text-green-600" />
                      <span>{professional.availability}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      <span>{professional.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Star className="w-4 h-4 mr-2 text-green-600" />
                      <span>{professional.hourlyRate}/hr</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {professional.specialties.map((specialty, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-3">
                    <button 
                      onClick={() => handleBooking(professional)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </button>
                    <Link to={'/chat'} className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Booking Modal */}
      {bookingMode && selectedPro && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Book {selectedPro.name}</h3>
            <p className="mb-4 text-gray-700">Fill out the form below to schedule an appointment.</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Service Date</label>
                <input type="date" className="w-full p-2 border rounded-md" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Preferred Time</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Morning (8AM - 12PM)</option>
                  <option>Afternoon (12PM - 4PM)</option>
                  <option>Evening (4PM - 8PM)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Service Details</label>
                <textarea className="w-full p-2 border rounded-md" rows="3" placeholder="Describe your needs..."></textarea>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Your Address</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your address" />
              </div>
              
              <div className="pt-2 flex gap-4">
                <button 
                  type="button" 
                  onClick={closeBookingForm}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  onClick={() => navigate('/pay')} 
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md font-medium transition-colors flex-1"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default ServiceDetail;