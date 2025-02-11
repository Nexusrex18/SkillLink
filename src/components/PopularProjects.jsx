import React from "react";

function PopularProjects() {
  const projects = [
    { name: "Furniture Assembly", price: "$49" },
    { name: "Mount Art or Shelves", price: "$65" },
    { name: "Mount a TV", price: "$50" },
    { name: "Help Moving", price: "$57" },
  ];

  return (
    <section className="py-12 px-6">
      <h3 className="text-2xl font-bold mb-6">Popular Projects</h3>
      <div className="grid grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h4 className="text-lg font-medium">{project.name}</h4>
            <p className="text-green-500">Projects starting at {project.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularProjects;