


















// import React, { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// import Swal from "sweetalert2";

// const ScholarshipDetails = () => {
//   const { id } = useParams();
//   const [scholarship, setScholarship] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     fetch(`http://:5000/scholar/${id}`)
//       .then((response) => {
//         if (!response.ok) throw new Error("Failed to fetch scholarship details");
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

//   if (loading) return <div>Loading scholarship details...</div>;
//   if (!scholarship) return <div>Scholarship not found.</div>;

//   const {
//     university_name,
//     university_logo,
//     location = {}, // Ensure location has a default value
//     post_date,
//     application_deadline,
//     application_fees,
//     stipend,
//     scholarship_category,
//     scholarship_description,
//     subject_category,
//     service_charge,
//   } = scholarship;

//   const { country = "N/A", city = "N/A" } = location;

//   const handleApply = () => {
//     if (!user) {
//       Swal.fire("Error", "You must be logged in to apply", "error");
//       return;
//     }

//     const applicationData = {
//       scholar_id: id,
//       applicant_email: user.email,
//       university_name,
//       service_charge,
//       application_fees,
//       location,
//       subject_category,
//       scholarship_category,
//     };

//     fetch("http://:5000/scholar-application", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(applicationData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.success) {
//           Swal.fire("Success", "Scholarship application submitted!", "success");
//         } else {
//           Swal.fire("Error", "Failed to submit application", "error");
//         }
//       })
//       .catch((error) => {
//         console.error("Error submitting application:", error);
//         Swal.fire("Error", "Something went wrong. Try again!", "error");
//       });
//   };

//   return (
//     <div className="scholarship-details container mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-4">{university_name}</h2>
      
//       <figure className="mb-4">
//         <img
//           src={university_logo || "/placeholder-image.jpg"}
//           alt={university_name || "University Logo"}
//           className="w-fll h-full object-cover"
//         />
//       </figure>

//       <div className="details space-y-2">
//         <p><strong>Scholarship Category:</strong> {scholarship_category || "N/A"}</p>
//         <p><strong>Location:</strong> {city}, {country}</p>
//         <p><strong>Application Deadline:</strong> {application_deadline || "N/A"}</p>
//         <p><strong>Subject:</strong> {subject_category || "N/A"}</p>
//         <p><strong>Description:</strong> {scholarship_description || "N/A"}</p>
//         <p><strong>Stipend:</strong> {stipend || "N/A"}</p>
//         <p><strong>Post Date:</strong> {post_date || "N/A"}</p>
//         <p><strong>Service Charge:</strong> {service_charge || "N/A"}</p>
//         <p><strong>Application Fees:</strong> {application_fees || "N/A"}</p>
//       </div>

//       <div className="apply-button mt-4 flex gap-4">
//         <button onClick={handleApply} className="btn btn-primary">
//           Apply Scholarship
//         </button>
//         <Link to={`/payment/${id}`}>
//           <button className="btn btn-secondary">Proceed to Payment</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ScholarshipDetails;























































// final

// import { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// import Slider from "react-slick"; // Install this package for the carousel effect
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const ScholarshipDetails = () => {
//   const { id } = useParams(); // Extract scholarship ID from the URL
//   const [scholarship, setScholarship] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     // Fetch scholarship details
//     fetch(`http://:5000/scholar/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setScholarship(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching scholarship details:", error);
//         setLoading(false);
//       });

//     // Fetch reviews for this scholarship
//     fetch(`http://:5000/reviews?scholarshipId=${id}`)
//       .then((response) => response.json())
//       .then((data) => setReviews(data))
//       .catch((error) => {
//         console.error("Error fetching reviews:", error);
//       });
//   }, [id]);

//   if (loading) return <div>Loading scholarship details...</div>;
//   if (!scholarship) return <div>Scholarship not found.</div>;

//   const handleApply = () => {
//     const ScholarApplication = {
//       scholar_id: id,
//       applicant_email: user.email,
//       university_name: scholarship.university_name,
//       service_charge: scholarship.service_charge,
//       application_fees: scholarship.application_fees,
//       location: scholarship.location,
//       subject_category: scholarship.subject_category,
//       scholarship_category: scholarship.scholarship_category,
//     };

//     fetch('http://:5000/scholar-application', {
//       method: 'POST',
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(ScholarApplication),
//     })
//       .then(res => res.json())
//       .then(data => console.log(data))
//       .catch(error => console.error("Error submitting application:", error));
//   };

//   const { university_name, university_logo, location, scholarship_category, subject_category, application_deadline, scholarship_description, stipend, post_date, service_charge, application_fees } = scholarship;
//   const { country, city } = location || {};

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="scholarship-details">
//       <h2 className="text-3xl font-bold">{university_name}</h2>
//       <img 
//        src={university_logo || "/path/to/placeholder-image.jpg"}
//         alt={university_name} className="w-50 h-50 ml-80 object-cover" />
//       <div className="details mt-4 text-white text-xl">
//         <p><strong>Category:</strong> {scholarship_category || "N/A"}</p>
//         <p><strong>Location:</strong> {country}, {city}</p>
//         <p><strong>Deadline:</strong> {application_deadline || "N/A"}</p>
//         <p><strong>Subject:</strong> {subject_category || "N/A"}</p>
//         <p><strong>Description:</strong> {scholarship_description || "N/A"}</p>
//         <p><strong>Stipend:</strong> {stipend || "N/A"}</p>
//         <p><strong>Post Date:</strong> {post_date || "N/A"}</p>
//         <p><strong>Service Charge:</strong> {service_charge || "N/A"}</p>
//         <p><strong>Fees:</strong> {application_fees || "N/A"}</p>

//         <Link to={`/payment/${id}`} state={{ universityName: university_name, scholarshipCategory: scholarship_category, subjectCategory: subject_category, applicationFees: application_fees,scholar_id: id }}>
//           <button onClick={handleApply} className="btn btn-primary">Apply Scholarship</button>
//         </Link>
//       </div>







//       {/* Reviews Section */}
//       {reviews.length > 0 && (
//         <div className="reviews mt-8">
//           <h3 className="text-2xl font-semibold text-white">Reviews</h3>
//           <Slider {...settings}>
//             {reviews.map((review) => (
//               <div key={review._id} className="review-card">
//                 <div className="reviewer-info flex items-center">
//                   <img src={review.userImage || "/path/to/default-avatar.jpg"} alt={review.reviewer_name} className="w-12 h-12 rounded-full" />
//                   <div className="ml-4">
//                     <h4 className="font-semibold">{review.reviewer_name}</h4>
//                     <p>{review.review_date}</p>
//                   </div>
//                 </div>
//                 <div className="rating my-2 text-white">
//                   <span>Rating: </span>
//                   <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
//                 </div>
//                 <p>{review.comment}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScholarshipDetails;






































// import { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Helmet } from "react-helmet-async";

// const ScholarshipDetails = () => {
//   const { id } = useParams();
//   const [scholarship, setScholarship] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     fetch(`https://scholarship-server-project.vercel.app/scholar/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setScholarship(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching scholarship details:", error);
//         setLoading(false);
//       });

//     fetch(`https://scholarship-server-project.vercel.app/reviews/?scholarshipId=${id}`)
//       .then((response) => response.json())
//       .then((data) => setReviews(data))
//       .catch((error) => {
//         console.error("Error fetching reviews:", error);
//       });
//   }, [id]);

//   if (loading) return <div className="text-center text-xl">Loading scholarship details...</div>;
//   if (!scholarship) return <div className="text-center text-xl">Scholarship not found.</div>;

//   const handleApply = () => {
//     const ScholarApplication = {
//       scholar_id: id,
//       applicant_email: user.email,
//       university_name: scholarship.university_name,
//       service_charge: scholarship.service_charge,
//       application_fees: scholarship.application_fees,
      
//       location: scholarship.location,
//       subject_category: scholarship.subject_category,
//       scholarship_category: scholarship.scholarship_category,
//     };

//     fetch("https://scholarship-server-project.vercel.app/scholar-application", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(ScholarApplication),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error("Error submitting application:", error));
//   };

//   const { university_name, university_logo, location, scholarship_category, subject_category, application_deadline, scholarship_description, stipend, post_date, service_charge, application_fees } = scholarship;
//   const { country, city } = location || {};

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//        slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     // <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white p-6">
//     //   <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 text-gray-800">
//     //     <div className="flex items-center gap-6">
//     //       <img
//     //         src={university_logo || "/path/to/placeholder-image.jpg"}
//     //         alt={university_name}
//     //         className="w-24 h-24 object-cover rounded-full"
//     //       />
//     //       <h2 className="text-3xl font-bold">{university_name}</h2>
//     //     </div>

//     //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//     //       <div>
//     //         <p><strong>Category:</strong> {scholarship_category || "N/A"}</p>
//     //         <p><strong>Location:</strong> {country}, {city}</p>
//     //         <p><strong>Deadline:</strong> {application_deadline || "N/A"}</p>
//     //         <p><strong>Subject:</strong> {subject_category || "N/A"}</p>
//     //         <p><strong>Stipend:</strong> {stipend || "N/A"}</p>
//     //         <p><strong>Post Date:</strong> {post_date || "N/A"}</p>
//     //       </div>
//     //       <div>
//     //         <p><strong>Description:</strong> {scholarship_description || "N/A"}</p>
//     //         <p><strong>Service Charge:</strong> ${service_charge || "N/A"}</p>
//     //         <p><strong>Fees:</strong> ${application_fees || "N/A"}</p>
//     //       </div>
//     //     </div>

//     //     <div className="mt-6">
//     //       <Link
//     //         to={`/payment/${id}`}
//     //         state={{
//     //           universityName: university_name,
//     //           scholarshipCategory: scholarship_category,
//     //           subjectCategory: subject_category,
//     //           applicationFees: application_fees,
//     //           scholar_id: id,
//     //         }}
//     //       >
//     //         <button onClick={handleApply} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//     //           Apply Scholarship
//     //         </button>
//     //       </Link>
//     //     </div>
//     //   </div>

//     //   {/* Reviews Section */}
//     //   {reviews.length > 0 && (
//     //     <div className="max-w-5xl mx-auto mt-12">
//     //       <h3 className="text-2xl font-bold text-center mb-6">Reviews</h3>
//     //       <Slider {...settings}>
//     //         {reviews.map((review) => (
//     //           <div key={review._id} className="p-4 bg-white rounded-lg shadow-md text-gray-800">
//     //             <div className="flex items-center gap-4">
//     //               <img
//     //                 src={review.userImage || "/path/to/default-avatar.jpg"}
//     //                 alt={review.reviewer_name}
//     //                 className="w-12 h-12 rounded-full"
//     //               />
//     //               <div>
//     //                 <h4 className="font-semibold">{review.reviewer_name}</h4>
//     //                 <p className="text-sm text-gray-500">{review.review_date}</p>
//     //               </div>
//     //             </div>
//     //             <div className="mt-2">
//     //               <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
//     //               <p>{review.comment}</p>
//     //             </div>
//     //           </div>
//     //         ))}
//     //       </Slider>
//     //     </div>
//     //   )}
//     // </div>


// <div className=" min-h-screen text-white p-36">
//   <div className="max-w-5xl mx-auto bg-blue-800 bg-opacity-15 rounded-lg shadow-lg p-6 text-gray-800">
//     {/* Scholarship Details Section */}
//     <div className="flex flex-col md:flex-row items-start gap-8">
//       {/* Left Side - Image */}
//       <div className="w-full md:w-1/3">
//         <img
//           src={university_logo || "/path/to/placeholder-image.jpg"}
//           alt={university_name}
//           className="w-full h-auto mt-24  object-cover rounded-lg shadow-md"
//         />
//       </div>
      
//       {/* Right Side - Details */}
//       <div className="w-full text-xl text-white md:w-2/3">
//         <h2 className="text-3xl font-bold text-green-500 mb-4">{university_name}</h2>
//         <p><strong>Category:</strong> {scholarship_category || "N/A"}</p>
//         <p><strong>Location:</strong> {country}, {city}</p>
//         <p><strong>Deadline:</strong> {application_deadline || "N/A"}</p>
//         <p><strong>Subject:</strong> {subject_category || "N/A"}</p>
//         <p><strong>Stipend:</strong> {stipend || "N/A"}</p>
//         <p><strong>Post Date:</strong> {post_date || "N/A"}</p>
//         <p><strong>Service Charge:</strong> ${service_charge || "N/A"}</p>
//         <p><strong>Fees:</strong> ${application_fees || "N/A"}</p>
//         <p className="mt-4"><strong>Description:</strong> {scholarship_description || "N/A"}</p>
//         <div className="mt-6">
//           <Link
//             to={`/payment/${id}`}
//             state={{
//               universityName: university_name,
//               scholarshipCategory: scholarship_category,
//               subjectCategory: subject_category,
//               applicationFees: application_fees,
//               scholar_id: id,
//             }}
//           >
//             <button onClick={handleApply} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Apply Scholarship
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* Reviews Section */}
//   {reviews.length > 0 && (
//     <div className="max-w-5xl mx-auto mt-12">
//       <Helmet>
//               <title> ProFellow | ScholarShip Details</title>
//             </Helmet>
//       <h3 className="text-2xl text-green-500 font-bold text-center mb-6">Reviews</h3>
//       <Slider {...settings}>
//         {reviews.map((review) => (
//           <div key={review._id} className="p-4 bg-blue-800 bg-opacity-15 rounded-lg shadow-md text-gray-800">
//             <div className="flex items-center gap-4 ">
//               <img
//                 src={review.userImage || "/path/to/default-avatar.jpg"}
//                 alt={review.userImage}
//                 className="w-12 h-12  ml-96 rounded-full"
//               />
//               <div>
//                 <h4 className="font-semibold text-white ">{review.
// userName
// }</h4>
//                 {/* <p className="text-sm text-white">{review.reviewDate}</p> */}
                
//                 <p className="text-sm text-white">{new Date(review.reviewDate).toLocaleDateString()}</p>


//               </div>
//             </div>
//             <div className="mt-4 mr-10">
//               <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
//               <p className="text-white">{review.comment}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   )}
// </div>




//   );
// };

// export default ScholarshipDetails;



















































import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet-async";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://scholarship-server-project.vercel.app/scholar/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setScholarship(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching scholarship details:", error);
        setLoading(false);
      });

    fetch(`https://scholarship-server-project.vercel.app/reviews/all/?scholarshipId=${id}`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [id]);

  if (loading) return <div className="text-center text-xl">Loading scholarship details...</div>;
  if (!scholarship) return <div className="text-center text-xl">Scholarship not found.</div>;

  const handleApply = () => {
    const ScholarApplication = {
      scholar_id: id,
      applicant_email: user.email,
      university_name: scholarship.university_name,
      service_charge: scholarship.service_charge,
      application_fees: scholarship.application_fees,
      location: scholarship.location,
      subject_category: scholarship.subject_category,
      scholarship_category: scholarship.scholarship_category,
    };

    fetch("https://scholarship-server-project.vercel.app/scholar-application", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(ScholarApplication),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error submitting application:", error));
  };

  const { university_name, university_logo, location, scholarship_category, subject_category, application_deadline, scholarship_description, stipend, post_date, service_charge, application_fees } = scholarship;
  const { country, city } = location || {};

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Tablet
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480, // Mobile
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="min-h-screen p-6 md:p-12 bg-blue-800 bg-opacity-15">
      <Helmet>
        <title>ProFellow | Scholarship Details</title>
      </Helmet>
      <div className="max-w-5xl mx-auto bg-blue-800 bg-opacity-15 rounded-lg shadow-lg p-6">
        {/* Scholarship Details */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Image */}
          <div className="w-full md:w-1/3">
            <img
              src={university_logo || "/path/to/placeholder-image.jpg"}
              alt={university_name}
              className="w-full h-auto lg:mt-20 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Details */}
          <div className="w-full md:w-2/3 text-white">
            <h2 className="text-3xl font-bold text-green-600 mb-4">{university_name}</h2>
            <p><strong>Category:</strong> {scholarship_category || "N/A"}</p>
            <p><strong>Location:</strong> {country}, {city}</p>
            <p><strong>Deadline:</strong> {application_deadline || "N/A"}</p>
            <p><strong>Subject:</strong> {subject_category || "N/A"}</p>
            <p><strong>Stipend:</strong> {stipend || "N/A"}</p>
            <p><strong>Post Date:</strong> {post_date || "N/A"}</p>
            <p><strong>Service Charge:</strong> ${service_charge || "N/A"}</p>
            <p><strong>Fees:</strong> ${application_fees || "N/A"}</p>
            <p className="mt-4"><strong>Description:</strong> {scholarship_description || "N/A"}</p>
            <div className="mt-6">
              <Link
                to={`/payment/${id}`}
                state={{
                  universityName: university_name,
                  scholarshipCategory: scholarship_category,
                  subjectCategory: subject_category,
                  applicationFees: application_fees,
                  scholar_id: id,
                }}
              >
                <button onClick={handleApply} className="btn btn-outline btn-success text-white font-bold py-2 px-4 rounded">
                  Apply Scholarship
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {reviews.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-green-600 text-center mb-6">Reviews</h3>
            <Slider {...sliderSettings}>
              {reviews.map((review) => (
                <div key={review._id} className="p-4 bg-blue-800 bg-opacity-15 rounded-lg shadow-md">
                  <div className="flex items-center gap-4">
                    <img
                      src={review.userImage || "/path/to/default-avatar.jpg"}
                      alt={review.reviewer_name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{review.userName}</h4>
                      <p className="text-sm text-gray-500">{new Date(review.reviewDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                    <p>{review.comment}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScholarshipDetails;






