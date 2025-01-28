import React from 'react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Power Station Project',
    image: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&q=80',
    description: 'Construction and installation of a 66KV substation for KPTCL.',
  },
  {
    id: 2,
    title: 'Solar Installation',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    description: '15MW Solar PV power plant installation in Sira taluk, Tumkur District.',
  },
  {
    id: 3,
    title: 'Industrial Fabrication',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    description: 'Custom fabrication work for industrial furniture and interior decoration.',
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="our-clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            The main object of the company was manufacture of LPG Cylinders of various sizes, power projects, constructions and fabrications.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <img
                className="h-64 w-full object-cover rounded-lg shadow-md"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-medium">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;