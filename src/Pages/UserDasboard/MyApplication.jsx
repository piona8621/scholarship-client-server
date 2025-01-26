






// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';

// const MyApplication = () => {
//   const { user } = useContext(AuthContext);
//   const [scholar, setScholar] = useState([]);

//   useEffect(() => {
//     fetch(`http://:5000/apply-scholarship?email=${user.email}`)
//       .then(res => res.json())
//       .then(data => {
//         console.log('Fetched data:', data); // Debugging
//         if (Array.isArray(data)) {
//           setScholar(data);
//         } else {
//           setScholar([]); // Set empty array for invalid data
//         }
//       })
//       .catch(err => {
//         console.error('Fetch error:', err);
//         setScholar([]); // Fallback to empty array on error
//       });
//   }, [user.email]);

//   const handleEdit = (status) => {
//     if (status === 'pending') {
//       Swal.fire('You can edit your application');
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'You cannot edit a processed or completed application!',
//       });
//     }
//   };

//   const handleCancel = (id) => {
//     Swal.fire({
//       title: 'Are you sure you want to cancel?',
//       text: 'Once canceled, you cannot reverse the action!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/cancel-application/${id}`, { method: 'DELETE' })
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
//               setScholar(scholar.filter(app => app._id !== id));
//             } else {
//               Swal.fire('Error', 'Failed to cancel the application', 'error');
//             }
//           });
//       }
//     });
//   };

//   return (
//     <div>
//       <h2>My Applications: {scholar.length}</h2>
//       <div className="overflow-x-auto">
//         <table className="table table-xs">
//           <thead>
//             <tr>
//               <th>University Name</th>
//               <th>Subject Category</th>
//               <th>Address</th>
//               <th>Applied Degree</th>
//               <th>Application Fees</th>
//               <th>Service Charge</th>
//               <th>FeedBack</th>
//               <th>Application Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.isArray(scholar) && scholar.length > 0 ? (
//               scholar.map((scholarShip) => (
//                 <tr key={scholarShip._id}>
//                   <td>{scholarShip.universityName}</td>
//                   <td>{scholarShip.subjectCategory}</td>
//                   <td>
//                     {scholarShip.location
//                       ? `${scholarShip.location.country}, ${scholarShip.location.city}`
//                       : 'Location not provided'}
//                   </td>
//                   <td>{scholarShip.degree}</td>
//                   <td>{scholarShip.fees}</td>
//                   <td>{scholarShip.services}</td>
//                   <td>{scholarShip.feedback}</td>
//                   <td>{scholarShip.status}</td>
//                   <td>
//                     <button className="btn btn-outline btn-xs" onClick={() => handleEdit(scholarShip.status)}>
//                       Details
//                     </button>
//                     {scholarShip.status === 'pending' && (
//                       <button className="btn btn-outline btn-xs" onClick={() => handleEdit(scholarShip.status)}>
//                         Edit
//                       </button>
//                     )}
//                     <button className="btn btn-outline btn-xs" onClick={() => handleCancel(scholarShip._id)}>
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9">No applications found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyApplication;



































// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import { Link, useNavigate } from 'react-router-dom';

// const MyApplication = () => {
//   const { user } = useContext(AuthContext);
//   const [scholar, setScholar] = useState([]);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedScholar, setSelectedScholar] = useState(null);
//   const navigate = useNavigate()
//   useEffect(() => {
//     fetch(`http://:5000/apply-scholarship?email=${user.email}`)
//       .then(res => res.json())
//       .then(data => {
//         if (Array.isArray(data)) setScholar(data);
//         else setScholar([]);
//       })
//       .catch(err => {
//         console.error('Fetch error:', err);
//         setScholar([]);
//       });
//   }, [user.email]);

//   const handleDetails = (id) => {
//     // Navigate to details page
//     // window.location.href = `/scholarship-details/${id}`;
//     navigate(`/scholar/${id}`);
//     console.log(id)
//   };

//   const handleEdit = (status) => {
//     if (status === 'pending') {
//       Swal.fire('You can edit your application');
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Cannot Edit',
//         text: 'You cannot edit an application that is processing, completed, or rejected!',
//       });
//     }
//   };

//   const handleCancel = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'Once canceled, this action cannot be reversed.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/cancel-application/${id}`, { method: 'DELETE' })
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
//               setScholar(scholar.filter(app => app._id !== id));
//             } else {
//               Swal.fire('Error', 'Failed to cancel the application', 'error');
//             }
//           });
//       }
//     });
//   };

//   const handleAddReview = (scholarship) => {
//     setSelectedScholar(scholarship);
//     setShowReviewModal(true);
//   };

//   const handleSubmitReview = (e) => {
//     e.preventDefault();
//     const reviewData = {
//       scholarshipName: selectedScholar.universityName,
//       universityName: selectedScholar.universityName,
//       universityId: selectedScholar._id,
//       userName: user.displayName,
//       userImage: user.photoURL,
//       userEmail: user.email,
//       rating: e.target.rating.value,
//       comment: e.target.comment.value,
//       date: new Date().toISOString(),
//     };

//     fetch('http://:5000/reviews', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(reviewData),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           Swal.fire('Review Submitted!', 'Your review has been successfully submitted.', 'success');
//           setShowReviewModal(false);
//           setSelectedScholar(null);
//         } else {
//           Swal.fire('Error', 'Failed to submit the review.', 'error');
//         }
//       });
//   };

//   return (
//     <div>
//       <h2>My Applications: {scholar.length}</h2>
//       <div className="overflow-x-auto">
//         <table className="table table-xs">
//           <thead>
//             <tr>
//               <th>University Name</th>
//               <th>Subject Category</th>
//               <th>Address</th>
//               <th>Applied Degree</th>
//               <th>Application Fees</th>
//               <th>Service Charge</th>
//               <th>Feedback</th>
//               <th>Application Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {scholar.length > 0 ? (
//               scholar.map((scholarship) => (
//                 <tr key={scholarship._id}>
//                   <td>{scholarship.universityName}</td>
//                   <td>{scholarship.subjectCategory}</td>
//                   <td>
//                     {scholarship.location
//                       ? `${scholarship.location.country}, ${scholarship.location.city}`
//                       : 'Not Provided'}
//                   </td>
//                   <td>{scholarship.degree}</td>
//                   <td>{scholarship.fees}</td>
//                   <td>{scholarship.services}</td>
//                   <td>{scholarship.feedback || 'No Feedback'}</td>
//                   <td>{scholarship.status}</td>
//                   <td>
//                   <Link to={`/scholarship-details/${scholarship._id}`}>
//                           <button className="btn btn-outline">Scholarship Details</button>
//                         </Link>
//                     {scholarship.status === 'pending' && (
//                       <button
//                         className="btn btn-outline btn-xs"
//                         onClick={() => handleEdit(scholarship.status)}
//                       >
//                         Edit
//                       </button>
//                     )}
//                     <button
//                       className="btn btn-outline btn-xs"
//                       onClick={() => handleCancel(scholarship._id)}
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       className="btn btn-outline btn-xs"
//                       onClick={() => handleAddReview(scholarship)}
//                     >
//                       Add Review
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9">No applications found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {showReviewModal && (
//         <div className="modal">
//           <form onSubmit={handleSubmitReview}>
//             <h3>Submit Review</h3>
//             <input type="text" name="rating" placeholder="Rating (1-5)" required />
//             <textarea name="comment" placeholder="Review Comment" required></textarea>
//             <button type="submit" className="btn btn-primary">Submit</button>
//             <button type="button" className="btn btn-secondary" onClick={() => setShowReviewModal(false)}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyApplication;



























































// 123456789
// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import { Link, useNavigate, useParams } from 'react-router-dom';

// const MyApplication = () => {
//   const { user } = useContext(AuthContext);
//   const [scholar, setScholar] = useState([]);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedScholar, setSelectedScholar] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://:5000/apply-scholarship?email=${user.email}`)
//       .then(res => res.json())
//       .then(data => {
//         if (Array.isArray(data)) setScholar(data);
//         else setScholar([]);
//       })
//       .catch(err => {
//         console.error('Fetch error:', err);
//         setScholar([]);
//       });
//   }, [user.email]);

//   const handleDetails = (id) => {
//     navigate(`/scholarship-details/${id}`);
//   };

//   const handleEdit = (status) => {
//     if (status === 'pending') {
//       // Navigate to edit page or perform edit logic
//     } else {
//       Swal.fire('Cannot Edit', 'Application is processing or completed.', 'error');
//     }
//   };




//   // const handleCancel = (id) => {
//   //   Swal.fire({
//   //     title: 'Are you sure?',
//   //     text: 'Do you want to cancel this application?',
//   //     icon: 'warning',
//   //     showCancelButton: true,
//   //     confirmButtonText: 'Yes, cancel it!',
//   //     cancelButtonText: 'No, keep it',
//   //   }).then((result) => {
//   //     if (result.isConfirmed) {
//   //       // Call API to cancel the application
//   //       Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
//   //     }
//   //   });
//   // };




//   const handleCancel = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to cancel this application?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/apply-scholarship/${id}/cancel`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
//               setScholar(prevScholar => prevScholar.filter(app => app._id !== id)); // Remove from frontend state
//             } else {
//               Swal.fire('Error', 'Failed to cancel the application', 'error');
//             }
//           })
//           .catch(err => {
//             console.error('Cancel error:', err);
//             Swal.fire('Error', 'Something went wrong', 'error');
//           });
//       }
//     });
//   };
  




//   // const handleAddReview = (scholarship) => {
//   //   setSelectedScholar(scholarship);
//   //   setShowReviewModal(true);
//   // };

  

//   const handleAddReview = (scholarship) => {
//     console.log('Scholarship selected for review:', scholarship);
//     setSelectedScholar(scholarship);
//     setShowReviewModal(true);
//   };
  



//   const handleSubmitReview = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const reviewData = {
//       rating: formData.get('rating'),
//       comment: formData.get('comment'),
//       reviewDate: new Date().toISOString(),
//       scholarshipName: selectedScholar.universityName,
//       universityName: selectedScholar.universityName,
//       universityId: selectedScholar._id,
//       userName: user.name,
//       userImage: user.image || '',
//       userEmail: user.email,
//     };

//     // Submit the review data to the server
//     console.log('Review submitted:', reviewData);
//     setShowReviewModal(false);
//     Swal.fire('Review Submitted', 'Your review has been submitted successfully.', 'success');
//   };

//   return (
//     <div>
//       <h2>My Applications: {scholar.length}</h2>
//       <div className="overflow-x-auto">
//         <table className="table table-xs">
//           <thead>
//             <tr>
//               <th>University Name</th>
//               <th>Subject Category</th>
//               <th>Address</th>
//               <th>Applied Degree</th>
//               <th>Application Fees</th>
//               <th>Service Charge</th>
//               <th>Feedback</th>
//               <th>Application Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {scholar.length > 0 ? (
//               scholar.map((scholarship) => (
//                 <tr key={scholarship._id}>
//                   <td>{scholarship.universityName}</td>
//                   <td>{scholarship.subjectCategory}</td>
//                   <td>{scholarship.location ? `${scholarship.location.country}, ${scholarship.location.city}` : 'Not Provided'}</td>
//                   <td>{scholarship.apply_degree}</td>
//                   <td>{scholarship.fees}</td>
//                   <td>{scholarship.services}</td>
//                   <td>{scholarship.feedback || 'No Feedback'}</td>
//                   <td>{scholarship.status}</td>
//                   <td>
//                     <button className="btn btn-info btn-xs" onClick={() => handleDetails(scholarship.scholar_id)}>Details</button>
//                     {scholarship.status === 'pending' && (
//                       <button className="btn btn-outline btn-xs" onClick={() => handleEdit(scholarship.status)}>Edit</button>
//                     )}
//                     <button className="btn btn-outline btn-xs" onClick={() => handleCancel(scholarship._id)}>Cancel</button>

//                     <button className="btn btn-outline btn-xs" onClick={() => handleAddReview(scholarship)}>Add Review</button>

//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9">No applications found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* {showReviewModal && (
//         <div className="modal">
//           <form onSubmit={handleSubmitReview}>
//             <h3>Submit Review</h3>
//             <input type="text" name="rating" placeholder="Rating (1-5)" required />
//             <textarea name="comment" placeholder="Review Comment" required></textarea>
//             <button type="submit" className="btn btn-primary">Submit</button>
//             <button type="button" className="btn btn-secondary" onClick={() => setShowReviewModal(false)}>Cancel</button>
//           </form>
//         </div>
//       )} */}


// {showReviewModal && selectedScholar && (
//   <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//     <form
//       onSubmit={handleSubmitReview}
//       className="bg-white p-6 rounded shadow-lg"
//     >
//       <h3 className="text-lg font-semibold mb-4">Submit Review</h3>
//       <input
//         type="number"
//         name="rating"
//         placeholder="Rating (1-5)"
//         min="1"
//         max="5"
//         className="border p-2 mb-4 w-full"
//         required
//       />
//       <textarea
//         name="comment"
//         placeholder="Review Comment"
//         className="border p-2 mb-4 w-full"
//         required
//       ></textarea>
//       <button type="submit" className="btn btn-primary mr-2">Submit</button>
//       <button
//         type="button"
//         className="btn btn-secondary"
//         onClick={() => setShowReviewModal(false)}
//       >
//         Cancel
//       </button>
//     </form>
//   </div>
// )}


     

//     </div>
//   );
// };

// export default MyApplication;



































































// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const MyApplication = () => {
//   const { user } = useContext(AuthContext);
//   const [scholar, setScholar] = useState([]);
//   const [showReviewModal, setShowReviewModal] = useState(false); // Modal visibility controlled by state
//   const [selectedScholar, setSelectedScholar] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://:5000/apply-scholarship?email=${user.email}`)
//       .then(res => res.json())
//       .then(data => {
//         if (Array.isArray(data)) setScholar(data);
//         else setScholar([]);
//       })
//       .catch(err => {
//         console.error('Fetch error:', err);
//         setScholar([]);
//       });
//   }, [user.email]);

//   const handleDetails = (id) => {
//     navigate(`/scholarship-details/${id}`);
//   };

//   const handleEdit = (status) => {
//     if (status === 'pending') {
//       // Navigate to edit page or perform edit logic
//     } else {
//       Swal.fire('Cannot Edit', 'Application is processing or completed.', 'error');
//     }
//   };



//   const handleCancel = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to cancel this application?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/apply-scholarship/${id}/cancel`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
//               setScholar(prevScholar => prevScholar.filter(app => app._id !== id)); // Remove from frontend state
//             } else {
//               Swal.fire('Error', 'Failed to cancel the application', 'error');
//             }
//           })
//           .catch(err => {
//             console.error('Cancel error:', err);
//             Swal.fire('Error', 'Something went wrong', 'error');
//           });
//       }
//     });
//   };

//   const handleAddReview = (scholarship) => {
//     setSelectedScholar(scholarship);
//     setShowReviewModal(true); // Show modal
//   };

//   const handleSubmitReview = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const reviewData = {
//       rating: formData.get('rating'),
//       comment: formData.get('comment'),
//       reviewDate: new Date().toISOString(),
//       scholarshipName: selectedScholar.universityName,
//       universityName: selectedScholar.universityName,
//       universityId: selectedScholar._id,
//       userName: user.name,
//       userImage: user.image || '',
//       userEmail: user.email,
//     };

//     // Submit the review data to the server
//     console.log('Review submitted:', reviewData);
//     setShowReviewModal(false); // Close modal after submission
//     Swal.fire('Review Submitted', 'Your review has been submitted successfully.', 'success');
//   };

//   return (
//     <div>
//       <h2>My Applications: {scholar.length}</h2>
//       <div className="overflow-x-auto">
//         <table className="table table-xs">
//           <thead>
//             <tr>
//               <th>University Name</th>
//               <th>Subject Category</th>
//               <th>Address</th>
//               <th>Applied Degree</th>
//               <th>Application Fees</th>
//               <th>Service Charge</th>
//               <th>Feedback</th>
//               <th>Application Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {scholar.length > 0 ? (
//               scholar.map((scholarship) => (
//                 <tr key={scholarship._id}>
//                   <td>{scholarship.universityName}</td>
//                   <td>{scholarship.subjectCategory}</td>
//                   <td>{scholarship.location ? `${scholarship.location.country}, ${scholarship.location.city}` : 'Not Provided'}</td>
//                   <td>{scholarship.apply_degree}</td>
//                   <td>{scholarship.fees}</td>
//                   <td>{scholarship.services}</td>
//                   <td>{scholarship.feedback || 'No Feedback'}</td>
//                   <td>{scholarship.status}</td>
//                   <td>
//                     <button className="btn btn-info btn-xs" onClick={() => handleDetails(scholarship.scholar_id)}>Details</button>

//                     {scholarship.status === 'pending' && (
//                       <button className="btn btn-outline btn-xs" onClick={() => handleEdit(scholarship.status)}>Edit</button>
//                     )}

//                     <button className="btn btn-outline btn-xs" onClick={() => handleCancel(scholarship._id)}>Cancel</button>

//                     <button className="btn btn-outline btn-xs" onClick={() => handleAddReview(scholarship)}>Add Review</button>

//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9">No applications found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for adding review */}
//       {showReviewModal && (
//         <div className="modal modal-open">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Submit Review</h3>
//             <form onSubmit={handleSubmitReview}>
//               <div>
//                 <label htmlFor="rating">Rating (1-5):</label>
//                 <input type="number" id="rating" name="rating" min="1" max="5" required />
//               </div>
//               <div>
//                 <label htmlFor="comment">Review Comment:</label>
//                 <textarea id="comment" name="comment" required></textarea>
//               </div>
//               <div className="modal-action">
//                 <button type="submit" className="btn">Submit</button>
//                 <button type="button" className="btn" onClick={() => setShowReviewModal(false)}>Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyApplication;


















































































































































// 456789
// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const MyApplication = () => {
//   const { user } = useContext(AuthContext);
//   const [scholar, setScholar] = useState([]);
//   const [showReviewModal, setShowReviewModal] = useState(false); // Modal visibility controlled by state
//   const [selectedScholar, setSelectedScholar] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`https://scholarship-server-project.vercel.app/apply-scholarship?email=${user.email}`)
//       .then(res => res.json())
//       .then(data => {
//         if (Array.isArray(data)) setScholar(data);
//         else setScholar([]);
//       })
//       .catch(err => {
//         console.error('Fetch error:', err);
//         setScholar([]);
//       });
//   }, [user.email]);

//   const handleDetails = (id) => {
//     navigate(`/scholarship-details/${id}`);
//   };

//   const handleEdit = (status) => {
//     if (status === 'pending') {
//       // Navigate to edit page or perform edit logic
//     } else {
//       Swal.fire('Cannot Edit', 'Application is processing, completed, or rejected.', 'error');
//     }
//   };

//   const handleCancel = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to cancel this application?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://scholarship-server-project.vercel.app/apply-scholarship/${id}/cancel`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
//               setScholar(prevScholar => prevScholar.filter(app => app._id !== id)); // Remove from frontend state
//             } else {
//               Swal.fire('Error', 'Failed to cancel the application', 'error');
//             }
//           })
//           .catch(err => {
//             console.error('Cancel error:', err);
//             Swal.fire('Error', 'Something went wrong', 'error');
//           });
//       }
//     });
//   };

//   const handleAddReview = (scholarship) => {
//     setSelectedScholar(scholarship);
//     setShowReviewModal(true); // Show modal
//   };

//   const handleSubmitReview = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const reviewData = {
//       rating: formData.get('rating'),
//       comment: formData.get('comment'),
//       reviewDate: new Date().toISOString(),
//       scholarshipName: selectedScholar.universityName,
//       universityName: selectedScholar.universityName,
//       universityId: selectedScholar._id,
//       userName: user.name,
//       userImage: user.image || '',
//       userEmail: user.email,
//     };

//     // Submit the review data to the server
//     console.log('Review submitted:', reviewData);
//     setShowReviewModal(false); // Close modal after submission
//     Swal.fire('Review Submitted', 'Your review has been submitted successfully.', 'success');
//   };

//   return (
//     <div>
//       <h2>My Applications: {scholar.length}</h2>
//       <div className="overflow-x-auto">
//         <table className="table table-xs">
//           <thead>
//             <tr>
//               <th>University Name</th>
//               <th>Subject Category</th>
//               <th>Address</th>
//               <th>Applied Degree</th>
//               <th>Application Fees</th>
//               <th>Service Charge</th>
//               <th>Feedback</th>
//               <th>Application Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {scholar.length > 0 ? (
//               scholar.map((scholarship) => (
//                 <tr key={scholarship._id}>
//                   <td>{scholarship.universityName}</td>
//                   <td>{scholarship.subjectCategory}</td>
//                   <td>{scholarship.location ? `${scholarship.location.country}, ${scholarship.location.city}` : 'Not Provided'}</td>
//                   <td>{scholarship.apply_degree}</td>
//                   <td>{scholarship.fees}</td>
//                   <td>{scholarship.services}</td>
//                   <td>{scholarship.feedback || 'No Feedback'}</td>
//                   <td>{scholarship.status}</td>
//                   <td>
//                     <button className="btn btn-info btn-xs" onClick={() => handleDetails(scholarship.scholar_id)}>Details</button>
//                     {scholarship.status === 'pending' && (
//                       <button className="btn btn-outline btn-xs btn-success" onClick={() => handleEdit(scholarship.status)}>Edit</button>
//                     )}
//                     <button className="btn btn-outline btn-xs" onClick={() => handleCancel(scholarship._id)}>Cancel</button>
//                     <button className="btn btn-outline btn-xs" onClick={() => handleAddReview(scholarship)}>Add Review</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9">No applications found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for adding review */}
//       {showReviewModal && (
//         <div className="modal modal-open">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Submit Review</h3>
//             <form onSubmit={handleSubmitReview}>
//               <div>
//                 <label htmlFor="rating">Rating (1-5):</label>
//                 <input type="number" id="rating" name="rating" min="1" max="5" required />
//               </div>
//               <div>
//                 <label htmlFor="comment">Review Comment:</label>
//                 <textarea id="comment" name="comment" required></textarea>
//               </div>
//               <div className="modal-action">
//                 <button type="submit" className="btn">Submit</button>
//                 <button type="button" className="btn" onClick={() => setShowReviewModal(false)}>Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyApplication;




























































// 1234567890-
// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const MyApplication = () => {
//   const { user } = useContext(AuthContext);
//   const [scholar, setScholar] = useState([]);
//   const [showReviewModal, setShowReviewModal] = useState(false); // Modal visibility controlled by state
//   const [selectedScholar, setSelectedScholar] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://:5000/apply-scholarship?email=${user.email}`)
//       .then(res => res.json())
//       .then(data => {
//         if (Array.isArray(data)) setScholar(data);
//         else setScholar([]);
//       })
//       .catch(err => {
//         console.error('Fetch error:', err);
//         setScholar([]);
//       });
//   }, [user.email]);

//   const handleDetails = (id) => {
//     navigate(`/scholarship-details/${id}`);
//   };

//   const handleEdit = (status) => {
//     if (status === 'pending') {
//       Swal.fire('Editing not yet implemented.');
//     } else {
//       Swal.fire('Cannot Edit', 'Application is processing, completed, or rejected.', 'error');
//     }
//   };

//   const handleCancel = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to cancel this application?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//       cancelButtonText: 'No, keep it',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/apply-scholarship/${id}/cancel`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
//               setScholar(prevScholar => prevScholar.filter(app => app._id !== id)); // Remove from frontend state
//             } else {
//               Swal.fire('Error', 'Failed to cancel the application', 'error');
//             }
//           })
//           .catch(err => {
//             console.error('Cancel error:', err);
//             Swal.fire('Error', 'Something went wrong', 'error');
//           });
//       }
//     });
//   };

//   const handleAddReview = (scholarship) => {
//     setSelectedScholar(scholarship);
//     setShowReviewModal(true); // Show modal
//   };

//   // const handleSubmitReview = (event) => {
//   //   event.preventDefault();
//   //   const formData = new FormData(event.target);
//   //   const reviewData = {
//   //     rating: formData.get('rating'),
//   //     comment: formData.get('comment'),
//   //     reviewDate: new Date().toISOString(),
//   //     scholarshipName: selectedScholar.scholarshipName,
//   //     universityName: selectedScholar.universityName,
//   //     universityId: selectedScholar._id,
//   //     userName: user.displayName || user.name,
//   //     userImage: user.photoURL || '',
//   //     userEmail: user.email,
//   //   };

//   //   fetch('http://:5000/reviews', {
//   //     method: 'POST',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify(reviewData),
//   //   })
//   //     .then(res => res.json())
//   //     .then(data => {
//   //       if (data.success) {
//   //         Swal.fire('Review Submitted', 'Your review has been submitted successfully.', 'success');
//   //         setShowReviewModal(false); // Close modal
//   //       } else {
//   //         Swal.fire('Error', 'Failed to submit the review', 'error');
//   //       }
//   //     })
//   //     .catch(err => {
//   //       console.error('Review submission error:', err);
//   //       Swal.fire('Error', 'Something went wrong while submitting the review', 'error');
//   //     });
//   // };




//   const handleSubmitReview = (event) => {
//     event.preventDefault();
  
//     const formData = new FormData(event.target);
//     const rating = parseInt(formData.get('rating'), 10);
//     const comment = formData.get('comment');
  
//     if (!rating || rating < 1 || rating > 5) {
//       Swal.fire('Invalid Rating', 'Rating must be between 1 and 5.', 'error');
//       return;
//     }
  
//     if (!comment.trim()) {
//       Swal.fire('Empty Comment', 'Please provide a review comment.', 'error');
//       return;
//     }
  
//     const reviewData = {
//       rating,
//       comment,
//       reviewDate: new Date().toISOString(),
//       scholarshipName: selectedScholar.scholarshipCategory,
//       universityName: selectedScholar.universityName,
//       // universityAddress: selectedScholar.location ? `${selectedScholar.location.country}, ${selectedScholar.location.city}` : 'Not Provided', // Add the address here
//       universityId: selectedScholar._id,
//       userName: user.displayName || user.name,
//       userImage: user.photoURL || '',
//       userEmail: user.email,
//     };
  
//     fetch('http://:5000/reviews', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(reviewData),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           Swal.fire(
//             'Review Submitted',
//             `Your review for ${selectedScholar.scholarshipName} has been submitted successfully.`,
//             'success'
//           );
//           setShowReviewModal(false);
//         } else {
//           Swal.fire('Error', 'Failed to submit the review', 'error');
//         }
//       })
//       .catch(err => {
//         console.error('Review submission error:', err);
//         Swal.fire('Error', 'Something went wrong while submitting the review', 'error');
//       });
//   };
  







//   return (
//     <div>
//       <h2 className='text-2xl text-green-500'>My Applications: {scholar.length}</h2>
//       <div className=" overflow-x-auto text-white">
//         <table className="table">
//           <thead >
//             <tr className='text-green-500 '>
//               <th>University Name</th>
//               <th>ScholarShip Name</th>
//               <th>Subject Category</th>
//               <th>Address</th>
//               <th>Applied Degree</th>
//               <th>Application Fees</th>
//               <th>Service Charge</th>
//               <th>Feedback</th>
//               <th>Application Status</th>
//               <th className='text-center'>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {scholar.length > 0 ? (
//               scholar.map((scholarship) => (
//                 <tr key={scholarship._id}>
//                   <td>{scholarship.universityName}</td>
//                   <td>{scholarship.scholarshipCategory}</td>
//                   <td>{scholarship.subjectCategory}</td>
//                   <td>{scholarship.location ? `${scholarship.location.country}, ${scholarship.location.city}` : 'Not Provided'}</td>
//                   <td>{scholarship.apply_degree}</td>
//                   <td>{scholarship.fees}</td>
//                   <td>{scholarship.services}</td>
//                   <td>{scholarship.feedback || 'No Feedback'}</td>
//                   <td>{scholarship.status}</td>
//                   <td className='flex justify-center gap-2'>
//                     <button className="btn btn-info btn-base btn-outline mb-2" onClick={() => handleDetails(scholarship.scholar_id)}>Details</button>
//                     {scholarship.status === 'pending' && (
//                       <button className="btn btn-outline btn-base btn-success mb-2" onClick={() => handleEdit(scholarship.status)}>Edit</button>
//                     )}
//                     <button className="btn btn-outline btn-base btn-error mb-2" onClick={() => handleCancel(scholarship._id)}>Cancel</button>
//                     <button className="btn btn-outline btn-xl btn-success mb-2" onClick={() => handleAddReview(scholarship)}>Add Review</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9">No applications found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for adding review
//       {showReviewModal && (
//         <div className="modal modal-open">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Submit Review</h3>
//             <form onSubmit={handleSubmitReview}>
//               <div>
//                 <label htmlFor="rating">Rating (1-5):</label>
//                 <input type="number" id="rating" name="rating" min="1" max="5" required />
//               </div>
//               <div>
//                 <label htmlFor="comment">Review Comment:</label>
//                 <textarea id="comment" name="comment" required></textarea>
//               </div>

//               <div className="modal-action">
//                 <button type="submit" className="btn">Submit</button>
//                 <button type="button" className="btn" onClick={() => setShowReviewModal(false)}>Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}   */}

// {/* Modal for adding review */}
// {showReviewModal && (
//   <div className="modal modal-open">
//     <div className="modal-box">
//       <h3 className="font-bold text-lg">Submit Review</h3>
//       <form onSubmit={handleSubmitReview}>
//         <div>
//           <label htmlFor="rating">Rating (1-5):</label>
//           <input type="number" id="rating" name="rating" min="1" max="5" required />
//         </div>
//         <div>
//           <label htmlFor="comment">Review Comment:</label>
//           <textarea id="comment" name="comment" required></textarea>
//         </div>
//         <div>
//           <label>Review Date:</label>
//           <input
//             type="text"
//             value={new Date().toLocaleDateString()} // Display today's date
//             readOnly
//             className="input input-bordered"
//           />
//         </div>
        
//         <div className="modal-action">
//           <button type="submit" className="btn">Submit</button>
//           <button type="button" className="btn btn-outline btn-error" onClick={() => setShowReviewModal(false)}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   </div>
// )}





//     </div>
//   );
// };

// export default MyApplication;





























































import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [scholar, setScholar] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedScholar, setSelectedScholar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true); // Start loading
    fetch(`https://scholarship-server-project.vercel.app/apply-scholarship?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setScholar(Array.isArray(data) ? data : []);
        setLoading(false); // End loading
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setScholar([]);
        setLoading(false); // End loading even on error
      });
  }, [user.email]);

  const handleDetails = (id) => {
    navigate(`/scholarship-details/${id}`);
  };

  const handleEdit = (status) => {
    if (status === 'pending') {
      Swal.fire('Editing not yet implemented.');
    } else {
      Swal.fire('Cannot Edit', 'Application is processing, completed, or rejected.', 'error');
    }
  };

  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel this application?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://scholarship-server-project.vercel.app/apply-scholarship/${id}/cancel`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
              setScholar((prevScholar) => prevScholar.filter((app) => app._id !== id));
            } else {
              Swal.fire('Error', 'Failed to cancel the application', 'error');
            }
          })
          .catch((err) => {
            console.error('Cancel error:', err);
            Swal.fire('Error', 'Something went wrong', 'error');
          });
      }
    });
  };

  const handleAddReview = (scholarship) => {
    setSelectedScholar(scholarship);
    setShowReviewModal(true);
  };

  // const handleSubmitReview = (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const rating = parseInt(formData.get('rating'), 10);
  //   const comment = formData.get('comment');

  //   if (!rating || rating < 1 || rating > 5) {
  //     Swal.fire('Invalid Rating', 'Rating must be between 1 and 5.', 'error');
  //     return;
  //   }

  //   if (!comment.trim()) {
  //     Swal.fire('Empty Comment', 'Please provide a review comment.', 'error');
  //     return;
  //   }

  //   const reviewData = {
  //     rating,
  //     comment,
  //     reviewDate: new Date().toISOString(),
  //     scholarshipName: selectedScholar.scholarshipCategory,
  //     universityName: selectedScholar.universityName,
  //     universityId: selectedScholar._id,
  //     userName: user.displayName || user.name,
  //     userImage: user.photoURL || '',
  //     userEmail: user.email,
  //   };




  //   // fetch('https://scholarship-server-project.vercel.app/reviews', {

  //   //   method: 'POST',
  //   //   headers: { 'Content-Type': 'application/json' },
  //   //   body: JSON.stringify(reviewData),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log('api response', data)
  //   //     if (data.success) {
  //   //       Swal.fire('Review Submitted', 'Your review has been submitted successfully.', 'success');
  //   //       setShowReviewModal(false);
  //   //     } else {
  //   //       Swal.fire('Error', 'Failed to submit the review', 'error');
  //   //     }
  //   //   })
  //   //   .catch((err) => {
  //   //     console.error('Review submission error:', err);
  //   //     Swal.fire('Error', 'Something went wrong while submitting the review', 'error');
  //   //   });




  //   fetch('https://scholarship-server-project.vercel.app/reviews/all', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(reviewData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("API Response:", data); // Debugging: Check the response
  //       if (data.message === "Review submitted successfully!") {
  //         setShowReviewModal(false);
  //         Swal.fire("Review Submitted", data.message, "success");
  //       } else {
  //         Swal.fire("Error", "Failed to submit the review", "error");
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Review submission error:", err);
  //       Swal.fire("Error", "Something went wrong while submitting the review", "error");
  //     });
    



  // };







  const handleSubmitReview = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const rating = parseInt(formData.get('rating'), 10); // Ensure rating is an integer
    const comment = formData.get('comment');
  
    if (!rating || rating < 1 || rating > 5) {
      Swal.fire('Invalid Rating', 'Rating must be between 1 and 5.', 'error');
      return;
    }
  
    if (!comment.trim() || comment.length < 10) {
      Swal.fire('Invalid Comment', 'Comment must be at least 10 characters long.', 'error');
      return;
    }
  
    const reviewData = {
      rating,
      comment,
      reviewDate: new Date().toISOString(),
      scholarshipName: selectedScholar.scholarshipCategory,
      universityName: selectedScholar.universityName,
      universityId: selectedScholar._id,
      userName: user.displayName || user.name,
      userImage: user.photoURL || '',
      userEmail: user.email,
    };
  
    fetch('https://scholarship-server-project.vercel.app/reviews/all', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // Debugging: Check the response
        if (data.success) {
          setShowReviewModal(false);
          Swal.fire("Review Submitted", data.message, "success");
        } else {
          Swal.fire("Error", "Failed to submit the review", "error");
        }
      })
      .catch((err) => {
        console.error("Review submission error:", err);
        Swal.fire("Error", "Something went wrong while submitting the review", "error");
      });
  };
  


 














  return (
    
    <div>
    <h2 className='text-3xl font-bold text-green-500'>My Application</h2>
    <Helmet>
            <title> ProFellow | My Application </title>
          </Helmet>
      {loading ? ( // Show loading spinner or message
        <div className="flex justify-center items-center">
          <div className="spinner"></div> {/* Replace with any spinner component or text */}
          <p>Loading applications...</p>
        </div>
    
        
      ) : (
        <div className="overflow-x-auto text-white">
          <table className="table">
            <thead>
              <tr className="text-green-500 ">
                <th >University Name</th>
                <th>Scholarship Name</th>
                <th>Subject Category</th>
                <th>Address</th>
                <th>Applied Degree</th>
                <th>Application Fees</th>
                <th>Service Charge</th>
                <th>Feedback</th>
                <th>Application Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {scholar.length > 0 ? (
                scholar.map((scholarship) => (
                  <tr key={scholarship._id}>
                    <td>{scholarship.universityName}</td>
                    <td>{scholarship.scholarshipCategory}</td>
                    <td>{scholarship.subjectCategory}</td>
                    <td>{scholarship.location ? `${scholarship.location.country}, ${scholarship.location.city}` : 'Not Provided'}</td>
                    <td>{scholarship.apply_degree}</td>
                    <td>{scholarship.fees}</td>
                    <td>{scholarship.services}</td>
                    <td>{scholarship.feedback || 'No Feedback'}</td>
                    <td>{scholarship.status}</td>
                    <td className="flex justify-center gap-2">
                      <button className="btn btn-info btn-base btn-outline mb-2" onClick={() => handleDetails(scholarship.scholar_id)}>
                        Details
                      </button>
                      {scholarship.status === 'pending' && (
                        <button className="btn btn-outline btn-base btn-success mb-2" onClick={() => handleEdit(scholarship.status)}>
                          Edit
                        </button>
                      )}
                      <button className="btn btn-outline btn-base btn-error mb-2" onClick={() => handleCancel(scholarship._id)}>
                        Cancel
                      </button>
                      <button className="btn btn-outline btn-xl btn-success mb-2" onClick={() => handleAddReview(scholarship)}>
                        Add Review
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No applications found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {showReviewModal && (
        <div className="modal modal-open" >
          <div className="modal-box bg-blue-800 bg-opacity-15">
            <h3 className="font-bold text-lg text-green-500">Submit Review</h3>
            <form onSubmit={handleSubmitReview}>

              <div className='mb-4'>
                <label className='mr-2 text-white text-base' htmlFor="rating">Rating (1-5):</label>
                <input className='input input-bordered' type="number" id="rating" name="rating" min="1" max="5" required />
              </div>

              {/* <div>
                <label>Review Comment:</label>
                <textarea type="text"className='textarea textarea-bordered text-area-xs' id="comment" name="comment" required></textarea>
              </div> */}


<div className='mb-4'>
                <label className='mr-2 text-white text-base'>Comment:</label>
                <input
                  type="text"
                  name='comment'
                  id='comment'
                  className="input input-bordered"
                />
              </div>


              <div>
                <label className='text-base text-white mr-2'>Review Date:</label>
                <input
                  type="text"
                  value={new Date().toLocaleDateString()}
                  readOnly
                  className="input input-bordered"
                />
              </div>

              <div className="modal-action">
                <button type="submit" className="btn btn-outline btn-success">
                  Submit
                </button>
                <button type="button" className="btn btn-outline btn-error" onClick={() => setShowReviewModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default MyApplication;

















































































































































































































