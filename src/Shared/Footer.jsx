import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-800 bg-opacity-15 mt-10 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Scholarship Management System helps students find the best scholarships and apply with ease. Empowering students to achieve their educational goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/all-scholarships" className="hover:underline">All Scholarships</a></li>
              <li><a href="/user-dashboard" className="hover:underline">User Dashboard</a></li>
              <li><a href="/admin-dashboard" className="hover:underline">Admin Dashboard</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              <strong>Email:</strong> support@scholarshipms.com <br />
              <strong>Phone:</strong> +880 123 456 789 <br />
              <strong>Address:</strong> Dhaka, Bangladesh
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-10">
              <a href="#" target="_blank" className="hover:text-blue-500 text-3xl">
              <FaFacebook></FaFacebook>
              </a>
              <a href="#" target="_blank" className="hover:text-sky-400 text-3xl">
              <FaTwitter></FaTwitter>
              </a>
              <a href="#" target="_blank" className="hover:text-pink-500 text-4xl">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
              <a href="#" target="_blank" className="hover:text-red-600 text-4xl">
              <FaYoutube></FaYoutube>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
          © 2025 Scholarship Management System. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
