import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img 
          className='w-full md:max-w-[350px] rounded-lg shadow-md' 
          src={assets.about_img} 
          alt="About Classic Stylez" 
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            <span className="font-semibold text-gray-800">Classic Stylez</span> was created to make online shopping simple, enjoyable, and reliable. 
            We provide a platform where you can easily discover, explore, and shop a wide variety of products from the comfort of your home.
          </p>
          <p>
            From fashion and beauty to electronics and home essentials, we bring you a carefully curated selection of trusted products, 
            ensuring both quality and style for every preference.
          </p>
          <b className='text-gray-800 text-lg'>Our Mission</b>
          <p>
            At <span className="font-semibold">Classic Stylez</span>, our mission is to offer choice, convenience, and confidence. 
            We’re committed to delivering a smooth shopping experience — from browsing to doorstep delivery.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-md transition'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            Every product is carefully selected to meet high standards of durability and value.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-md transition'>
          <b>Convenience</b>
          <p className='text-gray-600'>
            Our easy-to-use platform and hassle-free ordering process make shopping effortless.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-md transition'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            Our dedicated support team is here to assist you at every step, putting your satisfaction first.
          </p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
