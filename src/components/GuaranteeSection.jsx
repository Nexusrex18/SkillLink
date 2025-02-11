import React from "react";
import happinessIcon from "/assets/happiness.png"; // Update path
import blobBackground from "/assets/happiness.png"; // Update path

function GuaranteeSection() {
  return (
    <section className="relative bg-white py-16 px-6">
      {/* Title */}
      <h3 className="text-2xl font-bold mb-8 text-left">
        Your satisfaction, <span className="text-blue-600">guaranteed</span>
      </h3>

      {/* Three-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Happiness Pledge */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-green-900 flex items-center">
            <img src={happinessIcon} alt="Happiness Pledge" className="w-6 h-6 mr-2" />
            Happiness Pledge
          </h4>
          <p className="text-gray-700 mt-2">
            If you're not satisfied, we’ll work to make it right.
          </p>
        </div>

        {/* Vetted Taskers */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-green-900">Vetted Taskers</h4>
          <p className="text-gray-700 mt-2">
            Taskers are always background checked before joining the platform.
          </p>
        </div>

        {/* Dedicated Support */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-green-900">Dedicated Support</h4>
          <p className="text-gray-700 mt-2">
            Friendly service when you need us – every day of the week.
          </p>
        </div>
      </div>

      {/* Background Blob at Bottom */}
      <img
        src={blobBackground}
        alt="Background Blob"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/2 opacity-20 z-[-1]"
      />
    </section>
  );
}

export default GuaranteeSection;
