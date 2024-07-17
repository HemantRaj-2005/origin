import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.scss'; // Import the SCSS file

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.user_name) errors.user_name = 'Name is required';
    if (!formData.user_email) errors.user_email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm('service_7pfu6yq', 'template_3b6w6jr', form.current, 'TEFRdR-QT8ZFEhuPD')
      .then(
        () => {
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000);
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          alert('Failed to send message: ' + error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 className="center">Contact Us</h2>
        <h3>Get in Touch</h3>
        <p>Have questions or ready to start your digital growth journey? Reach out to us! Our team is here to assist you and provide personalized guidance.</p>
        <h4>Contact Information</h4>
        <p><strong>Email:</strong> Leveluporigin24@gmail.com</p>
        <p><strong>Address:</strong> Varanasi, Uttar Pradesh, India</p>
        <h4>Office Hours</h4>
        <p><strong>Monday - Friday:</strong> 9:00 AM - 10:00 PM (IST)</p>
        <h4>Connect With Us</h4>
        <p>Follow us on social media to stay updated on the latest news, tips, and insights:</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/mayank.chaubey09/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram" />
          </a>
          <a href="https://www.linkedin.com/in/mayank-chaubey-8888a321a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon linkedin" />
          </a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
        {formErrors.user_name && <p className="error">{formErrors.user_name}</p>}
        <label>Email</label>
        <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} />
        {formErrors.user_email && <p className="error">{formErrors.user_email}</p>}
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />
        {formErrors.message && <p className="error">{formErrors.message}</p>}
        <input type="submit" value="Send" />
      </form>
      {showSuccess && <div className="success-message">Message sent successfully!</div>}
    </div>
  );
};

export default Contact;
