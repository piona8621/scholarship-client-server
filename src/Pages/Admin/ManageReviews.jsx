// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';

// const ManageReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://:5000/all-reviews')
//       .then((response) => response.json())
//       .then((data) => {
//         setReviews(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching reviews:', error);
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/all-reviews/${id}`, { method: 'DELETE' })
//           .then((response) => response.json())
//           .then(() => {
//             setReviews(reviews.filter((review) => review._id !== id));
//             Swal.fire({
//               title: 'Deleted!',
//               text: 'Review deleted successfully.',
//               icon: 'success',
//               confirmButtonText: 'OK',
//             });
//           })
//           .catch((error) => {
//             console.error('Error deleting review:', error);
//             Swal.fire({
//               title: 'Error!',
//               text: 'There was an issue deleting the review.',
//               icon: 'error',
//               confirmButtonText: 'OK',
//             });
//           });
//       }
//     });
//   };
  
//   return (
//     <div>
//       <h2>All Reviews</h2>
//       {loading ? (
//         <div>Loading reviews...</div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {reviews.map((review) => (
//             <div key={review._id} className="card bg-blue-800 opacity-40 p-4">
//               <h3 className='text-white'>{review.universityName}</h3>
//               <p><strong>Category:</strong> {review.scholarshipName}</p>
//               <div className="flex items-center">
//                 <img src={review.userImage} alt="Reviewer" className="w-12 h-12 rounded-full mr-4" />
//                 <div>
//                   <p><strong>{review.reviewer_name}</strong></p>
//                   <p><small>{new Date(review.reviewDate).toLocaleDateString()}</small></p>
//                 </div>
//               </div>
//               <p><strong>Rating:</strong> {review.rating}/5</p>
//               <p>{review.comments}</p>
//               <button
//                 onClick={() => handleDelete(review._id)}
//                 className="btn btn-outline btn-danger mt-2"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageReviews; 






















// import React, { useState, useEffect, useContext } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../Provider/AuthProvider";

// const ManageReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const {user} = useContext(AuthContext);

//   useEffect(() => {
//     fetch("http://:5000/all-reviews")
//       .then((response) => response.json())
//       .then((data) => {
//         setReviews(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching reviews:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/all-reviews/${id}`, { method: "DELETE" })
//           .then((response) => response.json())
//           .then(() => {
//             setReviews(reviews.filter((review) => review._id !== id));
//             Swal.fire({
//               title: "Deleted!",
//               text: "Review deleted successfully.",
//               icon: "success",
//               confirmButtonText: "OK",
//             });
//           })
//           .catch((error) => {
//             console.error("Error deleting review:", error);
//             Swal.fire({
//               title: "Error!",
//               text: "There was an issue deleting the review.",
//               icon: "error",
//               confirmButtonText: "OK",
//             });
//           });
//       }
//     });
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">All Reviews</h2>
//       {loading ? (
//         <div className="text-center text-gray-600">Loading reviews...</div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review) => (
//             <div key={review._id} className="bg-blue-800 bg-opacity-15 rounded-lg shadow-lg p-5">
//               <h3 className="text-lg font-bold text-green-500 mb-2">{review.universityName}</h3>
//               <p className=" mb-3 text-white">
//                 <strong className="text-white">Scholarship:</strong> {review.scholarshipName}
//               </p>
//               <div className="flex items-center mb-4 mr-20">
//                 <img
//                   src={review.userImage}
//                   alt="Reviewer"
//                   className="w-20 h-20 rounded-full border-2 border-blue-800 mr-4"
//                 /> 
//                 <div>
//                   <p className="font-semibold text-white">{review.userName}</p>
//                   <p className="text-sm text-gray-500">
//                     {new Date(review.reviewDate).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-gray-800 mb-3">
//                 <strong>Rating:</strong> {review.rating}/5
//               </p>
              
//               <p className="text-gray-600 italic mb-4">"{review.comment}"</p>
//               <button
//                 onClick={() => handleDelete(review._id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageReviews;

































































import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const ManageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://scholarship-server-project.vercel.app/all-reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://scholarship-server-project.vercel.app/all-reviews/${id}`, { method: "DELETE" })
          .then((response) => response.json())
          .then(() => {
            setReviews(reviews.filter((review) => review._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Review deleted successfully.",
              icon: "success",
              confirmButtonText: "OK",
            });
          })
          .catch((error) => {
            console.error("Error deleting review:", error);
            Swal.fire({
              title: "Error!",
              text: "There was an issue deleting the review.",
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      }
    });
  };

  return (
    <div className="p-6">
      <Helmet>
              <title> ProFellow | Manage Reviews </title>
            </Helmet>
      <h2 className="text-2xl font-bold text-center text-green-500 mb-6">All Reviews</h2>
      {loading ? (
        <div className="text-center text-gray-600">Loading reviews...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review._id} className="bg-blue-800 bg-opacity-15 rounded-lg shadow-lg p-5">
              <div className="flex items-center ml-16 mb-4">
                <img
                  src={review.userImage}
                  alt="Reviewer"
                  className="w-16 h-16 rounded-full border-2 border-blue-800 mr-4"
                />
                <div>
                  <p className="font-semibold text-white">{review.userName}</p>
                  <p className="text-sm text-white">
                    {new Date(review.reviewDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-green-500 mb-2">{review.universityName}</h3>
              <p className="mb-3 text-white">
                <strong>Scholarship:</strong> {review.scholarshipName}
              </p>
              <p className="text-white mb-3">
                <strong>Rating:</strong> {review.rating}/5
              </p>
              <p className="text-white italic mb-4 "> Comment: "{review.comment}"</p>
              <button
                onClick={() => handleDelete(review._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageReviews;























































// import React, { useState, useEffect, useContext } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { Helmet } from "react-helmet-async";

// const ManageReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     fetch("https://scholarship-server-project.vercel.app/all-reviews")
//       .then((response) => response.json())
//       .then((data) => {
//         setReviews(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching reviews:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://scholarship-server-project.vercel.app/all-reviews/${id}`, { method: "DELETE" })
//           .then((response) => response.json())
//           .then(() => {
//             setReviews(reviews.filter((review) => review._id !== id));
//             Swal.fire({
//               title: "Deleted!",
//               text: "Review deleted successfully.",
//               icon: "success",
//               confirmButtonText: "OK",
//             });
//           })
//           .catch((error) => {
//             console.error("Error deleting review:", error);
//             Swal.fire({
//               title: "Error!",
//               text: "There was an issue deleting the review.",
//               icon: "error",
//               confirmButtonText: "OK",
//             });
//           });
//       }
//     });
//   };

//   return (
//     <div className="p-4 sm:p-6">
//       <Helmet>
//         <title>ProFellow | Manage Reviews</title>
//       </Helmet>
//       <h2 className="text-2xl font-bold text-center text-green-500 mb-6">All Reviews</h2>
//       {loading ? (
//         <div className="text-center text-gray-600">Loading reviews...</div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {reviews.map((review) => (
//             <div
//               key={review._id}
//               className="bg-blue-800 bg-opacity-15 rounded-lg shadow-lg p-5 transition-all transform hover:scale-105"
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={review.userImage}
//                   alt="Reviewer"
//                   className="w-16 h-16 rounded-full border-2 border-blue-800 mr-4"
//                 />
//                 <div>
//                   <p className="font-semibold text-white">{review.userName}</p>
//                   <p className="text-sm text-white">
//                     {new Date(review.reviewDate).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//               <h3 className="text-lg font-bold text-green-500 mb-2">{review.universityName}</h3>
//               <p className="mb-3 text-white">
//                 <strong>Scholarship:</strong> {review.scholarshipName}
//               </p>
//               <p className="text-white mb-3">
//                 <strong>Rating:</strong> {review.rating}/5
//               </p>
//               <p className="text-white italic mb-4">Comment: "{review.comment}"</p>
//               <button
//                 onClick={() => handleDelete(review._id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded-md w-full sm:w-auto hover:bg-red-600 transition-colors"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageReviews;











