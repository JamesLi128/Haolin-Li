import React from "react";

const Biocard = ({
  name = "Haolin Li",
  title = "PhD, Computational Sciences and Informatics",
  description = "Your bio description goes here. This is a flexible component that adapts to different text lengths and provides a beautiful layout for your personal information.",
  imageUrl = "https://via.placeholder.com/200x200?text=Your+Photo",
  email = "jamesli.wks@gmail.com",
  location = "Baltimore, MD",
}) => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 md:gap-24">
        {/* Left side - Profile Image */}
        <div className="md:w-2/5 p-12 flex justify-center items-center">
          <div className="relative">
            <img
              src={imageUrl}
              alt={name}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
        </div>

        {/* Right side - Bio Information */}
        <div className="md:w-3/5 p-12 flex flex-col justify-center">
          <div className="space-y-6">
            {/* Name and Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                {name}
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
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span className="text-sm md:text-base">{email}</span>
              </div>

              <div className="flex items-center space-x-2 text-gray-700">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm md:text-base">{location}</span>
              </div>
            </div>

            {/* Social Links or Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
                Contact Me
              </button>
              <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200 font-medium">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biocard;
