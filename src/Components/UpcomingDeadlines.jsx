


// import React from "react";

// const UpcomingDeadlines = () => {
//   const scholarships = [
//     { id: 1, name: "Erasmus Mundus", deadline: "15th Feb 2025" },
//     { id: 2, name: "Commonwealth Scholarship", deadline:"1st Mar 2025" },
//     { id: 3, name: "Rhodes Scholarship", deadline: "10th Jan 2025" },
//   ];

//   return (
//     <div className="deadlines-section py-16">
//       <h2 className="text-3xl font-bold text-green-500 text-center mb-6">
//         Upcoming Deadlines
//       </h2>
//       <ul className="space-y-4 px-4 sm:px-8 md:px-12 lg:px-16">
//         {scholarships.map((scholarship) => (
//           <li
//             key={scholarship.id}
//             className="border p-4 rounded shadow flex flex-col sm:flex-row justify-between items-start sm:items-center"
//           >
//             <span className="font-semibold text-xl text-white mb-2 sm:mb-0">
//               {scholarship.name}
//             </span>
//             <span className="text-lg font-semibold text-blue-300 mb-2 sm:mb-0">
//               Deadline: {scholarship.deadline}
//             </span>
//             <button className="btn btn-outline btn-success mt-2 sm:mt-0">
//               Apply Now
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UpcomingDeadlines;


































import React, { useState } from "react";

// Modal Component
const Modal = ({ isOpen, onClose, scholarship }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blue-800 bg-opacity-40 p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-bold text-green-600 mb-4">Apply for {scholarship.name}</h3>
        <p className="text-md text-white mb-4">Deadline: {scholarship.deadline}</p>
        <p className="mb-6 text-white">You can apply for this scholarship by following the instructions provided by the scholarship provider.</p>
        <button
          onClick={onClose}
          className=" text-white py-2 px-4 rounded btn btn-success btn-outline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const UpcomingDeadlines = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  const scholarships = [
    { id: 1, name: "Erasmus Mundus", deadline: "15th Feb 2025" },
    { id: 2, name: "Commonwealth Scholarship", deadline:"1st Mar 2025" },
    { id: 3, name: "Rhodes Scholarship", deadline: "10th Jan 2025" },
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
    <div className="deadlines-section py-16">
      <h2 className="text-3xl font-bold text-green-500 text-center mb-6">
        Upcoming Deadlines
      </h2>
      <ul className="space-y-4 px-4 sm:px-8 md:px-12 lg:px-16">
        {scholarships.map((scholarship) => (
          <li
            key={scholarship.id}
            className="border p-4 rounded shadow flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <span className="font-semibold text-xl text-white mb-2 sm:mb-0">
              {scholarship.name}
            </span>
            <span className="text-lg font-semibold text-blue-300 mb-2 sm:mb-0">
              Deadline: {scholarship.deadline}
            </span>
            <button
              onClick={() => openModal(scholarship)}
              className="btn btn-outline btn-success mt-2 sm:mt-0"
            >
              Details
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        scholarship={selectedScholarship}
      />
    </div>
  );
};

export default UpcomingDeadlines;






















