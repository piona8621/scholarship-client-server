import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative text-green-600 text-center py-20 px-4">
        <h1 className="text-5xl font-bold">Who We Are</h1>
        <p className="mt-3 text-lg">Empowering Dreams, Transforming Lives</p>
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto my-10 px-6">
        <h2 className="text-3xl font-bold text-green-600 text-center">Our Story</h2>
        <p className="mt-4 text-blue-700 text-center">
          Founded with a vision to provide equal educational opportunities, we have been helping students worldwide secure scholarships and achieve their dreams.
        </p>
      </div>

      {/* Core Values */}
      <div className=" py-10">
        <h2 className="text-3xl font-bold text-blue-600 text-center">Our Core Values</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-700">Excellence</h3>
            <p className="text-gray-600 mt-2">We strive for excellence in everything we do.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-700">Integrity</h3>
            <p className="text-gray-600 mt-2">Honesty and transparency are at our core.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-700">Innovation</h3>
            <p className="text-gray-600 mt-2">We embrace change and drive progress.</p>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-6xl mx-auto my-10 px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center">Success Stories</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600">"Thanks to this platform, I received a full scholarship to study abroad!"</p>
            <h3 className="text-blue-700 font-semibold mt-2">- Sarah Khan</h3>
</div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600">"I never thought I could afford higher education, but now I’m at my dream university!"</p>
            <h3 className="text-blue-700 font-semibold mt-2">- Ahmed Rahman</h3>
          </div>
        </div>
      </div>

      {/* Call to Action */}
<div className=" text-white py-10 px-4 flex justify-center">
  <div className="max-w-lg text-center">
    <h2 className="text-3xl font-bold">Join Us in Making a Difference</h2>
    <p className="mt-3">Be a part of our mission to empower students worldwide.</p>
    <NavLink to={'/contact'} className="mt-4 inline-block px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-300">
      Contact Us
    </NavLink>
  </div>
</div>

    </div>
  );
};

export default AboutUs;
