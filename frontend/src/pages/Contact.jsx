import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl md:text-3xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-14 flex flex-col justify-center md:flex-row gap-12 mb-28 px-6 md:px-12 lg:px-20'>
        
        <img 
          className='w-full md:max-w-[480px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300' 
          src={assets.contact_img} 
          alt="Contact Classic Stylez" 
        />

        <div className='flex flex-col justify-center items-start gap-6 text-gray-600'>
          
          <div>
            <p className='font-semibold text-xl flex items-center gap-2 text-gray-800'>
              <FaMapMarkerAlt className="text-indigo-600" /> Our Store
            </p>
            <p className='text-gray-500 mt-1'>Madurai <br /> Thirumangalam</p>
          </div>

          <div>
            <p className='font-semibold text-xl flex items-center gap-2 text-gray-800'>
              <FaPhoneAlt className="text-green-600" /> Contact
            </p>
            <p className='text-gray-500 mt-1'>
              Tel: 9939392019 <br /> 
              <span className='flex items-center gap-2'><FaEnvelope className="text-red-500" /> sivabalan03tmg@gmail.com</span>
            </p>
          </div>

          <div>
            <p className='font-semibold text-xl flex items-center gap-2 text-gray-800'>
              <FaBriefcase className="text-yellow-500" /> Careers at Classic Stylez
            </p>
            <p className='text-gray-500 mt-1'>Discover opportunities and join our growing team.</p>
            <button className='border border-black px-8 py-3 text-sm font-medium rounded-lg mt-3 hover:bg-black hover:text-white transition-all duration-300'>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
