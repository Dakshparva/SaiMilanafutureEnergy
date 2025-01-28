import React from 'react';
import { Building2 } from 'lucide-react';

const clients = [
  {
    name: 'Karnataka Power Transmission Corporation Limited (KPTCL)',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80',
    description: 'Long-term partnership in power infrastructure development.',
    projects: 'Multiple 66KV and 110KV substations'
  },
  {
    name: 'Bangalore Metropolitan Transport Corporation (BMTC)',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    description: 'Infrastructure and facility management solutions.',
    projects: 'Bus depot infrastructure and maintenance facilities'
  },
  {
    name: 'Karnataka Housing Board (KHB)',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    description: 'Residential and commercial construction projects.',
    projects: 'Multiple housing development projects'
  },
  {
    name: 'Bangalore Water Supply and Sewerage Board (BWSSB)',
    logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
    description: 'Water infrastructure and management solutions.',
    projects: 'Water treatment and distribution systems'
  },
  {
    name: 'Karnataka Renewable Energy Development Ltd.',
    logo: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    description: 'Solar power plant installations and maintenance.',
    projects: '78MW cumulative solar PV installations'
  },
  {
    name: 'Bruhat Bengaluru Mahanagara Palike (BBMP)',
    logo: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80',
    description: 'Urban infrastructure development projects.',
    projects: 'Multiple civic infrastructure projects'
  }
];

const Clients = () => {
  return (
    <div className="pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Valued Clients
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We're proud to work with leading organizations across various sectors
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {client.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{client.description}</p>
                <div className="text-sm text-gray-500">
                  <strong>Key Projects:</strong> {client.projects}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to Work With Us?
          </h3>
          <p className="text-blue-100 mb-8">
            Join our growing list of satisfied clients and experience excellence in industrial solutions
          </p>
          <a
            href="#contact-us"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Clients;