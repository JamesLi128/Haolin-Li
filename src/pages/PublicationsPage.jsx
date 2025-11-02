import React, { useState, useMemo } from "react";
import { publications } from "../assets/publications";

const PublicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Categories for filtering
  const categories = ["all", "conferences", "journals", "preprints"];

  // Filter publications based on search term and category
  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        filterCategory === "all" ||
        pub.venue.toLowerCase().includes(filterCategory.slice(0, -1)); // Remove 's' from category

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, filterCategory]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          <span className="gradient-text">Publications</span>
        </h1>
        <p className="text-xl text-gray-600">
          My research contributions in Machine Learning and Optimization.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Search Bar */}
          <div className="flex-1">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-3"
            >
              Search Publications
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, author, or venue..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
              />
            </div>
          </div>

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
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Showing {filteredPublications.length} of {publications.length}{" "}
          publications
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-8">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((pub, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {pub.title}
                    </a>
                  </h3>

                  {/* Authors */}
                  <p className="text-lg text-gray-700 mb-3 font-medium">
                    {pub.author}
                  </p>

                  {/* Venue */}
                  <p className="text-gray-600 mb-4">{pub.venue}</p>

                  {/* Additional Info */}
                  {pub.doi && (
                    <p className="text-sm text-gray-500 mb-3">
                      DOI:{" "}
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        className="text-indigo-600 hover:underline"
                      >
                        {pub.doi}
                      </a>
                    </p>
                  )}

                  {/* Abstract (if available) */}
                  {pub.abstract && (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {pub.abstract}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 lg:flex-shrink-0">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
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
                    View Paper
                  </a>

                  {pub.code && (
                    <a
                      href={pub.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg mb-2">No publications found</p>
            <p className="text-gray-400 text-sm">
              Try adjusting your search criteria
            </p>
          </div>
        )}
      </div>

      {/* Statistics */}
      <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Publication Statistics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">
              {publications.length}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Total Publications
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {
                publications.filter((pub) =>
                  pub.venue.toLowerCase().includes("conference")
                ).length
              }
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Conference Papers
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {
                publications.filter((pub) =>
                  pub.venue.toLowerCase().includes("journal")
                ).length
              }
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Journal Papers
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {
                publications.filter((pub) =>
                  pub.venue.toLowerCase().includes("arxiv")
                ).length
              }
            </div>
            <div className="text-sm text-gray-600 font-medium">Preprints</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
