import React from 'react';

const StudentSuccessStories = () => {
  return (
    <section id="reviews" className=" py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-500 mb-6">Student Success Stories</h2>
        <p className="mb-8 text-xl text-blue-700">Read inspiring stories from students who have successfully secured scholarships.</p>
        <div className="flex justify-center space-x-8">
          {/* Success Story 1 */}
          <div className="max-w-xs bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-lg">
            <p className="italic text-white  mb-4">"Thanks to this scholarship, I was able to attend my dream university and pursue my passion for engineering!"</p>
            <p className="font-semibold text-green-500">- John Doe</p>
            <p className="text-white">Electrical Engineering Student</p>
          </div>
          {/* Success Story 2 */}
          <div className="max-w-xs bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-lg">
            <p className="italic mb-4 text-white">"Winning this scholarship opened many doors for me. I am now studying abroad with full financial support!"</p>
            <p className="font-semibold text-green-500">- Jane Smith</p>
            <p className="text-white">International Relations Student</p>
          </div>
          {/* Success Story 3 */}
          <div className="max-w-xs bg-blue-800 bg-opacity-20 p-6 rounded-lg shadow-lg">
            <p className="italic text-white mb-4">"The scholarship helped me focus on my studies without worrying about tuition fees. I am now a proud graduate!"</p>
            <p className="font-semibold text-green-500">- Ahmed Khan</p>
            <p className="text-white">Computer Science Graduate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentSuccessStories;
