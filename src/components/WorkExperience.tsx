// src/components/WorkExperience.tsx
import React from 'react';

const workExperiences = [
  {
    title: 'Frontend Developer at ABC Corp',
    duration: 'Jan 2021 - Present',
    description:
      'Responsible for developing and maintaining the company\'s main website, utilizing React.js and Tailwind CSS to create a responsive, user-friendly experience.',
  },
  {
    title: 'Software Engineer Intern at XYZ Ltd',
    duration: 'Jun 2020 - Dec 2020',
    description:
      'Worked with a team of engineers to develop a web application, primarily using JavaScript, HTML, CSS, and Node.js. Focused on improving the front-end performance and ensuring smooth user experience.',
  },
  {
    title: 'Junior Web Developer at Tech Innovations',
    duration: 'Aug 2019 - May 2020',
    description:
      'Assisted in the development of client-facing websites using WordPress, JavaScript, and custom CSS. Contributed to bug fixes and small feature enhancements across multiple projects.',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="bg-gradient-to-r from-blue-50 via-white to-teal-50 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Work Experience</h2>
        
        {/* Work Experience List */}
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out p-6"
            >
              {/* Experience Header */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{experience.title}</h3>
              <p className="text-gray-600 text-lg mb-4">{experience.duration}</p>

              {/* Experience Description */}
              <p className="text-gray-700 text-base leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
