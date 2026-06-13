import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/Office.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Powering Progress with <span className="text-secondary">Precision</span> and <span className="text-secondary">Safety</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          AIDC Electrical Services and Supply delivers top-tier solutions for subdivisions and electric corporations across the Philippines.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#services"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Our Services
          </Link>
          <Link
            href="#contact"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
