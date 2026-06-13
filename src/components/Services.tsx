const services = [
  {
    title: 'Residential Wiring',
    description: 'Complete electrical wiring solutions for new subdivision developments and residential homes.',
    icon: '🏠',
  },
  {
    title: 'Commercial Wiring',
    description: 'Professional electrical systems for business complexes and commercial facilities.',
    icon: '🏢',
  },
  {
    title: 'Supply of Transformers',
    description: 'High-quality electrical transformers and essential equipment for power distribution.',
    icon: '⚡',
  },
  {
    title: 'Supply of Cables',
    description: 'A wide range of durable cables and electrical components for various industrial needs.',
    icon: '🔌',
  },
  {
    title: 'Utility Pole Installation',
    description: 'Expert installation and maintenance of utility poles for electric corporations.',
    icon: '🪵',
  },
  {
    title: 'Maintenance Services',
    description: 'Comprehensive electrical maintenance and troubleshooting for reliable power systems.',
    icon: '🛠️',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Electrical Solutions
          </h3>
          <div className="w-20 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
