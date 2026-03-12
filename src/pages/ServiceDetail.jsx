import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Star, MapPin, Phone, Mail, MessageSquare, Award, ThumbsUp, Briefcase } from 'lucide-react';
import { professionalsData } from "../data/ServicesData";
import { serviceCategories } from "../data/ServicesData";

// Service descriptions - now covers ALL 10 services
const serviceDescriptions = {
  painter: "Our skilled painters transform spaces with precision and style. Whether you need interior refreshing, exterior protection, or decorative finishes, our verified professionals deliver quality results within your timeline and budget.",
  mechanic: "From routine maintenance to complex repairs, our certified mechanics keep your vehicles running smoothly. With professional diagnostic equipment and years of hands-on experience, they provide reliable service at competitive rates.",
  mason: "Our expert masons bring craftsmanship to your stone, brick, and concrete projects. Specializing in both aesthetic and structural work, they create durable, beautiful masonry that enhances your property's value and appearance.",
  assembly: "Our professional assemblers handle all types of furniture and equipment setup with precision. From IKEA to custom pieces, we ensure everything is perfectly assembled, level, and sturdy.",
  mounting: "Our expert mounting specialists safely install TVs, shelves, mirrors, and artwork on any wall type. Using professional-grade tools, we ensure secure and level installations every time.",
  moving: "Our reliable moving professionals handle everything from packing to heavy lifting. Experienced with fragile items and large furniture, they make your move smooth and stress-free.",
  cleaning: "Our thorough cleaning professionals transform your home or office into a spotless environment. Using eco-friendly products, our background-checked cleaners deliver consistent, high-quality results.",
  "outdoor-help": "Our skilled outdoor professionals handle all your yard and garden needs. From regular lawn maintenance to complete landscape transformations, we help create beautiful outdoor spaces.",
  "home-repairs": "Our licensed handymen tackle all types of home repairs with expertise and care. From minor fixes to major repairs, we restore your home to its best condition efficiently and affordably.",
  trending: "Explore our most in-demand services featuring the latest in smart home technology and modern installations. Our certified specialists bring cutting-edge solutions to your doorstep.",
};

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const professionals = professionalsData[serviceSlug] || [];
  const [selectedPro, setSelectedPro] = useState(null);
  const [bookingMode, setBookingMode] = useState(false);

  // Get service info from shared data
  const serviceInfo = serviceCategories.find(s => s.slug === serviceSlug);

  // Format service name with proper capitalization
  const formatServiceName = (slug) => {
    if (serviceInfo) return serviceInfo.name;
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
        {hasHalfStar && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={i + fullStars} className="w-4 h-4 text-yellow-400" />
        ))}
      </div>
    );
  };

  const handleBooking = (pro) => {
    setSelectedPro(pro);
    setBookingMode(true);
  };

  const closeBookingForm = () => {
    setSelectedPro(null);
    setBookingMode(false);
  };

  if (!serviceSlug || !professionalsData[serviceSlug]) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Service Not Found</h2>
        <p className="text-gray-500 mb-6">We couldn't find professionals for this service.</p>
        <button
          onClick={() => navigate('/services')}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Browse All Services
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      {/* Back Button */}
      <button
        onClick={() => navigate('/services')}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        ← Back to Services
      </button>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg shadow-md mb-8">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-5xl">{serviceInfo?.image}</span>
          <h1 className="text-3xl md:text-4xl font-bold">
            {formatServiceName(serviceSlug)} Services
          </h1>
        </div>
        <p className="text-lg opacity-90 mb-4">
          {serviceDescriptions[serviceSlug]}
        </p>

        {/* Subcategories pills */}
        {serviceInfo?.subcategories && (
          <div className="flex flex-wrap gap-2 mb-4">
            {serviceInfo.subcategories.map((sub, i) => (
              <span key={i} className="bg-white text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                {sub}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center bg-white text-green-700 px-4 py-2 rounded-full font-medium">
            <ThumbsUp className="w-5 h-5 mr-2" />
            <span>Verified Professionals</span>
          </div>
          <div className="flex items-center bg-white text-green-700 px-4 py-2 rounded-full font-medium">
            <Award className="w-5 h-5 mr-2" />
            <span>Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center bg-white text-green-700 px-4 py-2 rounded-full font-medium">
            <Briefcase className="w-5 h-5 mr-2" />
            <span>Secure Payments</span>
          </div>
        </div>
      </div>

      {/* Professional Listing */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Available {formatServiceName(serviceSlug)} Professionals
        </h2>

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
                        {renderStars(professional.rating)}
                        <span className="ml-2 text-sm text-gray-600">({professional.reviews} reviews)</span>
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
                    <button
                      onClick={() => navigate('/chat')}
                      className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contact
                    </button>
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
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h2 className="text-2xl font-bold mb-4">
              Book {selectedPro.name}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Preferred Date</label>
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