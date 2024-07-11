import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg';
import './Home.scss';
import { Typewriter } from 'react-simple-typewriter';
import { FaPlay, FaPhone } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleContactButtonClick = () => {
    navigate('/contacts');
  };

  return (
    <div className="home-container">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="content">
        <h1 className="title">
          Unlock Your Digital
          <span className='gradient-text'>
            <Typewriter
              words={['\u00A0Growth Potential']}
              loop={4}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="subtitle">Helping Creators and YouTubers Grow Organically</p>
        <p className="description">
          At <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-800">
            LevelUpOrigin
          </span>, we empower creators and YouTubers to achieve sustainable growth through tailored digital strategies. Our expertise in SEO, content optimization, and social media management ensures your content reaches the right audience, driving engagement and success.
        </p>
        <div className="button-group">
          <a
            href="https://www.youtube.com/watch?v=2sktYwWIg40"
            target="_blank"
            rel="noopener noreferrer"
            className="play-button"
          >
            <FaPlay />Play Video
          </a>
          <button
            className="contact-button"
            onClick={handleContactButtonClick}
          >
            <FaPhone />Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
