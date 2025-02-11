import React from "react";

function StatisticsSection() {
  const stats = [
    { label: "Furniture Assemblies", value: "3.4 million+" },
    { label: "Moving tasks", value: "1.5 million+" },
    { label: "Items mounted", value: "1 million+" },
    { label: "Home Repairs", value: "700,000+" },
    { label: "Homes cleaned", value: "890,000+" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] via-[#F5FBF7] to-[#ECF7EF] py-12 px-6 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 rounded-lg">
            <h4 className="text-2xl font-bold text-gray-800">{stat.value}</h4>
            <p className="text-green-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatisticsSection;
