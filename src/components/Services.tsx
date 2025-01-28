import React from 'react';
import { Building2, Wrench, Construction, Sun, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Power Projects',
    icon: Building2,
    description: 'We have executed 5 Sub-Station (66KV & 110KV) for KPTCL and various electrical turnkey projects in ESCOM\'s.',
  },
  {
    title: 'Fabrication',
    icon: Wrench,
    description: 'We fabricate and supply furniture to various departments and carry out interior decoration for public sectors.',
  },
  {
    title: 'Construction',
    icon: Construction,
    description: 'We have completed many construction projects for PWD, KHB, KHSDRP, BBMP, B&LC Hospital etc.',
  },
  {
    title: 'Solar PV Projects',
    icon: Sun,
    description: 'We have installed 78MW Solar PV power Plant at various locations including 8MW, 10MW & 15MW installations.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive industrial solutions for your business needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <service.icon className="h-12 w-12 text-blue-600" />
                <h3 className="mt-8 text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {service.description}
                </p>
                <a
                  href="#contact-us"
                  className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-500"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;