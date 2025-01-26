// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// // import ApplicationForm from './ApplicationForm'; // Import ApplicationForm

// const ApplyFrom = () => {
//   const { id } = useParams(); // Get the scholarship ID from the URL
//   const [scholarship, setScholarship] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // Added error state

//   // useEffect(() => {
//   //   // Fetch the scholarship data using the scholarship ID
//   //   fetch(`http://:5000/scholar/${id}`) // Replace with your actual API endpoint
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setScholarship(data);
//   //       setLoading(false);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching scholarship details:", error);
//   //       setError("Failed to load scholarship details. Please try again later."); // Set error state
//   //       setLoading(false);
//   //     });
//   // }, [id]);


















//   useEffect(() => {
//     // Fetch the scholarship data using the scholarship ID
//     fetch(`http://:5000/scholar/${id}`) // Replace with your actual API endpoint
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setScholarship(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching scholarship details:", error);
//         setError("Failed to load scholarship details. Please try again later.");
//         setLoading(false);
//       });
//   }, [id]);
  











//   if (loading) {
//     return <div>Loading scholarship details...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>; // Display error message
//   }

//   if (!scholarship) {
//     return <div>Scholarship not found.</div>;
//   }

//   return (
//     <div className="scholarship-details">
//       <h2 className="text-3xl font-bold">{scholarship.university_name}</h2>
//       <div className="details mt-4">
//         <p><strong>Scholarship Category:</strong> {scholarship.scholarship_category}</p>
//         <p><strong>Subject:</strong> {scholarship.subject_category}</p>
        
//         {/* Pass the scholarship details to ApplicationForm */}
//         {/* <ApplicationForm scholarshipData={scholarship} /> */}
//       </div>
//     </div>
//   );
// };

// export default ApplyFrom;






















































































// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const ApplyFrom= () => {
//   const { id } = useParams(); // Extract scholarship ID from the URL
//   const [scholarship, setScholarship] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch the scholarship data based on the ID
//     fetch(`http://:5000/scholar/${id}`) // Replace with your actual API endpoint
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setScholarship(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching scholarship details:", error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <div>Loading scholarship details...</div>;
//   }

//   if (!scholarship) {
//     return <div>Scholarship not found.</div>;
//   }

//   return (
//     <div className="scholarship-details">
//       <h2 className="text-3xl font-bold">{scholarship.university_name}</h2>
//       <figure>
//         <img
//           src={scholarship.university_logo || "/path/to/placeholder-image.jpg"}
//           alt={scholarship.university_name || "University logo"}
//           className="w-40 h-40 object-cover"
//         />
//       </figure>
//       <div className="details mt-4">
//         <p><strong>Scholarship Category:</strong> {scholarship.scholarship_category || "N/A"}</p>
//         <p><strong>Location:</strong> {scholarship.location?.country}, {scholarship.location?.city}</p>
//         <p><strong>Application Deadline:</strong> {scholarship.application_deadline || "N/A"}</p>
//         <p><strong>Subject:</strong> {scholarship.subject_category || "N/A"}</p>
//         <p><strong>Description:</strong> {scholarship.scholarship_description || "N/A"}</p>
//         <p><strong>Stipend:</strong> {scholarship.stipend || "N/A"}</p>
//         <p><strong>Post Date:</strong> {scholarship.post_Date || "N/A"}</p>
//         <p><strong>Service Charge:</strong> {scholarship.service_charge || "N/A"}</p>
//         <p><strong>Application Fees:</strong> {scholarship.application_fees || "N/A"}</p>
//         <div className="apply-button mt-4">
//          <Link  to={'/payment'}>
//    <button className="btn btn-primary">Apply Scholarship</button>
//  </Link>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplyFrom;

