import React from "react";

const Navbar = () => {
  const menuItems = [
    "INDEX",
    "OBSERVATORY",
    "EXPEDITION",
    "TRACES",
    "CONTACT",
  ];

  return (
    /* FIXED WRAPPER */
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Outer dark frame */}
      <div
        className="bg-black px-2 py-2 shadow-xl"
        style={{
          clipPath:
            "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)",
        }}
      >
        {/* Inner orange bar */}
        <nav
          className="flex items-center bg-orange-500 overflow-hidden"
          style={{
            clipPath:
              "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)",
          }}
        >
          {menuItems.map((item, index) => (
            <div key={item} className="relative">
              <button
                className="
                  px-8 py-3
                  text-black font-semibold
                  tracking-wider
                  hover:bg-orange-400
                  transition-colors duration-200
                "
              >
                {item}
              </button>

              {/* Divider */}
              {index !== menuItems.length - 1 && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-px bg-black/50" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
