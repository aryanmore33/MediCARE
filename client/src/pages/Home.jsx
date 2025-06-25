import React from 'react'

// change bsarrow

import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const Home = () => {
  return (
    <>
      {/* ----------------Hero section--------------------- */}
      <section className="hero__section pt-[60px] 2xl:h-[700px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px] pl-7">
            {/* ----------------hero content--------------------- */}
            <div>
              <div className='lg:w-[500px]'>
                <h1 className='leading-[50px] font-[700] text-headingColor md:text-[45px] md:leading-[53px]'>
                  We help Patients to live healthy and Longer life...
                </h1>
                <p className='text__para'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita consequatur autem temporibus perspiciatis aperiam a praesentium libero ratione nemo dicta, tempora quos inventore voluptas ullam corrupti ipsam reiciendis ad.
                </p>
                <button className='btn'>
                  Request an Appointment
                </button>
              </div>
              {/* ----------------Hero counter ----------- */}
              <div className='mt-[25px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] lg:mt-[70px]'>
                <div>
                  <h2 className='text-[30px] lg:text-[40px] leading-[54px] font-[700] text-headingColor'>
                    30+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-15px]'></span>
                  <p className='text__para'>
                    Years of Experience
                  </p>
                </div>

                <div>
                  <h2 className='text-[30px] lg:text-[40px] leading-[54px] font-[700] text-headingColor'>
                    15+
                  </h2>
                  <span className='w-[100px] h-2 bg-purple-500 rounded-full block mt-[-15px]'></span>
                  <p className='text__para'>
                    Clinic Locations
                  </p>
                </div>

                <div>
                  <h2 className='text-[30px] lg:text-[40px] leading-[54px] font-[700] text-headingColor'>
                    100%
                  </h2>
                  <span className='w-[100px] h-2 bg-blue-500 rounded-full block mt-[-15px]'></span>
                  <p className='text__para'>
                    Patient Satisfaction
                  </p>
                </div>
              </div>
            </div>

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={heroImg01} alt="Hero 1" className='w-full' />
              </div>
              <div className='mt-[-30px]'>
                <img src={heroImg02} alt="Hero 2" className='w-full mb-[30px]' />
                <img src={heroImg03} alt="Hero 3" className='w-full' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------Hero section end ----------------- */}
      <section className='bg-blue-50'>
        <div className="container">
          <div className='lg:w-[450px] mx-auto'>
            <h2 className='heading text-center'>
              Providing the best medical services
            </h2>
            <p className='text__para text-center'>
              World-class care for everyone...Our health system offers unmatched, expert health care...
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-row lg:grid-cols-3 lg:gap-[30px] lg:mt-[55px] gap-5'>
            <div className='py-[30px] px-[20px]'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt="Find a Doctor Icon" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[30px] font-[700] text-headingColor text-center leading-8'>
                  Find a Doctor
                </h2>
                <p className='text__para text-center'>
                  World-class care for everyone. Our health system offers unmatched, expert health care. From lab to clinic.
                </p>
                <Link to="/doctors" className='w-[40px] h-[40px] rounded-full border border-solid border-blue-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-[20px]'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="Find location" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[30px] font-[700] text-headingColor text-center leading-8'>
                  Find Location
                </h2>
                <p className='text__para text-center'>
                  World-class care for everyone. Our health system offers unmatched, expert health care. From lab to clinic.
                </p>
                <Link to="/doctors" className='w-[40px] h-[40px] rounded-full border border-solid border-blue-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-[20px]'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="book appointment" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[30px] font-[700] text-headingColor text-center leading-8'>
                  Book Appointment
                </h2>
                <p className='text__para text-center'>
                  World-class care for everyone. Our health system offers unmatched, expert health care. From lab to clinic.
                </p>
                <Link to="/doctors" className='w-[40px] h-[40px] rounded-full border border-solid border-blue-900 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

          </div>

          
        </div>  
      </section>

      {/* ================= service section ===================== */}
      <section>
        <div className="conatiner">
          
        </div>
      </section>
      {/* ================= service section end ===================== */}
      <section>

      </section>


    </>
  )
}

export default Home;
