// import React from "react";

// export default function Home() {
//   return (
//     <div className="w-full">
//       {/* ================= NAVBAR ================= */}
//       <header className="w-full bg-white">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
//           <h1 className="text-2xl font-extrabold tracking-wide">ZILLING</h1>

//           <nav className="flex gap-10 text-sm font-semibold">
//             <a href="#">FEATURES</a>
//             <a href="#">DOWNLOAD</a>
//             <a href="#">COMMUNITY</a>
//           </nav>
//         </div>
//         <div className="border-b-2 border-black" />
//       </header>

//       {/* ================= HERO SECTION ================= */}
//       <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-[64px] leading-tight font-extrabold uppercase">
//             THE FUTURE
//             <br /> OF OPEN
//             <br /> BILLING
//           </h1>

//           <p className="mt-8 text-lg text-gray-600 max-w-md">
//             Open-source billing infrastructure for the modern web. Built by
//             developers, for developers.
//           </p>

//           {/* BUTTONS */}
//           <div className="mt-10 flex gap-6">
//             <button className="bg-black text-white px-8 py-4 font-semibold flex items-center gap-3 hover:opacity-90">
//               ⬇ Download Now
//             </button>

//             <button className="border-2 border-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition">
//               View Docs
//             </button>
//           </div>

//           {/* META INFO */}
//           <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
//             <div className="flex items-center gap-2">
//               <span className="w-3 h-3 rounded-full bg-gray-400" />
//               <span className="font-semibold text-black">v1.0.4 STABLE</span>
//             </div>
//             <span>50k+ Downloads</span>
//           </div>
//         </div>

//         {/* RIGHT INSTALLATION BOX */}
//         <div className="border-2 border-black p-8 bg-gradient-to-r from-white to-gray-100">
//           <p className="text-gray-600 font-semibold mb-4">INSTALLATION</p>

//           <div className="bg-black text-white p-6 font-mono text-sm space-y-2">
//             <p>$ npm install @zilling/core</p>
//             <p>$ zilling init</p>
//             <p className="text-gray-400">✓ Ready to bill in 30 seconds</p>
//           </div>

//         </div>
//       </section>

//       {/* ================= FEATURES CARDS ================= */}
// <section className="max-w-7xl mx-auto px-8 pb-24">
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//     {/* CARD 1 */}
//     <div className="border-2 border-black p-10">
//       {/* Icon */}
//       <div className="w-14 h-14 border-2 border-black flex items-center justify-center mb-10">
//         <span className="text-2xl">⚡</span>
//       </div>

//       <h3 className="text-4xl font-extrabold mb-6 uppercase">
//         Automated Invoicing
//       </h3>

//       <p className="text-gray-600 text-lg mb-8 max-w-xl">
//         Generate, send, and track invoices automatically. Support for recurring
//         billing, one-time charges, and usage-based pricing.
//       </p>

//       <ul className="space-y-4 font-semibold">
//         <li className="flex items-center gap-3">
//           <span className="w-2 h-2 bg-black" /> Customizable templates
//         </li>
//         <li className="flex items-center gap-3">
//           <span className="w-2 h-2 bg-black" /> Auto-send on trigger
//         </li>
//         <li className="flex items-center gap-3">
//           <span className="w-2 h-2 bg-black" /> Payment reminders
//         </li>
//         <li className="flex items-center gap-3">
//           <span className="w-2 h-2 bg-black" /> PDF generation
//         </li>
//       </ul>
//     </div>

//     {/* CARD 2 */}
//     <div className="border-2 border-black p-10">
//       {/* Icon */}
//       <div className="w-14 h-14 border-2 border-black flex items-center justify-center mb-10">
//         <span className="text-2xl">🌍</span>
//       </div>

//       <h3 className="text-4xl font-extrabold mb-6 uppercase">
//         Multi-Currency
//       </h3>

//       <p className="text-gray-600 text-lg mb-8 max-w-xl">
//         Bill customers in their local currency. Support for 135+ currencies with
//         real-time exchange rates and automatic conversion.
//       </p>

//       <ul className="space-y-4 font-semibold">
//         <li className="flex items-center gap-3">
//           <span className="w-2 h-2 bg-black" /> 135+ currencies
//         </li>
//         <li className="flex items-center gap-3">
//           <span className="w-2 h-2 bg-black" /> Real-time rates
//         </li>
//         <li className="flex items-center gap-3">
//           <span className="w-2 h-2 bg-black" /> Auto-conversion
//         </li>
//         <li className="flex items-center gap-3">
//           <span className="w-2 h-2 bg-black" /> Tax compliance
//         </li>
//       </ul>
//     </div>

//   </div>
// </section>
 
//  {/* ================= ANALYTICS / DOWNLOAD / BUILT BY ================= */}
// <section className="max-w-7xl mx-auto px-8 pb-32">
//   <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

//     {/* LEFT – REAL-TIME ANALYTICS */}
//     <div className="bg-black text-white p-12 flex flex-col justify-between">
//       <div>
//         <div className="w-14 h-14 border-2 border-white flex items-center justify-center mb-10">
//           <span className="text-2xl">📊</span>
//         </div>

//         <h3 className="text-4xl font-extrabold mb-6 uppercase">
//           Real-Time Analytics
//         </h3>

//         <p className="text-gray-300 text-lg max-w-md">
//           Monitor revenue, track payments, and analyze customer behavior with
//           powerful dashboards.
//         </p>
//       </div>
//     </div>

//     {/* MIDDLE – DOWNLOAD */}
//     <div className="border-2 border-black">
//       <div className="bg-gray-100 px-8 py-6 font-extrabold uppercase">
//         Download v1.0.4
//       </div>

//       <div className="divide-y-2 divide-black/20">
//         <div className="flex items-center gap-4 px-8 py-4">
//           <span>🖥️</span>
//           <span>Windows / Linux</span>
//         </div>
//         <div className="flex items-center gap-4 px-8 py-4">
//           <span>🍎</span>
//           <span>macOS</span>
//         </div>
//         <div className="flex items-center gap-4 px-8 py-4">
//           <span>⌨️</span>
//           <span>CLI / Docker</span>
//         </div>
//       </div>

//       <div className="p-8">
//         <button className="w-full bg-black text-white py-4 font-bold hover:opacity-90">
//           DIRECT DOWNLOAD
//         </button>
//       </div>
//     </div>

//     {/* RIGHT – BUILT BY */}
//     <div className="border-2 border-black p-10 flex flex-col justify-between">
//       <div>
//         <p className="text-gray-500 font-semibold mb-4 uppercase">Built By</p>

//         <h3 className="text-4xl font-extrabold mb-6">ZIPPY</h3>

//         <p className="text-gray-600 text-lg mb-8">
//           Open-source infrastructure for modern SaaS companies. Trusted by
//           10,000+ developers worldwide.
//         </p>
//       </div>

//       <div className="flex gap-4">
//         <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
//           🐙
//         </div>
//         <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
//           🐦
//         </div>
//       </div>
//     </div>

//   </div>
// </section>

// {/* ================= FOOTER ================= */}
// <footer className="bg-black text-white">
//   <div className="max-w-7xl mx-auto px-8 py-20">
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

//       {/* BRAND */}
//       <div>
//         <h2 className="text-2xl font-extrabold mb-4">ZILLING</h2>
//         <p className="text-gray-400 max-w-xs">
//           Open-source billing for everyone.
//         </p>
//       </div>

//       {/* PRODUCT */}
//       <div>
//         <h3 className="font-bold mb-6">PRODUCT</h3>
//         <ul className="space-y-3 text-gray-400">
//           <li>Features</li>
//           <li>Documentation</li>
//           <li>API Reference</li>
//           <li>Changelog</li>
//         </ul>
//       </div>

//       {/* COMMUNITY */}
//       <div>
//         <h3 className="font-bold mb-6">COMMUNITY</h3>
//         <ul className="space-y-3 text-gray-400">
//           <li>GitHub</li>
//           <li>Discord</li>
//           <li>Twitter</li>
//           <li>Contributors</li>
//         </ul>
//       </div>

//       {/* COMPANY */}
//       <div>
//         <h3 className="font-bold mb-6">COMPANY</h3>
//         <ul className="space-y-3 text-gray-400">
//           <li>About Zippy</li>
//           <li>Blog</li>
//           <li>Careers</li>
//           <li>Contact</li>
//         </ul>
//       </div>

//     </div>

//     {/* DIVIDER */}
//     <div className="border-t border-gray-700 my-12" />

//     {/* BOTTOM BAR */}
//     <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-6">
//       <p>
//         © 2026 Zippy. MIT License. Built with ⚡ by the community.
//       </p>

//       <div className="flex gap-6">
//         <span>Privacy</span>
//         <span>Terms</span>
//         <span>License</span>
//       </div>
//     </div>
//   </div>
// </footer>



//     </div>
//   );
// }
























import React, { useState } from "react";

export default function Home() {
  const [blueTheme, setBlueTheme] = useState(false);

  const heading = blueTheme ? "text-blue-500" : "text-black";
  const body = blueTheme ? "text-black" : "text-gray-600";
  const pageBg = blueTheme ? "bg-[#eaf6ff]" : "bg-white";

  return (
    <div className={`w-full transition-colors duration-300 ${pageBg}`}>
      {/* ================= NAVBAR ================= */}
      <header className="w-full bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
          <h1 className={`text-2xl font-extrabold tracking-wide ${heading}`}>
            ZILLING
          </h1>

          <nav className={`flex gap-10 text-sm font-semibold ${body}`}>
            <a href="#">FEATURES</a>
            <a href="#">DOWNLOAD</a>
            <a href="#">COMMUNITY</a>
          </nav>
        </div>
        <div className="border-b-2 border-black" />
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className={`text-[64px] leading-tight font-extrabold uppercase ${heading}`}>
            THE FUTURE
            <br /> OF OPEN
            <br /> BILLING
          </h1>

          <p className={`mt-8 text-lg max-w-md ${body}`}>
            Open-source billing infrastructure for the modern web. Built by
            developers, for developers.
          </p>

          <div className="mt-10 flex gap-6">
            <button className="bg-black text-white px-8 py-4 font-semibold flex items-center gap-3">
              ⬇ Download Now
            </button>

            <button className="border-2 border-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition">
              View Docs
            </button>
          </div>

          <div className={`mt-8 flex items-center gap-6 text-sm ${body}`}>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-400" />
              <span className="font-semibold text-black">v1.0.4 STABLE</span>
            </div>
            <span>50k+ Downloads</span>
          </div>
        </div>

        <div className="border-2 border-black p-8 bg-gradient-to-r from-white to-gray-100">
          <p className={`font-semibold mb-4 ${body}`}>INSTALLATION</p>

          <div className="bg-black text-white p-6 font-mono text-sm space-y-2">
            <p>$ npm install @zilling/core</p>
            <p>$ zilling init</p>
            <p className="text-gray-400">✓ Ready to bill in 30 seconds</p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES CARDS ================= */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* AUTOMATED INVOICING – THEME TRIGGER */}
          <div
            className="border-2 border-black p-10 transition-all duration-300"
            onMouseEnter={() => setBlueTheme(true)}
            onMouseLeave={() => setBlueTheme(false)}
          >
            <div className="w-14 h-14 border-2 border-black flex items-center justify-center mb-10">
              ⚡
            </div>

            <h3 className={`text-4xl font-extrabold mb-6 uppercase ${heading}`}>
              Automated Invoicing
            </h3>

            <p className={`text-lg mb-8 max-w-xl ${body}`}>
              Generate, send, and track invoices automatically. Support for
              recurring billing, one-time charges, and usage-based pricing.
            </p>

            <ul className={`space-y-4 font-semibold ${body}`}>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-black" /> Customizable templates
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-black" /> Auto-send on trigger
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-black" /> Payment reminders
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-black" /> PDF generation
              </li>
            </ul>
          </div>

          {/* MULTI CURRENCY */}
          <div className="border-2 border-black p-10">
            <div className="w-14 h-14 border-2 border-black flex items-center justify-center mb-10">
              🌍
            </div>

            <h3 className={`text-4xl font-extrabold mb-6 uppercase ${heading}`}>
              Multi-Currency
            </h3>

            <p className={`text-lg mb-8 max-w-xl ${body}`}>
              Bill customers in their local currency. Support for 135+ currencies
              with real-time exchange rates.
            </p>
          </div>
        </div>
      </section>


      
  {/* ================= ANALYTICS / DOWNLOAD / BUILT BY ================= */}
 <section className="max-w-7xl mx-auto px-8 pb-32">
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

    {/* LEFT – REAL-TIME ANALYTICS */}
     <div className="bg-black text-white p-12 flex flex-col justify-between">
       <div>
         <div className="w-14 h-14 border-2 border-white flex items-center justify-center mb-10">
           <span className="text-2xl">📊</span>
        </div>

         <h3 className="text-4xl font-extrabold mb-6 uppercase">
           Real-Time Analytics
         </h3>

         <p className="text-gray-300 text-lg max-w-md">
          Monitor revenue, track payments, and analyze customer behavior with
          powerful dashboards.
         </p>
       </div>
     </div>

      {/* MIDDLE – DOWNLOAD */}
      <div className="border-2 border-black">
        <div className="bg-gray-100 px-8 py-6 font-extrabold uppercase">
          Download v1.0.4
        </div>

       <div className="divide-y-2 divide-black/20">
          <div className="flex items-center gap-4 px-8 py-4">
            <span>🖥️</span>
            <span>Windows / Linux</span>
          </div>
          <div className="flex items-center gap-4 px-8 py-4">
            <span>🍎</span>
            <span>macOS</span>
          </div>
          <div className="flex items-center gap-4 px-8 py-4">
            <span>⌨️</span>
           <span>CLI / Docker</span>
          </div>
        </div>

       <div className="p-8">
          <button className="w-full bg-black text-white py-4 font-bold hover:opacity-90">
           DIRECT DOWNLOAD
          </button>
       </div>
     </div>

      {/* RIGHT – BUILT BY */}
     <div className="border-2 border-black p-10 flex flex-col justify-between">
       <div>
         <p className="text-gray-500 font-semibold mb-4 uppercase">Built By</p>

          <h3 className="text-4xl font-extrabold mb-6">ZIPPY</h3>

          <p className="text-gray-600 text-lg mb-8">
            Open-source infrastructure for modern SaaS companies. Trusted by
            10,000+ developers worldwide.
         </p>
        </div>

       <div className="flex gap-4">
          <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
            🐙 
         </div>
          <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
            🐦
          </div>
       </div>
       </div>

     </div>
   </section>


      {/* ================= FOOTER ================= */}
      <footer
        className={`transition-colors duration-300 ${
          blueTheme ? "bg-[#eaf6ff] text-black" : "bg-black text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h2 className={`text-2xl font-extrabold mb-4 ${heading}`}>
                ZILLING
              </h2>
              <p className={body}>Open-source billing for everyone.</p>
            </div>

            <div>
              <h3 className="font-bold mb-6">PRODUCT</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Features</li>
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Changelog</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6">COMMUNITY</h3>
              <ul className="space-y-3 text-gray-400">
                <li>GitHub</li>
                <li>Discord</li>
                <li>Twitter</li>
                <li>Contributors</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6">COMPANY</h3>
              <ul className="space-y-3 text-gray-400">
                <li>About Zippy</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 my-12" />

          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-6">
            <p>© 2026 Zippy. MIT License.</p>
            <div className="flex gap-6">
              <span>Privacy</span>
              <span>Terms</span>
              <span>License</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
