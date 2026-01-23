import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mid  from "./components/Mid2";
import Mid1 from "./components/mid3";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Navbar */}
      <Navbar />
      <Home />
      <Mid />
      <Mid1 />
      <Footer />

      
    </div>
  );
};

export default App;
