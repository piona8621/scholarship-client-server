// import React, { useState } from "react";
// import Swal from "sweetalert2";
// const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
//   const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
// const AddScholarShip = () => {
  
//   const [formData, setFormData] = useState({
//     scholarshipName: "",
//     universityName: "",
//     universityImage: "",
//     universityCountry: "",
//     universityCity: "",
//     universityRank: "",
//     subjectCategory: "Agriculture", // Default value
//     scholarshipCategory: "Full fund", // Default value
//     degree: "Diploma", // Default value
//     tuitionFees: "",
//     applicationFees: "",
//     serviceCharge: "",
//     applicationDeadline: "",
//     scholarshipPostDate: "",
//     postedUserEmail: "",
  
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("image", file);
    
//     // Upload the image to imgbb
//     fetch("https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY", {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setFormData((prevData) => ({
//             ...prevData,
//             universityImage: data.data.url, // Set the uploaded image URL
//           }));
//         } else {
//           Swal.fire("Error", "Failed to upload image", "error");
//         }
//       })
//       .catch((error) => {
//         console.error("Error uploading image:", error);
//         Swal.fire("Error", "Failed to upload image", "error");
//       });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here, send the form data to your backend (e.g., using fetch)
//     fetch("http://:5000/scholar", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           Swal.fire("Success", "Scholarship added successfully!", "success");
//           setFormData({
//             scholarshipName: "",
//             universityName: "",
//             universityImage: "",
//             universityCountry: "",
//             universityCity: "",
//             universityRank: "",
//             subjectCategory: "Agriculture",
//             scholarshipCategory: "Full fund",
//             degree: "Diploma",
//             tuitionFees: "",
//             applicationFees: "",
//             serviceCharge: "",
//             applicationDeadline: "",
//             scholarshipPostDate: "",
//             postedUserEmail: "",
//           });
//         } else {
//           Swal.fire("Error", "Failed to add scholarship", "error");
//         }
//       })
//       .catch((error) => {
//         console.error("Error adding scholarship:", error);
//         Swal.fire("Error", "Something went wrong.", "error");
//       });
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Add Scholarship</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Scholarship Name */}
//         <div className="form-control mb-4">
//           <label className="label">Scholarship Name</label>
//           <input
//             type="text"
//             name="scholarshipName"
//             value={formData.scholarshipName}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* University Name */}
//         <div className="form-control mb-4">
//           <label className="label">University Name</label>
//           <input
//             type="text"
//             name="universityName"
//             value={formData.universityName}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* University Image */}
//         <div className="form-control mb-4">
//           <label className="label">University Image/Logo</label>
//           <input
//             type="file"
//             onChange={handleImageUpload}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* University Country */}
//         <div className="form-control mb-4">
//           <label className="label">University Country</label>
//           <input
//             type="text"
//             name="universityCountry"
//             value={formData.universityCountry}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//           />
//         </div>

//         {/* University City */}
//         <div className="form-control mb-4">
//           <label className="label">University City</label>
//           <input
//             type="text"
//             name="universityCity"
//             value={formData.universityCity}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//           />
//         </div>

//         {/* University World Rank */}
//         <div className="form-control mb-4">
//           <label className="label">University World Rank</label>
//           <input
//             type="text"
//             name="universityRank"
//             value={formData.universityRank}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//           />
//         </div>

//         {/* Subject Category */}
//         <div className="form-control mb-4">
//           <label className="label">Subject Category</label>
//           <select
//             name="subjectCategory"
//             value={formData.subjectCategory}
//             onChange={handleChange}
//             className="select select-bordered w-full"
//           >
//             <option>Agriculture</option>
//             <option>Engineering</option>
//             <option>Doctor</option>
//           </select>
//         </div>

//         {/* Scholarship Category */}
//         <div className="form-control mb-4">
//           <label className="label">Scholarship Category</label>
//           <select
//             name="scholarshipCategory"
//             value={formData.scholarshipCategory}
//             onChange={handleChange}
//             className="select select-bordered w-full"
//           >
//             <option>Full fund</option>
//             <option>Partial</option>
//             <option>Self-fund</option>
//           </select>
//         </div>

//         {/* Degree */}
//         <div className="form-control mb-4">
//           <label className="label">Degree</label>
//           <select
//             name="degree"
//             value={formData.degree}
//             onChange={handleChange}
//             className="select select-bordered w-full"
//           >
//             <option>Diploma</option>
//             <option>Bachelor</option>
//             <option>Masters</option>
//           </select>
//         </div>

//         {/* Tuition Fees */}
//         <div className="form-control mb-4">
//           <label className="label">Tuition Fees (Optional)</label>
//           <input
//             type="text"
//             name="tuitionFees"
//             value={formData.tuitionFees}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//           />
//         </div>

//         {/* Application Fees */}
//         <div className="form-control mb-4">
//           <label className="label">Application Fees</label>
//           <input
//             type="text"
//             name="applicationFees"
//             value={formData.applicationFees}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* Service Charge */}
//         <div className="form-control mb-4">
//           <label className="label">Service Charge</label>
//           <input
//             type="text"
//             name="serviceCharge"
//             value={formData.serviceCharge}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* Application Deadline */}
//         <div className="form-control mb-4">
//           <label className="label">Application Deadline</label>
//           <input
//             type="date"
//             name="applicationDeadline"
//             value={formData.applicationDeadline}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* Scholarship Post Date */}
//         <div className="form-control mb-4">
//           <label className="label">Scholarship Post Date</label>
//           <input
//             type="date"
//             name="scholarshipPostDate"
//             value={formData.scholarshipPostDate}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* Posted User Email */}
//         <div className="form-control mb-4">
//           <label className="label">Posted User Email</label>
//           <input
//             type="email"
//             name="postedUserEmail"
//             value={formData.postedUserEmail}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="form-control mb-4">
//           <button type="submit" className="btn btn-primary w-full">
//             Add Scholarship
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddScholarShip;









































// import React, { useState } from "react";
// import Swal from "sweetalert2";

// // API key from .env file for image hosting (imgbb)
// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

// const AddScholarShip = () => {
//   const [formData, setFormData] = useState({
//     scholarshipName: "",
//     universityName: "",
//     universityImage: "",
//     universityCountry: "",
//     universityCity: "",
//     universityRank: "",
//     subjectCategory: "Agriculture", // Default value
//     scholarshipCategory: "Full fund", // Default value
//     degree: "Diploma", // Default value
//     tuitionFees: "",
//     applicationFees: "",
//     serviceCharge: "",
//     applicationDeadline: "",
//     scholarshipPostDate: "",
//     postedUserEmail: "",
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle image upload

//   // const handleImageUpload = (e) => {
//   //   const file = e.target.files[0];
//   //   const formData = new FormData();
//   //   formData.append("image", file);

//   //   // Upload the image to imgbb
//   //   fetch(`https://api.imgbb.com/1/upload?key=${image_hosting_key}`, {
//   //     method: "POST",
//   //     body: formData,
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       if (data.status === 200) {
//   //         setFormData((prevData) => ({
//   //           ...prevData,
//   //           universityImage: data.data.url, // Set the uploaded image URL
//   //         }));
//   //       } else {
//   //         Swal.fire("Error", "Failed to upload image", "error");
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error uploading image:", error);
//   //       Swal.fire("Error", "Failed to upload image", "error");
//   //     });
//   //     console.log(res.data)
//   // };


//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("image", file);
  
//     // Upload the image to imgbb
//     fetch(`https://api.imgbb.com/1/upload?key=${image_hosting_key}`, {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 200) {
//           console.log("Image uploaded successfully:", data.data.url); // Log the image URL
//           setFormData((prevData) => ({
//             ...prevData,
//             universityImage: data.data.url, // Set the uploaded image URL
//           }));
//         } else {
//           Swal.fire("Error", "Failed to upload image", "error");
//         }
//       })
//       .catch((error) => {
//         console.error("Error uploading image:", error);
//         Swal.fire("Error", "Failed to upload image", "error");
//       });
//   };
  





//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData)

//     // Validate application fees and service charge
//     if (isNaN(formData.applicationFees)) {
//       Swal.fire("Error", "Application Fees should be a valid number", "error");
//       return;
//     }

//     if (isNaN(formData.serviceCharge)) {
//       Swal.fire("Error", "Service Charge should be a valid number", "error");
//       return;
//     }

//     // Send form data to backend (change the endpoint as necessary)
//     fetch("http://:5000/scholar", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           Swal.fire("Success", "Scholarship added successfully!", "success");
//           setFormData({
//             scholarshipName: "",
//             universityName: "",
//             universityImage: "",
//             universityCountry: "",
//             universityCity: "",
//             universityRank: "",
//             subjectCategory: "Agriculture",
//             scholarshipCategory: "Full fund",
//             degree: "Diploma",
//             tuitionFees: "",
//             applicationFees: "",
//             serviceCharge: "",
//             applicationDeadline: "",
//             scholarshipPostDate: "",
//             postedUserEmail: "",
//           });
//         } else {
//           Swal.fire("Error", "Failed to add scholarship", "error");
//         }
//       })
//       .catch((error) => {
//         console.error("Error adding scholarship:", error);
//         Swal.fire("Error", "Something went wrong.", "error");
//       });
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Add Scholarship</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Scholarship Name */}
//         <div className="form-control mb-4">
//           <label className="label">Scholarship Name</label>
//           <input
//             type="text"
//             name="scholarshipName"
//             value={formData.scholarshipName}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* University Name */}
//         <div className="form-control mb-4">
//           <label className="label">University Name</label>
//           <input
//             type="text"
//             name="universityName"
//             value={formData.universityName}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* University Image/Logo */}
//         <div className="form-control mb-4">
//           <label className="label">University Image/Logo</label>
//           <input
//             type="file"
//             onChange={handleImageUpload}
//             className="input input-bordered w-full"
//             required
//           />
//           {formData.universityImage && (
//             <div className="mt-2">
//               <img
//                 src={formData.universityImage}
//                 alt="University Logo"
//                 className="w-32 h-32 object-cover"
//               />
//             </div>
//           )}
//         </div>

//         {/* University Country */}
//         <div className="form-control mb-4">
//           <label className="label">University Country</label>
//           <input
//             type="text"
//             name="universityCountry"
//             value={formData.universityCountry}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//           />
//         </div>

//         {/* University City */}
//         <div className="form-control mb-4">
//           <label className="label">University City</label>
//           <input
//             type="text"
//             name="universityCity"
//             value={formData.universityCity}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//           />
//         </div>

//         {/* University World Rank */}
//         <div className="form-control mb-4">
//           <label className="label">University World Rank</label>
//           <input
//             type="text"
//             name="universityRank"
//             value={formData.universityRank}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//           />
//         </div>

//         {/* Subject Category */}
//         <div className="form-control mb-4">
//           <label className="label">Subject Category</label>
//           <select
//             name="subjectCategory"
//             value={formData.subjectCategory}
//             onChange={handleChange}
//             className="select select-bordered w-full"
//           >
//             <option>Agriculture</option>
//             <option>Engineering</option>
//             <option>Doctor</option>
//           </select>
//         </div>

//         {/* Scholarship Category */}
//         <div className="form-control mb-4">
//           <label className="label">Scholarship Category</label>
//           <select
//             name="scholarshipCategory"
//             value={formData.scholarshipCategory}
//             onChange={handleChange}
//             className="select select-bordered w-full"
//           >
//             <option>Full fund</option>
//             <option>Partial</option>
//             <option>Self-fund</option>
//           </select>
//         </div>

//         {/* Degree */}
//         <div className="form-control mb-4">
//           <label className="label">Degree</label>
//           <select
//             name="degree"
//             value={formData.degree}
//             onChange={handleChange}
//             className="select select-bordered w-full"
//           >
//             <option>Diploma</option>
//             <option>Bachelor</option>
//             <option>Masters</option>
//           </select>
//         </div>

//         {/* Tuition Fees */}
//         <div className="form-control mb-4">
//           <label className="label">Tuition Fees (Optional)</label>
//           <input
//             type="text"
//             name="tuitionFees"
//             value={formData.tuitionFees}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//           />
//         </div>

//         {/* Application Fees */}
//         <div className="form-control mb-4">
//           <label className="label">Application Fees</label>
//           <input
//             type="text"
//             name="applicationFees"
//             value={formData.applicationFees}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* Service Charge */}
//         <div className="form-control mb-4">
//           <label className="label">Service Charge</label>
//           <input
//             type="text"
//             name="serviceCharge"
//             value={formData.serviceCharge}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* Application Deadline */}
//         <div className="form-control mb-4">
//           <label className="label">Application Deadline</label>
//           <input
//             type="date"
//             name="applicationDeadline"
//             value={formData.applicationDeadline}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* Scholarship Post Date */}
//         <div className="form-control mb-4">
//           <label className="label">Scholarship Post Date</label>
//           <input
//             type="date"
//             name="scholarshipPostDate"
//             value={formData.scholarshipPostDate}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* Posted User Email */}
//         <div className="form-control mb-4">
//           <label className="label">Posted User Email</label>
//           <input
//             type="email"
//             name="postedUserEmail"
//             value={formData.postedUserEmail}
//             onChange={handleChange}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="form-control mb-4">
//           <button type="submit" className="btn btn-primary w-full">
//             Add Scholarship
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddScholarShip;





























// ggod

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import UseAxiosPublic from '../../hooks/UseAxiosPublic';
// // import { use } from 'react';
// // import UseAxiosSecure from '../../hooks/UseAxsiosSecure';
// // import UseAxiosSecure from '../../hooks/UseAxsiosSecure'
// // API key from .env file for image hosting (imgbb)
// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
// const AddScholarShip = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit =  async (data) => {
//     const axiosPublic = UseAxiosPublic();
//     // const axiosSecure = UseAxiosSecure();
//     console.log(data);
//     const imageFile= {image: data.university_logo[0]};
//     const res = await axiosPublic.post(image_hosing_api,imageFile, {
//        headers: {
//         'content-type' :  'multipart/form-data'
//        }
//     });

//     if(res.data.success){
//       // const location = `${data.universityCity}, ${data.universityCountry}`;
//       //   console.log('Location:', location);

//       // const scholar = {
//       //    university_name : data.university_name,
//       //    university_logo  : res.data.data.display_url,
//       //    scholarship_deadline : data.post_date,
//       //    subject_category : data.subject_category,
//       //    scholarShip_category : data.scholarShip_category,
//       //    application_fees : parseFloat(data.application_fees),
//       //    location : data.universityCity,
//       //    rating : data.rating,

//       // }


      

//       const scholar = {
//         university_name: data.university_name,
//         university_logo: res.data.data.display_url,
//         application_deadline: data.application_deadline, // Correct field name
//         subject_category: data.subject_category, // Correct field name
//         scholarship_category: data.scholarship_category, // Correct field name
//         application_fees: parseFloat(data.application_fees),
//         service_charge: parseFloat(data.service_charge),
//         location: location, // Combined location
//         rating: data.rating,
//         post_date: data.post_date,
//         postedUserEmail: data.postedUserEmail,
//     };



   
//       const scholarShip = await axiosPublic.post('/scholar', scholar)
//          console.log(scholarShip.data);
//          if(scholarShip.data.insertedId){

//          }


//     }

//     console.log(res.data)
  

//   };

//   return (
//     <div className="max-w-xl mx-auto p-4 border rounded-lg shadow-md">
//       <h1 className="text-2xl font-semibold text-center mb-4">Add Scholarship</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>

//         {/* Scholarship Name */}
//         <div className="mb-4">
//           <label className="block mb-2">Scholarship Name</label>
//           <input
//             type="text"
//             {...register('scholarshipName', { required: 'Scholarship Name is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.scholarshipName && <span className="text-red-500">{errors.scholarshipName.message}</span>}
//         </div>

//         {/* University Name */}
//         <div className="mb-4">
//           <label className="block mb-2">University Name</label>
//           <input
//             type="text"
//             {...register('university_name', { required: 'University Name is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.university_name && <span className="text-red-500">{errors.universityName.message}</span>}
//         </div>

//         {/* University Image/Logo */}
//         <div className="mb-4">
//           <label className="block mb-2">University Image/Logo</label>
//           <input
//             type="file"
//             accept="image/*"
//             {...register('university_logo', { required: 'University Image is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.university_logo && <span className="text-red-500">{errors.universityImage.message}</span>}
//         </div>

//         {/* University Country */}
//         <div className="mb-4">
//           <label className="block mb-2">University Country</label>
//           <input
//             type="text"
//             {...register('universityCountry', { required: 'University Country is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.location && <span className="text-red-500">{errors.universityCountry.message}</span>}
//         </div>

//         {/* University City */}
//         <div className="mb-4">
//           <label className="block mb-2">University City</label>
//           <input
//             type="text"
//             {...register('universityCity', { required: 'University City is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.universityCity && <span className="text-red-500">{errors.universityCity.message}</span>}
//         </div>

//         {/* University World Rank */}
//         <div className="mb-4">
//           <label className="block mb-2">University World Rank</label>
//           <input
//             type="number"
//             {...register('universityWorldRank', { required: 'University World Rank is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.universityWorldRank && <span className="text-red-500">{errors.universityWorldRank.message}</span>}
//         </div>

//         {/* Subject Category */}
//         <div className="mb-4">
//           <label className="block mb-2">Subject Category</label>
//           <select
//             {...register('subject_category', { required: 'Subject Category is required' })}
//             className="w-full px-3 py-2 border rounded"
//           >
//             <option value="">Select Category</option>
//             <option value="Agriculture">Agriculture</option>
//             <option value="Engineering">Engineering</option>
//             <option value="Doctor">Doctor</option>
//           </select>
//           {errors.subjectCategory && <span className="text-red-500">{errors.subjectCategory.message}</span>}
//         </div>

//         {/* Scholarship Category */}
//         <div className="mb-4">
//           <label className="block mb-2">Scholarship Category</label>
//           <select
//             {...register('scholarship_category', { required: 'Scholarship Category is required' })}
//             className="w-full px-3 py-2 border rounded"
//           >
//             <option value="">Select Category</option>
//             <option value="Full fund">Full Fund</option>
//             <option value="Partial">Partial</option>
//             <option value="Self-fund">Self-fund</option>
//           </select>
//           {errors.scholarshipCategory && <span className="text-red-500">{errors.scholarshipCategory.message}</span>}
//         </div>

//         {/* Degree */}
//         <div className="mb-4">
//           <label className="block mb-2">Degree</label>
//           <select
//             {...register('degree', { required: 'Degree is required' })}
//             className="w-full px-3 py-2 border rounded"
//           >
//             <option value="">Select Degree</option>
//             <option value="Diploma">Diploma</option>
//             <option value="Bachelor">Bachelor</option>
//             <option value="Masters">Masters</option>
//           </select>
//           {errors.degree && <span className="text-red-500">{errors.degree.message}</span>}
//         </div>

//         {/* Application Fees */}
//         <div className="mb-4">
//           <label className="block mb-2">Application Fees</label>
//           <input
//             type="number"
//             {...register('application_fees', { required: 'Application Fees is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.applicationFees && <span className="text-red-500">{errors.applicationFees.message}</span>}
//         </div>

//         {/* Service Charge */}
//         <div className="mb-4">
//           <label className="block mb-2">Service Charge</label>
//           <input
//             type="number"
//             {...register('service_charge', { required: 'Service Charge is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.serviceCharge && <span className="text-red-500">{errors.serviceCharge.message}</span>}
//         </div>

//         {/* Application Deadline */}
//         <div className="mb-4">
//           <label className="block mb-2">Application Deadline</label>
//           <input
//             type="date"
//             {...register('application_deadline', { required: 'Application Deadline is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.applicationDeadline && <span className="text-red-500">{errors.applicationDeadline.message}</span>}
//         </div>

//         {/* Scholarship Post Date */}
//         <div className="mb-4">
//           <label className="block mb-2">Scholarship Post Date</label>
//           <input
//             type="date"
//             {...register('post_date', { required: 'Scholarship Post Date is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.scholarshipPostDate && <span className="text-red-500">{errors.scholarshipPostDate.message}</span>}
//         </div>


// {/* Rating */}
// <div className="mb-4">
//           <label className="block mb-2">Rating</label>
//           {/* <input
//             type="rating"
//             {...register('rating', { required: 'rating is required' })}
//             className="w-full px-3 py-2 border rounded"
//         /> */}
//          <select
//             {...register('degree', { required: 'Degree is required' })}
//             className="w-full px-3 py-2 border rounded"
//           >
//             <option value="">Select Rating</option>
//             <option value="Diploma">1</option>
//             <option value="Bachelor">2</option>
//             <option value="Masters">3</option>
//             <option value="Masters">4</option>
//             <option value="Masters">5</option>
//           </select>


//           {errors.scholarshipPostDate && <span className="text-red-500">{errors.scholarshipRating.message}</span>}
//         </div>


//         {/* Posted User Email */}
//         <div className="mb-4">
//           <label className="block mb-2">Posted User Email</label>
//           <input
//             type="email"
//             {...register('postedUserEmail', { required: 'Email is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.postedUserEmail && <span className="text-red-500">{errors.postedUserEmail.message}</span>}
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
//           Submit
//         </button>
//       </form>

    


//     </div>
//   );
// };

// export default AddScholarShip;
























// import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

// API key from .env file for image hosting (imgbb)
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddScholarShip = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [location, setLocation] = useState('');

  const onSubmit = async (data) => {
    const axiosPublic = UseAxiosPublic();
    try {
      const imageFile = new FormData();
      imageFile.append('image', data.university_logo[0]);

      const res = await axiosPublic.post(image_hosing_api, imageFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.success) {
        const location = {
          city: data.city,
          country: data.country,
        };
        
        console.log('Location:', location);

        const scholar = {
//           university_name: data.university_name,
//           description :data.
//           scholarship_description
//           ,
//           stipend : data.
          
// stipend
// ,
          
//           university_logo: res.data.data.display_url,
//           application_deadline: data.application_deadline,
//           subject_category: data.subject_category,
//           scholarship_category: data.scholarship_category,
//           application_fees: parseFloat(data.application_fees),
//           service_charge: parseFloat(data.service_charge),
//           location: location,
//           rating: data.rating,
//           post_date: data.post_date,
//           postedUserEmail: data.postedUserEmail,



university_name: data.university_name,
        
scholarship_description: data.scholarship_description
        , // Corrected the field name here
        stipend: data.stipend, // Corrected the field name here
        university_logo: res.data.data.display_url,
        application_deadline: data.application_deadline,
        subject_category: data.subject_category,
        scholarship_category: data.scholarship_category,
        application_fees: parseFloat(data.application_fees),
        service_charge: parseFloat(data.service_charge),
        location: location,
        rating: data.rating,
        post_date: data.post_date,
        postedUserEmail: data.postedUserEmail,





        };

        const scholarShip = await axiosPublic.post('/scholar', scholar);
        console.log(scholarShip.data);

        if (scholarShip.data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Scholarship has been added successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
    <h1 className="text-4xl font-semibold -mt-10 text-center text-white mb-4">Add Scholarship</h1>
    <div className="max-w-xl mx-auto p-4  bg-blue-400 bg-opacity-15 rounded-lg shadow-md">
      <Helmet>
              <title> ProFellow | Add ScholarShip </title>
            </Helmet>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Scholarship Name */}
        <div className="mb-4 text-green-500">
          <label className="block mb-2 text-base ">Scholarship Name</label>
          <input
            type="text"
            {...register('scholarshipName', { required: 'Scholarship Name is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.scholarshipName && <span className="text-red-500">{errors.scholarshipName.message}</span>}
        </div>

        {/* University Name */}
        <div className="mb-4 text-green-500">
          <label className="block mb-2">University Name</label>
          <input
            type="text"
            {...register('university_name', { required: 'University Name is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.university_name && <span className="text-red-500">{errors.university_name.message}</span>}
        </div>

        {/* University Image/Logo */}
        <div className="mb-4 text-green-500">
          <label className="block mb-2">University Image/Logo</label>
          <input
            type="file"
            accept="image/*"
            {...register('university_logo', { required: 'University Image is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.university_logo && <span className="text-red-500">{errors.university_logo.message}</span>}
        </div>

         {/* University Country */}
        <div className="mb-4 text-green-500">
          <label className="block mb-2">University Country</label>
          <input
            type="text"
            {...register('country', { required: 'University Country is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.universityCountry && <span className="text-red-500">{errors.universityCountry.message}</span>}
        </div> 







        {/* University City */}
        <div className="mb-4 text-green-500">
          <label className="block mb-2">University City</label>
          <input
            type="text"
            {...register('city', { required: 'University City is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.universityCity && <span className="text-red-500">{errors.universityCity.message}</span>}
        </div> 



{/* University City
<div className="mb-4">
  <label className="block mb-2">University City</label>
  <input
    type="text"
    {...register('city', { required: 'University City is required' })}
    className="w-full px-3 py-2 border rounded"
    onChange={(e) => setLocation(`${watch('country') || ''}, ${e.target.value}`)}
  />
  {errors.city && <span className="text-red-500">{errors.city.message}</span>}
</div> */}



        {/* University World Rank */}
        <div className="mb-4 text-green-500">
          <label className="block mb-2">University World Rank</label>
          <input
            type="number"
            {...register('universityWorldRank', { required: 'University World Rank is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.universityWorldRank && <span className="text-red-500">{errors.universityWorldRank.message}</span>}
        </div>



{/* University Stipend */}
<div className="mb-4 text-green-500">
          <label className="block mb-2">University Stipend</label>
          <input
            type="number"
            {...register('stipend', { required: 'University Stipend is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.stipend && <span className="text-red-500">{errors.stipend.message}</span>}
        </div>




        {/* Subject Category */}
        <div className="mb-4 text-green-500 text-base">
          <label className="block mb-2">Subject Category</label>
          <select
            {...register('subject_category', { required: 'Subject Category is required' })}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select Category</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Engineering">Engineering</option>
            <option value="Doctor">Doctor</option>
          </select>
          {errors.subject_category && <span className="text-red-500">{errors.subject_category.message}</span>}
        </div>

{/* University Description */}
<div className="mb-4 text-green-500">
          <label className="block mb-2">University Description</label>
          <input
            type="text"
            {...register('scholarship_description', { required: 'University Description is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.scholarship_description && <span className="text-red-500">{errors.scholarship_description
.message}</span>}
        </div>




        {/* Scholarship Category */}
        <div className="mb-4 text-green-500">
          <label className="block mb-2">Scholarship Category</label>
          <select
            {...register('scholarship_category', { required: 'Scholarship Category is required' })}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select Category</option>
            <option value="Full fund">Full Fund</option>
            <option value="Partial">Partial</option>
            <option value="Self-fund">Self-fund</option>
          </select>
          {errors.scholarship_category && <span className="text-red-500">{errors.scholarship_category.message}</span>}
        </div>

        {/* Degree */}
        <div className="mb-4 text-green-500">
          <label className="block mb-2">Degree</label>
          <select
            {...register('degree', { required: 'Degree is required' })}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select Degree</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
          </select>
          {errors.degree && <span className="text-red-500">{errors.degree.message}</span>}
        </div>

        {/* Application Fees */}
        <div className="mb-4  text-green-500">
          <label className="block mb-2">Application Fees</label>
          <input
            type="number"
            {...register('application_fees', { required: 'Application Fees is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.application_fees && <span className="text-red-500">{errors.application_fees.message}</span>}
        </div>

        {/* Service Charge */}
        <div className="mb-4  text-green-500">
          <label className="block mb-2">Service Charge</label>
          <input
            type="number"
            {...register('service_charge', { required: 'Service Charge is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.service_charge && <span className="text-red-500">{errors.service_charge.message}</span>}
        </div>

        {/* Application Deadline */}
        <div className="mb-4  text-green-500">
          <label className="block mb-2">Application Deadline</label>
          <input
            type="date"
            {...register('application_deadline', { required: 'Application Deadline is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.application_deadline && <span className="text-red-500">{errors.application_deadline.message}</span>}
        </div>

        {/* Scholarship Post Date */}
        <div className="mb-4  text-green-500">
          <label className="block mb-2">Scholarship Post Date</label>
          <input
            type="date"
            {...register('post_date', { required: 'Scholarship Post Date is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.post_date && <span className="text-red-500">{errors.post_date.message}</span>}
        </div>

        {/* Rating */}
        <div className="mb-4  text-green-500">
          <label className="block mb-2">Rating</label>
          <select
            {...register('rating', { required: 'Rating is required' })}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.rating && <span className="text-red-500">{errors.rating.message}</span>}
        </div>

        {/* Posted User Email */}
        <div className="mb-4  text-green-500">
          <label className="block mb-2">Posted User Email</label>
          <input
            type="email"
            {...register('postedUserEmail', { required: 'Email is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.postedUserEmail && <span className="text-red-500">{errors.postedUserEmail.message}</span>}
        </div>

        <button type="submit" className="w-full  btn btn-outline btn-success text-white py-2 rounded">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default AddScholarShip;

























































// import React from 'react';
// import { useForm } from 'react-hook-form';
// import UseAxiosPublic from '../../hooks/UseAxiosPublic';
// // import UseAxiosSecure from '../../hooks/UseAxsiosSecure';

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const AddScholarShip = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();

//   const onSubmit = async (data) => {
//     const axiosPublic = UseAxiosPublic();
//     // const axiosSecure = UseAxiosSecure();

//     try {
//       const imageFile = new FormData();
//       imageFile.append('image', data.university_logo[0]);

//       const res = await axiosPublic.post(image_hosing_api, imageFile, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });

//       if (res.data.success) {
//         const scholar = {
//           scholarshipName: data.scholarshipName,
//           universityName: data.university_name,
//           universityLogo: res.data.data.display_url,
//           universityCountry: data.universityCountry,
//           universityCity: data.universityCity,
//           universityWorldRank: parseInt(data.universityWorldRank),
//           subjectCategory: data.subject_category,
//           scholarshipCategory: data.scholarship_category,
//           degree: data.degree,
//           applicationFees: parseFloat(data.application_fees),
//           serviceCharge: parseFloat(data.service_charge),
//           applicationDeadline: data.application_deadline,
//           postDate: data.post_date,
//           postedUserEmail: data.postedUserEmail,
//           tuitionFees: data.tuition_fees ? parseFloat(data.tuition_fees) : undefined,
//         };

//         // Uncomment when axiosSecure is ready
//         // const scholarShip = await axiosSecure.post('/scholar', scholar);
//         // if (scholarShip.data.insertedId) {
//         //   alert('Scholarship added successfully!');
//         //   reset();
//         // }
//         console.log('Scholarship data:', scholar);
//         alert('Scholarship added successfully!');
//         reset();
//       }
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//       alert('Failed to add scholarship. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-4 border rounded-lg shadow-md">
//       <h1 className="text-2xl font-semibold text-center mb-4">Add Scholarship</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Scholarship Name */}
//         <div className="mb-4">
//           <label className="block mb-2">Scholarship Name</label>
//           <input
//             type="text"
//             {...register('scholarshipName', { required: 'Scholarship Name is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.scholarshipName && <span className="text-red-500">{errors.scholarshipName.message}</span>}
//         </div>

//         {/* University Name */}
//         <div className="mb-4">
//           <label className="block mb-2">University Name</label>
//           <input
//             type="text"
//             {...register('university_name', { required: 'University Name is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.university_name && <span className="text-red-500">{errors.university_name.message}</span>}
//         </div>

//         {/* University Image/Logo */}
//         <div className="mb-4">
//           <label className="block mb-2">University Image/Logo</label>
//           <input
//             type="file"
//             accept="image/*"
//             {...register('university_logo', { required: 'University Image is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.university_logo && <span className="text-red-500">{errors.university_logo.message}</span>}
//         </div>

//         {/* University Country */}
//         <div className="mb-4">
//           <label className="block mb-2">University Country</label>
//           <input
//             type="text"
//             {...register('universityCountry', { required: 'University Country is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.universityCountry && <span className="text-red-500">{errors.universityCountry.message}</span>}
//         </div>

//         {/* University City */}
//         <div className="mb-4">
//           <label className="block mb-2">University City</label>
//           <input
//             type="text"
//             {...register('universityCity', { required: 'University City is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.universityCity && <span className="text-red-500">{errors.universityCity.message}</span>}
//         </div>

//         {/* University World Rank */}
//         <div className="mb-4">
//           <label className="block mb-2">University World Rank</label>
//           <input
//             type="number"
//             {...register('universityWorldRank', { required: 'University World Rank is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.universityWorldRank && <span className="text-red-500">{errors.universityWorldRank.message}</span>}
//         </div>

//         {/* Subject Category */}
//         <div className="mb-4">
//           <label className="block mb-2">Subject Category</label>
//           <select
//             {...register('subject_category', { required: 'Subject Category is required' })}
//             className="w-full px-3 py-2 border rounded"
//           >
//             <option value="">Select Category</option>
//             <option value="Agriculture">Agriculture</option>
//             <option value="Engineering">Engineering</option>
//             <option value="Doctor">Doctor</option>
//           </select>
//           {errors.subject_category && <span className="text-red-500">{errors.subject_category.message}</span>}
//         </div>

//         {/* Scholarship Category */}
//         <div className="mb-4">
//           <label className="block mb-2">Scholarship Category</label>
//           <select
//             {...register('scholarship_category', { required: 'Scholarship Category is required' })}
//             className="w-full px-3 py-2 border rounded"
//           >
//             <option value="">Select Category</option>
//             <option value="Full fund">Full Fund</option>
//             <option value="Partial">Partial</option>
//             <option value="Self-fund">Self-fund</option>
//           </select>
//           {errors.scholarship_category && <span className="text-red-500">{errors.scholarship_category.message}</span>}
//         </div>

//         {/* Degree */}
//         <div className="mb-4">
//           <label className="block mb-2">Degree</label>
//           <select
//             {...register('degree', { required: 'Degree is required' })}
//             className="w-full px-3 py-2 border rounded"
//           >
//             <option value="">Select Degree</option>
//             <option value="Diploma">Diploma</option>
//             <option value="Bachelor">Bachelor</option>
//             <option value="Masters">Masters</option>
//           </select>
//           {errors.degree && <span className="text-red-500">{errors.degree.message}</span>}
//         </div>

//         {/* Tuition Fees */}
//         <div className="mb-4">
//           <label className="block mb-2">Tuition Fees (Optional)</label>
//           <input
//             type="number"
//             {...register('tuition_fees')}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>

//         {/* Application Fees */}
//         <div className="mb-4">
//           <label className="block mb-2">Application Fees</label>
//           <input
//             type="number"
//             {...register('application_fees', { required: 'Application Fees is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.application_fees && <span className="text-red-500">{errors.application_fees.message}</span>}
//         </div>

//         {/* Service Charge */}
//         <div className="mb-4">
//           <label className="block mb-2">Service Charge</label>
//           <input
//             type="number"
//             {...register('service_charge', { required: 'Service Charge is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.service_charge && <span className="text-red-500">{errors.service_charge.message}</span>}
//         </div>

//         {/* Application Deadline */}
//         <div className="mb-4">
//           <label className="block mb-2">Application Deadline</label>
//           <input
//             type="date"
//             {...register('application_deadline', { required: 'Application Deadline is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.application_deadline && <span className="text-red-500">{errors.application_deadline.message}</span>}
//         </div>

//         {/* Scholarship Post Date */}
//         <div className="mb-4">
//           <label className="block mb-2">Scholarship Post Date</label>
//           <input
//             type="date"
//             {...register('post_date', { required: 'Scholarship Post Date is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.post_date && <span className="text-red-500">{errors.post_date.message}</span>}
//         </div>

//         {/* Posted User Email */}
//         <div className="mb-4">
//           <label className="block mb-2">Posted User Email</label>
//           <input
//             type="email"
//             {...register('postedUserEmail', { required: 'Email is required' })}
//             className="w-full px-3 py-2 border rounded"
//           />
//           {errors.postedUserEmail && <span className="text-red-500">{errors.postedUserEmail.message}</span>}
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddScholarShip;









