import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTools, FaTruckMoving, FaBroom, FaTree, FaHammer, FaPaintRoller, FaFire, FaRegDotCircle } from "react-icons/fa";
import { serviceCategories } from "../pages/ServiceBooking";

// Map icon string names to actual icon components
const iconMap = {
  FaTools: <FaTools />,
  FaRegDotCircle: <FaRegDotCircle />,
  FaTruckMoving: <FaTruckMoving />,
  FaBroom: <FaBroom />,
  FaTree: <FaTree />,
  FaHammer: <FaHammer />,
  FaPaintRoller: <FaPaintRoller />,
  FaFire: <FaFire />,
};

function ServiceCards() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(serviceCategories[0].name);

  // Find the currently selected service category
  const currentService = serviceCategories.find(s => s.name === selectedService);

  return (
    <section className="flex justify-center items-center py-8 bg-gray w-full">
      <div className="bg-white p-6 rounded-lg w-full max-w-none px-6 md:px-12">

        {/* Service Tabs */}
        <div className="flex overflow-x-auto space-x-6 border-b pb-2 justify-center">
          {serviceCategories.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(service.name)}
              className={`flex flex-col items-center px-4 py-2 text-gray-700 whitespace-nowrap transition-colors duration-200 ${
                selectedService === service.name
                  ? "text-green-500 border-b-2 border-green-500"
                  : "hover:text-green-400"
              }`}
            >
              <div className="text-2xl">{iconMap[service.icon]}</div>
              <span className="text-sm">{service.name}</span>
            </button>
          ))}
        </div>

        {/* Subcategories */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {currentService?.subcategories.map((sub, index) => (
            <button
              key={index}
              onClick={() => navigate(`/services/${currentService.slug}`)}
              className="border border-gray-400 px-4 py-2 rounded-full text-gray-700 hover:border-green-500 hover:text-green-600 hover:bg-green-50 w-full text-center transition-all duration-200"
            >
              {sub}
            </button>
          ))}
        </div>

        {/* View All Professionals Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate(`/services/${currentService?.slug}`)}
            className="bg-green-600 text-white px-8 py-2 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
          >
            View All {currentService?.name} Professionals →
          </button>
        </div>

      </div>
    </section>
  );
}

export default ServiceCards;
