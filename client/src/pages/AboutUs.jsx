// components/AboutUs.jsx

import { Typewriter } from 'react-simple-typewriter';
import './AboutUs.scss';
import './WhoWeAre.scss'; // Assuming you have styles for WhoWeAre section here
import WhoWeAre from './WhoWeAre';
import OurStory from './OurStory';
import { useNavigate } from 'react-router-dom';


const AboutUs = () => {
  const navigate = useNavigate();

  const scrollToWhoWeAre = () => {
    document.getElementById('whoWeAre').scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <>
      <section id="aboutUs" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-75 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            <span className="gradient-text">
              <Typewriter
                words={['Empowering creators to achieve sustainable growth through organic strategies.']}
                loop={3}
                cursor
                cursorStyle='_'
                typeSpeed={20}
                deleteSpeed={10}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <button onClick={scrollToWhoWeAre} className="bg-white text-gray-800 py-3 px-6 rounded-full shadow-md hover:bg-gray-300 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </section>
      <WhoWeAre />
      <OurStory />
      <section className="flex flex-col items-center justify-center py-16 bg-black text-white">
        <button
          onClick={handleNavigateToContact}
          className="text-white bg-transparent text-transparent bg-clip-text py-3 px-6 rounded-full shadow-md border-2 border-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-yellow"
        >
          Let&#39;s Grow Together!
        </button>
      </section>
    </>
  );
};

export default AboutUs;
