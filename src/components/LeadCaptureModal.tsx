import React, { useState } from 'react';
import { X, Car, Phone, Mail, User, Search } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    interest: 'buying'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead captured:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you! We\'ll be in touch soon.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-black border border-gray-800 rounded-lg max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#4DA9E1'}}>
            <Car size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Get Started Today</h2>
          <p className="text-gray-300">Tell us a bit about yourself and we'll connect you with the perfect vehicle solution.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              <User size={16} className="inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{'--focus-ring-color': '#4DA9E1'}}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              <Mail size={16} className="inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              <Phone size={16} className="inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
              I'm interested in:
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = `0 0 0 2px #4DA9E1`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <option value="buying">Buying a car</option>
              <option value="selling">Selling my car</option>
              <option value="financing">Car financing</option>
              <option value="both">Both buying and selling</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full text-white px-6 py-4 rounded-md font-semibold transition-colors text-lg"
            style={{backgroundColor: '#4DA9E1'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A8BC7'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4DA9E1'}
          >
            Get Offers
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          By submitting this form, you agree to receive communications from Drive365. 
          We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  );
};

export default LeadCaptureModal;