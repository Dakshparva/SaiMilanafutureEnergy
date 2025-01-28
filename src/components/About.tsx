

const About = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Our Industry
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              M/S SAI MILANA FUTURE ENERGY  was incorporated on 14.04.2025 as a limited company under the Companies Act.
              Sai Milana Future Energy is a forward-thinking company dedicated to revolutionizing the energy landscape by promoting sustainable and renewable energy solutions. With a mission to drive the transition to a cleaner and greener future, we specialize in innovative technologies that harness the power of solar, wind, and other renewable resources. Our commitment to excellence and sustainability ensures that we deliver cutting-edge solutions tailored to meet the energy needs of businesses and communities while minimizing environmental impact. At Sai Milana Future Energy, we envision a world where renewable energy is accessible, efficient, and integral to building a sustainable tomorrow.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              className="rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="Industrial facility"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;