import '../styles/Contact.scss';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Let's Connect! 💌</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              If you ever want to grab a coffee/bubble tea (virtually) or just 
              want a quick chat - you can find me on social media or send me 
              a message here!
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 