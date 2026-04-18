/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Booking = lazy(() => import('./pages/Booking'));
const Membership = lazy(() => import('./pages/Membership'));
const Training = lazy(() => import('./pages/Training'));
const About = lazy(() => import('./pages/About'));
const Shop = lazy(() => import('./pages/Shop'));

// Loading component
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-aero-black">
    <div className="w-12 h-12 border-4 border-aero-green/20 border-t-aero-green rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/training" element={<Training />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

