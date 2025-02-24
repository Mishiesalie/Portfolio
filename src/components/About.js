import '../styles/About.scss';
import profileImage from '../images/me.png';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About Me 🌸</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello again! Thanks for scrolling this far! 🤗 Just a heads up, 
              my portfolio is a little outdated at the moment, but I hope it 
              gives you some inspiration!
            </p>
            <p>
              Other than coding, I spend most of my free time playing Animal 
              Crossing 🎮 and other video games. I've also been trying to read 
              more, so feel free to reach out with book recommendations! 📚
            </p>
          </div>
          <div className="profile-image">
            <img 
              src={profileImage} 
              alt="Profile"
              style={{ maxWidth: '300px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 