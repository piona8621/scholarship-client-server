

// facke

// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import { Helmet } from 'react-helmet-async';

// // const ManageAppliedApplication = () => {
// //   const { user } = useContext(AuthContext);
// //   const [scholarships, setScholarships] = useState([]);
// //   const [selectedApplication, setSelectedApplication] = useState(null);
// //   const [feedback, setFeedback] = useState('');

// //   useEffect(() => {
// //     fetch(`http://:5000/apply-scholarship?email=${user.email}`)
// //       .then(res => res.json())
// //       .then(data => {
// //         setScholarships(data);
// //       })
// //       .catch(err => console.error('Fetch error:', err));
// //   }, [user.email]);

// //   const handleDetails = (application) => {
// //     setSelectedApplication(application);
// //     document.getElementById('details_modal').showModal();
// //   };



// //   //  const handleFeedback = (applicationId) => {
// //   //   setFeedback('');
// //   //   document.getElementById('feedback_modal').showModal();
// //   //   setSelectedApplication(scholarships.find(app => app._id === applicationId));
// //   // };

// //   // const handleSubmitFeedback = () => {
// //   //   const feedbackData = {
// //   //     scholarshipId: selectedApplication._id,
// //   //     feedback,
// //   //     reviewerName: user.name,
// //   //     reviewerEmail: user.email,
// //   //     feedbackDate: new Date().toISOString(),
// //   //   };

// //   //   fetch(`http://:5000/apply-scholarship/${selectedApplication._id}/feedback`, {
// //   //     method: 'POST',
// //   //     headers: { 'Content-Type': 'application/json' },
// //   //     body: JSON.stringify(feedbackData),
// //   //   })
// //   //     .then(res => res.json())
// //   //     .then(data => {
// //   //       if (data.success) {
// //   //         Swal.fire('Success', 'Feedback added successfully', 'success');
// //   //         document.getElementById('feedback_modal').close();
// //   //       } else {
// //   //         Swal.fire('Error', 'Failed to add feedback', 'error');
// //   //       }
// //   //     });
// //   // };






// // const handleFeedback = (applicationId) => {
// //     setFeedback('');
// //     document.getElementById('feedback_modal').showModal();
// //     setSelectedApplication(scholarships.find(app => app._id === applicationId));
// //   };

// //   const handleSubmitFeedback = () => {
// //     if (!selectedApplication) {
// //       Swal.fire('Error', 'No application selected', 'error');
// //       return;
// //     }

// //     const feedbackData = {
// //       scholarshipId: selectedApplication._id, // Use the selected application ID
// //       feedback,
// //       reviewerName: user.name,
// //       reviewerEmail: user.email,
// //       feedbackDate: new Date().toISOString(),
// //     };

// //     fetch(`http://:5000/apply-scholarship/${selectedApplication._id}/feedback`, { 
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(feedbackData),
// //     })
// //       .then(res => res.json())
// //       .then(data => {
// //         if (data.success) {
// //           Swal.fire('Success', 'Feedback added successfully', 'success');
// //           document.getElementById('feedback_modal').close();
          
// //           // Update the feedbacks array for the selected application
// //           const updatedScholarships = scholarships.map(app => 
// //             app._id === selectedApplication._id 
// //               ? { ...app, feedbacks: [...app.feedbacks, feedbackData] } 
// //               : app
// //           );
// //           setScholarships(updatedScholarships);
// //         } else {
// //           Swal.fire('Error', 'Failed to add feedback', 'error');
// //         }
// //       })
// //       .catch(err => {
// //         console.error('Error:', err);
// //         Swal.fire('Error', 'An error occurred while submitting feedback', 'error');
// //       });
// //   };




// //   const handleCancelApplication = (id) => {
// //     console.log(id)
// //     Swal.fire({
// //       title: 'Are you sure you want to cancel this application?',
// //       text: 'Once canceled, the application status will be set to rejected.',
// //       icon: 'warning',
// //       showCancelButton: true,
// //       confirmButtonText: 'Yes, cancel it!',
// //       cancelButtonText: 'No, keep it',
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         fetch(`http://:5000/apply-scholarship/${id}`, { method: 'DELETE' })
// //           .then(res => res.json())
// //           .then(data => {
// //             if (data.success) {
// //               Swal.fire('Cancelled', 'The application has been rejected.', 'success');
// //               setScholarships(scholarships.filter(app => app._id !== id));
// //             } else {
// //               Swal.fire('Error', 'Failed to cancel the application', 'error');
// //             }
// //           });
// //       }
// //     });
// //   };

// //   return (
// //     <div>
// //       <h2>My Applied Scholarships: {scholarships.length}</h2>
// //       <div className="overflow-x-auto">
// //         <table className="table table-xs">
// //           <thead>
// //             <tr>
// //               <th>University Name</th>
// //               <th>Subject Category</th>
// //               <th>Location</th>
// //               <th>Degree</th>
// //               <th>Application Status</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {scholarships.map((application) => (
// //               <tr key={application._id}>
// //                 <td>{application.universityName}</td>
// //                 <td>{application.subjectCategory}</td>
// //                 <td>{application.location ? `${application.location.country}, ${application.location.city}` : 'N/A'}</td>
// //                 <td>{application.degree}</td>
// //                 <td>{application.status}</td>
// //                 <td>
// //                   <button className="btn btn-outline btn-xs" onClick={() => handleDetails(application)}>
// //                     Details
// //                   </button>
// //                   <button className="btn btn-outline btn-xs" onClick={() => handleFeedback(application._id)}>
// //                     Feedback
// //                   </button>
// //                   <button className="btn btn-outline btn-xs" onClick={() => handleCancelApplication(application._id)}>
// //                     Cancel
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Application Details Modal */}
// //       <dialog id="details_modal">
// //         {selectedApplication && (
// //           <div>
// //             <h3>Application Details</h3>
// //             <p><strong>University:</strong> {selectedApplication.universityName}</p>
// //             <p><strong>Degree:</strong> {selectedApplication.degree}</p>
// //             <p><strong>Scholarship Category:</strong> {selectedApplication.subjectCategory}</p>
// //             <p><strong>Location:</strong> {selectedApplication.location ? `${selectedApplication.location.country}, ${selectedApplication.location.city}` : 'N/A'}</p>
// //             <button onClick={() => document.getElementById('details_modal').close()}>Close</button>
// //           </div>
// //         )}
// //       </dialog>

// //       {/* Feedback Modal */}
// //       <dialog id="feedback_modal">
// //         <h3>Provide Feedback</h3>
// //         <textarea
// //           value={feedback}
// //           onChange={(e) => setFeedback(e.target.value)}
// //           placeholder="Enter your feedback"
// //           rows="4"
// //           cols="50"
// //         />
// //         <br />
// //         <button onClick={handleSubmitFeedback}>Submit Feedback</button>
// //         <button
// //           onClick={() => document.getElementById('feedback_modal').close()}
// //         >
// //           Cancel
// //         </button>
// //       </dialog>
// //     </div>
// //   );
// // };


// const ManageAppliedApplication = () => {
//   const { user } = useContext(AuthContext);
//   const [scholarships, setScholarships] = useState([]);
//   const [selectedApplication, setSelectedApplication] = useState(null);
//   const [feedback, setFeedback] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [loading, setLoading] = useState(true)

  
//   useEffect(() => {
//     if (user?.email) {
//       fetch('http://:5000/apply-scholarship/all')
//         .then(res => res.json())
//         .then(data => setScholarships(data))
//         .catch(err => console.error('Fetch error:', err));
//     }
//   }, [user.email]);
  




//   const handleDetails = (application) => {
//     setSelectedApplication(application);
//     document.getElementById('details_modal').showModal();
//   };

//   const handleFeedback = (applicationId) => {
//     setFeedback('');
//     document.getElementById('feedback_modal').showModal();
//     setSelectedApplication(scholarships.find(app => app._id === applicationId));
//   };

//   const handleSubmitFeedback = () => {
//     if (!feedback.trim()) {
//       Swal.fire('Error', 'Feedback cannot be empty', 'error');
//       return;
//     }
//     setIsSubmitting(true);
//     const feedbackData = {
//       scholarshipId: selectedApplication._id,
//       feedback,
//       reviewerName: user.name,
//       reviewerEmail: user.email,
//       feedbackDate: new Date().toISOString(),
//     };

//     fetch(`http://:5000/apply-scholarship/${selectedApplication._id}/feedback`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(feedbackData),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           Swal.fire('Success', 'Feedback added successfully', 'success');
//           setScholarships(prev =>
//             prev.map(app => (app._id === selectedApplication._id ? { ...app, feedback } : app))
//           );
//           document.getElementById('feedback_modal').close();
//         } else {
//           Swal.fire('Error', 'Failed to add feedback', 'error');
//         }
//       })
//       .finally(() => setIsSubmitting(false));
//   };

//   const handleCancelApplication = (id) => {
//     Swal.fire({
//       title: 'Are you sure you want to cancel this application?',
//       text: 'Once canceled, the application status will be set to rejected.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/apply-scholarship/${id}`, { method: 'DELETE' })
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               Swal.fire('Cancelled', 'The application has been rejected.', 'success');
//               setScholarships(prev =>
//                 prev.map(app => (app._id === id ? { ...app, status: 'rejected' } : app))
//               );
//             } else {
//               Swal.fire('Error', 'Failed to cancel the application', 'error');
//             }
//           });
//       }
//     });
//   };

//   return (
//     <div>
//       <h2 className='text-green-500 text-3xl mb-10'> Manage All Applied Scholarships: {scholarships.length}</h2>
//       <div className="overflow-x-auto">
//         <Helmet>
//                 <title> ProFellow | Manage Applied Scholarship </title>
//               </Helmet>
              

//         <table className="table table-lg text-white">
//           <thead className='text-white'>
//             <tr>
//               <th>University Name</th>
//               <th>Subject Category</th>
//               <th>Applied Date</th>
//               <th>Degree</th>
//               <th>Status</th>
//                <th className='px-16'>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {scholarships.length > 0 ? (
//               scholarships.map((application) => (
//                 <tr key={application._id}>
//                   <td>{application.universityName}</td>
//                   <td>{application.subjectCategory}</td>
//                   <td className="text-sm text-white">{new Date(application.date).toLocaleDateString()}</td>
//                   <td>{application.apply_degree}</td>
//                   <td>{application.status}</td>
//                   <tr className='space-x-4'>                
//                    <button className="btn btn-outline btn-info btn-xl" onClick={() => handleDetails(application)}>Details</button>
//                     <button className="btn btn-outline btn-success btn-xl" onClick={() => handleFeedback(application._id)}>Feedback</button>
//                     <button className="btn btn-outline btn-base btn-error" onClick={() => handleCancelApplication(application._id)}>Cancel</button>
//                   </tr>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6">No applications found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
          
//       {/* Modals */}
//       {/* Details Modal
//       <dialog id="details_modal" className=''>
//         {selectedApplication && (
//           <div>
//             <h3>Application Details</h3>
//             <p><strong>University:</strong> {selectedApplication.universityName}</p>
//             <p><strong>Degree:</strong> {selectedApplication.degree}</p>
//             <p><strong>Scholarship Category:</strong> {selectedApplication.subjectCategory}</p>
//             <button onClick={() => document.getElementById('details_modal').close()}>Close</button>
//           </div>
//         )}
//       </dialog> */}






// {/* Details Modal */}
// <dialog id="details_modal" className='modal modal-scroll bg-blue-800 bg-opacity-15' >
//   {selectedApplication && (
//     <div className="modal-box bg-blue-900 bg-opacity-20 p-6 max-w-lg mx-auto text-center">
//       <h3 className="text-4xl font-semibold text-green-500 mb-4">Application Details</h3>
//       <div className="text-left mb-4 text-xl text-white ">
//         <p><strong>University:</strong> {selectedApplication.universityName}</p>
//         <p><strong>Degree:</strong> {selectedApplication.apply_degree}</p>
//         <p><strong>Scholarship Category:</strong> {selectedApplication.subjectCategory}</p>
//       </div>
//       <div className="modal-action flex justify-center gap-4">
//         <button
//           onClick={() => document.getElementById('details_modal').close()}
//           className="text-lg px-6 py-2 text-white btn btn-outline btn-success rounded-lg">
//           Close
//         </button>
//       </div>
//     </div>
//   )}
// </dialog>












//       {/* Feedback Modal
//       <dialog id="feedback_modal">
//         <h3 className='text-green-500 text-xl'>Provide Feedback</h3>
//         <textarea className='textarea textarea-bordered w-full mb-4 p-4 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)}
//           placeholder="Enter your feedback"
//           rows="4"
//           cols="50"
//         />
//         <br />
//         <div className='flex justify-center gap-2'>
//         <button className='btn btn-outline btn-info'
//         onClick={handleSubmitFeedback} disabled={isSubmitting}>
//           {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
//         </button>
//         <button className='btn btn-outline btn-error'
//          onClick={() => document.getElementById('feedback_modal').close()}>
//           Cancel
//         </button>
//         </div>
//       </dialog> */}

//  <dialog id="feedback_modal" className='modal modal-bottom sm:modal-middle'>
//   <div className="modal-content bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-lg max-w-lg w-full">
//     <h3 className="text-green-500 text-3xl font-semibold mb-4">Provide Feedback</h3>
//     <textarea
//       className="textarea textarea-bordered w-full mb-4 p-4 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//       value={feedback}
//       onChange={(e) => setFeedback(e.target.value)}
//       placeholder="Enter your feedback"
//       rows="5"
//     />
//     <div className='flex justify-center gap-2'>
//         <button className='btn btn-outline btn-info'
//         onClick={handleSubmitFeedback} disabled={isSubmitting}>
//           {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
//         </button>
//         <button className='btn btn-outline btn-error'
//          onClick={() => document.getElementById('feedback_modal').close()}>
//           Cancel
//         </button>
//         </div>
//   </div>
// </dialog> 





//     </div>
//   );
// };



// export default ManageAppliedApplication;






































// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import { Helmet } from 'react-helmet-async';

// // const ManageAppliedApplication = () => {
// //   const { user } = useContext(AuthContext);
// //   const [scholarships, setScholarships] = useState([]);
// //   const [selectedApplication, setSelectedApplication] = useState(null);
// //   const [feedback, setFeedback] = useState('');

// //   useEffect(() => {
// //     fetch(http://:5000/apply-scholarship?email=${user.email})
// //       .then(res => res.json())
// //       .then(data => {
// //         setScholarships(data);
// //       })
// //       .catch(err => console.error('Fetch error:', err));
// //   }, [user.email]);

// //   const handleDetails = (application) => {
// //     setSelectedApplication(application);
// //     document.getElementById('details_modal').showModal();
// //   };



// //   // const handleFeedback = (applicationId) => {
// //   //   setFeedback('');
// //   //   document.getElementById('feedback_modal').showModal();
// //   //   setSelectedApplication(scholarships.find(app => app._id === applicationId));
// //   // };

// //   // const handleSubmitFeedback = () => {
// //   //   const feedbackData = {
// //   //     scholarshipId: selectedApplication._id,
// //   //     feedback,
// //   //     reviewerName: user.name,
// //   //     reviewerEmail: user.email,
// //   //     feedbackDate: new Date().toISOString(),
// //   //   };

// //   //   fetch(http://:5000/apply-scholarship/${selectedApplication._id}/feedback, {
// //   //     method: 'POST',
// //   //     headers: { 'Content-Type': 'application/json' },
// //   //     body: JSON.stringify(feedbackData),
// //   //   })
// //   //     .then(res => res.json())
// //   //     .then(data => {
// //   //       if (data.success) {
// //   //         Swal.fire('Success', 'Feedback added successfully', 'success');
// //   //         document.getElementById('feedback_modal').close();
// //   //       } else {
// //   //         Swal.fire('Error', 'Failed to add feedback', 'error');
// //   //       }
// //   //     });
// //   // };






// // const handleFeedback = (applicationId) => {
// //     setFeedback('');
// //     document.getElementById('feedback_modal').showModal();
// //     setSelectedApplication(scholarships.find(app => app._id === applicationId));
// //   };

// //   const handleSubmitFeedback = () => {
// //     if (!selectedApplication) {
// //       Swal.fire('Error', 'No application selected', 'error');
// //       return;
// //     }

// //     const feedbackData = {
// //       scholarshipId: selectedApplication._id, // Use the selected application ID
// //       feedback,
// //       reviewerName: user.name,
// //       reviewerEmail: user.email,
// //       feedbackDate: new Date().toISOString(),
// //     };

// //     fetch(http://:5000/apply-scholarship/${selectedApplication._id}/feedback, { 
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(feedbackData),
// //     })
// //       .then(res => res.json())
// //       .then(data => {
// //         if (data.success) {
// //           Swal.fire('Success', 'Feedback added successfully', 'success');
// //           document.getElementById('feedback_modal').close();
          
// //           // Update the feedbacks array for the selected application
// //           const updatedScholarships = scholarships.map(app => 
// //             app._id === selectedApplication._id 
// //               ? { ...app, feedbacks: [...app.feedbacks, feedbackData] } 
// //               : app
// //           );
// //           setScholarships(updatedScholarships);
// //         } else {
// //           Swal.fire('Error', 'Failed to add feedback', 'error');
// //         }
// //       })
// //       .catch(err => {
// //         console.error('Error:', err);
// //         Swal.fire('Error', 'An error occurred while submitting feedback', 'error');
// //       });
// //   };




// //   const handleCancelApplication = (id) => {
// //     console.log(id)
// //     Swal.fire({
// //       title: 'Are you sure you want to cancel this application?',
// //       text: 'Once canceled, the application status will be set to rejected.',
// //       icon: 'warning',
// //       showCancelButton: true,
// //       confirmButtonText: 'Yes, cancel it!',
// //       cancelButtonText: 'No, keep it',
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         fetch(http://:5000/apply-scholarship/${id}, { method: 'DELETE' })
// //           .then(res => res.json())
// //           .then(data => {
// //             if (data.success) {
// //               Swal.fire('Cancelled', 'The application has been rejected.', 'success');
// //               setScholarships(scholarships.filter(app => app._id !== id));
// //             } else {
// //               Swal.fire('Error', 'Failed to cancel the application', 'error');
// //             }
// //           });
// //       }
// //     });
// //   };

// //   return (
// //     <div>
// //       <h2>My Applied Scholarships: {scholarships.length}</h2>
// //       <div className="overflow-x-auto">
// //         <table className="table table-xs">
// //           <thead>
// //             <tr>
// //               <th>University Name</th>
// //               <th>Subject Category</th>
// //               <th>Location</th>
// //               <th>Degree</th>
// //               <th>Application Status</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {scholarships.map((application) => (
// //               <tr key={application._id}>
// //                 <td>{application.universityName}</td>
// //                 <td>{application.subjectCategory}</td>
// //                 <td>{application.location ? ${application.location.country}, ${application.location.city} : 'N/A'}</td>
// //                 <td>{application.degree}</td>
// //                 <td>{application.status}</td>
// //                 <td>
// //                   <button className="btn btn-outline btn-xs" onClick={() => handleDetails(application)}>
// //                     Details
// //                   </button>
// //                   <button className="btn btn-outline btn-xs" onClick={() => handleFeedback(application._id)}>
// //                     Feedback
// //                   </button>
// //                   <button className="btn btn-outline btn-xs" onClick={() => handleCancelApplication(application._id)}>
// //                     Cancel
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Application Details Modal */}
// //       <dialog id="details_modal">
// //         {selectedApplication && (
// //           <div>
// //             <h3>Application Details</h3>
// //             <p><strong>University:</strong> {selectedApplication.universityName}</p>
// //             <p><strong>Degree:</strong> {selectedApplication.degree}</p>
// //             <p><strong>Scholarship Category:</strong> {selectedApplication.subjectCategory}</p>
// //             <p><strong>Location:</strong> {selectedApplication.location ? ${selectedApplication.location.country}, ${selectedApplication.location.city} : 'N/A'}</p>
// //             <button onClick={() => document.getElementById('details_modal').close()}>Close</button>
// //           </div>
// //         )}
// //       </dialog>

// //       {/* Feedback Modal */}
// //       <dialog id="feedback_modal">
// //         <h3>Provide Feedback</h3>
// //         <textarea
// //           value={feedback}
// //           onChange={(e) => setFeedback(e.target.value)}
// //           placeholder="Enter your feedback"
// //           rows="4"
// //           cols="50"
// //         />
// //         <br />
// //         <button onClick={handleSubmitFeedback}>Submit Feedback</button>
// //         <button
// //           onClick={() => document.getElementById('feedback_modal').close()}
// //         >
// //           Cancel
// //         </button>
// //       </dialog>
// //     </div>
// //   );
// // };


// const ManageAppliedApplication = () => {
//   const { user } = useContext(AuthContext);
//   const [scholarships, setScholarships] = useState([]);
//   const [selectedApplication, setSelectedApplication] = useState(null);
//   const [feedback, setFeedback] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [loading, setLoading] = useState(true)

  
//   useEffect(() => {
//     if (user?.email) {
//       fetch('http://:5000/apply-scholarship/all')
//         .then(res => res.json())
//         .then(data => setScholarships(data))
//         .catch(err => console.error('Fetch error:', err));
//     }
//   }, [user.email]);
  




//   const handleDetails = (application) => {
//     setSelectedApplication(application);
//     document.getElementById('details_modal').showModal();
//   };

//   const handleFeedback = (applicationId) => {
//     setFeedback('');
//     document.getElementById('feedback_modal').showModal();
//     setSelectedApplication(scholarships.find(app => app._id === applicationId));
//   };

//   const handleSubmitFeedback = () => {
//     if (!feedback.trim()) {
//       Swal.fire('Error', 'Feedback cannot be empty', 'error');
//       return;
//     }
//     setIsSubmitting(true);
//     const feedbackData = {
//       scholarshipId: selectedApplication._id,
//       feedback,
//       reviewerName: user.name,
//       reviewerEmail: user.email,
//       feedbackDate: new Date().toISOString(),
//     };

//     fetch(`http://:5000/apply-scholarship/${selectedApplication._id}/feedback`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(feedbackData),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           Swal.fire('Success', 'Feedback added successfully', 'success');
//           setScholarships(prev =>
//             prev.map(app => (app._id === selectedApplication._id ? { ...app, feedback } : app))
//           );
//           document.getElementById('feedback_modal').close();
//         } else {
//           Swal.fire('Error', 'Failed to add feedback', 'error');
//         }
//       })
//       .finally(() => setIsSubmitting(false));
//   };

//   const handleCancelApplication = (id) => {
//     Swal.fire({
//       title: 'Are you sure you want to cancel this application?',
//       text: 'Once canceled, the application status will be set to rejected.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/apply-scholarship/${id}`, { method: 'DELETE' })
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               Swal.fire('Cancelled', 'The application has been rejected.', 'success');
//               setScholarships(prev =>
//                 prev.map(app => (app._id === id ? { ...app, status: 'rejected' } : app))
//               );
//             } else {
//               Swal.fire('Error', 'Failed to cancel the application', 'error');
//             }
//           });
//       }
//     });
//   };

//   return (
//     <div>
//       <h2 className='text-green-500 text-3xl mb-10'> Manage All Applied Scholarships: {scholarships.length}</h2>
//       <div className="overflow-x-auto">
//         <Helmet>
//                 <title> ProFellow | Manage Applied Scholarship </title>
//               </Helmet>
              

//         <table className="table table-lg text-white">
//           <thead className='text-white'>
//             <tr>
//               <th>University Name</th>
//               <th>Subject Category</th>
//               <th>Applied Date</th>
//               <th>Degree</th>
//               <th>Status</th>
//                <th className='px-16'>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {scholarships.length > 0 ? (
//               scholarships.map((application) => (
//                 <tr key={application._id}>
//                   <td>{application.universityName}</td>
//                   <td>{application.subjectCategory}</td>
//                   <td className="text-sm text-white">{new Date(application.date).toLocaleDateString()}</td>
//                   <td>{application.apply_degree}</td>
//                   <td>{application.status}</td>
//                   <tr className='space-x-4'>                
//                    <button className="btn btn-outline btn-info btn-xl" onClick={() => handleDetails(application)}>Details</button>
//                     <button className="btn btn-outline btn-success btn-xl" onClick={() => handleFeedback(application._id)}>Feedback</button>
//                     <button className="btn btn-outline btn-base btn-error" onClick={() => handleCancelApplication(application._id)}>Cancel</button>
//                   </tr>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6">No applications found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
          
//       {/* Modals */}
//       {/* Details Modal
//       <dialog id="details_modal" className=''>
//         {selectedApplication && (
//           <div>
//             <h3>Application Details</h3>
//             <p><strong>University:</strong> {selectedApplication.universityName}</p>
//             <p><strong>Degree:</strong> {selectedApplication.degree}</p>
//             <p><strong>Scholarship Category:</strong> {selectedApplication.subjectCategory}</p>
//             <button onClick={() => document.getElementById('details_modal').close()}>Close</button>
//           </div>
//         )}
//       </dialog> */}






// {/* Details Modal */}
// <dialog id="details_modal" className='modal modal-scroll bg-blue-800 bg-opacity-15' >
//   {selectedApplication && (
//     <div className="modal-box bg-blue-900 bg-opacity-20 p-6 max-w-lg mx-auto text-center">
//       <h3 className="text-4xl font-semibold text-green-500 mb-4">Application Details</h3>
//       <div className="text-left mb-4 text-xl text-white ">
//         <p><strong>University:</strong> {selectedApplication.universityName}</p>
//         <p><strong>Degree:</strong> {selectedApplication.apply_degree}</p>
//         <p><strong>Scholarship Category:</strong> {selectedApplication.subjectCategory}</p>
//       </div>
//       <div className="modal-action flex justify-center gap-4">
//         <button
//           onClick={() => document.getElementById('details_modal').close()}
//           className="text-lg px-6 py-2 text-white btn btn-outline btn-success rounded-lg">
//           Close
//         </button>
//       </div>
//     </div>
//   )}
// </dialog>












//       {/* Feedback Modal
//       <dialog id="feedback_modal">
//         <h3 className='text-green-500 text-xl'>Provide Feedback</h3>
//         <textarea className='textarea textarea-bordered w-full mb-4 p-4 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)}
//           placeholder="Enter your feedback"
//           rows="4"
//           cols="50"
//         />
//         <br />
//         <div className='flex justify-center gap-2'>
//         <button className='btn btn-outline btn-info'
//         onClick={handleSubmitFeedback} disabled={isSubmitting}>
//           {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
//         </button>
//         <button className='btn btn-outline btn-error'
//          onClick={() => document.getElementById('feedback_modal').close()}>
//           Cancel
//         </button>
//         </div>
//       </dialog> */}

//  <dialog id="feedback_modal" className='modal modal-bottom sm:modal-middle'>
//   <div className="modal-content bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-lg max-w-lg w-full">
//     <h3 className="text-green-500 text-3xl font-semibold mb-4">Provide Feedback</h3>
//     <textarea
//       className="textarea textarea-bordered w-full mb-4 p-4 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//       value={feedback}
//       onChange={(e) => setFeedback(e.target.value)}
//       placeholder="Enter your feedback"
//       rows="5"
//     />
//     <div className='flex justify-center gap-2'>
//         <button className='btn btn-outline btn-info'
//         onClick={handleSubmitFeedback} disabled={isSubmitting}>
//           {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
//         </button>
//         <button className='btn btn-outline btn-error'
//          onClick={() => document.getElementById('feedback_modal').close()}>
//           Cancel
//         </button>
//         </div>
//   </div>
// </dialog> 





//     </div>
//   );
// };

// export default ManageAppliedApplication; 








































































































// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';

// const ManageAppliedApplication = () => {
//   const { user } = useContext(AuthContext);
//   const [scholarships, setScholarships] = useState([]);
//   const [selectedApplication, setSelectedApplication] = useState(null);
//   const [feedback, setFeedback] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (user?.email) {
//       fetch('http://:5000/apply-scholarship/all')
//         .then(res => res.json())
//         .then(data => setScholarships(data))
//         .catch(err => console.error('Fetch error:', err));
//     }
//   }, [user]);

//   const handleDetails = (application) => {
//     setSelectedApplication(application);
//     document.getElementById('details_modal').showModal();
//   };

//   const handleFeedback = (applicationId) => {
//     setFeedback('');
//     document.getElementById('feedback_modal').showModal();
//     setSelectedApplication(scholarships.find(app => app._id === applicationId));
//   };

//   const handleSubmitFeedback = () => {
//     if (!feedback.trim()) {
//       Swal.fire('Error', 'Feedback cannot be empty', 'error');
//       return;
//     }
//     setIsSubmitting(true);
//     const feedbackData = {
//       scholarshipId: selectedApplication._id,
//       feedback,
//       reviewerName: user.name,
//       reviewerEmail: user.email,
//       feedbackDate: new Date().toISOString(),
//     };

//     fetch(`http://:5000/apply-scholarship/${selectedApplication._id}/feedback`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(feedbackData),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           Swal.fire('Success', 'Feedback added successfully', 'success');
//           setScholarships(prev =>
//             prev.map(app => (app._id === selectedApplication._id ? { ...app, feedback } : app))
//           );
//           document.getElementById('feedback_modal').close();
//         } else {
//           Swal.fire('Error', 'Failed to add feedback', 'error');
//         }
//       })
//       .finally(() => setIsSubmitting(false));
//   };

//   const handleCancelApplication = (id) => {
//     Swal.fire({
//       title: 'Are you sure you want to cancel this application?',
//       text: 'Once canceled, the application status will be set to rejected.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/apply-scholarship/${id}`, { method: 'DELETE' })
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               Swal.fire('Cancelled', 'The application has been rejected.', 'success');
//               setScholarships(prev =>
//                 prev.map(app => (app._id === id ? { ...app, status: 'rejected' } : app))
//               );
//             } else {
//               Swal.fire('Error', 'Failed to cancel the application', 'error');
//             }
//           });
//       }
//     });
//   };

//   // Function to handle status change
//   const handleStatusChange = (id, newStatus) => {
//     fetch(`http://:5000/apply-scholarship/${id}/status`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ status: newStatus }),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           Swal.fire('Success', 'Application status updated!', 'success');
//           setScholarships(prev =>
//             prev.map(app => (app._id === id ? { ...app, status: newStatus } : app))
//           );
//         } else {
//           Swal.fire('Error', 'Failed to update status', 'error');
//         }
//       });
//   };

//   return (
//     <div>
//       <h2>All Applied Scholarships: {scholarships.length}</h2>
//       <div className="overflow-x-auto">
//         <table className="table table-xs">
//           <thead>
//             <tr>
//               <th>University Name</th>
//               <th>Subject Category</th>
//               <th>Location</th>
//               <th>Degree</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {scholarships.length > 0 ? (
//               scholarships.map((application) => (
//                 <tr key={application._id}>
//                   <td>{application.universityName}</td>
//                   <td>{application.subjectCategory}</td>
//                   <td>{application.location ? `${application.location.country}, ${application.location.city}` : 'N/A'}</td>
//                   <td>{application.degree}</td>
//                   <td>
//                     <select
//                       value={application.status}
//                       onChange={(e) => handleStatusChange(application._id, e.target.value)}
//                       className="select select-xs"
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="processing">Processing</option>
//                       <option value="completed">Completed</option>
//                     </select>
//                   </td>
//                   <td>
//                     <button className="btn btn-outline btn-xs" onClick={() => handleDetails(application)}>Details</button>
//                     <button className="btn btn-outline btn-xs" onClick={() => handleFeedback(application._id)}>Feedback</button>
//                     <button className="btn btn-outline btn-xs" onClick={() => handleCancelApplication(application._id)}>Cancel</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6">No applications found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Details Modal */}
//       <dialog id="details_modal">
//         {selectedApplication && (
//           <div>
//             <h3>Application Details</h3>
//             <p><strong>University:</strong> {selectedApplication.universityName}</p>
//             <p><strong>Degree:</strong> {selectedApplication.degree}</p>
//             <p><strong>Scholarship Category:</strong> {selectedApplication.subjectCategory}</p>
//             <button onClick={() => document.getElementById('details_modal').close()}>Close</button>
//           </div>
//         )}
//       </dialog>

//       {/* Feedback Modal */}
//       <dialog id="feedback_modal">
//         <h3>Provide Feedback</h3>
//         <textarea
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)}
//           placeholder="Enter your feedback"
//           rows="4"
//           cols="50"
//         />
//         <br />
//         <button onClick={handleSubmitFeedback} disabled={isSubmitting}>
//           {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
//         </button>
//         <button onClick={() => document.getElementById('feedback_modal').close()}>
//           Cancel
//         </button>
//       </dialog>
//     </div>
//   );
// };

// export default ManageAppliedApplication;
















































































































import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const ManageAppliedApplication = () => {
  const { user } = useContext(AuthContext);
  const [scholarships, setScholarships] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch('https://scholarship-server-project.vercel.app/apply-scholarship/all')
        .then((res) => res.json())
        .then((data) => {
          setScholarships(data);
          setFilteredScholarships(data);
        })
        .catch((err) => console.error('Fetch error:', err));
    }
  }, [user]);








 
  











  // const handleSortChange = (e) => {
  //   const option = e.target.value;
  //   setSortOption(option);

  //   let sortedScholarships = [...scholarships];

  //   if (option === 'appliedDate') {
  //     sortedScholarships.sort((a, b) => new Date(a.appliedDate) - new Date(b.appliedDate));
  //   } else if (option === 'deadline') {
  //     sortedScholarships.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  //   }

  //   setFilteredScholarships(sortedScholarships);
  // };





 
  





  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
  
    let sortedScholarships = [...scholarships];
  
    if (option === 'appliedDate') {
      sortedScholarships.sort((a, b) => Date.parse(a.appliedDate) - Date.parse(b.appliedDate));
    } else if (option === 'deadline') {
      sortedScholarships.sort((a, b) => Date.parse(a.deadline) - Date.parse(b.deadline));
    }
  
    setFilteredScholarships(sortedScholarships);
  };
  










  const handleDetails = (application) => {
    setSelectedApplication(application);
    document.getElementById('details_modal').showModal();
  };

  const handleFeedback = (applicationId) => {
    setFeedback('');
    document.getElementById('feedback_modal').showModal();
    setSelectedApplication(scholarships.find((app) => app._id === applicationId));
  };

  const handleSubmitFeedback = () => {
    if (!feedback.trim()) {
      Swal.fire('Error', 'Feedback cannot be empty', 'error');
      return;
    }
    setIsSubmitting(true);
    const feedbackData = {
      scholarshipId: selectedApplication._id,
      feedback,
      reviewerName: user.name,
      reviewerEmail: user.email,
      feedbackDate: new Date().toISOString(),
    };

    fetch(`https://scholarship-server-project.vercel.app/apply-scholarship/${selectedApplication._id}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire('Success', 'Feedback added successfully', 'success');
          setScholarships((prev) =>
            prev.map((app) => (app._id === selectedApplication._id ? { ...app, feedback } : app))
          );
          document.getElementById('feedback_modal').close();
        } else {
          Swal.fire('Error', 'Failed to add feedback', 'error');
        }
      })
      .finally(() => setIsSubmitting(false));
  };

  const handleCancelApplication = (id) => {
    Swal.fire({
      title: 'Are you sure you want to cancel this application?',
      text: 'Once canceled, the application status will be set to rejected.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://scholarship-server-project.vercel.app/apply-scholarship/${id}/cancel`, { method: 'PUT' })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire('Cancelled', 'The application has been rejected.', 'success');
              setScholarships((prev) =>
                prev.map((app) => (app._id === id ? { ...app, status: 'rejected' } : app))
              );
            } else {
              Swal.fire('Error', 'Failed to cancel the application', 'error');
            }
          });
      }
    });
  };

  const handleStatusChange = (id, newStatus) => {
    fetch(`https://scholarship-server-project.vercel.app/apply-scholarship/${id}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire('Success', 'Application status updated!', 'success');
          setScholarships((prev) =>
            prev.map((app) => (app._id === id ? { ...app, status: newStatus } : app))
          );
        } else {
          Swal.fire('Error', 'Failed to update status', 'error');
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl text-green-500 font-bold mb-5">
        All Applied Scholarships: {filteredScholarships.length}
      </h2>

      {/* Sorting/Filtering Dropdown */}
      <div className="flex justify-center mb-5">
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="select select-bordered w-1/3 text-center"
        >
          <option value="">Sort By</option>
          <option value="appliedDate">Applied Date</option>
          <option value="deadline">Scholarship Deadline</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-xl text-green-500">
          <thead className="text-blue-500 text-xl">
            <tr>
              <th>University Name</th>
              <th>Subject Category</th>
              {/* <th>Location</th> */}
              <th>Degree</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map((application) => (
                <tr key={application._id}>
                  <td>{application.universityName}</td>
                  <td>{application.subjectCategory}</td>
                  {/* <td>
                    {application.location
                      ? ${application.location.country}, ${application.location.city}
                      : 'N/A'}
                  </td> */}
                  <td>{application.apply_degree}</td>
                  <td>
                    <select
                      value={application.status}
                      onChange={(e) => handleStatusChange(application._id, e.target.value)}
                      className="select select-md"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td className="space-x-4">
                    <button
                      className="btn btn-outline text-base btn-success mb-3 btn-xs"
                      onClick={() => handleDetails(application)}
                    >
                      Details
                    </button>
                    <button
                      className="btn btn-outline btn-info text-base btn-xs"
                      onClick={() => handleFeedback(application._id)}
                    >
                      Feedback
                    </button>
                    <button
                      className="btn btn-outline text-base btn-error btn-xs"
                      onClick={() => handleCancelApplication(application._id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No applications found.</td>
              </tr>


            )}



 {/* Details Modal */}
 <dialog id="details_modal" className='modal modal-scroll bg-blue-800 bg-opacity-15' >
   {selectedApplication && (
    <div className="modal-box bg-blue-900 bg-opacity-20 p-6 max-w-lg mx-auto text-center">
      <h3 className="text-4xl font-semibold text-green-500 mb-4">Application Details</h3>
      <div className="text-left mb-4 text-xl text-white ">
        <p><strong>University:</strong> {selectedApplication.universityName}</p>
        <p><strong>Degree:</strong> {selectedApplication.apply_degree}</p>
        <p><strong>Scholarship Category:</strong> {selectedApplication.subjectCategory}</p>
      </div>
      <div className="modal-action flex justify-center gap-4">
        <button
          onClick={() => document.getElementById('details_modal').close()}
          className="text-lg px-6 py-2 text-white btn btn-outline btn-success rounded-lg">
          Close
        </button>
      </div>
    </div>
  )}
</dialog>


 <dialog id="feedback_modal" className='modal modal-bottom sm:modal-middle'>
   <div className="modal-content bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-lg max-w-lg w-full">
     <h3 className="text-green-500 text-3xl font-semibold mb-4">Provide Feedback</h3>
    <textarea
      className="textarea textarea-bordered w-full mb-4 p-4 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      value={feedback}
      onChange={(e) => setFeedback(e.target.value)}
      placeholder="Enter your feedback"
      rows="5"
    />
    <div className='flex justify-center gap-2'>
        <button className='btn btn-outline btn-info'
        onClick={handleSubmitFeedback} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
        <button className='btn btn-outline btn-error'
         onClick={() => document.getElementById('feedback_modal').close()}>
          Cancel
        </button>
        </div>
  </div>
</dialog> 






          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAppliedApplication;





















