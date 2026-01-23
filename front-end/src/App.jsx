import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mid from "./components/Mid2";
import Mid1 from "./components/mid3";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-black text-white">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Mid />
                <Mid1 />
                <Footer />
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
