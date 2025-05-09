import React from 'react';

const HeroSection = () => {
  return (
    <div className="d-flex align-items-center justify-content-center text-center">
      <div style={{ paddingTop: '40px' }}>
        <h1 className="display-4 fw-bold">Hi, I'm Payal Keyur Patel</h1>
        <p className="lead">I build responsive and modern web applications</p>
        <a href="#projects" className="btn btn-outline-light mt-3">View My Projects</a>
      </div>
    </div>
  );
};

export default HeroSection;
