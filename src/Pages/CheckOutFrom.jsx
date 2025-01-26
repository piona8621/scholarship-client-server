// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React from 'react';

// const CheckOutFrom = () => {
// const stripe = useStripe();
// const elements = useElements();
// const handleSubmit = async (event) => {
//     event.preventDefault();

//     if(!stripe || !elements){
//        return
//     }
//     const card = elements.getElement(CardElement);
//     if(card === null){
//        return
//     }

//      const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: "card",
//             card
//      })

//      if(error){
//        console.log(error);

//      }
//      else{
//          console.log('payment method', paymentMethod);
//      }

// }


//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button className='btn btn-outline px-10' type="submit" disabled={!stripe}>
//         Pay
//       </button>
       
//       </form>
//     </div>
//   );
// };

// export default CheckOutFrom;
















































































// 2nd time
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useState } from 'react';

// const CheckOutForm = () => {
//   const [error, setError] = useState('')
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }
//     const card = elements.getElement(CardElement);
//     if (card === null) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card,
//     });

//     if (error) {
//       console.log(error);
//       setError(error.message)
//     } else {
//       console.log('Payment method', paymentMethod);
//       setError('')
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center mb-4">Payment Information</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
//               Card Information
//             </label>
//             <div className="border p-3 rounded-lg bg-gray-50">
//               <CardElement
//                 id="card"
//                 options={{
//                   style: {
//                     base: {
//                       fontSize: '16px',
//                       color: '#424770',
//                       '::placeholder': {
//                         color: '#aab7c4',
//                       },
//                     },
//                     invalid: {
//                       color: '#9e2146',
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
//               disabled={!stripe}
//             >
//               Pay
//             </button>
//             <p className='text-red-500'>{error}</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CheckOutForm;

























































// toast alert

// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import UseAxiosSecure from '../hooks/UseAxsiosSecure';

// const CheckOutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   // const axiosSecure = UseAxiosSecure();

//   // useEffect(() => {
//   //      axiosSecure.post('/create-payment-intent', {amount: 100})
//   //      .then(res => console.log())
//   // }, [])

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       toast.error('Stripe has not loaded. Please try again.');
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       toast.error('Card details are not available. Please re-enter your details.');
//       return;
//     }

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card,
//       });

//       if (error) {
//         console.error(error);
//         toast.error(`Payment Error: ${error.message}`);
//       } else {
//         console.log('Payment Method:', paymentMethod);
//         toast.success('Payment successful! Scholarship applied.');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(`An error occurred: ${error.message}`);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center mb-4">Payment Information</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
//               Card Information
//             </label>
//             <div className="border p-3 rounded-lg bg-gray-50">
//               <CardElement
//                 id="card"
//                 options={{
//                   style: {
//                     base: {
//                       fontSize: '16px',
//                       color: '#424770',
//                       '::placeholder': {
//                         color: '#aab7c4',
//                       },
//                     },
//                     invalid: {
//                       color: '#9e2146',
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
//               disabled={!stripe}
//             >
//               Pay
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* ToastContainer to display toast messages */}
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default CheckOutForm;
























































































































// all ok

// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UseAxiosSecure from '../hooks/UseAxsiosSecure';
// // import UseAxiosSecure from '../hooks/UseAxsiosSecure';

// const CheckOutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const axiosSecure = UseAxiosSecure(); // Secure Axios instance
//   const [clientSecret, setClientSecret] = useState('');

//   // useEffect(() => {
//   //   axiosSecure
//   //     .post('/create-payment-intent', { amount: 1000 }) // Ensure this matches the backend
//   //     .then((response) => {
//   //       setClientSecret(response.data.clientSecret);
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error fetching client secret:', error);
//   //       toast.error('Failed to initialize payment. Please try again.');
//   //     });
//   // }, [axiosSecure]);
  


//   useEffect(() => {
//     axiosSecure
//       .post('/create-payment-intent', { amount: 8000 })
//       .then((response) => {
//         console.log('Client Secret:', response.data.clientSecret); // Log for debugging
//         setClientSecret(response.data.clientSecret);
//       })
//       .catch((error) => {
//         console.error('Error fetching client secret:', error);
//         toast.error('Failed to initialize payment. Please try again.');
//       });
//   }, [axiosSecure]);
  



//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   if (!stripe || !elements || !clientSecret) {
//   //     toast.error('Stripe or client secret is not properly initialized. Please try again.');
//   //     return;
//   //   }

//   //   const card = elements.getElement(CardElement);
//   //   if (!card) {
//   //     toast.error('Card details are not available. Please re-enter your details.');
//   //     return;
//   //   }

//   //   try {
//   //     // Confirm the payment with the client secret
//   //     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//   //       payment_method: {
//   //         card: card,
//   //       },
//   //     });

//   //     if (error) {
//   //       console.error('Payment Error:', error);
//   //       toast.error(`Payment Error: ${error.message}`);
//   //     } else if (paymentIntent.status === 'succeeded') {
//   //       console.log('Payment Intent:', paymentIntent);
//   //       toast.success('Payment successful! Scholarship applied.');

//   //       // Optionally send a confirmation to the backend
//   //       axiosSecure.post('/confirm-payment', { paymentIntent })
//   //         .then((response) => {
//   //           console.log('Payment confirmation sent to the backend:', response.data);
//   //         })
//   //         .catch((error) => {
//   //           console.error('Error sending payment confirmation:', error);
//   //         });
//   //     }
//   //   } catch (error) {
//   //     console.error('Unexpected error:', error);
//   //     toast.error(`An unexpected error occurred: ${error.message}`);
//   //   }
//   // };







//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     if (!stripe || !elements || !clientSecret) {
//       toast.error('Stripe or client secret is not properly initialized. Please try again.');
//       return;
//     }
  
//     const card = elements.getElement(CardElement);
//     if (!card) {
//       toast.error('Card details are not available. Please re-enter your details.');
//       return;
//     }
  
//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//         },
//       });
  
//       if (error) {
//         console.error('Payment Error:', error);
//         toast.error(`Payment Error: ${error.message}`);
//       } else if (paymentIntent.status === 'succeeded') {
//         console.log('Payment Intent:', paymentIntent);
//         toast.success('Payment successful! Scholarship applied.');
  
//         // Send payment confirmation to backend
//         axiosSecure
//           .post('/confirm-payment', { paymentIntent })
//           .then((response) => {
//             console.log('Payment confirmation sent to the backend:', response.data);
//           })
//           .catch((error) => {
//             console.error('Error sending payment confirmation:', error);
//           });
//       }
//     } catch (error) {
//       console.error('Unexpected error:', error);
//       toast.error(`An unexpected error occurred: ${error.message}`);
//     }
//   };
  



























//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center mb-4">Payment Information</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
//               Card Information
//             </label>
//             <div className="border p-3 rounded-lg bg-gray-50">
//               <CardElement
//                 id="card"
//                 options={{
//                   style: {
//                     base: {
//                       fontSize: '16px',
//                       color: '#424770',
//                       '::placeholder': {
//                         color: '#aab7c4',
//                       },
//                     },
//                     invalid: {
//                       color: '#9e2146',
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
//               disabled={!stripe || !clientSecret}
//             >
//               Pay
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* ToastContainer to display toast messages */}
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default CheckOutForm;


















































// try

// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import UseAxiosSecure from '../hooks/UseAxsiosSecure';
// import { useParams } from 'react-router-dom';

// const CheckOutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const axiosSecure = UseAxiosSecure(); // Secure Axios instance
//   const [clientSecret, setClientSecret] = useState('');
//   const [amount, setAmount] = useState(0); // Default amount, 60 USD (in cents)
//   const [isScholarshipApplied, setIsScholarshipApplied] = useState(false);
//   const { id } = useParams();
//   // console.log(id);

//   // Scholarship application logic
//   const applyScholarship = () => {
//     const scholarshipAmount = 1000; // Example: $10 discount (1000 cents)
//     const newAmount = amount - scholarshipAmount; // Apply discount to the total amount
//     setAmount(newAmount); // Update the amount with the discounted value
//     setIsScholarshipApplied(true);
//     toast.success('Scholarship applied! Your fee is now reduced.');
//   };

//   useEffect(() => {
//     // Request client secret when the amount is updated
//     if (amount) {
//       axiosSecure
//         .post('/create-payment-intent', { amount }) // Send the updated amount to backend
//         .then((response) => {
//           setClientSecret(response.data.clientSecret);
//         })
//         .catch((error) => {
//           console.error('Error fetching client secret:', error);
//           toast.error('Failed to initialize payment. Please try again.');
//         });
//     }
//   }, [amount, axiosSecure]); // Re-run when `amount` is updated

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       toast.error('Stripe or client secret is not properly initialized. Please try again.');
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       toast.error('Card details are not available. Please re-enter your details.');
//       return;
//     }

//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//         },
//       });

//       if (error) {
//         console.error('Payment Error:', error);
//         toast.error(`Payment Error: ${error.message}`);
//       } else if (paymentIntent.status === 'succeeded') {
//         console.log('Payment Intent:', paymentIntent);
//         toast.success('Payment successful! Scholarship applied.');

//         // Optionally send a confirmation to the backend
//         axiosSecure
//           .post('/confirm-payment', { paymentIntent })
//           .then((response) => {
//             console.log('Payment confirmation sent to the backend:', response.data);
//           })
//           .catch((error) => {
//             console.error('Error sending payment confirmation:', error);
//           });
//       }
//     } catch (error) {
//       console.error('Unexpected error:', error);
//       toast.error(`An unexpected error occurred: ${error.message}`);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center mb-4">Payment Information</h2>

//         <p className="text-center mb-4">
//           Total amount to pay: ${amount / 100} {/* Displaying amount in USD */}
//         </p>

//         <button
//           onClick={applyScholarship}
//           className="btn btn-outline px-6 py-2 bg-green-500 text-white font-semibold rounded-lg"
//         >
//           Apply Scholarship
//         </button>

//         <form onSubmit={handleSubmit} className="mt-6">
//           <div className="mb-4">
//             <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
//               Card Information
//             </label>
//             <div className="border p-3 rounded-lg bg-gray-50">
//               <CardElement
//                 id="card"
//                 options={{
//                   style: {
//                     base: {
//                       fontSize: '16px',
//                       color: '#424770',
//                       '::placeholder': {
//                         color: '#aab7c4',
//                       },
//                     },
//                     invalid: {
//                       color: '#9e2146',
//                     },
//                   },
//                 }}
//               />
//             </div>
//           </div>

//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
//               disabled={!stripe || !clientSecret}
//             >
//               Pay
//             </button>
//           </div>
//         </form>
//       </div>
      
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default CheckOutForm;

































































// from submit
// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import UseAxiosSecure from '../hooks/UseAxsiosSecure';
// import Swal from 'sweetalert2';

// const CheckOutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const axiosSecure = UseAxiosSecure(); // Secure Axios instance
//   const [clientSecret, setClientSecret] = useState('');
//   const [amount, setAmount] = useState(0); // Default amount, 60 USD (in cents)
//   const [isScholarshipApplied, setIsScholarshipApplied] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [userData, setUserData] = useState({
//     phone: '',
//     photo: '',
//     address: '',
//     gender: '',
//     degree: '',
//     sscResult: '',
//     hscResult: '',
//     studyGap: '',
//     universityName: '',
//     scholarshipCategory: '',
//     subjectCategory: '',
//   });

//   // List of universities with dynamic categories
//   const universities = [
//     { name: 'Oxford University', scholarshipCategory: 'Merit-Based', subjectCategory: 'Science' },
//     { name: 'XYZ University', scholarshipCategory: 'Need-Based', subjectCategory: 'Arts' },
//     { name: 'Harvard University', scholarshipCategory: 'Need-Based', subjectCategory: 'Engineering' },
//   ];

//   // Handle university selection
//   const handleUniversityChange = (event) => {
//     const selectedUniversity = universities.find((university) => university.name === event.target.value);
//     if (selectedUniversity) {
//       setUserData({
//         ...userData,
//         universityName: selectedUniversity.name,
//         scholarshipCategory: selectedUniversity.scholarshipCategory,
//         subjectCategory: selectedUniversity.subjectCategory,
//       });
//     }
//   };

//   // Scholarship application logic
//   const applyScholarship = () => {
//     const scholarshipAmount = 1000; // Example: $10 discount (1000 cents)
//     const newAmount = amount + scholarshipAmount;
//     setAmount(newAmount); // Update the amount with the discounted value
//     setIsScholarshipApplied(true);
//     toast.success('Scholarship applied! Your fee is now reduced.');
//   };

//   useEffect(() => {
//     if (amount) {
//       axiosSecure
//         .post('/create-payment-intent', { amount })
//         .then((response) => {
//           setClientSecret(response.data.clientSecret);
//         })
//         .catch((error) => {
//           console.error('Error fetching client secret:', error);
//           toast.error('Failed to initialize payment. Please try again.');
//         });
//     }
//   }, [amount, axiosSecure]);

//   const handleSubmitPayment = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       toast.error('Stripe or client secret is not properly initialized. Please try again.');
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       toast.error('Card details are not available. Please re-enter your details.');
//       return;
//     }

//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//         },
//       });

//       if (error) {
//         console.error('Payment Error:', error);
//         toast.error(`Payment Error: ${error.message}`);
//       } else if (paymentIntent.status === 'succeeded') {
//         console.log('Payment Intent:', paymentIntent);
//         toast.success('Payment successful! Scholarship applied.');
//         setPaymentSuccess(true);
//       }
//     } catch (error) {
//       console.error('Unexpected error:', error);
//       toast.error(`An unexpected error occurred: ${error.message}`);
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const applicationData = {
//       ...userData,
//       user_name: 'User Name', // You can replace this with actual user data
//       user_email: 'user@example.com', // Replace with actual email
//       user_id: '123456', // Replace with actual MongoDB User ID
//       scholarship_id: '78910', // Replace with actual MongoDB Scholarship ID
//       current_date: new Date().toISOString(),
//     };

//     try {
//       const response = await axiosSecure.post('/submit-scholarship-application', applicationData);
//       if (response.data.success) {
//         Swal.fire('Success', 'You have successfully applied for the scholarship!', 'success');
//       } else {
//         throw new Error('Failed to apply for the scholarship.');
//       }
//     } catch (error) {
//       Swal.fire('Error', 'There was an error applying for the scholarship. Please try again.', 'error');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center mb-4">Payment Information</h2>
//         {!paymentSuccess ? (
//           <>
//             <p className="text-center mb-4">
//               Total amount to pay: ${amount / 100}
//             </p>
//             <button
//               onClick={applyScholarship}
//               className="btn btn-outline px-6 py-2 bg-green-500 text-white font-semibold rounded-lg"
//             >
//               Apply Scholarship
//             </button>

//             <form onSubmit={handleSubmitPayment} className="mt-6">
//               <div className="mb-4">
//                 <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
//                   Card Information
//                 </label>
//                 <div className="border p-3 rounded-lg bg-gray-50">
//                   <CardElement
//                     id="card"
//                     options={{
//                       style: {
//                         base: {
//                           fontSize: '16px',
//                           color: '#424770',
//                           '::placeholder': {
//                             color: '#aab7c4',
//                           },
//                         },
//                         invalid: {
//                           color: '#9e2146',
//                         },
//                       },
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-center mt-6">
//                 <button
//                   type="submit"
//                   className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
//                   disabled={!stripe || !clientSecret}
//                 >
//                   Pay
//                 </button>
//               </div>
//             </form>
//           </>
//         ) : (
//           <form onSubmit={handleFormSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//               <input
//                 type="text"
//                 value={userData.phone}
//                 onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Applicant Photo</label>
//               <input
//                 type="file"
//                 onChange={(e) => setUserData({ ...userData, photo: e.target.files[0] })}
//                 className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Address (Village, District, Country)</label>
//               <input
//                 type="text"
//                 value={userData.address}
//                 onChange={(e) => setUserData({ ...userData, address: e.target.value })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Gender</label>
//               <select
//                 value={userData.gender}
//                 onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//               >
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Degree</label>
//               <select
//                 value={userData.degree}
//                 onChange={(e) => setUserData({ ...userData, degree: e.target.value })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//               >
//                 <option value="Diploma">Diploma</option>
//                 <option value="Bachelor">Bachelor</option>
//                 <option value="Masters">Masters</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">SSC Result</label>
//               <input
//                 type="text"
//                 value={userData.sscResult}
//                 onChange={(e) => setUserData({ ...userData, sscResult: e.target.value })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">HSC Result</label>
//               <input
//                 type="text"
//                 value={userData.hscResult}
//                 onChange={(e) => setUserData({ ...userData, hscResult: e.target.value })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Study Gap (Optional)</label>
//               <select
//                 value={userData.studyGap}
//                 onChange={(e) => setUserData({ ...userData, studyGap: e.target.value })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//               >
//                 <option value="None">None</option>
//                 <option value="1">1 Year</option>
//                 <option value="2">2 Years</option>
//                 <option value="3">3 Years</option>
//                 <option value="4">4 Years</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">University Name</label>
//               <select
//                 value={userData.universityName}
//                 onChange={handleUniversityChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//               >
//                 {universities.map((university, index) => (
//                   <option key={index} value={university.name}>
//                     {university.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Scholarship Category</label>
//               <input
//                 type="text"
//                 value={userData.scholarshipCategory}
//                 readOnly
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Subject Category</label>
//               <input
//                 type="text"
//                 value={userData.subjectCategory}
//                 readOnly
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div className="flex justify-center mt-6">
//               <button type="submit" className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg">
//                 Submit Application
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default CheckOutForm;



































































































































































// 1234567890-
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UseAxiosSecure from '../hooks/UseAxsiosSecure';
// import ApplicationForm from './ApplicationFrom';

// const CheckOutForm = ({scholarshipId}) => {
//   const stripe = useStripe();
//   const elements = useElements();
  
//   const axiosSecure = UseAxiosSecure(); // Secure Axios instance
//   const [clientSecret, setClientSecret] = useState('');
//   const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment status

//   useEffect(() => {
//     axiosSecure
//       .post('/create-payment-intent', { amount: 8000 })
//       .then((response) => {
//         console.log('Client Secret:', response.data.clientSecret); // Log for debugging
//         setClientSecret(response.data.clientSecret);
//       })
//       .catch((error) => {
//         console.error('Error fetching client secret:', error);
//         toast.error('Failed to initialize payment. Please try again.');
//       });
//   }, [axiosSecure]);




 




//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       toast.error('Stripe or client secret is not properly initialized. Please try again.');
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       toast.error('Card details are not available. Please re-enter your details.');
//       return;
//     }

//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//         },
//       });

//       if (error) {
//         console.error('Payment Error:', error);
//         toast.error(`Payment Error: ${error.message}`);
//       } else if (paymentIntent.status === 'succeeded') {
//         console.log('Payment Intent:', paymentIntent);
//         toast.success('Payment successful! Scholarship applied.');
//         setPaymentSuccess(true); // Update state to show form

//         // Send payment confirmation to backend
//         axiosSecure
//           .post('/confirm-payment', { paymentIntent })
//           .then((response) => {
//             console.log('Payment confirmation sent to the backend:', response.data);
//           })
//           .catch((error) => {
//             console.error('Error sending payment confirmation:', error);
//           });
//       }
//     } catch (error) {
//       console.error('Unexpected error:', error);
//       toast.error(`An unexpected error occurred: ${error.message}`);
//     }
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Collect form data and send to backend
//     toast.success('Form submitted successfully!');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
//       {!paymentSuccess ? (
//         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-center mb-4">Payment Information</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
//                 Card Information
//               </label>
//               <div className="border p-3 rounded-lg bg-gray-50">
//                 <CardElement
//                   id="card"
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: '16px',
//                         color: '#424770',
//                         '::placeholder': {
//                           color: '#aab7c4',
//                         },
//                       },
//                       invalid: {
//                         color: '#9e2146',
//                       },
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-center mt-6">
//               <button
//                 type="submit"
//                 className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
//                 disabled={!stripe || !clientSecret}
//               >
//                 Pay
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (

//       <ApplicationForm>

//       </ApplicationForm>
//       )}
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default CheckOutForm;








































// i am herer

// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UseAxiosSecure from '../hooks/UseAxsiosSecure';
// import ApplicationForm from './ApplicationFrom';

// const CheckOutForm = ({ scholarshipId }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [amount, setAmount] = useState(0);
//   const axiosSecure = UseAxiosSecure(); // Secure Axios instance
//   const [clientSecret, setClientSecret] = useState('');
//   const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment status



//   // // Scholarship application logic
//   const applyScholarship = () => {
//     const scholarshipAmount = 1000; // Example: $10 discount (1000 cents)
//     const newAmount = amount - scholarshipAmount; // Apply discount to the total amount
//     setAmount(newAmount); // Update the amount with the discounted value
//     setIsScholarshipApplied(true);
//     toast.success('Scholarship applied! Your fee is now reduced.');
//   };




//   useEffect(() => {
//     // Request client secret when the amount is updated
//     if (amount) {
//       axiosSecure
//         .post('/create-payment-intent', { amount }) // Send the updated amount to backend
//         .then((response) => {
//           setClientSecret(response.data.clientSecret);
//         })
//         .catch((error) => {
//           console.error('Error fetching client secret:', error);
//           toast.error('Failed to initialize payment. Please try again.');
//         });
//     }
//   }, [amount, axiosSecure]); // Re-run when `amount` is updated







//   // useEffect(() => {
//   //   axiosSecure
//   //     .post('/create-payment-intent', { amount: 8000 })  // Modify as necessary
//   //     .then((response) => {
//   //       console.log('Client Secret:', response.data.clientSecret); // Log for debugging
//   //       setClientSecret(response.data.clientSecret);
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error fetching client secret:', error);
//   //       toast.error('Failed to initialize payment. Please try again.');
//   //     });
//   // }, [axiosSecure]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       toast.error('Stripe or client secret is not properly initialized. Please try again.');
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       toast.error('Card details are not available. Please re-enter your details.');
//       return;
//     }

//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//         },
//       });

//       if (error) {
//         console.error('Payment Error:', error);
//         toast.error(`Payment Error: ${error.message}`);  // Corrected string interpolation
//       } else if (paymentIntent.status === 'succeeded') {
//         console.log('Payment Intent:', paymentIntent);
//         toast.success('Payment successful! Scholarship applied.');
//         setPaymentSuccess(true); // Update state to show form

//         // Send payment confirmation to backend
//         axiosSecure
//           .post('/confirm-payment', { paymentIntent })
//           .then((response) => {
//             console.log('Payment confirmation sent to the backend:', response.data);
//           })
//           .catch((error) => {
//             console.error('Error sending payment confirmation:', error);
//           });
//       }
//     } catch (error) {
//       console.error('Unexpected error:', error);
//       toast.error(`An unexpected error occurred: ${error.message}`);  // Corrected string interpolation
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
//       {!paymentSuccess ? (
//         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-center mb-4">Payment Information</h2>

//                   <p className="text-center mb-4">
//            Total amount to pay: ${amount / 100} {/* Displaying amount in USD */}
//         </p>
//          <button   onClick={applyScholarship}className="btn btn-outline px-6 py-2 bg-green-500 text-white font-semibold rounded-lg"       >
//           Apply Scholarship
//         </button>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
//                 Card Information
//               </label>
//               <div className="border p-3 rounded-lg bg-gray-50">
//                 <CardElement
//                   id="card"
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: '16px',
//                         color: '#424770',
//                         '::placeholder': {
//                           color: '#aab7c4',
//                         },
//                       },
//                       invalid: {
//                         color: '#9e2146',
//                       },
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-center mt-6">
//               <button
//                 type="submit"
//                 className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
//                 disabled={!stripe || !clientSecret}
//               >
//                 Pay
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <ApplicationForm scholarshipId={scholarshipId} />
//       )}
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default CheckOutForm;
























































// final

// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UseAxiosSecure from '../hooks/UseAxsiosSecure';
// import ApplicationForm from './ApplicationFrom';

// const CheckOutForm = ({ scholarshipId }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [amount, setAmount] = useState(0); // Initial amount in cents (e.g., $80)
//   const [isScholarshipApplied, setIsScholarshipApplied] = useState(false);
//   const [clientSecret, setClientSecret] = useState('');
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const axiosSecure = UseAxiosSecure(); // Secure Axios instance

//   // Scholarship application logic
//   const applyScholarship = () => {
//     if (!isScholarshipApplied) {
//       const scholarshipAmount = 1000; // Example: $10 discount (1000 cents)
//       const newAmount = Math.max(amount + scholarshipAmount,); // Prevent negative values
//       setAmount(newAmount);
//       setIsScholarshipApplied(true);
//       toast.success('Scholarship applied! Your fee is now reduced.');
//     }
//   };

//   useEffect(() => {
//     // Request client secret when the amount is updated
//     if (amount > 0) {
//       axiosSecure
//         .post('/create-payment-intent', { amount })
//         .then((response) => {
//           setClientSecret(response.data.clientSecret);
//         })
//         .catch((error) => {
//           console.error('Error fetching client secret:', error);
//           toast.error('Failed to initialize payment. Please try again.');
//         });
//     }
//   }, [amount, axiosSecure]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       toast.error('Stripe or client secret is not properly initialized. Please try again.');
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       toast.error('Card details are not available. Please re-enter your details.');
//       return;
//     }

//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//         },
//       });

//       if (error) {
//         console.error('Payment Error:', error);
//         toast.error(`Payment Error: ${error.message}`);
//       } else if (paymentIntent.status === 'succeeded') {
//         toast.success('Payment successful! Scholarship applied.');
//         setPaymentSuccess(true);

//         // Send payment confirmation to backend
//         axiosSecure
//           .post('/confirm-payment', { paymentIntent })
//           .then((response) => {
//             console.log('Payment confirmation sent to the backend:', response.data);
//           })
//           .catch((error) => {
//             console.error('Error sending payment confirmation:', error);
//           });
//       }
//     } catch (error) {
//       console.error('Unexpected error:', error);
//       toast.error(`An unexpected error occurred: ${error.message}`);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
//       {!paymentSuccess ? (
//         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-center mb-4">Payment Information</h2>
//           <p className="text-center mb-4">
//             Total amount to pay: ${amount / 100} {/* Displaying amount in USD */}
//           </p>
//           <button
//             onClick={applyScholarship}
//             className="btn btn-outline px-6 py-2 bg-green-500 text-white font-semibold rounded-lg"
//             disabled={isScholarshipApplied}
//           >
//             {isScholarshipApplied ? 'Scholarship Applied' : 'Apply Scholarship'}
//           </button>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
//                 Card Information
//               </label>
//               <div className="border p-3 rounded-lg bg-gray-50">
//                 <CardElement
//                   id="card"
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: '16px',
//                         color: '#424770',
//                         '::placeholder': {
//                           color: '#aab7c4',
//                         },
//                       },
//                       invalid: {
//                         color: '#9e2146',
//                       },
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-center mt-6">
//               <button
//                 type="submit"
//                 className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
//                 disabled={!stripe || !clientSecret}
//               >
//                 Pay
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <ApplicationForm scholarshipId={scholarshipId} />
//       )}
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default CheckOutForm;





































// final
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UseAxiosSecure from '../hooks/UseAxsiosSecure';
// import ApplicationForm from './ApplicationFrom';
// // import { useContext } from 'react';
// // import { AuthContext } from '../Provider/AuthProvider';

// const CheckOutForm = ({ scholarshipId }) => {
//   const stripe = useStripe();
//   // const {user} = useContext(AuthContext);
//   const elements = useElements();
//   const [amount, setAmount] = useState(0); // Initial amount in cents (e.g., $80)
//   const [isScholarshipApplied, setIsScholarshipApplied] = useState(false);
//   const [clientSecret, setClientSecret] = useState('');
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const axiosSecure = UseAxiosSecure(); // Secure Axios instance

//   // Scholarship application logic
//   const applyScholarship = () => {
//     if (!isScholarshipApplied) {
//       const scholarshipAmount = 1000; // Example: $10 discount (1000 cents)
//       const newAmount = Math.max(amount + scholarshipAmount,); // Prevent negative values
//       setAmount(newAmount);
//       setIsScholarshipApplied(true);
//       toast.success('Scholarship applied! Your fee is now reduced.');
//     }
//   };



 




//   useEffect(() => {
//     // Request client secret when the amount is updated
//     if (amount > 0) {
//       axiosSecure
//         .post('/create-payment-intent', { amount })
//         .then((response) => {
//           setClientSecret(response.data.clientSecret);
//         })
//         .catch((error) => {
//           console.error('Error fetching client secret:', error);
//           toast.error('Failed to initialize payment. Please try again.');
//         });
//     }
//   }, [amount, axiosSecure]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       toast.error('Stripe or client secret is not properly initialized. Please try again.');
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       toast.error('Card details are not available. Please re-enter your details.');
//       return;
//     }

//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//         },
//       });

//       if (error) {
//         console.error('Payment Error:', error);
//         toast.error(`Payment Error: ${error.message}`);
//       } else if (paymentIntent.status === 'succeeded') {
//         toast.success('Payment successful! Scholarship applied.');
//         setPaymentSuccess(true);

//         // Send payment confirmation to backend
//         axiosSecure
//           .post('/confirm-payment', { paymentIntent })
//           .then((response) => {
//             console.log('Payment confirmation sent to the backend:', response.data);
//           })
//           .catch((error) => {
//             console.error('Error sending payment confirmation:', error);
//           });
//       }
//     } catch (error) {
//       console.error('Unexpected error:', error);
//       toast.error(`An unexpected error occurred: ${error.message}`);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
//       {!paymentSuccess ? (
//         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-center mb-4">Payment Information</h2>
//           <p className="text-center mb-4">
//             Total amount to pay: ${amount / 100} {/* Displaying amount in USD */}
//           </p>
//           <button
//             onClick={applyScholarship}
//             className="btn btn-outline px-6 py-2 bg-green-500 text-white font-semibold rounded-lg"
//             disabled={isScholarshipApplied}
//           >
//             {isScholarshipApplied ? 'Scholarship Applied' : 'Apply Scholarship'}
//           </button>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
//                 Card Information
//               </label>
              
//               <div className="border p-3 rounded-lg bg-gray-50">
//                 <CardElement
//                   id="card"
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: '16px',
//                         color: '#424770',
//                         '::placeholder': {
//                           color: '#aab7c4',
//                         },
//                       },
//                       invalid: {
//                         color: '#9e2146',
//                       },
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-center mt-6">
//               <button
//                 type="submit"
//                 className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
//                 disabled={!stripe || !clientSecret}
//               >
//                 Pay
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <ApplicationForm scholarshipId={scholarshipId} />
//       )}
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default CheckOutForm;














import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAxiosSecure from '../hooks/UseAxsiosSecure';
import ApplicationForm from './ApplicationFrom';
import { useLocation } from 'react-router-dom';

const CheckOutForm = ({ scholarshipId, initialAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  // const [amount, setAmount] = useState(initialAmount); // Initial amount passed from parent
  const [isScholarshipApplied, setIsScholarshipApplied] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const axiosSecure = UseAxiosSecure(); // Secure Axios instance
   const location = useLocation();
   const { applicationFees } = location.state || {}
   const [amount, setAmount] = useState(applicationFees || 0); 




  // Scholarship application logic
  // const applyScholarship = () => {
  //   if (!isScholarshipApplied) {
  //     const scholarshipAmount = 1000; // Example: $10 discount (1000 cents)
  //     const newAmount = Math.max(amount - scholarshipAmount, 0); // Prevent negative values
  //     setAmount(newAmount);
  //     setIsScholarshipApplied(true);
  //     toast.success('Scholarship applied! Your fee is now reduced.');
  //   }
  // };

  useEffect(() => {
    // Request client secret when the amount is updated
    if (amount > 0) {
      axiosSecure
        .post('/create-payment-intent', { amount })
        .then((response) => {
          setClientSecret(response.data.clientSecret);
        })
        .catch((error) => {
          console.error('Error fetching client secret:', error);
          toast.error('Failed to initialize payment. Please try again.');
        });
    }
  }, [amount, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      toast.error('Stripe or client secret is not properly initialized. Please try again.');
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      toast.error('Card details are not available. Please re-enter your details.');
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      });

      if (error) {
        console.error('Payment Error:', error);
        toast.error(`Payment Error: ${error.message}`);
      } else if (paymentIntent.status === 'succeeded') {
        toast.success('Payment successful! Scholarship applied.');
        setPaymentSuccess(true);

        // Send payment confirmation to backend
        axiosSecure
          .post('/confirm-payment', { paymentIntent })
          .then((response) => {
            console.log('Payment confirmation sent to the backend:', response.data);
          })
          .catch((error) => {
            console.error('Error sending payment confirmation:', error);
          });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  py-10">
      {!paymentSuccess ? (
        <div className="w-full max-w-md p-6 bg-blue-200 bg-opacity-15 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white font-semibold text-center mb-4">Payment Information</h2>
          <p className="text-center text-white text-lg mb-4">
            {/* Total amount to pay: ${amount / 100} Displaying amount in USD */}
            total amount to pay: ${amount}
          </p>
          {/* <button
            onClick={applyScholarship}
            className="btn btn-outline px-6 py-2 bg-green-500 text-white font-semibold rounded-lg"
            disabled={isScholarshipApplied}
          >
            {isScholarshipApplied ? 'Scholarship Applied' : 'Apply Scholarship'}
          </button> */}

          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="card" className="block  font-medium text-green-500 text-xl mb-2">
                Card Information
              </label>
              <div className="border p-3 rounded-lg bg-gray-50">
                <CardElement
                  id="card"
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-10 py-2 btn btn-outline btn-success text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
                disabled={!stripe || !clientSecret || amount === initialAmount} // Disable if no amount change
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      ) : (
        <ApplicationForm scholarshipId={scholarshipId} />
      )}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default CheckOutForm;

















































































































































// import { useLocation } from "react-router-dom";
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UseAxiosSecure from '../hooks/UseAxsiosSecure';
// import ApplicationForm from './ApplicationFrom';

// const CheckOutForm = () => {
//   const { state } = useLocation(); // Retrieve scholarship details passed via state
//   const scholarship = state?.scholarship;
  
//   const stripe = useStripe();
//   const elements = useElements();

//   const axiosSecure = UseAxiosSecure(); // Secure Axios instance
//   const [clientSecret, setClientSecret] = useState('');
//   const [paymentSuccess, setPaymentSuccess] = useState(false); // State to track payment status

//   useEffect(() => {
//     axiosSecure
//       .post('/create-payment-intent', { amount: 8000 })  // Modify as necessary
//       .then((response) => {
//         setClientSecret(response.data.clientSecret);
//       })
//       .catch((error) => {
//         console.error('Error fetching client secret:', error);
//         toast.error('Failed to initialize payment. Please try again.');
//       });
//   }, [axiosSecure]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements || !clientSecret) {
//       toast.error('Stripe or client secret is not properly initialized. Please try again.');
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       toast.error('Card details are not available. Please re-enter your details.');
//       return;
//     }

//     try {
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//         },
//       });

//       if (error) {
//         toast.error(`Payment Error: ${error.message}`);
//       } else if (paymentIntent.status === 'succeeded') {
//         toast.success('Payment successful! Scholarship applied.');
//         setPaymentSuccess(true); // Update state to show form
//       }
//     } catch (error) {
//       toast.error(`An unexpected error occurred: ${error.message}`);
//     }
//   };

//   if (!scholarship) {
//     return <div>Scholarship data not available.</div>;
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
//       {!paymentSuccess ? (
//         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-center mb-4">Payment Information</h2>
          
//           {/* Display Scholarship Details */}
//           <div className="scholarship-details mb-4">
//             <h3 className="text-lg font-bold">{scholarship.university_name}</h3>
//             <img 
//               src={scholarship.university_logo || "/path/to/placeholder-image.jpg"}
//               alt={scholarship.university_name}
//               className="w-40 h-40 object-cover mb-2"
//             />
//             <p><strong>Category:</strong> {scholarship.scholarship_category || "N/A"}</p>
//             <p><strong>Location:</strong> {scholarship.location?.country}, {scholarship.location?.city}</p>
//             <p><strong>Deadline:</strong> {scholarship.application_deadline || "N/A"}</p>
//             <p><strong>Subject:</strong> {scholarship.subject_category || "N/A"}</p>
//             <p><strong>Description:</strong> {scholarship.scholarship_description || "N/A"}</p>
//             <p><strong>Stipend:</strong> {scholarship.stipend || "N/A"}</p>
//             <p><strong>Post Date:</strong> {scholarship.post_date || "N/A"}</p>
//             <p><strong>Service Charge:</strong> {scholarship.service_charge || "N/A"}</p>
//             <p><strong>Application Fees:</strong> {scholarship.application_fees || "N/A"}</p>
//           </div>

//           {/* Payment Form */}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
//                 Card Information
//               </label>
//               <div className="border p-3 rounded-lg bg-gray-50">
//                 <CardElement
//                   id="card"
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: '16px',
//                         color: '#424770',
//                         '::placeholder': {
//                           color: '#aab7c4',
//                         },
//                       },
//                       invalid: {
//                         color: '#9e2146',
//                       },
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-center mt-6">
//               <button
//                 type="submit"
//                 className="btn btn-outline px-10 py-2 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-300"
//                 disabled={!stripe || !clientSecret}
//               >
//                 Pay
//               </button>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <ApplicationForm scholarshipId={scholarship.id} />
//       )}
//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default CheckOutForm;














































































































































