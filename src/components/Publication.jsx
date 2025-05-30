import React from "react";

const Publication = ({ paper }) => {
  return (
    <li className="mb-4 p-3 w-full text-left pl-6">
      <div className="flex items-center mb-1 max-w-5xl">
        <a
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-blue-600 hover:underline mr-3 flex-shrink-0"
        >
          {paper.title}
        </a>
        <span className="text-base text-gray-700 font-medium italic flex-shrink-0">
          {paper.author}
        </span>
      </div>
      <div className="text-sm text-gray-600">{paper.venue}</div>
    </li>
  );
};

export default Publication;
