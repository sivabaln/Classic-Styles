import React from 'react'
import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <Link
              to="/"
              className="uppercase text-sm md:text-2xl font-extrabold tracking-wider"
              style={{ fontFamily: "'Prata', serif" }}
            >
              Classic <span className="text-pink-500" style={{ fontFamily: "'Prata', serif" }}>Stylez</span>
            </Link>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar