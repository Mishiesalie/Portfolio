import '../styles/Toolkit.scss';

const Toolkit = () => {
  const tools = [
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'typescript' },
    // Add more tools...
  ];

  return (
    <section className="section toolkit">
      <div className="container">
        <h2>My Toolkit 💻</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div className="tool-item" key={index}>
              <i className={`icon-${tool.icon}`}></i>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit; 