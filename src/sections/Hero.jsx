import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className='relative w-screen min-h-[75vh] md:min-h-screen'>
      {/* Video Background */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className='w-full h-full object-cover'
        >
          <source src='https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/40'></div>
      </div>

      {/* Content */}
      <div className='relative pt-[250px] w-full h-full flex flex-col sm:flex-row items-center justify-between sm:px-0 px-4 gap-8 text-white container mx-auto'>
        {/* Left Section */}
        <div className='flex-1 space-y-4 sm:pr-80 px-4 sm:px-0 mt-20 sm:mt-0'>
          <div className='font-generalsans text-center sm:text-left'>
            <h1 className="font_0 wixui-rich-text__text text-4xl sm:text-6xl leading-tight mb-4">
              Ab Furniture Adjust Nahi <br /> Customize Karo!
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Explore endless possibilities and create furniture that fits your style.
            </p>
            <button className='px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base text-black bg-amber-600 font-bold rounded-lg hover:bg-amber-800 transition-all duration-200'>
              <Link to='/customise'><span class="StylableButton2545352419__label wixui-button__label" data-testid="stylablebutton-label">CUSTOMIZE</span></Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
