import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Biocard from "../components/Biocard";
import { publications } from "../assets/publications";
import { projects } from "../assets/projects";
import { blogPosts } from "../assets/blogs";

const HomePage = () => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [particles, setParticles] = useState([]);

  // Get recent publications (last 3)
  const recentPublications = publications.slice(0, 3);

  // Get recent projects (last 2)
  const recentProjects = projects.slice(0, 2);

  // Get recent blog posts (last 2)
  const recentBlogPosts = blogPosts.slice(0, 2);

  // Typewriter effect for the tagline
  useEffect(() => {
    const taglines = [
      "Exploring the frontiers of computational intelligence",
      "Decoding complex networks with AI",
      "Building the future of machine learning",
      "Where data meets discovery",
    ];

    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      const currentTagline = taglines[currentIndex];

      if (isDeleting) {
        setCurrentText(currentTagline.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setCurrentText(currentTagline.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentTagline.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % taglines.length;
        typeSpeed = 500; // Pause before next word
      }

      setTimeout(typeWriter, typeSpeed);
    };

    typeWriter();
  }, []);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 20,
          size: Math.random() * 3 + 1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <>
      {/* Animated Background with Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section with Special CSI Styling */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-10"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Main Title with Glow Effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow">
            <span className="gradient-text">Haolin Li</span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-2xl md:text-3xl text-gray-700 mb-8 h-12 flex items-center justify-center">
            <span className="typewriter">{currentText}</span>
          </div>

          {/* CSI Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full mb-8 glow">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span className="font-semibold">
              Computational Sciences & Informatics
            </span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-primary">
              Explore My Research
            </Link>
            <Link to="/contact" className="btn-secondary">
              Let's Collaborate
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 float">
          <div className="w-16 h-16 bg-indigo-200 rounded-full opacity-50"></div>
        </div>
        <div
          className="absolute bottom-20 right-10 float"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-12 h-12 bg-purple-200 rounded-full opacity-50"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-600">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bio Card with Enhanced Styling */}
      <div className="relative z-10">
        <div className="flex mt-8">
          <Biocard />
        </div>
      </div>

      {/* Quick Navigation with Enhanced Hover Effects */}
      <div className="max-w-7xl mx-auto mt-16 mb-12 px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          <span className="gradient-text">Quick Navigation</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link
            to="/about"
            className="group bg-white p-8 rounded-2xl shadow-lg card-hover border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
              About
            </h3>
            <p className="text-gray-600 text-sm">
              Learn more about my research journey
            </p>
          </Link>

          <Link
            to="/publications"
            className="group bg-white p-8 rounded-2xl shadow-lg card-hover border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-green-600"
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
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
              Publications
            </h3>
            <p className="text-gray-600 text-sm">
              View my research contributions
            </p>
          </Link>

          <Link
            to="/projects"
            className="group bg-white p-8 rounded-2xl shadow-lg card-hover border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-blue-600"
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
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              Projects
            </h3>
            <p className="text-gray-600 text-sm">Explore my innovative work</p>
          </Link>

          <Link
            to="/contact"
            className="group bg-white p-8 rounded-2xl shadow-lg card-hover border border-gray-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-purple-600"
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
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
              Contact
            </h3>
            <p className="text-gray-600 text-sm">
              Get in touch for collaborations
            </p>
          </Link>
        </div>
      </div>

      {/* Recent Publications with Enhanced Cards */}
      <div className="max-w-7xl mx-auto mt-16 mb-12 px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="gradient-text">Recent Publications</span>
          </h2>
          <Link
            to="/publications"
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center group"
          >
            View All
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="space-y-6">
          {recentPublications.map((pub, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg card-hover border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {pub.title}
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-1 font-medium">{pub.author}</p>
                  <p className="text-gray-600 text-sm">{pub.venue}</p>
                </div>
                <div className="lg:flex-shrink-0">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors group-hover:scale-105 transform"
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
                    View Paper
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Projects with Enhanced Cards */}
      <div className="max-w-7xl mx-auto mt-16 mb-12 px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="gradient-text">Recent Projects</span>
          </h2>
          <Link
            to="/projects"
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center group"
          >
            View All
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg card-hover border border-gray-100 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {project.description.substring(0, 120)}...
                </p>
                <div className="flex gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Blog Posts with Enhanced Cards */}
      <div className="max-w-7xl mx-auto mt-16 mb-12 px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="gradient-text">Recent Blog Posts</span>
          </h2>
          <Link
            to="/blog"
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center group"
          >
            View All
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {recentBlogPosts.map((post) => (
            <a
              key={post.id}
              href={`#/blog/${post.id}`}
              className="group bg-white rounded-2xl shadow-lg card-hover border border-gray-100 p-6 block clickable-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full font-medium">
                  {post.category}
                </span>
                {post.latexContent && (
                  <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full font-medium">
                    LaTeX
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {post.excerpt.substring(0, 120)}...
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
