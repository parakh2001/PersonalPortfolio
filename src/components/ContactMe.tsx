import React from "react";
import { FaEnvelope, FaPhone, FaClipboard } from "react-icons/fa";

const ContactMe: React.FC = () => {
  const email = "parakhgupta.work@gmail.com"; // Correct your email if needed
  const phone = "8368986551";

  // Function to copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => alert(`${text} copied to clipboard!`))
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-4 flex justify-center items-center"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-lg text-center border border-white/20">
        <h2 className="text-4xl font-bold mb-6 text-yellow-300">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          Let’s build something amazing together! Feel free to reach out for opportunities or collaborations.
        </p>

        {/* Contact Info Section */}
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center justify-between bg-white/20 px-4 py-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-300 text-xl" />
              <span className="text-gray-100">{email}</span>
            </div>
            <button
              onClick={() => copyToClipboard(email)}
              className="text-white hover:text-yellow-300 transition"
            >
              <FaClipboard size={18} />
            </button>
          </div>

          {/* Phone Number */}
          <div className="flex items-center justify-between bg-white/20 px-4 py-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-yellow-300 text-xl" />
              <span className="text-gray-100">{phone}</span>
            </div>
            <button
              onClick={() => copyToClipboard(phone)}
              className="text-white hover:text-yellow-300 transition"
            >
              <FaClipboard size={18} />
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col space-y-4">
          <a
            href={`mailto:${email}`}
            className="bg-yellow-300 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Send an Email
          </a>
          <a
            href={`tel:${phone}`}
            className="bg-yellow-300 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
