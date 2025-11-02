import React from "react";
import { experience } from "../assets/experience";

const ExperiencePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-xl text-gray-600">
          Professional experience, education, and achievements
        </p>
      </div>

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experience.work.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-1">
                    {job.organization}
                  </p>
                  <p className="text-gray-500 mb-2">{job.location}</p>
                </div>
                <div className="md:text-right">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {job.description}
              </p>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-600 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 mb-2">{edu.location}</p>
                </div>
                <div className="md:text-right">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                  {edu.gpa && (
                    <span className="text-sm text-gray-600">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>

              {edu.thesis && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Thesis/Dissertation
                  </h4>
                  <p className="text-gray-700">{edu.thesis}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Honors */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Awards & Honors
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experience.awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 border-l-4 border-indigo-500"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {award.title}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {award.year}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{award.organization}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Skills Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Skills Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Technical Skills
            </h3>
            <div className="space-y-3">
              {experience.skills.technical.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research Areas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Research Areas
            </h3>
            <div className="space-y-3">
              {experience.skills.research.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Languages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experience.skills.languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <span className="text-lg font-medium text-gray-800">
                {lang.language}
              </span>
              <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                {lang.proficiency}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Timeline</h2>
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {[...experience.education, ...experience.work]
                .sort(
                  (a, b) =>
                    new Date(b.period.split(" - ")[0]) -
                    new Date(a.period.split(" - ")[0])
                )
                .map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="absolute left-2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-sm"></div>

                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {item.title || item.degree}
                          </h3>
                          <p className="text-gray-600 mb-1">
                            {item.organization || item.institution}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {item.location}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 md:ml-4">
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
