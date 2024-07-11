// components/WhoWeAre.jsx


import './WhoWeAre.scss';
import mayankImage from '../assets/mayank.jpg'; // Adjust the path as per your project structure

const WhoWeAre = () => {
    return (
        <section id="whoWeAre" className="relative h-screen flex items-center justify-start bg-black text-white">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <img
                        src={mayankImage}
                        alt="Mayank Chaubey"
                        className="rounded-full w-48 h-48 object-cover shadow-md"
                    />
                </div>
                <div className="w-full md:w-2/3 md:pl-8 mt-8 md:mt-0">
                    <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Who We Are</h2>
                        <p className="text-lg md:text-xl mb-6">
                            We are a dynamic team dedicated to helping creators thrive in the digital world. Our team is led by Mayank Chaubey,
                            a first-year BTech CSE student from Pune, who brings his passion for technology and digital growth to the forefront of our strategies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
