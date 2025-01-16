// src/components/ContactMe.tsx
import React from 'react';
const ContactMe: React.FC = () => {
  const email = 'parakhgupta.work.com';
  // Function to handle the copy action
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert('Email copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <section id="contact" className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4 text-gray-100">Contact Me</h2>
        <p className="text-lg text-gray-200 mb-6">
          I’m always open to discussing new opportunities or collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center items-center space-x-4">
          <p className="text-lg text-gray-200">
            <span className="text-gray-100 font-semibold">{email}</span>
          </p>
          <button
            onClick={copyToClipboard}
            className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            Copy
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
