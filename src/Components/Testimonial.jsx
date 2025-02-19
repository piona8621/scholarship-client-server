import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    scholarship: "Global Excellence Scholarship",
    country: "UK",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review: "This scholarship changed my life! I was able to study abroad and gain global exposure. Thank you for this opportunity!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Smith",
    scholarship: "STEM Innovation Grant",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review: "The STEM scholarship helped me fund my research project. I highly recommend applying if you have innovative ideas!",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia Lee",
    scholarship: "Women in Tech Fellowship",
    country: "South Korea",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review: "Being a part of this program boosted my career in technology. The financial support and mentorship were incredible.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
          What Our Scholars Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 shadow-lg rounded-lg relative"
            >
              <FaQuoteLeft className="text-3xl text-blue-500 absolute top-4 left-4 opacity-30" />
              <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
              <div className="flex items-center space-x-4 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.scholarship}</p>
                  <p className="text-xs text-gray-400">({testimonial.country})</p>
                  <div className="flex text-yellow-500 mt-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
