// src/components/WorkExperience.tsx
import React from 'react';

const workExperiences = [
  {
    title: 'Android Developer Executive at Gowaggon',
    duration: 'July 2024 - Present',
    description:
      'Responsible for developing and maintaining the company\'s inspection application with over 1500+ car inspections.Integrated with company\'s and CRM.',
  },
  {
    title: 'Android Developer in Xplicit',
    duration: 'Feb 2024-July 2024',
    description:
      'Worked and collaborated with developers to create companys\'s E-commerce application in flutter.Displays more than 500 Products with add to cart functionality.'
  },
  {
    title: 'FullStack Developer at Areteinfo Private Limited',
    duration: 'Dec 2023-Feb 2024',
    description:
      'Assisted in providing technical support in Stationary management system.Maintained E-cafe-lite android application.',
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
