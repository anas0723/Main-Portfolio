import React from "react";
import Body from "./components/Body.jsx";
import Header from "./components/header.jsx";
import AllProjects from "./pages/AllProjects.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Body />
          </>
        }
      />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  );
}