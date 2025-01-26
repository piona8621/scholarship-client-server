

















// f-3

// import React, { useState, useEffect } from "react";
// import { Helmet } from "react-helmet-async";
// import { FaEdit, FaTrashAlt, FaInfoCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const ManageScholarship = () => {
//   const [scholarships, setScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedScholarship, setSelectedScholarship] = useState(null);
  
//   const navigate = useNavigate();

//   // Fetch scholarships from the backend and store in local state
//   const fetchScholarships = () => {
//     fetch("https://scholarship-server-project.vercel.app/scholar",{
//       method: "GET",
//       headers: {
//         authorization: `Bearer ${localStorage.getItem('access-token')}` // Use getItem instead of get
//       }
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setScholarships(data);
//         localStorage.setItem("scholarships", JSON.stringify(data)); // Store in localStorage
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching scholarships:", error);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     // Try to load scholarships from localStorage first
//     const storedScholarships = localStorage.getItem("scholarships");
//     if (storedScholarships) {
//       setScholarships(JSON.parse(storedScholarships));
//       setLoading(false);
//     }

//     // Always fetch from API to ensure up-to-date data
//     fetchScholarships();
//   }, []);

//   const handleDetails = (id) => {
//     navigate(`/scholarship-details/${id}`);
//   };

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
//         fetch(`https://scholarship-server-project.vercel.app/manage-scholarship/${id}`, { method: "DELETE" })
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error("Failed to delete scholarship");
//             }
//             return response.json();
//           })
//           .then(() => {
//             const updatedScholarships = scholarships.filter((scholarship) => scholarship._id !== id);
//             setScholarships(updatedScholarships);
//             localStorage.setItem("scholarships", JSON.stringify(updatedScholarships));
  
//             Swal.fire("Deleted!", "Scholarship has been deleted.", "success");
//           })
//           .catch((error) => {
//             console.error("Error deleting scholarship:", error);
//             Swal.fire("Error!", "Failed to delete scholarship. Please try again.", "error");
//           });
//       }
//     });
//   };
  

//   const handleEdit = (scholarship) => {
//     setSelectedScholarship(scholarship);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedScholarship(null);
//   };

 
  
//   // const handleSubmitEdit = () => {
//   //   fetch(`http://:5000/manage-scholarship/${selectedScholarship._id}`, {
//   //     method: "PUT",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify(selectedScholarship),
//   //   })
//   //     .then((response) => response.json())
//   //     .then((updatedScholarship) => {
//   //       // 🔥 Ensure UI updates immediately
//   //       setScholarships((prevScholarships) =>
//   //         prevScholarships.map((scholarship) =>
//   //           scholarship._id === updatedScholarship._id ? updatedScholarship : scholarship
//   //         )
//   //       );
  
//   //       // 🔥 Save updated data in localStorage to persist across reloads
//   //       localStorage.setItem("scholarships", JSON.stringify(scholarships));
  
//   //       handleCloseModal();
  
//   //       // ✅ Show SweetAlert
//   //       Swal.fire({
//   //         title: "Success!",
//   //         text: "Scholarship updated successfully.",
//   //         icon: "success",
//   //         confirmButtonText: "OK",
//   //       });
//   //     })
//   //     .catch((error) => console.error("Error updating scholarship:", error));
//   // };
  



//   const handleSubmitEdit = () => {
//     fetch(`https://scholarship-server-project.vercel.app/manage-scholarship/${selectedScholarship._id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(selectedScholarship),
//     })
//       .then((response) => response.json())
//       .then((updatedScholarship) => {
//         setScholarships((prevScholarships) => {
//           const updatedList = prevScholarships.map((scholarship) =>
//             scholarship._id === selectedScholarship._id
//               ? { ...scholarship, ...selectedScholarship } // 🔥 Merge with edited data
//               : scholarship
//           );
//           localStorage.setItem("scholarships", JSON.stringify(updatedList)); // 🔥 Persist updated state
//           return updatedList;
//         });
  
//         handleCloseModal();
  
//         Swal.fire({
//           title: "Success!",
//           text: "Scholarship updated successfully.",
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//       })
//       .catch((error) => console.error("Error updating scholarship:", error));
//   };
  



//   return (
//     <div className="text-white ">
//       <h2 className="mb-5 text-green-500 text-xl font-bold">Manage Scholarships: {scholarships.length}</h2>
//       <Helmet>
//               <title> ProFellow | Manage ScholarShip </title>
//             </Helmet>
//       {loading ? (
//         <div>Loading scholarships...</div>
//       ) : (
//         <table className="table-auto mt-10 w-full text-blue-200 text-base">
//           <thead>
//             <tr>
//               <th className="text-green-400">Scholarship Name</th>
//               <th className="text-green-300">University Name</th>
//               <th className="text-green-300">Subject Category</th>
//               <th className="text-green-300">Degree</th>
//               <th className="text-green-300">Application Fees</th>
//               <th className="text-green-300">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {scholarships.map((scholarship) => (
//               <tr key={scholarship._id}>
//                 <td>{scholarship.scholarship_category}</td>
//                 <td>{scholarship.university_name}</td>
//                 <td>{scholarship.subject_category}</td>
//                 <td>{scholarship.degree}</td>
//                 <td>{scholarship.application_fees}</td>
//                 <td>
//                   <button
//                     onClick={() => handleDetails(scholarship._id)}
//                     className="btn btn-outline btn-info mr-2">
//                     <FaInfoCircle /> Details
//                   </button>
//                   <button
//                     onClick={() => handleEdit(scholarship)}
//                     className="btn btn-outline btn-warning mr-2">
//                     <FaEdit /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(scholarship._id)}
//                     className="btn btn-outline btn-error">
//                     <FaTrashAlt /> Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Edit Modal */}
//       {isModalOpen && selectedScholarship && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-blue-800 bg-opacity-20 p-6 rounded-md shadow-lg w-1/3">
//             <h3 className="text-xl text-green-500 font-semibold mb-4">Edit Scholarship</h3>
//             <div className="flex flex-col gap-3">
//               <input 
//                 type="text"
//                 className="border p-2 rounded text-green-500"
//                 value={selectedScholarship.scholarship_category}
//                 onChange={(e) =>
//                   setSelectedScholarship({ ...selectedScholarship, scholarship_category: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 className="border p-2 rounded text-green-500"
//                 value={selectedScholarship.university_name}
//                 onChange={(e) =>
//                   setSelectedScholarship({ ...selectedScholarship, university_name: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 className="border p-2 rounded text-green-500"
//                 value={selectedScholarship.subject_category}
//                 onChange={(e) =>
//                   setSelectedScholarship({ ...selectedScholarship, subject_category: e.target.value })
//                 }
//               />
//               {/* <input
//                 type="degree"
//                 placeholder="degree"
//                 className="border p-2 rounded"
//                 value={selectedScholarship.degree}
//                 onChange={(e) =>
//                   setSelectedScholarship({ ...selectedScholarship, degree: e.target.value })
//                 }
//               /> */}

// <input
//   type="text"
//   className="border p-2 rounded text-green-500"
//   value={selectedScholarship.degree}
//   onChange={(e) =>
//     setSelectedScholarship({ ...selectedScholarship, degree: e.target.value })
//   }
// />



//               <input
//                 type="text"
//                 className="border p-2 rounded text-green-500"
//                 value={selectedScholarship.application_fees}
//                 onChange={(e) =>
//                   setSelectedScholarship({ ...selectedScholarship, application_fees: e.target.value })
//                 }
//               />
//             </div>
//             <div className="flex justify-end gap-3 mt-4">
//               <button onClick={handleSubmitEdit} className="btn-success btn btn-outline text-white px-4 py-2 rounded">
//                 Submit
//               </button>
//               <button onClick={handleCloseModal} className="btn-error btn btn-outline text-white px-4 py-2 rounded">
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageScholarship;





















































import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrashAlt, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageScholarship = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  
  const navigate = useNavigate();

  // Fetch scholarships from the backend and store in local state
  const fetchScholarships = () => {
    fetch("https://scholarship-server-project.vercel.app/scholar", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}` // Use getItem instead of get
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setScholarships(data);
        localStorage.setItem("scholarships", JSON.stringify(data)); // Store in localStorage
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching scholarships:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Try to load scholarships from localStorage first
    const storedScholarships = localStorage.getItem("scholarships");
    if (storedScholarships) {
      setScholarships(JSON.parse(storedScholarships));
      setLoading(false);
    }

    // Always fetch from API to ensure up-to-date data
    fetchScholarships();
  }, []);

  const handleDetails = (id) => {
    navigate(`/scholarship-details/${id}`);
  };

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
        fetch(`https://scholarship-server-project.vercel.app/manage-scholarship/${id}`, { method: "DELETE" })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to delete scholarship");
            }
            return response.json();
          })
          .then(() => {
            const updatedScholarships = scholarships.filter((scholarship) => scholarship._id !== id);
            setScholarships(updatedScholarships);
            localStorage.setItem("scholarships", JSON.stringify(updatedScholarships));
  
            Swal.fire("Deleted!", "Scholarship has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting scholarship:", error);
            Swal.fire("Error!", "Failed to delete scholarship. Please try again.", "error");
          });
      }
    });
  };
  

  const handleEdit = (scholarship) => {
    setSelectedScholarship(scholarship);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedScholarship(null);
  };

  const handleSubmitEdit = () => {
    fetch(`https://scholarship-server-project.vercel.app/manage-scholarship/${selectedScholarship._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedScholarship),
    })
      .then((response) => response.json())
      .then((updatedScholarship) => {
        setScholarships((prevScholarships) => {
          const updatedList = prevScholarships.map((scholarship) =>
            scholarship._id === selectedScholarship._id
              ? { ...scholarship, ...selectedScholarship } // Merge with edited data
              : scholarship
          );
          localStorage.setItem("scholarships", JSON.stringify(updatedList)); // Persist updated state
          return updatedList;
        });
  
        handleCloseModal();
  
        Swal.fire({
          title: "Success!",
          text: "Scholarship updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => console.error("Error updating scholarship:", error));
  };

  return (
    <div className="text-white">
      <h2 className="mb-5 text-green-500 text-xl font-bold">Manage Scholarships: {scholarships.length}</h2>
      <Helmet>
        <title> ProFellow | Manage ScholarShip </title>
      </Helmet>
      {loading ? (
        <div>Loading scholarships...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto mt-10 w-full text-blue-200 text-base">
            <thead>
              <tr>
                <th className="text-green-400">Scholarship Name</th>
                <th className="text-green-300">University Name</th>
                <th className="text-green-300">Subject Category</th>
                <th className="text-green-300">Degree</th>
                <th className="text-green-300">Application Fees</th>
                <th className="text-green-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((scholarship) => (
                <tr key={scholarship._id}>
                  <td>{scholarship.scholarship_category}</td>
                  <td>{scholarship.university_name}</td>
                  <td>{scholarship.subject_category}</td>
                  <td>{scholarship.degree}</td>
                  <td>{scholarship.application_fees}</td>
                  <td>
                    <button
                      onClick={() => handleDetails(scholarship._id)}
                      className="btn btn-outline btn-info mr-2">
                      <FaInfoCircle /> Details
                    </button>
                    <button
                      onClick={() => handleEdit(scholarship)}
                      className="btn btn-outline btn-warning mr-2">
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(scholarship._id)}
                      className="btn btn-outline btn-error">
                      <FaTrashAlt /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {isModalOpen && selectedScholarship && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-blue-800 bg-opacity-20 p-6 rounded-md shadow-lg w-full sm:w-1/3">
            <h3 className="text-xl text-green-500 font-semibold mb-4">Edit Scholarship</h3>
            <div className="flex flex-col gap-3">
              <input 
                type="text"
                className="border p-2 rounded text-green-500"
                value={selectedScholarship.scholarship_category}
                onChange={(e) =>
                  setSelectedScholarship({ ...selectedScholarship, scholarship_category: e.target.value })
                }
              />
              <input
                type="text"
                className="border p-2 rounded text-green-500"
                value={selectedScholarship.university_name}
                onChange={(e) =>
                  setSelectedScholarship({ ...selectedScholarship, university_name: e.target.value })
                }
              />
              <input
                type="text"
                className="border p-2 rounded text-green-500"
                value={selectedScholarship.subject_category}
                onChange={(e) =>
                  setSelectedScholarship({ ...selectedScholarship, subject_category: e.target.value })
                }
              />
              <input
                type="text"
                className="border p-2 rounded text-green-500"
                value={selectedScholarship.degree}
                onChange={(e) =>
                  setSelectedScholarship({ ...selectedScholarship, degree: e.target.value })
                }
              />
              <input
                type="text"
                className="border p-2 rounded text-green-500"
                value={selectedScholarship.application_fees}
                onChange={(e) =>
                  setSelectedScholarship({ ...selectedScholarship, application_fees: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={handleSubmitEdit} className="btn-success btn btn-outline text-white px-4 py-2 rounded">
                Submit
              </button>
              <button onClick={handleCloseModal} className="btn-error btn btn-outline text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageScholarship;






































































































