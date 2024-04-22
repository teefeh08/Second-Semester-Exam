/* eslint-disable no-unused-vars */
import React from "react";
import GitHubRepo from "./components/GitHubRepo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepoDetails from "./components/RepoDetails";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<GitHubRepo />} />
          <Route path="/repo/:repoId" element={<RepoDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

