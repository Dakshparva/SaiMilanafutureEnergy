import  { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const images = [
    'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&q=80'
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-blue-600 pt-16 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? 'opacity-20' : 'opacity-0'
          }`}
        >
          <img
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            src={image}
            alt={`Industrial background ${index + 1}`}
          />
        </div>
      ))}
      <div className={`relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-slide-up">
        Join the Renewable Revolution Powering a Sustainable Future Together
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl animate-fade-in">
          We provide comprehensive industrial solutions including power projects, fabrication, construction, and solar PV installations.
        </p>
        <div className="mt-10 animate-bounce-in">
          <a
            href="#contact-us"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;