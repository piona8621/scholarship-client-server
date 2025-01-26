// import React from "react";

// const UpcomingDeadlines = () => {
//   const scholarships = [
//     { id: 1, name: "Erasmus Mundus", deadline: "15th Feb 2025" },
//     { id: 2, name: "Commonwealth Scholarship", deadline:"1st Mar 2025" },
//     { id: 3, name: "Rhodes Scholarship", deadline: "10th Jan 2025" },
//   ];

//   return (
//     <div className="deadlines-section  py-16">
//       <h2 className="text-3xl font-bold text-green-500 text-center mb-6">Upcoming Deadlines</h2>
//       <ul className="space-y-4 px-4">
//         {scholarships.map((scholarship) => (
//           <li
//             key={scholarship.id}
//             className="border p-4 rounded shadow flex justify-between"
//           >
//             <span className="font-semibold text-xl text-white">{scholarship.name}</span>
//             <span className="text-lg font-semibold  text-blue-300 ">Deadline: {scholarship.deadline}</span>
//             <button className="btn btn-outline btn-success">Apply Now</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UpcomingDeadlines;





































import React from "react";

const UpcomingDeadlines = () => {
  const scholarships = [
    { id: 1, name: "Erasmus Mundus", deadline: "15th Feb 2025" },
    { id: 2, name: "Commonwealth Scholarship", deadline:"1st Mar 2025" },
    { id: 3, name: "Rhodes Scholarship", deadline: "10th Jan 2025" },
  ];

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
            <button className="btn btn-outline btn-success mt-2 sm:mt-0">
              Apply Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingDeadlines;













