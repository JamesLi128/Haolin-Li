import React from "react";
import { experience } from "../assets/experience";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          <span className="gradient-text">About Me</span>
        </h1>
        <p className="text-xl text-gray-600">
          PhD student in Computational Sciences and Informatics at George Mason
          University
        </p>
      </div>

      {/* Research Interests */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Research Interests
        </h2>
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            My research focuses on developing scalable and robust machine
            learning algorithms. I am particularly interested in Federated Continual Learning (FCL) 
            algorithm design and the application of Distribution Robust Optimization (DRO). 
            I am most excited to work with both theoretical and applied aspects of these fields to create
            innovative solutions for real-world problems.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Education</h2>
        <div className="space-y-6">
          {experience.education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.degree}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
              <p className="text-lg text-gray-600 mb-2">{edu.institution}</p>
              <p className="text-gray-500 mb-2">{edu.location}</p>
              {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
              {edu.thesis && (
                <p className="text-gray-600 mt-2">
                  <strong>Thesis:</strong> {edu.thesis}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.skills.technical.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Research Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Research Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.skills.research.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Languages</h2>
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex flex-wrap gap-6">
            {experience.skills.languages.map((lang, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-lg font-medium text-gray-800">
                  {lang.language}
                </span>
                <span className="text-sm text-gray-500">
                  ({lang.proficiency})
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Personal Interests
        </h2>
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            Outside of research, I enjoy hiking, exploring new technologies, and reading
            light-weight philosophy (currently "A Little History of Philosophy" by Nigel Warburton).
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
