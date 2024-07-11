// components/OurStory.jsx

import { useInView } from 'react-intersection-observer';
import './OurStory.scss';

const OurStory = () => {
    const { ref: storyRef, inView: storyInView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const { ref: approachRef, inView: approachInView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const { ref: valuesRef, inView: valuesInView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <section id="ourStory" className="timeline-container">
            <div className="timeline-item" ref={storyRef}>
                <div className={`timeline-content ${storyInView ? 'animate-left' : ''}`}>
                    <div className="circle">
                        <h2>Our Story</h2>
                    </div>
                    <p>
                        LevelUp Origin was born out of a shared passion for digital growth and a desire to help creators navigate the complexities of the online landscape. Recognizing the challenges faced by many in standing out and gaining traction, we set out to provide personalized and effective growth solutions.
                    </p>
                </div>
            </div>
            <div className="timeline-item" ref={approachRef}>
                <div className={`timeline-content ${approachInView ? 'animate-right' : ''}`}>
                    <div className="circle">
                        <h2>Our Approach</h2>
                    </div>
                    <p>
                        We adopt a comprehensive approach to digital growth, focusing on:
                        <ul>
                            <li>SEO Optimization: Improving your content to rank higher in search results.</li>
                            <li>Content Strategy: Developing engaging and relevant content that resonates with your audience.</li>
                            <li>Social Media Management: Building and engaging with your community across platforms.</li>
                            <li>Analytics and Insights: Using data to drive decisions and measure success.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="timeline-item" ref={valuesRef}>
                <div className={`timeline-content ${valuesInView ? 'animate-left' : ''}`}>
                    <div className="circle">
                        <h2>Our Values</h2>
                    </div>
                    <ul>
                        <li>Integrity: We believe in honest and transparent communication with our clients.</li>
                        <li>Innovation: We stay ahead of trends and continuously refine our strategies.</li>
                        <li>Collaboration: We work closely with you to understand your unique goals and challenges.</li>
                        <li>Results-Driven: We are committed to delivering measurable outcomes.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
