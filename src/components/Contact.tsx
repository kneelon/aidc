'use client';

import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data);
    // In a real app, this would send data to an API
    alert('Thank you! Your message has been sent. We will get back to you soon.');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let&apos;s Discuss Your Project
          </h3>
          <div className="w-20 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-primary text-white p-10 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold mb-8">Get in Touch</h4>
            <p className="text-blue-100 mb-12 text-lg">
              Have questions about our services or need a quotation? Reach out to us through any of the following channels.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-full text-2xl">
                  📞
                </div>
                <div>
                  <p className="text-blue-200 text-sm uppercase font-bold tracking-wider">Phone Number</p>
                  <p className="text-xl font-medium">09519189052</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-full text-2xl">
                  ✉️
                </div>
                <div>
                  <p className="text-blue-200 text-sm uppercase font-bold tracking-wider">Email Address</p>
                  <p className="text-xl font-medium">electricalaidc@yahoo.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-white/10 p-4 rounded-full text-2xl">
                  🕒
                </div>
                <div>
                  <p className="text-blue-200 text-sm uppercase font-bold tracking-wider">Business Hours</p>
                  <p className="text-xl font-medium">Mon - Sat: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    placeholder="Juan Dela Cruz"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Entered value does not match email format'
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                    placeholder="juandelacruz@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="0912 345 6789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
