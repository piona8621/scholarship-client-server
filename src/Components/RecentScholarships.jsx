// import React from 'react';

// const RecentScholarships = () => {
//   return (
//     <section id="recent" className="bg-white py-16">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-semibold mb-6">Recent Scholarships</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Scholarship 1 */}
//           <div className="border p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Global Tech Grant</h3>
//             <p className="mb-4">A new scholarship for students pursuing a career in technology. Open for applications!</p>
//             <a href="#" className="text-blue-600 hover:underline">Apply Now</a>
//           </div>
//           {/* Scholarship 2 */}
//           <div className="border p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Entrepreneur Scholarship</h3>
//             <p className="mb-4">For students who are passionate about starting their own business. Apply today!</p>
//             <a href="#" className="text-blue-600 hover:underline">Apply Now</a>
//           </div>
//           {/* Scholarship 3 */}
//           <div className="border p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Healthcare Scholarship</h3>
//             <p className="mb-4">For aspiring healthcare professionals to pursue further education. Don't miss out!</p>
//             <a href="#" className="text-blue-600 hover:underline">Apply Now</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RecentScholarships;























import React, { useState } from 'react';
import ScholarshipModal from './ScholarshipModal';
// import ScholarshipModal from './ScholarshipModal';

const RecentScholarships = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  // Scholarship data
  const scholarships = [
    {
      title: 'Global Tech Grant',
      description: 'A new scholarship for students pursuing a career in technology. Open for applications!',
      details: 'The Global Tech Grant aims to support students interested in technology and innovation. This scholarship covers tuition fees for 2 years.'
    },
    {
      title: 'Entrepreneur Scholarship',
      description: 'For students who are passionate about starting their own business. Apply today!',
      details: 'The Entrepreneur Scholarship supports young entrepreneurs who are looking to start their own business or project. It provides financial aid and mentorship opportunities.'
    },
    {
      title: 'Healthcare Scholarship',
      description: 'For aspiring healthcare professionals to pursue further education. Don\'t miss out!',
      details: 'The Healthcare Scholarship is designed for students pursuing a career in healthcare. It covers tuition and offers a stipend for living expenses.'
    }
  ];

  const openModal = (scholarship) => {
    setSelectedScholarship(scholarship);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedScholarship(null);
  };

  return (
    <section id="recent" className=" py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-green-600  font-semibold mb-6">Recent Scholarships</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 text-white  gap-8">
          {scholarships.map((scholarship, index) => (
            <div key={index} className=" bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">{scholarship.title}</h3>
              <p className="mb-4">{scholarship.description}</p>
              <button 
                onClick={() => openModal(scholarship)}
                className="text-white btn btn-success btn-outline"
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedScholarship && (
        <ScholarshipModal
          isOpen={isModalOpen}
          onClose={closeModal}
          scholarship={selectedScholarship}
        />
      )}
    </section>
  );
}

export default RecentScholarships;










