import React from 'react';
import About from './About';
import Footer from './Footer';
import ContactUs from './ContactUs';
import { Link } from 'react-router'
const Hero = () => {
  return (
    <section className=''>
    <div className='pt-[60px] w-screen h-full my-4 relative mx-auto flex flex-col sm:flex-row items-center justify-between sm:px-16 px-8  gap-8 bg-white  '>
      {/* Left Section: Text Content */}
      <div className='flex-1 space-y-4 sm:pr-8'>
        <p className='sm:text-3xl text-2xl font-medium text-black text-center sm:text-left font-generalsans'>
          Customize your own furniture with AI
        </p>
        <div className='text-black text-center sm:text-left'>
          <p>Explore endless possibilities and create furniture that fits your style.</p>
          <button className='mt-4 px-4 py-2 text-white bg-amber-600 font-bold rounded-lg hover:bg-amber-800 hover:shadow-lg transition-all duration-200'>
  <Link to="/customise">Customize</Link>
</button>

        </div>
      </div>

      {/* Right Section: Image */}
      <div className='flex-1 mt-8 sm:mt-0'>
        <img
          src={"/assets/bg.png"}
          alt='Hero Background'
          className='w-full h-auto object-cover transform scale-x-[-1]'
        />
      </div>
    </div>
    <div >
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
    </section>
  );
};

export default Hero;
