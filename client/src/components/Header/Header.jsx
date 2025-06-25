import { useEffect, useRef } from 'react'
import logo from '../../assets/images/logo.png'
import userImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact Us'
  }
]

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className='flex items-center justify-between pl-[5rem] py-1.5'>
          {/* -----------logo--------------- */}
          <div>
            <img src={logo} alt="Logo" className="w-[9rem] h-auto" />
          </div>

          {/* ----------menu -------------------- */}
          <div className="navigation">
            <ul className='menu flex items-center gap-[2rem] py-1'>
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[15px] leading-8 font-[600]' : 'text-textColor text-[15px] leading-8 font-[500]'} >
                      {link.display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          {/*------------------- nav right -------------------------*/}
          <div className='flex items-center gap-[2rem] pr-[5rem]'>
            <div>
              <Link to="/">
                <figure className='w-[35px] h-[35px] rounded-full'>
                  <img src={userImg} className='w-full rounded-full' alt="" />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className='bg-primaryColor px-6 text-white h-[45px] rounded-[50px] flex items-center justify-center'>
                LOGIN
              </button>
            </Link>

            <span className='md:hidden'>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
