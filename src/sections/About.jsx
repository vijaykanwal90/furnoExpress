import React from 'react';
import { founders } from '../constants';

const About = () => {
  return (
    <section id="about" className="min-h-screen text-gray-900 bg-white my-16 px-6 sm:px-12">
      <h2 className="text-black text-3xl font-bold mb-8 text-center">About Us</h2>
      <div className="flex flex-col items-center">
        {/* Our Story Section */}
        <article className="w-full sm:w-10/12 border p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-lg">
            In 2024, <span className="font-bold">Abhay Gilda</span> and <span className="font-bold">Rishi Basantwani</span> founded FurnoXpress to revolutionize the furniture industry with innovation and sustainability. Their solutions include AI-powered customization, ready-made and tailored furniture, and services for repurposing old pieces. With a focus on creativity and practicality, FurnoXpress helps customers design personalized, stylish, and functional living spaces. Later, <span className="font-bold">Uttam Kumar Singh</span> joined FurnoXpress, adding significant value to the technical aspects, enhancing the company&apos;s capabilities and services.
          </p>
        </article>

        {/* Founders Section */}
        <div className="w-full flex flex-wrap items-center justify-center gap-8">
          {founders.map((founder) => (
            <div key={founder.id} className="w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center p-4 border rounded-lg text-center">
              <img src={founder.img} alt={`${founder.name}'s profile`} className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4" />
              <h3 className="text-lg font-semibold">{founder.name}</h3>
              <p className="text-sm text-gray-600">{founder.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
