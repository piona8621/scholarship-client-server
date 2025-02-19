import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Function to handle email validation and subscription
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Success message after email submission
    setMessage("Thank you for subscribing! You'll receive updates on scholarships and deadlines.");
    setEmail(""); // Clear input after successful subscription
  };

  return (
    <div className="newsletter-signup py-16 -mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-500 mb-6">Stay Updated!</h2>
        <p className="text-lg text-white mb-6">Subscribe to our newsletter to get the latest updates on scholarships and deadlines.</p>
        
        <form onSubmit={handleSubmit} className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-1/3 p-4 rounded-l-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-outline btn-success ml-10 px-6 rounded-r-md">
            Subscribe
          </button>
        </form>
        
        {/* Displaying the message */}
        {message && (
          <p className="mt-4 text-lg font-semibold text-green-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
