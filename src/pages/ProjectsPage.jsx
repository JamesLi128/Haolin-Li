import React, { useState } from "react";
import { projects } from "../assets/projects";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Get unique categories and statuses
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];
  const statuses = [
    "all",
    ...new Set(projects.map((project) => project.status)),
  ];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-xl text-gray-600">
          Research projects, development work, and academic contributions
        </p>
      </div>

      {/* Filter Controls */}
      <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Category Filter */}
          <div className="md:w-48">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="md:w-48">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Status
            </label>
            <select
              id="status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-6 text-sm text-gray-600 flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden card-hover"
          >
            {/* Project Image */}
            <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <img
                src={project.image || project.defaultImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src =
                    project.defaultImage ||
                    "/project-images/default-project.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-4 right-4 flex gap-2">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium shadow-lg ${
                    project.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {project.status}
                </span>
                <span className="px-3 py-1 text-xs rounded-full font-medium bg-blue-100 text-blue-800 shadow-lg">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.period}</p>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Key Outcomes
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}

                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Paper
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-lg mb-2">No projects found</p>
          <p className="text-gray-400 text-sm">
            Try adjusting your filter criteria
          </p>
        </div>
      )}

      {/* Project Statistics */}
      <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Project Statistics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">
              {projects.length}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Total Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {projects.filter((p) => p.status === "Active").length}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Active Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {projects.filter((p) => p.category === "Research").length}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Research Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {projects.filter((p) => p.github).length}
            </div>
            <div className="text-sm text-gray-600 font-medium">Open Source</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
