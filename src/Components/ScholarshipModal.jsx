import React from 'react';

const ScholarshipModal = ({ isOpen, onClose, scholarship }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-blue-800 bg-opacity-40 p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl text-green-600 font-bold mb-4">{scholarship.title}</h2>
        <p className="mb-4 text-white">{scholarship.details}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className=" btn btn-success btn-outline text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipModal;
