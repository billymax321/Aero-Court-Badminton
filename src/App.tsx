/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Academy from "./pages/Academy";
import Locations from "./pages/Locations";
import Membership from "./pages/Membership";
import Social from "./pages/Social";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

