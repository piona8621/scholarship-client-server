




// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Banner = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className=" py-16">
//       <div className="container mx-auto px-6 lg:px-20">
//         {/* Slider */}
//         <Slider {...sliderSettings}>
//           {/* Slide 1 */}
//           <div className="flex flex-col-reverse lg:flex-row items-center">
//             {/* Left Column - Text Content */}
//             <div className="lg:w-1/2 text-center lg:text-left">
//               <h1 className="text-4xl lg:text-5xl ml-10 font-bold text-white mb-4 leading-tight">
//                 Apply for <span className="text-green-500">Scholarships</span> and Build Your Future
//               </h1>
//               <p className="text-blue-200 ml-10 text-lg mb-6">
//                 Unlock educational opportunities with top scholarships from prestigious universities.
//               </p>
//               <div className="flex justify-center ml-10 lg:justify-start gap-4">
//                 <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg">
//                   Explore Scholarships
//                 </button>
//                 <button className="flex items-center text-blue-700 font-medium">
//                   <span className="mr-2">Apply Now</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     className="w-6 h-6"
//                   >
//                     <path d="M5.293 1.5A1 1 0 0 1 6 1h4a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 15 6v4a1 1 0 0 1-.293.707l-4 4A1 1 0 0 1 10 15H6a1 1 0 0 1-.707-.293l-4-4A1 1 0 0 1 1 10V6a1 1 0 0 1 .293-.707l4-4z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Right Column - Image */}
//             <div className="lg:w-1/2 lg:-mt-52 ml-96 relative flex justify-center lg:justify-end">
//               <div className="absolute bg-green-100 rounded-full h-72 w-72  -z-10"></div>
//               <img
//                 src="https://img.freepik.com/free-vector/virtual-graduation-ceremony-with-university-graduate_23-2148571732.jpg?t=st=1737803392~exp=1737806992~hmac=6e1630a42f4cf3c0d7dc2534bcdb17a8a44861ab5bf770d51426a52217ab14e0&w=740" // Replace with an actual image URL
//                 alt="Slide 1"
//                 className="rounded-full h-80 w-80 object-cover"
//               />
//             </div>
//           </div>

//           {/* Slide 2 */}
//           <div className="flex flex-col-reverse lg:flex-row items-center">
//             {/* Left Column - Text Content */}
//             <div className="lg:w-1/2 text-center ml-10 lg:text-left">
//               <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
//                 Earn <span className="text-green-500">Your Degree</span> with Scholarships
//               </h1>
//               <p className="text-blue-200 text-lg mb-6">
//                 Take advantage of funding opportunities and start your academic journey today.
//               </p>
//               <div className="flex justify-center lg:justify-start gap-4">
//                 <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg">
//                   Discover Scholarships
//                 </button>
//                 <button className="flex items-center text-blue-700 font-medium">
//                   <span className="mr-2">Apply Now</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     className="w-6 h-6"
//                   >
//                     <path d="M5.293 1.5A1 1 0 0 1 6 1h4a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 15 6v4a1 1 0 0 1-.293.707l-4 4A1 1 0 0 1 10 15H6a1 1 0 0 1-.707-.293l-4-4A1 1 0 0 1 1 10V6a1 1 0 0 1 .293-.707l4-4z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Right Column - Image */}
//             <div className="lg:w-1/2 relative flex justify-center lg:-mt-52 ml-96 lg:justify-end">
//               <div className="absolute bg-green-100 rounded-full h-72 w-72  -z-30"></div>
//               <img
//                 src="https://img.freepik.com/free-vector/girl-graduation-day-concept-illustration_114360-15299.jpg?t=st=1737803791~exp=1737807391~hmac=2034f7e16226027a9827fb08f63b4b59d524903a7e69e673dc456f9e24575bd4&w=740" // Replace with an actual image URL
//                 alt="Slide 2"
//                 className="rounded-full h-80 w-80 object-cover"
//               />
//             </div>
//           </div>

//           {/* Slide 3 */}
//           <div className="flex flex-col-reverse lg:flex-row items-center">
//             {/* Left Column - Text Content */}
//             <div className="lg:w-1/2 text-center ml-10 lg:text-left">
//               <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
//                 Boost Your Career with <span className="text-green-500">Scholarship Opportunities</span>
//               </h1>
//               <p className="text-blue-200 text-lg mb-6">
//                 Take the next step in your career by applying for scholarships from leading institutions.
//               </p>
//               <div className="flex justify-center lg:justify-start gap-4">
//                 <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg">
//                   Apply for Scholarships
//                 </button>
//                 <button className="flex items-center text-blue-700 font-medium">
//                   <span className="mr-2">Watch Now</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     className="w-6 h-6"
//                   >
//                     <path d="M5.293 1.5A1 1 0 0 1 6 1h4a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 15 6v4a1 1 0 0 1-.293.707l-4 4A1 1 0 0 1 10 15H6a1 1 0 0 1-.707-.293l-4-4A1 1 0 0 1 1 10V6a1 1 0 0 1 .293-.707l4-4z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Right Column - Image */}
//             <div className="lg:w-1/2 relative flex justify-center lg:-mt-52 ml-96  lg:justify-end">
//               <div className="absolute bg-green-100 rounded-full   h-72 w-72 -z-10"></div>
//               <img
//                 src="https://img.freepik.com/free-vector/online-certification-concept_23-2148566050.jpg?t=st=1737803895~exp=1737807495~hmac=f68b3345256fdcc0e8a28d2b2d53f068f174fcff3256e704455b254e756f33f0&w=740" // Replace with an actual image URL
//                 alt="Slide 3"
//                 className="rounded-full h-80 w-80 object-cover"
//               />
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Banner;


























import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Slider */}
        <Slider {...sliderSettings}>
          {/* Slide 1 */}
          <div className="flex flex-col-reverse lg:flex-row items-center">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Apply for <span className="text-green-500">Scholarships</span> and Build Your Future
              </h1>
              <p className="text-blue-200 text-lg sm:text-xl mb-6">
                Unlock educational opportunities with top scholarships from prestigious universities.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg">
                  Explore Scholarships
                </button>
                <button className="flex items-center text-blue-700 font-medium">
                  <span className="mr-2">Apply Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                  >
                    <path d="M5.293 1.5A1 1 0 0 1 6 1h4a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 15 6v4a1 1 0 0 1-.293.707l-4 4A1 1 0 0 1 10 15H6a1 1 0 0 1-.707-.293l-4-4A1 1 0 0 1 1 10V6a1 1 0 0 1 .293-.707l4-4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2 lg:-mt-52 mx-auto flex justify-center lg:justify-end relative">
              <div className="absolute bg-green-100 rounded-full h-72 w-72 -z-10"></div>
              <img
                src="https://img.freepik.com/free-vector/virtual-graduation-ceremony-with-university-graduate_23-2148571732.jpg?t=st=1737803392~exp=1737806992~hmac=6e1630a42f4cf3c0d7dc2534bcdb17a8a44861ab5bf770d51426a52217ab14e0&w=740" // Replace with an actual image URL
                alt="Slide 1"
                className="rounded-full h-80 w-80 object-cover"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Earn <span className="text-green-500">Your Degree</span> with Scholarships
              </h1>
              <p className="text-blue-200 text-lg sm:text-xl mb-6">
                Take advantage of funding opportunities and start your academic journey today.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg">
                  Discover Scholarships
                </button>
                <button className="flex items-center text-blue-700 font-medium">
                  <span className="mr-2">Apply Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                  >
                    <path d="M5.293 1.5A1 1 0 0 1 6 1h4a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 15 6v4a1 1 0 0 1-.293.707l-4 4A1 1 0 0 1 10 15H6a1 1 0 0 1-.707-.293l-4-4A1 1 0 0 1 1 10V6a1 1 0 0 1 .293-.707l4-4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2 relative flex justify-center lg:-mt-52 mx-auto lg:justify-end">
              <div className="absolute bg-green-100 rounded-full h-72 w-72 -z-30"></div>
              <img
                src="https://img.freepik.com/free-vector/girl-graduation-day-concept-illustration_114360-15299.jpg?t=st=1737803791~exp=1737807391~hmac=2034f7e16226027a9827fb08f63b4b59d524903a7e69e673dc456f9e24575bd4&w=740" // Replace with an actual image URL
                alt="Slide 2"
                className="rounded-full h-80 w-80 object-cover"
              />
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex flex-col-reverse lg:flex-row items-center">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Boost Your Career with <span className="text-green-500">Scholarship Opportunities</span>
              </h1>
              <p className="text-blue-200 text-lg sm:text-xl mb-6">
                Take the next step in your career by applying for scholarships from leading institutions.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg">
                  Apply for Scholarships
                </button>
                <button className="flex items-center text-blue-700 font-medium">
                  <span className="mr-2">Watch Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                  >
                    <path d="M5.293 1.5A1 1 0 0 1 6 1h4a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 15 6v4a1 1 0 0 1-.293.707l-4 4A1 1 0 0 1 10 15H6a1 1 0 0 1-.707-.293l-4-4A1 1 0 0 1 1 10V6a1 1 0 0 1 .293-.707l4-4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2 relative flex justify-center lg:-mt-52 mx-auto lg:justify-end">
              <div className="absolute bg-green-100 rounded-full h-72 w-72 -z-10"></div>
              <img
                src="https://img.freepik.com/free-vector/online-certification-concept_23-2148566050.jpg?t=st=1737803895~exp=1737807495~hmac=f68b3345256fdcc0e8a28d2b2d53f068f174fcff3256e704455b254e756f33f0&w=740" // Replace with an actual image URL
                alt="Slide 3"
                className="rounded-full h-80 w-80 object-cover"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;



































































































































