// src/components/Education.tsx
import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Degree Name</h3>
            <p className="text-gray-600">University Name (Year of Graduation)</p>
            <p className="text-gray-700">Brief description of the course or achievements.</p>
          </div>
          {/* Repeat for more education entries */}
        </div>
      </div>
    </section>
  );
};

export default Education;
