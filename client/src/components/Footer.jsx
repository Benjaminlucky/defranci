import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#0d2d18] text-gray-300 py-3 px-6 flex flex-col md:flex-row items-center justify-between text-sm">
      <div className="container flex flex-col md:flex-row mx-auto justify-between items-center">
        <p className="flex items-center gap-2 text-center md:text-left">
          <span>© 2025 Defranci Limited | All Rights Reserved</span>
        </p>
        <p className="text-center md:text-right mt-2 md:mt-0">
          Developed by{" "}
          <span className="text-white font-medium">
            InspireMe Media Networks
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
