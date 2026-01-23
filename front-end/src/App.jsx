// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Mid from "./components/Mid2";
// import Mid1 from "./components/mid3";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact";
// import Observe from "./components/Observe"; 

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-black text-white">
        
//         {/* Always visible */}
//         <Navbar />

//         {/* Page content */}
//         <main className="flex-grow">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Home />
//                   <Mid />
//                   <Mid1 />
//                 </>
//               }
//             />

//             {/* OBSERVATORY PAGE */}
//             <Route path="/observatory" element={<Observe />} />

//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>

//         {/* Always at the bottom */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;














import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mid from "./components/Mid2";
import Mid1 from "./components/mid3";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Observe from "./components/Observe";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        {/* Always visible */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Mid />
                  <Mid1 />
                </>
              }
            />

            {/* OBSERVATORY PAGE */}
            <Route path="/observatory" element={<Observe />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
