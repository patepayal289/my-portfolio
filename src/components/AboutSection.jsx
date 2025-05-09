import React from "react";
import "./About.css";

const AboutSection = () => {
  return (
    <section id="about" className="text-white py-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.38)' }}>
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">About Me</h2>
        <p className="lead">
          👋 Hi, I'm <span className="text-primary fw-bold">Payal Keyur Patel</span>, a dedicated web developer
          currently working at CVMU University. I specialize in building responsive,
          modern web apps using both front-end and back-end technologies.
        </p>

        <div className="row justify-content-center mt-5">
          <div className="col-md-5 mb-4">
            <div className="glass-card h-100">
              <h5 className="mb-3">🎓 Education</h5>
              <p>
                <strong>Bachelor in IT</strong>, CVMU – 7.84 CGPA (2021–2024)<br />
                <strong>Diploma in IT</strong>, GTU – 9.52 CGPA (2019–2021)<br />
               
              </p>
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <div className="glass-card h-100">
              <h5 className="mb-3">💻 Skills</h5>
              <p>
                HTML, CSS, JavaScript, React, Node.js, PHP, Java, SQL Server,<br />
                ASP.NET, .NET Framework, UI/UX Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
