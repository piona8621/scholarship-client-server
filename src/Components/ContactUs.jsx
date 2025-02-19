import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ইনপুট পরিবর্তনের হ্যান্ডলার
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // সাবমিট হ্যান্ডলার (মেসেজ সাবমিট হলে Success দেখাবে)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    
    // মেসেজ সাবমিট হলে Success দেখাবে
    setSubmitted(true);

    // ৩ সেকেন্ড পর মেসেজ হাইড হয়ে যাবে
    setTimeout(() => setSubmitted(false), 3000);

    // ফর্ম রিসেট করা
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4">
      <div className=" p-8 w-full text-center">
        <h1 className="text-3xl text-green-500 font-bold">Get in Touch</h1>
        <p className="mt-2 text-green-500">Have a question? We'd love to hear from you!</p>
      </div>

      <div className="mt-8 max-w-4xl w-full  p-8 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          {/* যোগাযোগ তথ্য */}
          <div>
            <h2 className="text-2xl font-semibold text-green-600">Contact Information</h2>
            <p className="mt-2 text-blue-300">We are here to help you. Contact us via any of the methods below.</p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-600 text-xl" />
                <span className="text-blue-700">support@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-600 text-xl" />
                <span className="text-blue-700">+880 1234-567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-600 text-xl" />
                <span className="text-blue-700">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* যোগাযোগ ফর্ম */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600">Send Us a Message</h2>
            
            {submitted && (
              <div className="mt-2 bg-green-100 text-green-700 p-3 rounded-md">
                ✅ Your message has been sent successfully!
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-300 bg-opacity-50 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
