// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// // import { useHistory } from "react-router-dom"; // For navigating to the All Scholarships page

// const TopScholarShip = () => {
//   const [scholarships, setScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [topScholarships, setTopScholarships] = useState([]);
//   // const history = useHistory();

//   // Fetch scholarships data
//   useEffect(() => {
//     fetch("http://:5000/scholar") // Replace with your actual API endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         setScholarships(data);
//         // Sort scholarships by application fee (low to high) and post date (most recent first)
//         const sortedScholarships = data
//           .sort((a, b) => a.applicationFees - b.applicationFees) // Sort by application fees in ascending order
//           .sort((a, b) => new Date(b.postDate) - new Date(a.postDate)); // Sort by post date in descending order
//         setTopScholarships(sortedScholarships.slice(0, 6)); // Get the first 6 sorted scholarships
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching scholarships:", error);
//         setLoading(false);
//       });
//   }, []);

//   // Navigate to the All Scholarships page
//   const goToAllScholarships = () => {
//     history.push("/all-scholarships");
//   };

//   return (
//     <div>
//       {/* Loading State */}
//       {loading ? (
//         <div>Loading scholarships...</div>
//       ) : (
//         <>
//           {/* Top Scholarships Section */}
//           <div>
//             <h2 className="text-2xl font-bold mt-10 mb-6">Top Scholarships</h2>
//             <div className="scholarships-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {topScholarships.map((scholarship, index) => (
//                 <div key={index} className="card w-full bg-base-100 shadow-xl">
//                   <figure>
//                     <img src={scholarship.university_logo} alt={scholarship.universityName} />
//                   </figure>
//                   <div className="card-body">
//                     <h2 className="card-title">{scholarship.university_name}</h2>
//                     <p><strong>Category:</strong> {scholarship.scholarship_category}</p>
//                     {/* <p><strong>Location:</strong> {scholarship.university_Location}</p> */}
//                     <p><strong>Deadline:</strong> {scholarship.application_deadline}</p>
//                     <p><strong>Subject:</strong> {scholarship.subject_category}</p>
//                     <p><strong>Application Fees:</strong> {scholarship.application_fees}</p>
//                     <p><strong>Rating:</strong> {scholarship.rating}</p>
//                     <div className="card-actions justify-end">
//                      <Link to={'/scholarship-details'}>
//                      <button className="btn btn-outline">Scholarship Details</button>
//                      </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* All Scholarships Button */}
//             <div className="text-center mt-6">
//               <Link to={'/all-scholarship'}>
//               <button
//                 onClick={goToAllScholarships}
//                 className="btn btn-primary">
//                 All Scholarships
//               </button>
//               </Link>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TopScholarShip;

























// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const TopScholarShip = () => {
//   const [scholarships, setScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [topScholarships, setTopScholarships] = useState([]);

//   // Fetch scholarships data
//   useEffect(() => {
//     fetch("http://:5000/scholar") // Replace with your actual API endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         setScholarships(data);

//         // Sort scholarships by application fees (low to high) and post date (most recent first)
//         const sortedScholarships = data
//           .sort((a, b) => a.applicationFees - b.applicationFees) // Sort by application fees in ascending order
//           .sort((a, b) => new Date(b.postDate) - new Date(a.postDate)); // Sort by post date in descending order

//         // Set top scholarships to the first 6 sorted scholarships
//         setTopScholarships(sortedScholarships.slice(0, 6));
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching scholarships:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       {/* Loading State */}
//       {loading ? (
//         <div>Loading scholarships...</div>
//       ) : (
//         <>
//           {/* Top Scholarships Section */}
//           <div>
//             <h2 className="text-2xl font-bold mt-10 mb-6">Top Scholarships</h2>
//             <div className="scholarships-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {topScholarships.map((scholarship, index) => (
//                 <div key={index} className="card w-full bg-base-100 shadow-xl">
//                   <figure>
//                     <img
//                       src={scholarship.university_logo || "placeholder-image.jpg"}
//                       alt={scholarship.universityName}
//                     />
//                   </figure>
//                   <div className="card-body">
//                     <h2 className="card-title">{scholarship.university_name}</h2>
//                     <p><strong>Category:</strong> {scholarship.scholarship_category}</p>
//                     <p><strong>Deadline:</strong> {scholarship.application_deadline}</p>
//                     <p><strong>Subject:</strong> {scholarship.subject_category}</p>
//                     <p><strong>Application Fees:</strong> {scholarship.application_fees}</p>
//                     <p><strong>Rating:</strong> {scholarship.rating}</p>
//                     <div className="card-actions justify-end">
//                       {/* <Link to={`/scholarship-details/${scholarship.id}`}>
//                         <button className="btn btn-outline">Scholarship Details</button>
//                       </Link> */}

// <Link to={`/scholarship-details/${scholarship._id}`}>
//                           <button className="btn btn-outline">Scholarship Details</button>
//                         </Link>

//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* All Scholarships Button */}
//             <div className="text-center mt-6">
//               <Link to="/all-scholarship">
//                 <button className="btn btn-primary">
//                   All Scholarships
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TopScholarShip;







































// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const TopScholarShip = () => {
//   const [scholarships, setScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [topScholarships, setTopScholarships] = useState([]);

//   // Fetch scholarships data
//   useEffect(() => {
//     fetch("http://:5000/scholar") // Replace with your actual API endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         // Sort scholarships by application fees (low to high) and post date (most recent first)
//         const sortedScholarships = data.sort((a, b) => {
//           if (a.applicationFees === b.applicationFees) {
//             return new Date(b.postDate) - new Date(a.postDate);
//           }
//           return a.applicationFees - b.applicationFees;
//         });

//         // Set top scholarships to the first 6 sorted scholarships
//         setTopScholarships(sortedScholarships.slice(0, 6));
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching scholarships:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {loading ? (
//         // Loading Placeholder
//         <div className="flex justify-center items-center h-60">
//           <p className="text-lg font-semibold">Loading scholarships, please wait...</p>
//         </div>
//       ) : (
//         <>
//           {/* Top Scholarships Section */}
//           <h2 className="text-2xl font-bold mt-10 mb-6 text-center">Top Scholarships</h2>
//           <div className="scholarships-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {topScholarships.map((scholarship, index) => (
//               <div key={index} className="card w-full bg-base-100 shadow-xl border">
//                 <figure className="p-4">
//                   <img
//                     src={scholarship.university_logo || "placeholder-image.jpg"}
//                     alt={scholarship.university_name}
//                     className="h-full w-full object-contain mx-auto"
//                   />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="card-title text-lg font-bold">{scholarship.university_name}</h2>
//                   <p className="text-sm"><strong>Category:</strong> {scholarship.scholarship_category}</p>
//                   <p className="text-sm"><strong>Deadline:</strong> {scholarship.application_deadline}</p>
//                   <p className="text-sm"><strong>Subject:</strong> {scholarship.subject_category}</p>
//                   <p className="text-sm"><strong>Application Fees:</strong> ${scholarship.application_fees}</p>
//                   {/* <p className="text-sm flex items-center">
//                     <strong>Rating:</strong>&nbsp;
//                     <span className="flex items-center">
//                       {[...Array(scholarship.rating)].map((_, i) => (
//                         <span key={i} className="text-yellow-500">&#9733;</span>
//                       ))}
//                     </span>
//                   </p> */}






//                   <div className="card-actions justify-end">
//                     <Link to={`/scholarship-details/${scholarship._id}`}>
//                       <button className="btn btn-outline">Scholarship Details</button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* All Scholarships Button */}
//           <div className="text-center mt-6">
//             <Link to="/all-scholarship">
//               <button className="btn btn-primary">All Scholarships</button>
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TopScholarShip;





















































// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const TopScholarShip = () => {
//   const [scholarships, setScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [topScholarships, setTopScholarships] = useState([]);

//   // Fetch scholarships data
//   useEffect(() => {
//     fetch("http://:5000/scholar") // Replace with your actual API endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         // Sort scholarships by application fees (low to high) and post date (most recent first)
//         const sortedScholarships = data.sort((a, b) => {
//           if (a.applicationFees === b.applicationFees) {
//             return new Date(b.postDate) - new Date(a.postDate);
//           }
//           return a.applicationFees - b.applicationFees;
//         });

//         // Set top scholarships to the first 6 sorted scholarships
//         setTopScholarships(sortedScholarships.slice(0, 6));
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching scholarships:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {loading ? (
//         // Loading Placeholder
//         <div className="flex justify-center items-center h-60">
//           <p className="text-lg font-semibold">Loading scholarships, please wait...</p>
//         </div>
//       ) : (
//         <>
//           {/* Top Scholarships Section */}
//           <h2 className="text-4xl text-green-500 font-bold mt-1- mb-6  text-center">Top Scholarships</h2>
//           <div className="scholarships-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {topScholarships.map((scholarship, index) => (
//               <div
//                 key={index}
//                 className="card w-full  shadow-lg  rounded-lg overflow-hidden"
//               >
//                 <figure className="h-48 flex items-center justify-center p-4">
//                   <img
//                     src={scholarship.university_logo || "placeholder-image.jpg"}
//                     alt={scholarship.university_name}
//                     className="h-full w-full object-cover"
//                   />
//                 </figure>
//                 <div className="card-body p-4">
//                   <h2 className="card-title text-2xl justify-center font-bold mb-2 text-white">
//                     {scholarship.university_name}
//                   </h2>
//                   <p className="text-base text-white font-medium">
//                     <strong className="">Category:</strong> {scholarship.scholarship_category}
//                   </p>
//                   <p className="text-base text-white font-medium">
//                     <strong className="">Deadline:</strong> {scholarship.application_deadline}
//                   </p>
//                   <p className="text-base text-white font-medium">
//                     <strong className=">Subject:</strong> {scholarship.subject_category}
//                   </p>
//                   <p className="text-base text-white font-medium" >
//                     <strong className="">Application Fees:</strong> ${scholarship.application_fees}
//                   </p>
//                   <div className="card-actions justify-center mt-4">
//                     <Link to={`/scholarship-details/${scholarship._id}`}>
//                       <button className="btn btn-outline text-white text-lg btn-success">
//                         Scholarship Details
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* All Scholarships Button */}
//           <div className="text-center mt-8">
//             <Link to="/all-scholarship">
//               <button className="btn  bg-green-500 text-white text-xl">All Scholarships</button>
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TopScholarShip;







import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopScholarShip = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topScholarships, setTopScholarships] = useState([]);

  // Fetch scholarships data
  useEffect(() => {
    fetch("https://scholarship-server-project.vercel.app/scholar") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        // Sort scholarships by application fees (low to high) and post date (most recent first)
        const sortedScholarships = data.sort((a, b) => {
          if (a.applicationFees === b.applicationFees) {
            return new Date(b.postDate) - new Date(a.postDate);
          }
          return a.applicationFees - b.applicationFees;
        });

        // Set top scholarships to the first 6 sorted scholarships
        setTopScholarships(sortedScholarships.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching scholarships:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        // Loading Placeholder
        <div className="flex justify-center items-center h-60">
          <p className="text-lg font-semibold">Loading scholarships, please wait...</p>
        </div>
      ) : (
        <>
          {/* Top Scholarships Section */}
          <h2 className="text-4xl text-green-500 font-bold mt-1- mb-6  text-center">Top Scholarships</h2>
          <div className="scholarships-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topScholarships.map((scholarship, index) => (
              <div
                key={index}
                className="card w-full shadow-lg bg-blue-200 bg-opacity-15 rounded-lg overflow-hidden"
              >
                <figure className="h-48 flex items-center justify-center p-4">
                  <img
                    src={scholarship.university_logo || "placeholder-image.jpg"}
                    alt={scholarship.university_name}
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-2xl justify-center font-bold mb-2 text-white">
                    {scholarship.university_name}
                  </h2>
                  <p className="text-base text-white font-medium">
                    <strong>Category:</strong> {scholarship.scholarship_category}
                  </p>
                  <p className="text-base text-white font-medium">
                    <strong>Deadline:</strong> {scholarship.application_deadline}
                  </p>
                  <p className="text-base text-white font-medium">
                    <strong>Subject:</strong> {scholarship.subject_category}
                  </p>
                  <p className="text-base text-white font-medium">
                    <strong>Application Fees:</strong> ${scholarship.application_fees}
                  </p>
                  <div className="card-actions justify-center mt-4">
                    <Link to={`/scholarship-details/${scholarship._id}`}>
                      <button className="btn btn-outline text-white text-lg btn-success">
                        Scholarship Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Scholarships Button */}
          <div className="text-center mt-8">
            <Link to="/all-scholarship">
              <button className="btn bg-blue-200 bg-opacity-15 text-white text-xl">All Scholarships</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default TopScholarShip;























































