





























// import React, { useState, useContext } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../Provider/AuthProvider";
// import UseAxiosSecure from "../hooks/UseAxsiosSecure";
// // import UseAxiosSecure from "../hooks/UseAxsiosSecure";
// // import { useParams } from "react-router-dom";

// const ApplicationForm = ({ scholarshipId }) => {
//   const { user } = useContext(AuthContext);
//   const [scholarshipApplied, setScholarshipApplied] = useState([]);
//     // const [selectedScholarship, setSelectedScholarship] = useState(null);

//   useEffect(() => {
//       if (user) {
//         fetch(`http://:5000/scholar-application?email=${user.email}`)
//           .then((res) => res.json())
//           .then((data) => setScholarshipApplied(data))
//           .catch((error) => console.error("Error fetching applications:", error));
//       }
//     }, [user]);




//    // Get user info from AuthContext
//   const [formData, setFormData] = useState({
//     phoneNumber: "",
//     photo: "",
//     address: "",
//     gender: "",
//     degree: "",
//     sscResult: "",
//     hscResult: "",
//     studyGap: "",
//     universityName: "Your University", // Read-only
//     scholarshipCategory: "General", // Read-only
//     subjectCategory: "Science", // Read-only

//   });

//   const axiosSecure = UseAxiosSecure(); // Secure Axios instance

//   // Handle input change for the form fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Submit form handler
//   const handleSubmit = async (event) => {
//     event.preventDefault();


  



//     if (!user) {
//       Swal.fire({
//         icon: "error",
//         title: "Not Logged In",
//         text: "You must be logged in to apply for the scholarship.",
//       });
//       return;
//     }

//     // Combine additional user and scholarship data with form data
//     const applicationData = {
//       ...formData,
//       userName: user.displayName || "Anonymous", // From logged-in user info
//       userEmail: user.email,
//       userId: user.uid, // Firebase user ID
//       scholarshipId, // Passed as prop from the parent component
//       date: new Date().toISOString(), // Current timestamp
//     };

//     console.log("Application Data:", applicationData); // Debugging statement

//     try {
//       // Post the application data to the backend
//       const response = await axiosSecure.post("/apply-scholarship", applicationData);

//       if (response.status === 200) {
//         Swal.fire({
//           icon: "success",
//           title: "Application Submitted",
//           text: "Your application has been successfully submitted!",
//           timer: 3000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Submission Failed",
//         text: "An error occurred while submitting your application. Please try again.",
//       });
//     }
//   };

//   return (
//     <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold text-center mb-4">Apply for Scholarship</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Phone Number */}
//         <div className="mb-4">
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Applicant Photo URL */}
//         <div className="mb-4">
//           <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
//             Applicant Photo URL
//           </label>
//           <input
//             type="text"
//             id="photo"
//             name="photo"
//             value={formData.photo}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Address */}
//         <div className="mb-4">
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Gender */}
//         <div className="mb-4">
//           <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
//             Gender
//           </label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           >
//             <option value="" disabled>Select gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         {/* Degree */}
//         <div className="mb-4">
//           <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-2">
//             Degree
//           </label>
//           <select
//             name="degree"
//             value={formData.degree}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           >
//             <option value="" disabled>Select degree</option>
//             <option value="Diploma">Diploma</option>
//             <option value="Bachelor">Bachelor</option>
//             <option value="Masters">Masters</option>
//           </select>
//         </div>

//         {/* SSC Result */}
//         <div className="mb-4">
//           <label htmlFor="sscResult" className="block text-sm font-medium text-gray-700 mb-2">
//             SSC Result
//           </label>
//           <input
//             type="text"
//             name="sscResult"
//             value={formData.sscResult}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* HSC Result */}
//         <div className="mb-4">
//           <label htmlFor="hscResult" className="block text-sm font-medium text-gray-700 mb-2">
//             HSC Result
//           </label>
//           <input
//             type="text"
//             name="hscResult"
//             value={formData.hscResult}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Study Gap */}
//         <div className="mb-4">
//           <label htmlFor="studyGap" className="block text-sm font-medium text-gray-700 mb-2">
//             Study Gap
//           </label>
//           <input
//             type="text"
//             name="studyGap"
//             value={formData.studyGap}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* University Name (Read-only) */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             University Name
//           </label>
//           <p className="p-3 border border-gray-300 rounded-lg bg-gray-100">
//             {formData.universityName}
//           </p>
//         </div>

//         {/* Scholarship Category (Read-only) */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Scholarship Category
//           </label>
//           <p className="p-3 border border-gray-300 rounded-lg bg-gray-100">
//             {formData.scholarshipCategory}
            
//           </p>
//         </div>

//         {/* Subject Category (Read-only) */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Subject Category
//           </label>
//           <p className="p-3 border border-gray-300 rounded-lg bg-gray-100">
//             {formData.subjectCategory}
            
//           </p>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg">
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ApplicationForm;































































// f-code

// import React, { useState, useEffect, useContext } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../Provider/AuthProvider";
// import UseAxiosSecure from "../hooks/UseAxsiosSecure";
// import { useLocation } from "react-router-dom";

// const ApplicationForm = ({ scholarshipId }) => {
//   const { user } = useContext(AuthContext);
//   const {state} = useLocation();
//   const { universityName, scholarshipCategory, subjectCategory } = state || {};
 
//   const [formData, setFormData] = useState({
//     phoneNumber: "",
//     photo: "",
//     address: "",
//     gender: "",
//     degree: "",
//     sscResult: "",
//     hscResult: "",
//     studyGap: "",
//     universityName: "university_name",
//     scholarshipCategory: "scholarship_category",
//     subjectCategory: "subject_category",
//   });

//   const axiosSecure = UseAxiosSecure();

//   // Fetch scholarship details on component mount or when scholarshipId changes
//   useEffect(() => {
//     if (scholarshipId) {
//       axiosSecure
//         .get(`/scholarship-details/${scholarshipId}`)
//         .then((response) => {
//           const scholarshipData = response.data;
//           setFormData((prevState) => ({
//             ...prevState,
//             universityName: scholarshipData.university_name,
//             scholarshipCategory: scholarshipData.scholarship_category,
//             subjectCategory: scholarshipData.subject_category,
//           }));
//         })
//         .catch((error) => {
//           console.error("Error fetching scholarship details:", error);
//         });
//     }

//     // Fetch user's existing applications if logged in
//     if (user) {
//       fetch(`http://:5000/scholar-application?email=${user.email}`)
//         .then((res) => res.json())
//         .then((data) => setScholarshipApplied(data))
//         .catch((error) => console.error("Error fetching applications:", error));
//     }
//   }, [user, scholarshipId]); // Runs when user or scholarshipId changes

//   // Handle input change for the form fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Submit form handler
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setMyApplications([...myApplications, appliedDegree]);
//     setAppliedDegree(''); // Reset the form field

//     if (!user) {
//       Swal.fire({
//         icon: "error",
//         title: "Not Logged In",
//         text: "You must be logged in to apply for the scholarship.",
//       });
//       return;
//     }

//     // Combine additional user and scholarship data with form data
//     const applicationData = {
//       ...formData,
//       userName: user.displayName || "Anonymous", // From logged-in user info
//       userEmail: user.email,
//       userId: user.uid, // Firebase user ID
//       scholarshipId, // Passed as prop from the parent component
//       date: new Date().toISOString(), // Current timestamp
//     };

//     console.log("Application Data:", applicationData); // Debugging statement

//     try {
//       // Post the application data to the backend
//       const response = await axiosSecure.post("/apply-scholarship", applicationData);

//       if (response.status === 200) {
//         Swal.fire({
//           icon: "success",
//           title: "Application Submitted",
//           text: "Your application has been successfully submitted!",
//           timer: 3000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Submission Failed",
//         text: "An error occurred while submitting your application. Please try again.",
//       });
//     }
//   };

//   return (
//     <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold text-center mb-4">Apply for Scholarship</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Phone Number */}
//         <div className="mb-4">
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Applicant Photo URL */}
//         <div className="mb-4">
//           <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
//             Applicant Photo URL
//           </label>
//           <input
//             type="text"
//             id="photo"
//             name="photo"
//             value={formData.photo}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Address */}
//         <div className="mb-4">
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Gender */}
//         <div className="mb-4">
//           <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
//             Gender
//           </label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           >
//             <option value="" disabled>Select gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         {/* Degree */}
//         <div className="mb-4">
//           <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-2">
//             Degree
//           </label>
//           <select
//             name="degree"
//             value={formData.degree}
//             onChange={(e) => setAppliedDegree()}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           >
//             <option value="" disabled>Select degree</option>
//             <option value="Diploma">Diploma</option>
//             <option value="Bachelor">Bachelor</option>
//             <option value="Masters">Masters</option>
//           </select>
//         </div>

//         {/* SSC Result */}
//         <div className="mb-4">
//           <label htmlFor="sscResult" className="block text-sm font-medium text-gray-700 mb-2">
//             SSC Result
//           </label>
//           <input
//             type="text"
//             name="sscResult"
//             value={formData.sscResult}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* HSC Result */}
//         <div className="mb-4">
//           <label htmlFor="hscResult" className="block text-sm font-medium text-gray-700 mb-2">
//             HSC Result
//           </label>
//           <input
//             type="text"
//             name="hscResult"
//             value={formData.hscResult}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Study Gap */}
//         <div className="mb-4">
//           <label htmlFor="studyGap" className="block text-sm font-medium text-gray-700 mb-2">
//             Study Gap
//           </label>
//           <input
//             type="text"
//             name="studyGap"
//             value={formData.studyGap}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* University Name (Read-only) */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             University Name
//           </label>
//           <p className="p-3 border border-gray-300 rounded-lg bg-gray-100">
//             {universityName  || 'N/A' }
//           </p>
//         </div>

//         {/* Scholarship Category */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Scholarship Category
//           </label>
//           <p className="p-3 border border-gray-300 rounded-lg bg-gray-100">
//           {scholarshipCategory || "N/A"}
//           </p>
//         </div>

//         {/* Subject Category */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Subject Category
//           </label>
//           <p className="p-3 border border-gray-300 rounded-lg bg-gray-100">
//             {subjectCategory || 'N/A'}
//           </p>
//         </div>

//         <button
//           type="submit"
//           className="w-full p-3 bg-blue-500 text-white rounded-lg"
//         >
//           Submit Application
//         </button>
//       </form>
  
//     </div>
//   );
// };

// export default ApplicationForm;































// import React, { useState, useEffect, useContext } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../Provider/AuthProvider";
// import UseAxiosSecure from "../hooks/UseAxsiosSecure";
// import { useLocation } from "react-router-dom";

// const ApplicationForm = ({ scholarshipId }) => {
//   const { user } = useContext(AuthContext);
//   const {state} = useLocation();
//   const { universityName, scholarshipCategory, subjectCategory } = state || {};

//   const [formData, setFormData] = useState({
//     phoneNumber: "",
//     photo: "",
//     address: "",
//     gender: "",
//     degree: "",
//     sscResult: "",
//     hscResult: "",
//     studyGap: "",
//     universityName: "university_name",
//     scholarshipCategory: "scholarship_category",
//     subjectCategory: "subject_category",
//   });

//   const axiosSecure = UseAxiosSecure();

//   // Fetch scholarship details on component mount or when scholarshipId changes
//   useEffect(() => {
//     if (scholarshipId) {
//       axiosSecure
//         .get(/scholarship-details/${scholarshipId})
//         .then((response) => {
//           const scholarshipData = response.data;
//           setFormData((prevState) => ({
//             ...prevState,
//             universityName: scholarshipData.university_name,
//             scholarshipCategory: scholarshipData.scholarship_category,
//             subjectCategory: scholarshipData.subject_category,
//           }));
//         })
//         .catch((error) => {
//           console.error("Error fetching scholarship details:", error);
//         });
//     }

//     // Fetch user's existing applications if logged in
//     if (user) {
//       fetch(http://:5000/scholar-application?email=${user.email})
//         .then((res) => res.json())
//         .then((data) => setScholarshipApplied(data))
//         .catch((error) => console.error("Error fetching applications:", error));
//     }
//   }, [user, scholarshipId]); // Runs when user or scholarshipId changes

//   // Handle input change for the form fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Submit form handler
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!user) {
//       Swal.fire({
//         icon: "error",
//         title: "Not Logged In",
//         text: "You must be logged in to apply for the scholarship.",
//       });
//       return;
//     }

//     // Combine additional user and scholarship data with form data
//     const applicationData = {
//       ...formData,
//       userName: user.displayName || "Anonymous", // From logged-in user info
//       userEmail: user.email,
//       userId: user.uid, // Firebase user ID
//       scholarshipId, // Passed as prop from the parent component
//       date: new Date().toISOString(), // Current timestamp
//     };

//     console.log("Application Data:", applicationData); // Debugging statement

//     try {
//       // Post the application data to the backend
//       const response = await axiosSecure.post("/apply-scholarship", applicationData);

//       if (response.status === 200) {
//         Swal.fire({
//           icon: "success",
//           title: "Application Submitted",
//           text: "Your application has been successfully submitted!",
//           timer: 3000,
//           timerProgressBar: true,
//           showConfirmButton: false,
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Submission Failed",
//         text: "An error occurred while submitting your application. Please try again.",
//       });
//     }
//   };

//   return (
//     <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold text-center mb-4">Apply for Scholarship</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Phone Number */}
//         <div className="mb-4">
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Applicant Photo URL */}
//         <div className="mb-4">
//           <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
//             Applicant Photo URL
//           </label>
//           <input
//             type="text"
//             id="photo"
//             name="photo"
//             value={formData.photo}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Address */}
//         <div className="mb-4">
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Gender */}
//         <div className="mb-4">
//           <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
//             Gender
//           </label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           >
//             <option value="" disabled>Select gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         {/* Degree */}
//         <div className="mb-4">
//           <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-2">
//             Degree
//           </label>
//           <select
//             name="degree"
//             value={formData.degree}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           >
//             <option value="" disabled>Select degree</option>
//             <option value="Diploma">Diploma</option>
//             <option value="Bachelor">Bachelor</option>
//             <option value="Masters">Masters</option>
//           </select>
//         </div>

//         {/* SSC Result */}
//         <div className="mb-4">
//           <label htmlFor="sscResult" className="block text-sm font-medium text-gray-700 mb-2">
//             SSC Result
//           </label>
//           <input
//             type="text"
//             name="sscResult"
//             value={formData.sscResult}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* HSC Result */}
//         <div className="mb-4">
//           <label htmlFor="hscResult" className="block text-sm font-medium text-gray-700 mb-2">
//             HSC Result
//           </label>
//           <input
//             type="text"
//             name="hscResult"
//             value={formData.hscResult}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* Study Gap */}
//         <div className="mb-4">
//           <label htmlFor="studyGap" className="block text-sm font-medium text-gray-700 mb-2">
//             Study Gap
//           </label>
//           <input
//             type="text"
//             name="studyGap"
//             value={formData.studyGap}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         {/* University Name (Read-only) */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             University Name
//           </label>
//           <p className="p-3 border border-gray-300 rounded-lg bg-gray-100">
//             {universityName  || 'N/A' }
//           </p>
//         </div>

//         {/* Scholarship Category */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Scholarship Category
//           </label>
//           <p className="p-3 border border-gray-300 rounded-lg bg-gray-100">
//           {scholarshipCategory || "N/A"}
//           </p>
//         </div>

//         {/* Subject Category */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Subject Category
//           </label>
//           <p className="p-3 border border-gray-300 rounded-lg bg-gray-100">
//             {subjectCategory || 'N/A'}
//           </p>
//         </div>

//         <button
//           type="submit"
//           className="w-full p-3 bg-blue-500 text-white rounded-lg"
//         >
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ApplicationForm;
 














































// f-3

import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "../hooks/UseAxsiosSecure";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ApplicationForm = ({ scholarshipId }) => {
  const { user } = useContext(AuthContext);
  const {id} = useParams();
  console.log(id, user)
  const { state } = useLocation();
  const { universityName, scholarshipCategory, subjectCategory, scholar_id } = state || {};

  const [formData, setFormData] = useState({
    phoneNumber: "",
    photo: "",
    address: "",
    gender: "",
    degree: "",
    sscResult: "",
    hscResult: "",
    studyGap: "",
    universityName: universityName || "",
    scholarshipCategory: scholarshipCategory || "",
    subjectCategory: subjectCategory || "",
  });

  const axiosSecure = UseAxiosSecure();

  // Fetch scholarship details and existing applications
  useEffect(() => {
    if (scholarshipId) {
      axiosSecure
        .get(`/scholarship-details/${scholarshipId}`)
        .then((response) => {
          const scholarshipData = response.data;
          setFormData((prevState) => ({
            ...prevState,
            universityName: scholarshipData.university_name,
            scholar_id: scholarshipData.id,
            scholarshipCategory: scholarshipData.scholarship_category,
            subjectCategory: scholarshipData.subject_category,
          }));
        })
        .catch((error) => {
          console.error("Error fetching scholarship details:", error);
        });
    }
  }, [scholarshipId, axiosSecure]);

  // Handle input change for the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form handler



  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const feedback = formData.feedback;
  //   const degree = formData.degree;
  //   console.log(feedback, degree)

  //   if (!user) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Not Logged In",
  //       text: "You must be logged in to apply for the scholarship.",
  //     });
  //     return;
  //   }

   
  
   
  //   const applicationData = {
  //     userName: user.displayName || "Anonymous",
  //     userEmail: user.email,
  //     userId: user.uid,
  //      scholarshipId,
  //     date: new Date().toISOString(),
  //     universityName: formData.universityName, // Ensure this is included
  //     subjectCategory: formData.subjectCategory,
  //     scholar_id:id,
  //     apply_degree: formData.degree,  // Store applied degree
  //   };
    

  //   try {
  //     const response = await axiosSecure.post("/apply-scholarship", applicationData);

  //     if (response.status === 200) {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Application Submitted",
  //         text: "Your application has been successfully submitted!",
  //         timer: 3000,
  //         timerProgressBar: true,
  //         showConfirmButton: false,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error submitting application:", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Submission Failed",
  //       text: "An error occurred while submitting your application. Please try again.",
  //     });
  //   }
  // };






  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Not Logged In",
        text: "You must be logged in to apply for the scholarship.",
      });
      return;
    }
  
    const applicationData = {
      userName: user.displayName || "Anonymous",
      userEmail: user.email,
      userId: user.uid,
      scholarshipId,
      date: new Date().toISOString(),
      universityName: formData.universityName,
      subjectCategory: formData.subjectCategory,
      scholarshipCategory: formData.scholarshipCategory,
      scholar_id: id,
      apply_degree: formData.degree,
    };
  
    console.log("Application Data:", applicationData);
  
    try {
      const response = await axiosSecure.post("/apply-scholarship", applicationData);
      console.log("API Response:", response);
  
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted",
          text: "Your application has been successfully submitted!",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error("Error submitting application:", error.response || error.message);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.response?.data?.message || "An error occurred while submitting your application. Please try again.",
      });
    }
  };
  









  return (
    <div className="w-full max-w-md p-6 bg-blue-200 bg-opacity-15 rounded-lg shadow-lg">
      <Helmet>
              <title> ProFellow | ApplicationFrom</title>
            </Helmet>
      <h2 className="text-2xl font-semibold text-white text-center mb-4">Apply for Scholarship</h2>
      <form onSubmit={handleSubmit}>
        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-xl font-medium text-green-500 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Applicant Photo URL */}
        <div className="mb-4">
          <label htmlFor="photo" className="block text-xl font-medium text-green-500 mb-2">
            Applicant Photo URL
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={formData.photo}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-xl font-medium text-green-500 mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-xl text-green-500 font-medium mb-2">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Degree */}
        <div className="mb-4">
          <label htmlFor="degree" className="block text-xl font-medium text-green-500 mb-2">
            Degree
          </label>
          <select
            name="degree"
            value={formData.degree}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="" disabled>
              Select degree
            </option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
          </select>
        </div>

        {/* SSC and HSC Results */}
        {["sscResult", "hscResult"].map((field) => (
          <div key={field} className="mb-4">
            <label htmlFor={field} className="block text-xl font-medium text-green-500 mb-2">
              {field.toUpperCase().replace("RESULT", " Result")}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
        ))}

        {/* Study Gap */}
        <div className="mb-4">
          <label htmlFor="studyGap" className="block text-xl font-medium text-green-500 mb-2">
            Study Gap
          </label>
          <input
            type="text"
            name="studyGap"
            value={formData.studyGap}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Read-only fields */}
        {["universityName", "scholarshipCategory", "subjectCategory"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-xl font-medium text-green-500 mb-2">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <p className="p-3 border border-gray-300 rounded-lg bg-gray-100">
              {formData[field] || "N/A"}
            </p>
          </div>
        ))}

        <button
          type="submit"
          className="w-full p-3 btn btn-outline btn-success text-white rounded-lg"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;













































































































