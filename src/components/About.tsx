import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Electrical Excellence
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              AIDC Electrical Services and Supply has established itself as a leading provider of electrical solutions in the Philippines. We specialize in serving subdivisions and electric corporations, ensuring that every project is handled with the highest standards of safety and professionalism.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Mission</h4>
                  <p className="text-gray-600">To provide top-tier electrical services and supplies with integrity and excellence, empowering communities through reliable power solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">Our skilled technicians and engineers are equipped with the latest tools and knowledge to handle any electrical challenge.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-xl border-8 border-white relative">
              {/* Using image 1.webp as a secondary about image */}
              <Image
                src="/assets/1.webp"
                alt="AIDC Team Working"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-8 rounded-2xl shadow-lg hidden md:block">
              <span className="block text-4xl font-bold">10+</span>
              <span className="block text-sm font-medium uppercase tracking-wider">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
