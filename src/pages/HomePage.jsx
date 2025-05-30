import React from "react";
import { useState } from "react";
import Biocard from "../components/Biocard";
import PublicationList from "../components/PublicationList";

const HomePage = () => {
  return (
    <>
      <div className="flex mt-18">
        <Biocard />
      </div>

      <div className="max-w-7xl mx-auto mt-12 mb-4 px-12">
        <h2 className="text-3xl font-bold text-left">Publications</h2>
      </div>

      <div className="max-w-7xl mx-auto flex">
        <PublicationList />
      </div>
    </>
  );
};

export default HomePage;
