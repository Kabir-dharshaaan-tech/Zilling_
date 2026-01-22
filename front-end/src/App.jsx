import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mid  from "./components/Mid2";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Navbar */}
      <Navbar />
      <Home />
      <Mid />

      
    </div>
  );
};

export default App;
