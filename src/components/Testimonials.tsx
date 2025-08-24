import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonialMedia = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Happy customer with their new car',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Customer testimonial',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Customer receiving car keys',
    }
  ];

  const additionalMedia = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Happy customer testimonial',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Happy customer with their vehicle',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Happy customer with new car',
    }
  ];

  const thirdRowMedia = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Customer satisfaction testimonial',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Drive365 brand testimonial',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Premium vehicle delivery',
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            See Our Happy Customers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our list of satisfied customers who've experienced the Drive365 difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialMedia.map((media, index) => (
            <div key={index} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <img 
                src={media.src}
                alt={media.alt}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {thirdRowMedia.map((media, index) => (
            <div key={index} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <img 
                src={media.src}
                alt={media.alt}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {additionalMedia.map((media, index) => (
            <div key={index} className={`bg-black border border-gray-800 rounded-lg overflow-hidden ${index === 1 ? 'relative' : ''}`}>
              <img 
                src={media.src}
                alt={media.alt}
                className={`w-full aspect-square object-cover ${index === 1 ? 'object-left' : ''}`}
                style={index === 1 ? { objectPosition: '70% center' } : {}}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-300">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;