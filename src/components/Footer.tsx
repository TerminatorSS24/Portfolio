import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0d081f] text-gray-400 py-8 px-4 text-center">
      {/* Name */}
      <h2 className="text-purple-500 text-2xl font-semibold">Subhraneel Saha</h2>

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-6 mt-4 text-xl">
        <a
          href="https://www.instagram.com/mr.saha_24/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/subhraneel.saharup"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://x.com/Subhraneel40939"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/subhraneel-saha-9499ab253/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-sm text-gray-500">
        © 2025 <span className="text-purple-500">Subhraneel Saha</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
