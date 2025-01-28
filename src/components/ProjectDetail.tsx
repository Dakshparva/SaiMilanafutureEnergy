import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Power Station Project',
    image: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&q=80',
    description: 'Construction and installation of a 66KV substation for KPTCL.',
    fullDescription: `This project involved the complete construction and installation of a 66KV substation for KPTCL. 
    The scope of work included:
    - Civil construction of the substation building
    - Installation of high-voltage equipment
    - Testing and commissioning of all electrical systems
    - Implementation of safety protocols and procedures
    
    The project was completed within the specified timeline and met all safety and quality standards.`,
    specifications: [
      'Project Duration: 18 months',
      'Capacity: 66KV',
      'Location: Karnataka',
      'Client: KPTCL',
    ],
  },
  {
    id: 2,
    title: 'Solar Installation',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    description: '15MW Solar PV power plant installation in Sira taluk, Tumkur District.',
    fullDescription: `This 15MW Solar PV power plant project in Sira taluk, Tumkur District, showcases our expertise in renewable energy installations. 
    Key achievements include:
    - Installation of over 45,000 solar panels
    - Implementation of advanced tracking systems
    - Grid integration and power distribution setup
    - Ongoing maintenance and monitoring systems`,
    specifications: [
      'Capacity: 15MW',
      'Location: Sira taluk, Tumkur District',
      'Area: 75 acres',
      'Annual Power Generation: 26,280 MWh',
    ],
  },
  {
    id: 3,
    title: 'Industrial Fabrication',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    description: 'Custom fabrication work for industrial furniture and interior decoration.',
    fullDescription: `Our industrial fabrication project demonstrates our capability in creating custom solutions for various sectors. 
    The project encompassed:
    - Custom furniture design and manufacturing
    - Interior decoration for public sector offices
    - Installation of specialized storage systems
    - Quality control and testing procedures`,
    specifications: [
      'Project Type: Custom Fabrication',
      'Client: Public Sector',
      'Materials: Steel, Aluminum, Wood',
      'Applications: Furniture, Storage, Decor',
    ],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="pt-24 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-500 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Projects
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Details</h2>
            <p className="text-gray-600 whitespace-pre-line mb-8">{project.fullDescription}</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Specifications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {project.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;