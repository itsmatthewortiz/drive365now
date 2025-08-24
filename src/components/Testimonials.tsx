import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonialMedia = [
    {
      type: 'image',
      src: '/IMG_1884.jpeg',
      alt: 'Drive365 customer testimonial',
    },
    {
      type: 'image',
      src: '/image copy copy copy copy copy.png',
      alt: 'Drive365 customer experience',
    },
    {
      type: 'image',
      src: '/image copy copy copy.png',
      alt: 'Drive365 satisfied customer',
    }
  ];

  const additionalMedia = [
    {
      type: 'image',
      src: '/img_0826 copy copy copy copy.jpeg',
      alt: 'Drive365 vehicle delivery',
    },
    {
      type: 'image',
      src: '/IMG_0764.jpeg',
      alt: 'Drive365 customer satisfaction',
    },
    {
      type: 'image',
      src: '/IMG_0034.jpeg',
      alt: 'Drive365 premium service',
    }
  ];

  const thirdRowMedia = [
    {
      type: 'image',
      src: '/1C13303E-7A7D-444C-8E76-6B0E06B6975D.jpeg',
      alt: 'Drive365 testimonial',
    },
    {
      type: 'image',
      src: '/IMG_1244.jpeg',
      alt: 'Drive365 customer review',
    },
    {
      type: 'image',
      src: '/IMG_2052.jpeg',
      alt: 'Drive365 happy customer',
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