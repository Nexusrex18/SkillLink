import React from "react";
import leftBlob from "/assets/left.png";
import rightBlob from "/assets/right.png";

function HeroSection() {
  return (
    <section className="relative bg-white py-20 px-6 text-center flex flex-col items-center overflow-hidden">
      {/* Background Decorative Images */}
      <img
        src={leftBlob}
        alt="Left Decoration"
        className="absolute left-0 top-0 w-1/3 max-w-[300px] md:max-w-[200px] lg:max-w-[100px] h-auto"
      />
      <img
        src={rightBlob}
        alt="Right Decoration"
        className="absolute right-0 top-0 w-1/4 max-w-[250px] md:max-w-[180px] lg:max-w-[200px] h-auto"
      />

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-green-900 mb-6">
        Book trusted help <br /> for home tasks
      </h2>

      {/* Search Box */}
      <div className="relative w-2/3 max-w-lg">
        <input
          type="text"
          placeholder="What do you need help with?"
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none text-gray-600"
        />
        <button className="absolute right-1 top-1 bottom-1 bg-green-600 rounded-full px-5 flex items-center justify-center">
          🔍
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
