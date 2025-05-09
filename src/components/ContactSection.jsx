import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="text-center text-white py-5" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="container">
        <h2 className="fw-bold mb-4">Contact</h2>
        <p className="lead">
          Email me at{' '}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=your.payu34444@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info fw-bold"
          >
           payu3444@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
