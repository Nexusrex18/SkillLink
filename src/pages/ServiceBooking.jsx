import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

const services = [
  { 
    "name": "Painter", 
    "image": "🎨",
    "content": "Professional painting services for homes and businesses. Interior and exterior painting with high-quality finishes.",
    "features": ["Interior & Exterior", "Color Consultation", "Eco-Friendly Paints"],
    "slug": "painter"
  },
  { 
    "name": "Mechanic", 
    "image": "🔧",
    "content": "Expert auto mechanics offering repairs, diagnostics, and maintenance for all types of vehicles.",
    "features": ["Engine Repairs", "Oil Change", "Brake Services"],
    "slug": "mechanic"
  },
  { 
    "name": "Mason", 
    "image": "🧱",
    "content": "Experienced masons for brick, stone, and concrete work. Specialized in building and repairing structures.",
    "features": ["Bricklaying", "Concrete Work", "Stone Masonry"],
    "slug": "mason"
  }
];

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-gradient-to-b from-[#FFFFFF] via-[#F5FBF7] to-[#ECF7EF] w-full max-w-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-100 hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/services/${service.slug}`)}
    >
      <div className="p-6">
        <div className="bg-green-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
          <span className="text-4xl">{service.image}</span>
        </div>
        
        <h2 className="text-xl font-semibold text-green-700 mb-2">
          {service.name}
        </h2>
        
        <p className="text-gray-600 text-sm mb-4">
          {service.content}
        </p>
        
        <div className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-500">
              <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
              {feature}
            </div>
          ))}
        </div>
        
        <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center group">
          <BookOpen className="w-4 h-4 mr-2" />
          View Professionals  
          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  );
};

const ServiceBooking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Book a Professional Service
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with skilled professionals for all your home service needs. Our experts are verified, insured, and ready to help.
          </p>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;
