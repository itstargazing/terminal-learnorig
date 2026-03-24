/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";

// Pages
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Tutorials from "./pages/Tutorials";
import TutorialDetail from "./pages/TutorialDetail";
import Library from "./pages/Library";
import Documentation from "./pages/Documentation";
import Changelog from "./pages/Changelog";
import Forum from "./pages/Forum";
import Explainer from "./pages/Explainer";
import Visualizer from "./pages/Visualizer";
import OCR from "./pages/OCR";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:id" element={<TutorialDetail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/explainer" element={<Explainer />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/ocr" element={<OCR />} />
        </Routes>
      </Layout>
    </Router>
  );
}
