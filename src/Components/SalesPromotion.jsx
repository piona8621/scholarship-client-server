import React from 'react';

const SalesPromotion = () => {
  const promotions = [
    {
      id: 1,
      title: "Application Fee Waiver for Erasmus Mundus",
      description: "Get your application fee waived for the Erasmus Mundus Scholarship. Apply by the end of the month!",
      endDate: "30th Feb 2025",
      link: "#",
    },
    {
      id: 2,
      title: "Commonwealth Scholarship - Early Bird Discount",
      description: "Apply early for the Commonwealth Scholarship and get a special early bird discount on application fees.",
      endDate: "1st Mar 2025",
      link: "#",
    },
    {
      id: 3,
      title: "Rhodes Scholarship - Limited Time Promotion",
      description: "Apply for the Rhodes Scholarship in the next two weeks and get exclusive access to special career mentoring.",
      endDate: "15th Jan 2025",
      link: "#",
    },
  ];

  return (
    <section className="promotion-section py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-green-600">Sales & Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {promotions.map((promotion) => (
            <div
              key={promotion.id}
              className="p-6 rounded-lg shadow-lg bg-blue-800 bg-opacity-20"
            >
              <h3 className="text-xl font-bold text-green-600 mb-4">{promotion.title}</h3>
              <p className="text-lg mb-4">{promotion.description}</p>
              <p className="mb-4 text-sm text-green-600">Ends on: {promotion.endDate}</p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesPromotion;
