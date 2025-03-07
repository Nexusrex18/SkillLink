import { useState } from "react";
import { FaTools, FaTruckMoving, FaBroom, FaTree, FaHammer, FaPaintRoller, FaFire, FaRegDotCircle } from "react-icons/fa";

function ServiceCards() {
  const services = [
    { name: "Assembly", icon: <FaTools /> },
    { name: "Mounting", icon: <FaRegDotCircle /> },
    { name: "Moving", icon: <FaTruckMoving /> },
    { name: "Cleaning", icon: <FaBroom /> },
    { name: "Outdoor Help", icon: <FaTree /> },
    { name: "Home Repairs", icon: <FaHammer /> },
    { name: "Painting", icon: <FaPaintRoller /> },
    { name: "Trending", icon: <FaFire /> },
  ];

  const subcategories = {
    Assembly: ["General Furniture Assembly", "IKEA Assembly", "Crib Assembly", "PAX Assembly", "Bookshelf Assembly", "Desk Assembly"],
    Mounting: ["TV Mounting", "Wall Hanging", "Mirror Mounting"],
    Moving: ["Packing", "Unpacking", "Heavy Lifting"],
    Cleaning: ["House Cleaning", "Office Cleaning"],
  };

  const [selectedService, setSelectedService] = useState("Assembly");

  return (
    <section className="flex justify-center items-center py-8 bg-gray w-full">
      <div className="bg-white p-6 rounded-lg w-full max-w-none px-6 md:px-12">
        {/* Service Tabs */}
        <div className="flex overflow-x-auto space-x-6 border-b pb-2 justify-center">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(service.name)}
              className={`flex flex-col items-center px-4 py-2 text-gray-700 ${
                selectedService === service.name ? "text-green-500 border-b-2 border-green-500" : ""
              }`}
            >
              <div className="text-2xl">{service.icon}</div>
              <span className="text-sm">{service.name}</span>
            </button>
          ))}
        </div>

        {/* Subcategories */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {subcategories[selectedService]?.map((sub, index) => (
            <button key={index} className="border border-gray-400 px-4 py-2 rounded-full text-gray-700 hover:border-green-500 w-full text-center">
              {sub}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
