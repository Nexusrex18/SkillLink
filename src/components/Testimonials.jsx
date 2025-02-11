import React from "react";
import leftBlob from "/assets/left2.png"; 
import excellentImage from "/assets/excellent.png"; 

const testimonials = [
  {
    name: "Elizabeth P.",
    rating: 5,
    text: "Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
    category: "IKEA Furniture Assembly",
  },
  {
    name: "Tiffany B.",
    rating: 5,
    text: "David did an awesome job assembling crib and dresser for nursery. Really appreciate this! He cleaned up the area after his work, organized the boxes for easy disposal and went through the...",
    category: "Furniture Assembly",
  },
  {
    name: "Amanda L.",
    rating: 5,
    text: "I hired Joe to patch 2 holes on my wall and 1 hole on my ceiling. Joe was great with communication, was fast, professional and did a fantastic job. He even came back to do a second layer on the patches to ma...",
    category: "Home repairs",
  },
  {
    name: "Sabrina K.",
    rating: 5,
    text: "Aleksandr was fantastic! He came with all the equipment to do the job, even the hardware I didn't know I would need. He hung a heavy chandelier perfectly and fixed a cabinet to our wall. 100% would hir...",
    category: "Electrical help",
  },
  {
    name: "Jana T.",
    rating: 5,
    text: "Jose hamaar AC drain line thik kailen, jo ki hamaar master bathroom ke sink ke jam karat rahal. U bahut time par aailen, baat ke spasht kahalen, aur kaam bahut tezi se karlen. Bahut sujhaav dehani!",
    category: "Plumbing",
  },
  {
    name: "Elisa R.",
    rating: 5,
    text: "Michael namage frameless glass hinged shower doors anivarya setup jothey install madalu tumba chennai sahaya madidru. Avaru dhairyvagi namma jothey kelasa madalu tayariddaru. Dhanyavada Michael!",
    category: "General Mounting",
  },
];

function Testimonials() {
  return (
    <section
      className="relative bg-gradient-to-b from-[#FFFFFF] via-[#F5FBF7] to-[#ECF7EF] py-16 px-6"
    >
      {/* Left Blob */}
      <img
        src={leftBlob}
        alt="Design Element"
        className="absolute top-0 left-0 w-40 md:w-32 "
      />

      {/* Title */}
      <h3 className="text-3xl font-semibold text-gray-800 text-center mb-10">
        See what happy customers are saying about Professionals
      </h3>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md z-2">
            <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
            <div className="flex items-center mt-1">
              {"⭐".repeat(testimonial.rating)}
            </div>
            <p className="text-gray-600 mt-3">{testimonial.text}</p>
            <a href="#" className="text-green-600 font-semibold mt-4 inline-block">
              {testimonial.category}
            </a>
          </div>
        ))}
      </div>

      {/* Excellent Trustpilot Section */}
      <div className="flex justify-center mt-12">
        <img src={excellentImage} alt="Trustpilot Rating" className="w-100" />
      </div>
    </section>
  );
}

export default Testimonials;
