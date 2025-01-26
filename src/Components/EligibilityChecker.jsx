import React, { useState } from "react";

const EligibilityChecker = () => {
  const [eligibility, setEligibility] = useState("");

  const checkEligibility = () => {
    // Placeholder logic
    setEligibility("You are eligible for 5 scholarships!");
  };

  return (
    <div className="eligibility-checker bg-blue-200 bg-opacity-15 mt-4 py-10">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
        Check Your Eligibility
      </h2>
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter your qualification"
          className="input input-bordered mb-4"
        />
        <input
          type="number"
          placeholder="Enter your age"
          className="input input-bordered mb-4"
        />
        <button className="btn btn-outline btn-success" onClick={checkEligibility}>
          Check Now
        </button>
        {eligibility && <p className="mt-4">{eligibility}</p>}
      </div>
    </div>
  );
};

export default EligibilityChecker;
