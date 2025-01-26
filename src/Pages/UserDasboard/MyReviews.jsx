
// 1....
// import React, { useState, useEffect, useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// const MyReviews = () => {
//   const { user } = useContext(AuthContext);
//   const [reviews, setReviews] = useState([]);
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // Fetch the user's reviews when the component mounts
//   useEffect(() => {
//     if (user) {
//       fetch(`http://:5000/reviews?email=${user.email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           // Check if data is an array, otherwise set reviews as an empty array
//           if (Array.isArray(data)) {
//             setReviews(data);
//           } else {
//             setReviews([]); // Set an empty array if data is not an array
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching reviews:", error);
//           setReviews([]); // Set empty array in case of an error
//         });
//     }
//   }, [user]);
  
//   // Handle edit button click
//   const handleEdit = (review) => {
//     setSelectedReview(review); // Show the review in the modal for editing
//   };

//   // Handle delete button click
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://:5000/reviews/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               setReviews(reviews.filter((review) => review._id !== id));
//               Swal.fire("Deleted!", "Your review has been deleted.", "success");
//             }
//           })
//           .catch((error) => {
//             console.error("Error deleting review:", error);
//             Swal.fire("Error", "Something went wrong.", "error");
//           });
//       }
//     });
//   };

//   // Handle form submission for editing review
//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const form = e.target;
//     const updatedReview = {
//       rating: form.rating.value,
//       comment: form.comment.value,
//     };

//     fetch(`http://:5000/reviews/${selectedReview._id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedReview),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setIsLoading(false);
//         if (data.modifiedCount > 0) {
//           Swal.fire("Review Updated", "Your review has been updated.", "success");
//           setReviews(
//             reviews.map((review) =>
//               review._id === selectedReview._id ? { ...review, ...updatedReview } : review
//             )
//           );
//           setSelectedReview(null); // Close modal
//         } else {
//           Swal.fire("Error", "Failed to update the review.", "error");
//         }
//       })
//       .catch((error) => {
//         setIsLoading(false);
//         console.error("Error updating review:", error);
//         Swal.fire("Error", "Something went wrong.", "error");
//       });
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">My Reviews: {reviews.length}</h2>
//       <div className="overflow-x-auto">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Scholarship Name</th>
//               <th>University Name</th>
//               <th>Review Comments</th>
//               <th>Review Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reviews.map((review) => (
//               <tr key={review._id}>
//                 <td>{review.scholarshipCategory}</td>
//                 <td>{review.universityName}</td>
//                 <td>{review.comment}</td>
//                 <td>{new Date(review.reviewDate).toLocaleDateString()}</td>
//                 <td>
//                   <button className="btn btn-warning btn-xs ml-2" onClick={() => handleEdit(review)}>
//                     Edit
//                   </button>
//                   <button className="btn btn-danger btn-xs ml-2" onClick={() => handleDelete(review._id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for editing review */}
//       {selectedReview && (
//         <div className="modal modal-open">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Edit Review for {selectedReview.scholarshipName}</h3>
//             <form onSubmit={handleEditSubmit}>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Rating (1-5)</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="rating"
//                   min="1"
//                   max="5"
//                   defaultValue={selectedReview.rating}
//                   required
//                   className="input input-bordered"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Review Comment</span>
//                 </label>
//                 <textarea
//                   name="comment"
//                   defaultValue={selectedReview.comment}
//                   required
//                   className="textarea textarea-bordered"
//                 ></textarea>
//               </div>
//               <div className="modal-action">
//                 <button type="submit" className="btn btn-primary" disabled={isLoading}>
//                   {isLoading ? "Updating..." : "Update Review"}
//                 </button>
//                 <button type="button" className="btn" onClick={() => setSelectedReview(null)}>
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyReviews;























































// 2....
// import React, { useState, useEffect, useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

// const MyReviews = () => {
//   const { user } = useContext(AuthContext);
//   const [reviews, setReviews] = useState([]);
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // Fetch the user's reviews when the component mounts
//   useEffect(() => {
//     if (user) {
//       fetch(`http://:5000/reviews?email=${user.email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           // Check if data is an array, otherwise set reviews as an empty array
//           if (Array.isArray(data)) {
//             setReviews(data);
//           } else {
//             setReviews([]); // Set an empty array if data is not an array
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching reviews:", error);
//           setReviews([]); // Set empty array in case of an error
//         });
//     }
//   }, [user]);
  
//   // Handle edit button click
//   const handleEdit = (review) => {
//     setSelectedReview(review); // Show the review in the modal for editing
//   };

//   // Handle delete button click
//   // const handleDelete = (_id) => {
//   //   console.log(_id)

//   //   Swal.fire({
//   //     title: "Are you sure?",
//   //     text: "You won't be able to revert this!",
//   //     icon: "warning",
//   //     showCancelButton: true,
//   //     confirmButtonText: "Yes, delete it!",
//   //   }).then((result) => {
//   //     if (result.isConfirmed) {
//   //       fetch(`http://:5000/reviews/${_id}`, {
//   //         method: "DELETE",
//   //       })
//   //         .then((res) => res.json())
//   //         .then((data) => {
//   //           if (data.deletedCount > 0) {
//   //             setReviews(reviews.filter((review) => review._id !== id));
//   //             Swal.fire("Deleted!", "Your review has been deleted.", "success");
//   //           }
//   //         })
//   //         .catch((error) => {
//   //           console.error("Error deleting review:", error);
//   //           Swal.fire("Error", "Something went wrong.", "error");
//   //         });
//   //     }
//   //   });
//   // };







//   const handleDelete = (id) => {
//     console.log(id);

//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//         if (result.isConfirmed) {
//             fetch(`http://:5000/reviews/${_id}`, {
//                 method: "DELETE",
//             })
//                 .then((res) => {
//                     if (!res.ok) {
//                         throw new Error('Failed to delete review');
//                     }
//                     return res.json(); // parse the JSON response
//                 })
//                 .then((data) => {
//                     if (data.deletedCount > 0) {
//                         setReviews(reviews.filter((review) => review._id !== _id));
//                         Swal.fire("Deleted!", "Your review has been deleted.", "success");
//                     }
//                 })
//                 .catch((error) => {
//                     console.error("Error deleting review:", error);
//                     Swal.fire("Error", "Something went wrong.", "error");
//                 });
//         }
//     });
// };



















//   // Handle form submission for editing review
//   // const handleEditSubmit = (_id) => {
//   //   console.log(_id)
//   //   e.preventDefault();
//   //   setIsLoading(true);
//   //   const form = e.target;
//   //   const updatedReview = {
//   //     rating: form.rating.value,
//   //     comment: form.comment.value,
//   //   };

//   //   fetch(`http://:5000/reviews/${selectedReview._id}`, {
//   //     method: "PUT",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify(updatedReview),
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setIsLoading(false);
//   //       if (data.modifiedCount > 0) {
//   //         Swal.fire("Review Updated", "Your review has been updated.", "success");
//   //         setReviews(
//   //           reviews.map((review) =>
//   //             review._id === selectedReview._id ? { ...review, ...updatedReview } : review
//   //           )
//   //         );
//   //         setSelectedReview(null); // Close modal
//   //       } else {
//   //         Swal.fire("Error", "Failed to update the review.", "error");
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       setIsLoading(false);
//   //       console.error("Error updating review:", error);
//   //       Swal.fire("Error", "Something went wrong.", "error");
//   //     });
//   // };








//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const form = e.target;
//     const updatedReview = {
//       rating: form.rating.value,
//       comment: form.comment.value,
//     };
  
//     fetch(`http://:5000/reviews/${selectedReview._id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedReview),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setIsLoading(false);
//         if (data.modifiedCount > 0) {
//           Swal.fire("Review Updated", "Your review has been updated.", "success");
//           setReviews(
//             reviews.map((review) =>
//               review._id === selectedReview._id ? { ...review, ...updatedReview } : review
//             )
//           );
//           setSelectedReview(null); // Close modal
//         } else {
//           Swal.fire("Error", "Failed to update the review.", "error");
//         }
//       })
//       .catch((error) => {
//         setIsLoading(false);
//         console.error("Error updating review:", error);
//         Swal.fire("Error", "Something went wrong.", "error");
//       });
//   };
  













//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">My Reviews: {reviews.length}</h2>
//       <div className="overflow-x-auto">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Scholarship Name</th>
//               <th>University Name</th>
//               <th>Review Comments</th>
//               <th>Review Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reviews.map((review) => (
//               <tr key={review._id}>
//                 <td>{review.scholarshipName}</td> {/* Display scholarship name */}
//                 <td>{review.universityName}</td>
//                 <td>{review.comment}</td>
//                 <td>{new Date(review.reviewDate).toLocaleDateString()}</td>
//                 <td>
//                   <button className="btn btn-warning btn-xs ml-2" onClick={() => handleEdit(review)}>
//                     Edit
//                   </button>
//                   <button className="btn btn-danger btn-xs ml-2" onClick={() => handleDelete(review._id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for editing review */}
//       {selectedReview && (
//         <div className="modal modal-open">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Edit Review for {selectedReview.scholarshipName}</h3>
//             <form onSubmit={handleEditSubmit}>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Rating (1-5)</span>
//                 </label>
//                 <input
//                   type="number"
//                   name="rating"
//                   min="1"
//                   max="5"
//                   defaultValue={selectedReview.rating}
//                   required
//                   className="input input-bordered"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Review Comment</span>
//                 </label>
//                 <textarea
//                   name="comment"
//                   defaultValue={selectedReview.comment}
//                   required
//                   className="textarea textarea-bordered"
//                 ></textarea>
//               </div>
//               <div className="modal-action">
//                 <button type="submit" className="btn btn-primary">
//                   {isLoading ? "Updating..." : "Update Review"}
//                 </button>
//                 <button type="button" className="btn" onClick={() => setSelectedReview(null)}>
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyReviews;











































import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch reviews for the logged-in user
  useEffect(() => {
    if (user) {
      fetch(`https://scholarship-server-project.vercel.app/reviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(Array.isArray(data) ? data : []);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
          setReviews([]);
        });
    }
  }, [user]);

  // Delete a review
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://scholarship-server-project.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setReviews(reviews.filter((review) => review._id !== id));
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
            } else {
              Swal.fire("Error", "Failed to delete the review.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting review:", error);
            Swal.fire("Error", "Something went wrong.", "error");
          });
      }
    });
  };

  // Submit edited review
  const handleEditSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const updatedReview = {
      rating: form.rating.value,
      comment: form.comment.value,
    };

    fetch(`https://scholarship-server-project.vercel.app/reviews/${selectedReview._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.modifiedCount > 0) {
          Swal.fire("Review Updated", "Your review has been updated.", "success");
          setReviews(
            reviews.map((review) =>
              review._id === selectedReview._id
                ? { ...review, ...updatedReview }
                : review
            )
          );
          setSelectedReview(null); // Close modal
        } else {
          Swal.fire("Error", "Failed to update the review.", "error");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error updating review:", error);
        Swal.fire("Error", "Something went wrong.", "error");
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-white font-bold mb-4">My Reviews: {reviews.length}</h2>
      <div className="overflow-x-auto">
        <Helmet>
                <title> ProFellow | My Reviews</title>
              </Helmet>
        <table className="table text-xl text-white">
          <thead className="text-green-500 text-lg">
            <tr>
              <th>Scholarship Name</th>
              <th>University Name</th>
              <th>Review Comments</th>
              <th>Review Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <tr key={review._id}>
                  <td className="">{review.scholarshipName}</td>
                  <td>{review.universityName}</td>
                  <td>{review.comment}</td>
                  <td>{new Date(review.reviewDate).toLocaleDateString()}</td>
                  
                    <div className="flex   mt-5 mb-5 justify-center gap-2">
                    <button
                      className="btn btn-lg btn-outline  btn-info"
                      onClick={() => setSelectedReview(review)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-lg btn-outline btn-error "
                      onClick={() => handleDelete(review._id)}
                    >
                      Delete
                    </button>
                  
                    </div>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Review Modal */}
      {selectedReview && (
        <div className="modal modal-open">
          <div className="modal-box bg-blue-800 bg-opacity-15">
            <h3 className="font-bold text-lg text-green-500 ">Edit Review</h3>
            <form onSubmit={handleEditSubmit}>
              <div className="">
                <label className="mr-2 text-white text-base" htmlFor="rating">Rating (1-5):</label>
                <input className="input input-bordered"
                  type="number"
                  id="rating"
                  name="rating"
                  min="1"
                  max="5"
                  defaultValue={selectedReview.rating}
                  required
                />
              </div>

              {/* <div>
                <label  className="mr-2 text-green-500" htmlFor="comment">Comment:</label>
                <textarea
                  id="comment"
                  name="comment"
                  defaultValue={selectedReview.comment}
                  required
                ></textarea>
              </div> */}
   

   <div className='mb-4 mt-2'>
                <label className='mr-2 text-white text-base'>Comment:</label>
                <input
                  type="text"
                  name='comment'
                  id='comment'
                  className="input input-bordered text-green-500"
                />
              </div>



              <div className="modal-action">
                <button type="submit" className="btn btn-outline btn-success" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  className="btn btn-outline btn-error"
                  onClick={() => setSelectedReview(null)}
                >
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

export default MyReviews;





















































        


