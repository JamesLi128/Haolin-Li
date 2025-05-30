import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
