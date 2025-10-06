import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  const linkClass =
    'flex flex-col items-center gap-1 relative group'

  const underlineClass =
    'absolute bottom-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full'

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link
        to="/"
        className="uppercase text-sm md:text-2xl font-extrabold tracking-wider"
        style={{ fontFamily: "'Prata', serif" }}
      >
        Classic <span className="text-pink-500" style={{ fontFamily: "'Prata', serif" }}>Stylez</span>
      </Link>

      <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
        <NavLink to="/" className={linkClass}>
          <p>HOME</p>
          <span className={underlineClass}></span>
        </NavLink>
        <NavLink to="/collection" className={linkClass}>
          <p>COLLECTION</p>
          <span className={underlineClass}></span>
        </NavLink>
        <NavLink to="/bestseller" className={linkClass}>
          <p>BEST SELLER</p>
          <span className={underlineClass}></span>
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          <p>ABOUT</p>
          <span className={underlineClass}></span>
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          <p>CONTACT</p>
          <span className={underlineClass}></span>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => {
            setShowSearch(true)
            navigate('/collection')
          }}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate('/login'))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${visible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col text-gray-600 w-64">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer border-b"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/collection">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/bestseller">
            BEST SELLER
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
