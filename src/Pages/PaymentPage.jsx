// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { Helmet } from "react-helmet-async";

// const PaymentPage = ({ scholarship }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handlePayment = async () => {
//     try {
//       setIsLoading(true);
//       // Here you will make a payment request to your backend.
//       const response = await fetch("/api/payment", {
//         method: "POST",
//         body: JSON.stringify({
//           amount: scholarship.application_fees,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const paymentData = await response.json();
//       if (paymentData.success) {
//         toast.success("Payment Successful!");
//         navigate("/apply-scholarship"); // Redirect to the application form
//       } else {
//         toast.error("Payment Failed. Please try again.");
//       }
//     } catch (error) {
//       toast.error("An error occurred during payment.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Payment for {scholarship.scholarshipName}</h2>
//       <p>Application Fees: {scholarship.application_fees}</p>
//       <button onClick={handlePayment} disabled={isLoading}>
//         {isLoading ? "Processing..." : "Pay Now"}
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default PaymentPage;






















const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY)
const PaymentPage = () => {
  return (
    <div>
      <Helmet>
              <title> ProFellow | Payment </title>
            </Helmet>
      <Elements stripe={stripePromise}>
       <CheckOutFrom></CheckOutFrom>
      </Elements>
    </div>
  );
};

export default PaymentPage;












































































