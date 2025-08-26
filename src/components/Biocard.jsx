import React from "react";

const Biocard = ({
  name = "Haolin Li",
  title = "PhD, Computational Sciences and Informatics",
  description = "Your bio description goes here. This is a flexible component that adapts to different text lengths and provides a beautiful layout for your personal information.",
  imageUrl = "https://via.placeholder.com/200x200?text=Your+Photo",
  email = "hli54@gmu.edu",
  location = "Fairfax, VA",
}) => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Haolin-Li/Haolin_Li_CV.pdf"; // Note: includes base path from vite.config.js
    link.download = "Haolin_Li_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
      <div className="flex flex-col md:flex-row gap-8 md:gap-24">
        {/* Left side - Profile Image */}
        <div className="md:w-2/5 p-12 flex justify-center items-center bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl opacity-20"></div>
            <img
              src={imageUrl}
              alt={name}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
          </div>
        </div>

        {/* Right side - Bio Information */}
        <div className="md:w-3/5 p-12 flex flex-col justify-center">
          <div className="space-y-8">
            {/* Name and Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                <span className="gradient-text">{name}</span>
              </h2>
              <p className="text-xl md:text-2xl text-indigo-600 font-medium">
                {title}
              </p>
            </div>

            {/* Description */}
            <div className="text-gray-600 leading-relaxed">
              <p className="text-lg md:text-xl">{description}</p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center space-x-3 text-gray-700 group">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <span className="text-sm md:text-base font-medium">
                  {email}
                </span>
              </div>

              <div className="flex items-center space-x-3 text-gray-700 group">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm md:text-base font-medium">
                  {location}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleDownloadCV}
                className="btn-primary cursor-pointer"
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </button>

              <a href="mailto:jamesli.wks@gmail.com" className="btn-secondary">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biocard;
