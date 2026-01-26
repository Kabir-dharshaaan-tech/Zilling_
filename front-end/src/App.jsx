

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Mid2 from "./components/Mid2";
import Mid3 from "./components/Mid3";
import Contact from "./components/Contact";
import Observe from "./components/Observe";

import GlobalBackground from "./components/Global";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* ALWAYS VISIBLE */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-grow">
          <Routes>
            {/* HOME STACK — CONTINUOUS BACKGROUND */}
            <Route
              path="/"
              element={
                <GlobalBackground>
                  <Home />
                  <Mid2 />
                  <Mid3 />
                </GlobalBackground>
              }
            />

            {/* OTHER ROUTES — NOW WITH GLOBAL BACKGROUND */}
            <Route
              path="/observatory"
              element={
                <GlobalBackground>
                  <Observe />
                </GlobalBackground>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* ALWAYS VISIBLE */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
