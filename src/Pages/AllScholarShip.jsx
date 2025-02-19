



import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ScholarshipsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [scholarships, setScholarships] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [scholarshipsPerPage] = useState(6); // Number of scholarships to show per page

  // Fetch scholarships data from an API or a local JSON file
  useEffect(() => {
    fetch("https://scholarship-server-project.vercel.app/scholar") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        const sanitizedData = data.map((item) => ({
          universityName: item.university_name || "Unknown University",
          scholarshipCategory: item.scholarship_category || "Unknown Category",
          subjectCategory: item.subject_category || "Unknown Subject",
          scholarshipName: item.scholarship_name || "Unknown Scholarship", // Added scholarshipName
          location: item.location || { country: "Unknown Country", city: "Unknown City" },
          ...item, // Retain all other properties
        }));
        setScholarships(sanitizedData);
        setFilteredScholarships(sanitizedData); // Initially show all scholarships
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching scholarships:", error);
        setLoading(false);
      });
  }, []);

  // Handle Search functionality
  const handleSearch = () => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const results = scholarships.filter((scholarship) => {
      const universityName = scholarship.university_name?.toLowerCase() || "";
      const scholarshipCategory = scholarship.scholarship_category?.toLowerCase() || "";
      const subjectCategory = scholarship.subject_category?.toLowerCase() || "";
      const scholarshipName = scholarship.scholarshipName?.toLowerCase() || ""; // Include scholarshipName in search

      return (
        universityName.includes(lowercasedSearchTerm) ||
        scholarshipCategory.includes(lowercasedSearchTerm) ||
        subjectCategory.includes(lowercasedSearchTerm) ||
        scholarshipName.includes(lowercasedSearchTerm) // Added search by scholarshipName
      );
    });
    setFilteredScholarships(results);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Get current scholarships for the current page
  const indexOfLastScholarship = currentPage * scholarshipsPerPage;
  const indexOfFirstScholarship = indexOfLastScholarship - scholarshipsPerPage;
  const currentScholarships = filteredScholarships.slice(
    indexOfFirstScholarship,
    indexOfLastScholarship
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredScholarships.length / scholarshipsPerPage);



  const [sortOrder, setSortOrder] = useState(""); // Sorting Order

  const handleSortChange = (order) => {
    setSortOrder(order);
    const sortedScholarships = [...filteredScholarships].sort((a, b) => {
      if (order === "asc") {
        return a.application_fees - b.application_fees;
      } else if (order === "desc") {
        return b.application_fees - a.application_fees;
      }
      return 0;
    });
    setFilteredScholarships(sortedScholarships);
  };
  



  return (
    <div>
      <Helmet>
              <title> ProFellow | All Scholarship</title>
            </Helmet>
      {/* Search Box */}
      <div className="search-box text-center mt-10 mb-6">
        <input
          type="text"
          placeholder="Search by Scholarship Name, University, or Degree"
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-success btn-outline text-lg ml-2">
          Search
        </button>
      </div>


      <div className="text-center my-4">
  <select
    className="select select-bordered w-52"
    onChange={(e) => handleSortChange(e.target.value)}
  >
    <option value="">Sort by</option>
    <option value="asc">Price: Low to High</option>
    <option value="desc">Price: High to Low</option>
  </select>
</div>


      {/* Loading State */}
      {loading ? (
        <div className="text-center">Loading scholarships...</div>
      ) : (
        <>
          {/* Displaying Scholarships or No Results */}
          {filteredScholarships.length === 0 ? (
            <div className="no-results text-center">
              <p>No scholarships available for your search criteria.</p>
              {/* You can replace the message with an image here */}
              <img src="no-results-image.png" alt="No Results" />
            </div>
          ) : (
            <div>
              {/* Scholarships Grid */}
              <div className="scholarships-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentScholarships.map((scholarship, index) => (
                  <div key={index} className="card w-full bg-blue-800 bg-opacity-15 shadow-xl">
                    <figure className="relative w-full h-48 overflow-hidden">
                      <img
                        src={scholarship.university_logo || "placeholder-image.jpg"} // Replace with a default image if null
                        alt={scholarship.universityName}
                        className="object-cover w-full h-full" // Make sure image covers the full area
                      />
                    </figure>
                    <div className="card-body px-4 py-6">
                      <h2 className="card-title text-white text-center flex justify-center text-2xl mb-4">{scholarship.university_name}</h2>
                      <p className="text-lg text-white mb-2">
                        <strong className="text-white">Category:</strong> {scholarship.scholarship_category}
                      </p>
                      <p className="mb-2 text-white">
                        <strong className="text-white">Location:</strong> {scholarship.location?.country || "Unknown Country"}, {scholarship.location?.city || "Unknown City"}
                      </p>
                      <p className="mb-2 text-white"><strong className="text-white">Deadline:</strong> {scholarship.application_deadline || "N/A"}</p>
                      <p className="mb-2 text-white"><strong className="text-white">Subject:</strong> {scholarship.subjectCategory}</p>
                      <p className="mb-2 text-white"><strong className="text-white">Application Fees:</strong> {scholarship.application_fees || "N/A"}</p>
                      <p className="mb-4 text-white"><strong>Rating:</strong> {scholarship.rating || "N/A"}</p>
                      <div className="card-actions justify-center">
                        <Link to={`/scholarship-details/${scholarship._id}`}>
                          <button className="btn btn-outline btn-success">Scholarship Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination flex justify-center mt-6">
                <button
                  className="btn btn-outline btn-success text-white"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                {[...Array(totalPages).keys()].map((number) => (
                  <button
                    key={number}
                    className={`btn btn-outline btn-success text-white mx-2 ${currentPage === number + 1 ? "" : ""}`}
                    onClick={() => paginate(number + 1)}
                  >
                    {number + 1}
                  </button>
                ))}
                <button
                  className="btn btn-outline btn-success"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ScholarshipsPage;



























































































