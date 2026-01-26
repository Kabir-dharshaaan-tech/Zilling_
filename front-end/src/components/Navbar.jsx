


import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { label: "INDEX", path: "/" },
    { label: "OBSERVATORY", path: "/observatory" },
    { label: "CONTACT", path: "/contact" },
  ];

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" if needed
    });
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* SKY-BLUE BORDER */}
      <div
        className="px-[3px] py-[3px] shadow-xl"
        style={{
          background:
            "linear-gradient(135deg, rgb(0,200,255), rgb(120,220,255))",
          clipPath:
            "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)",
        }}
      >
        {/* WHITE INNER */}
        <nav
          className="flex items-center bg-white overflow-hidden"
          style={{
            clipPath:
              "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)",
          }}
        >
          {menuItems.map((item, index) => (
            <div key={item.label} className="relative">
              <Link
                to={item.path}
                onClick={handleNavClick}
                className="
                  block px-8 py-3
                  text-black font-semibold
                  tracking-wider
                  hover:bg-sky-100
                  transition-colors duration-200
                "
              >
                {item.label}
              </Link>

              {index !== menuItems.length - 1 && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-px bg-black/30" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
