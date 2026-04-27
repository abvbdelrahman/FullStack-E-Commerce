import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  }
  return (
    <section className=' relative w-full min-h-screen bg-linear-to-r from-indigo-900 via-purple-800 to-pink-900 text-white py-24 px-6 sm:px-10'>
      <div className='absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none'></div>
      <div className='relative z-10 max-w-7xl mx-auto'>
        <h2 className=' text-4xl sm:text-5xl font-extrabold mb-6 text-center'>Contact Us</h2>
        <p className='  text-gray-300 text-center text-lg sm:text-xl mb-12'>We would love to hear from you! Fill out the form below and we will get back to you as soon as possible.</p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-6'>
            <div className='flex items-center rounded-3xl shadow-lg hover:shadow-cyan-400/30 transition-all bg-white/10 backdrop-blur-md p-6'>
              <MapPin className='w-8 h-8 mr-4 text-cyan-400' />
              <div>
                <h4 className='text-lg font-semibold'>Address</h4>
                <p className='text-gray-300'>Cairo, Egypt</p>
              </div>
            </div>
            <div className='flex items-center rounded-3xl shadow-lg hover:shadow-cyan-400/30 transition-all bg-white/10 backdrop-blur-md p-6'>
              <Phone className='w-8 h-8 mr-4 text-cyan-400' />
              <div>
                <h4 className='text-lg font-semibold'>Phone</h4>
                <p className='text-gray-300'> (+20) 1115827425</p>
              </div>
            </div>
            <div className='flex items-center rounded-3xl shadow-lg hover:shadow-cyan-400/30 transition-all bg-white/10 backdrop-blur-md p-6'>
              <Mail className='w-8 h-8 mr-4 text-cyan-400' />
              <div>
                <h4 className='text-lg font-semibold'>Email</h4>
                <p className='text-gray-300'>abdelrahmanhussein55d@gmail.com</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='bg-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6 shadow-2xl flex flex-col gap-6'>
              <input type='text' name='name' value={formData.name} onChange={handleChange} required className='rounded-xl bg-white/10 text-black focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all font-semibold' />
              <input type='email' name='email' value={formData.email} onChange={handleChange} required className='rounded-xl bg-white/10 text-black focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all font-semibold' />
              <textarea name='message' value={formData.message} onChange={handleChange} required className='rounded-xl bg-white/10 text-black focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all font-semibold resize-none' rows='5'></textarea>
            <button type='submit' className='bg-linear-to-r from-indigo-500 via-purple-600 to-pink-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:opacity-90 transition-all'>Send Message</button>
          </form>
        </div>

      </div>
      <footer className='mt-24 relative z-10 max-w-7xl mx-auto text-center text-gray-300'>
        <p className=' mb-4'>© 2023 E-Commerce. All rights reserved.</p>
        <div className='flex justify-center gap-6'>
          <a href='https://github.com/abvbdelrahman' target='_blank' rel='noopener noreferrer' className='hover:text-white transition-colors'>
            GitHub
          </a>
          <a href='https://www.linkedin.com/in/abdelrahman-hussein-29633135b?utm_source=share_via&utm_content=profile&utm_medium=member_android' target='_blank' rel='noopener noreferrer' className='hover:text-white transition-colors'>
            LinkedIn
          </a>
          <a href='tel:+201115827425' target='_blank' rel='noopener noreferrer' className='hover:text-white transition-colors'>
            Call Us
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Footer
