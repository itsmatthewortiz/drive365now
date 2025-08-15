import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const NETLIFY_FUNCTION_URL = '/.netlify/functions/send-lead';
    
    fetch(NETLIFY_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '', vehicleYear: '', vehicleMake: '', vehicleModel: '' });
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting your form. Please try again.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to find your perfect vehicle? Contact us today and let's get started.
          </p>
        </div>




        <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-300 mb-2">
                    Vehicle Year
                  </label>
                  <input
                    type="text"
                    id="vehicleYear"
                    name="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                    placeholder="2025"
                  />
                </div>

                <div>
                  <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-300 mb-2">
                    Vehicle Make
                  </label>
                  <input
                    type="text"
                    id="vehicleMake"
                    name="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                    placeholder="BMW"
                  />
                </div>

                <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-300 mb-2">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    id="vehicleModel"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                    placeholder="M5"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                  placeholder="Tell us about your vehicle needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full text-white px-6 py-4 rounded-md font-semibold transition-colors text-lg flex items-center justify-center"
                style={{backgroundColor: '#4DA9E1'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A8BC7'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4DA9E1'}
              >
                Send Message
                <Send size={20} className="ml-2" />
              </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;