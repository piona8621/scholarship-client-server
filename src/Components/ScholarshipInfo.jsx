import React from "react";

const ScholarshipInfo = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto text-center px-4 md:px-12">
        <h2 className="text-4xl font-semibold text-green-600 mb-8">
          Scholarship Application Process
        </h2>
        <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto">
          Learn about the scholarship application process, eligibility criteria, and the benefits of applying. Make your dreams come true by understanding the process clearly!
        </p>

        {/* Application Process */}
        <div className="application-process mb-16">
          <h3 className="text-3xl font-semibold text-green-600 mb-6">Application Process</h3>
          <ol className="list-decimal list-inside text-lg text-gray-200 space-y-4">
            <li>Fill out the online application form with your personal details.</li>
            <li>Upload the required documents such as transcripts and personal statement.</li>
            <li>Submit your application before the deadline.</li>
            <li>Wait for the scholarship committee to review your application.</li>
            <li>If selected, you will be contacted for an interview or further information.</li>
            <li>Receive the scholarship award after the final selection process.</li>
          </ol>
        </div>

        {/* Eligibility Criteria */}
        <div className="eligibility-criteria mb-16">
          <h3 className="text-3xl font-semibold text-green-600 mb-6">Eligibility Criteria</h3>
          <ul className="list-disc list-inside text-lg text-gray-200 space-y-4">
            <li>You must be currently enrolled or planning to enroll in an accredited institution.</li>
            <li>Your academic performance must meet the minimum required GPA.</li>
            <li>You should demonstrate financial need or other factors that align with the scholarship goals.</li>
            <li>You may be required to submit a personal statement or essay to explain why you deserve the scholarship.</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="scholarship-benefits mb-16   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <h3 className="text-3xl font-semibold text-green-600 mb-6 col-span-full">Scholarship Benefits</h3>
          <div className="benefit-item bg-opacity-20 bg-blue-800  p-6 rounded-md shadow-lg">
            <h4 className="text-xl font-semibold text-blue-500 mb-4">Tuition Coverage</h4>
            <p className="text-lg text-white">Full or partial tuition coverage for the duration of your course.</p>
          </div>
          <div className="benefit-item bg-opacity-20 bg-blue-800  p-6 rounded-md shadow-lg">
            <h4 className="text-xl font-semibold text-blue-500 mb-4">Financial Aid</h4>
            <p className="text-lg text-white ">Financial aid to cover books, supplies, and other academic expenses.</p>
          </div>
          <div className="benefit-item bg-opacity-20 bg-blue-800  p-6 rounded-md shadow-lg">
            <h4 className="text-xl font-semibold text-blue-500 mb-4">Networking & Mentorship</h4>
            <p className="text-lg text-white">Opportunity to participate in networking events, workshops, or mentoring programs.</p>
          </div>
          <div className="benefit-item bg-opacity-20 bg-blue-800  p-6 rounded-md shadow-lg">
            <h4 className="text-xl font-semibold text-blue-500 mb-4">Internship Opportunities</h4>
            <p className="text-lg text-white">Access to internship opportunities and career development resources.</p>
          </div>
          <div className="benefit-item bg-opacity-20 bg-blue-800  p-6 rounded-md shadow-lg">
            <h4 className="text-xl font-semibold text-blue-500 mb-4">Recognition</h4>
            <p className="text-lg text-white">Recognition on the scholarship website and at related events.</p>
          </div>
        </div>

        {/* Call to Action
        <div className="cta mb-8">
          <p className="text-xl text-white font-semibold mb-4">
            Ready to apply? Take the first step today!
          </p>
          <a href="#" className="bg-green-500 text-white py-2 px-6 rounded-full text-lg hover:bg-green-600 transition duration-300">
            Apply Now
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ScholarshipInfo;
