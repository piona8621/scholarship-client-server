































// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { Link } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast, ToastContainer } from 'react-toastify';
// // import axios from 'axios';
// import UseAxiosPublic from '../hooks/UseAxiosPublic';
// import signup from '../assets/image/Sign up-bro.png';
// import { Helmet } from 'react-helmet-async';

// const SignUp = () => {
//   const { createUser, UpdateUserProfile } = useContext(AuthContext);
//   const [error, setError] = useState('');
//   const axiosPublic = UseAxiosPublic();

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.elements.name.value;
//     const photoUrl = form.elements.photoUrl.value;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;
//     const confirmPassword = form.elements.confirmPassword.value;

//     // Password validation
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }
//     if (!/[A-Z]/.test(password)) {
//       setError("Password must contain at least one uppercase letter.");
//       return;
//     }
//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//       setError("Password must contain at least one special character.");
//       return;
//     }

//     // Sign up with Firebase
//     createUser(email, password)
//       .then(result => {
//         const user = result.user;
//         console.log(user);

//         // Update user profile
//         UpdateUserProfile(name, photoUrl)
//           .then(() => {
//             const userInfo = {
//               name: name,
//               email: email,
//             };

//             axiosPublic.post('/users', userInfo)
//               .then(res => {
//                 console.log('User data saved:', res.data);
//               })
//               .catch(err => {
//                 console.error('Error saving user data:', err);
//                 toast.error(`Failed to save user data: ${err.message}`, { position: "top-center" });
//               });

//             setError('');
//             toast.success("Sign up successful and profile updated!", { position: "top-center" });
//             form.reset(); // Reset form on successful signup
//           })
//           .catch(error => {
//             console.error('Profile update error:', error);
//             toast.error(`Profile update failed: ${error.message}`, { position: "top-center" });
//           });
//       })
//       .catch(error => {
//         console.error('Signup error:', error);
//         setError(''); // Reset error
//         toast.error(`Sign up failed: ${error.message}`, { position: "top-center" });
//       });
//   };

//   return (
//     <div>
//       <div className="hero min-h-screen">
//         <Helmet>
//           <title>ProFellow | SignUp</title>
//         </Helmet>
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           {/* Image Section */}
//           <div className="text-center lg:text-left flex justify-center lg:w-1/2">
//             <img className="w-4/5 md:w-3/4 lg:w-2/3" src={signup} alt="Sign Up Illustration" />
//           </div>

//           {/* Sign Up Form Section */}
//           <div className="card bg-blue-800 bg-opacity-15 w-full max-w-sm shrink-0 shadow-2xl p-6">
//             <h1 className="text-4xl font-bold text-white text-center mb-6">Sign Up</h1>
//             <form onSubmit={handleSignUp} className="card-body space-y-6">
//               {/* Name Field */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-xl text-green-500">Name</span>
//                 </label>
//                 <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
//               </div>

//               {/* Photo URL Field */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-xl text-green-500">Photo URL</span>
//                 </label>
//                 <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered w-full" required />
//               </div>

//               {/* Email Field */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-xl text-green-500">Email</span>
//                 </label>
//                 <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
//               </div>

//               {/* Password Field */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-xl text-green-500">Password</span>
//                 </label>
//                 <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
//               </div>

//               {/* Confirm Password Field */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-xl text-green-500">Confirm Password</span>
//                 </label>
//                 <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full" required />
//               </div>

//               {/* Error Message */}
//               {error && <p className="text-red-500 text-center">{error}</p>}

//               {/* Submit Button */}
//               <div className="form-control mt-6">
//                 <input className="btn btn-outline btn-success w-full" type="submit" value="Sign Up" />
//               </div>
//             </form>

//             {/* Login Link */}
//             <p className="text-xl text-green-500 text-center">
//               <small>Already have an Account? <Link to={'/login'} className="text-blue-500 hover:underline">Login</Link></small>
//             </p>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUp;












































import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
// import axios from 'axios';
import UseAxiosPublic from '../hooks/UseAxiosPublic';
import signup from '../assets/image/Sign up-bro.png';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
  const { createUser, UpdateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState('');
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate(); // Hook for navigation

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const photoUrl = form.elements.photoUrl.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;

    // Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    }

    // Sign up with Firebase
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);

        // Update user profile
        UpdateUserProfile(name, photoUrl)
          .then(() => {
            const userInfo = {
              name: name,
              email: email,
            };

            axiosPublic.post('/users', userInfo)
              .then(res => {
                console.log('User data saved:', res.data);
              })
              .catch(err => {
                console.error('Error saving user data:', err);
                toast.error(`Failed to save user data: ${err.message}`, { position: "top-center" });
              });

            setError('');
            toast.success("Sign up successful and profile updated!", { position: "top-center" });
            form.reset(); // Reset form on successful signup

            // Redirect to home page after successful signup
            navigate('/'); // Navigate to home page
          })
          .catch(error => {
            console.error('Profile update error:', error);
            toast.error(`Profile update failed: ${error.message}`, { position: "top-center" });
          });
      })
      .catch(error => {
        console.error('Signup error:', error);
        setError(''); // Reset error
        toast.error(`Sign up failed: ${error.message}`, { position: "top-center" });
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <Helmet>
          <title>ProFellow | SignUp</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Image Section */}
          <div className="text-center lg:text-left flex justify-center lg:w-1/2">
            <img className="w-4/5 md:w-3/4 lg:w-2/3" src={signup} alt="Sign Up Illustration" />
          </div>

          {/* Sign Up Form Section */}
          <div className="card bg-blue-800 bg-opacity-15 w-full max-w-sm shrink-0 shadow-2xl p-6">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body space-y-6">
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-green-500">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
              </div>

              {/* Photo URL Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-green-500">Photo URL</span>
                </label>
                <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered w-full" required />
              </div>

              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-green-500">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-green-500">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
              </div>

              {/* Confirm Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-green-500">Confirm Password</span>
                </label>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full" required />
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-center">{error}</p>}

              {/* Submit Button */}
              <div className="form-control mt-6">
                <input className="btn btn-outline btn-success w-full" type="submit" value="Sign Up" />
              </div>
            </form>

            {/* Login Link */}
            <p className="text-xl text-green-500 text-center">
              <small>Already have an Account? <Link to={'/login'} className="text-blue-500 hover:underline">Login</Link></small>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;













































// update

// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { Link } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast, ToastContainer } from 'react-toastify';
// // import axios from 'axios';
// import UseAxiosPublic from '../hooks/UseAxiosPublic';
// import signup from '../assets/image/Sign up-bro.png'
// import { Helmet } from 'react-helmet-async';

// const SignUp = () => {
//   const { createUser, UpdateUserProfile } = useContext(AuthContext);
//   const [error, setError] = useState('');
//   const axiosPublic = UseAxiosPublic();

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.elements.name.value;
//     const photoUrl = form.elements.photoUrl.value;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;
//     const confirmPassword = form.elements.confirmPassword.value;

//     // Password validation
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }
//     if (!/[A-Z]/.test(password)) {
//       setError("Password must contain at least one uppercase letter.");
//       return;
//     }
//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//       setError("Password must contain at least one special character.");
//       return;
//     }

//     // Sign up with Firebase
//     createUser(email, password)
//       .then(result => {
//         const user = result.user;
//         console.log(user);

//         // Update user profile
//         UpdateUserProfile(name, photoUrl)
//           .then(() => {
//             const userInfo = {
//               name: name,
//               email: email,
//             };

//             axiosPublic.post('/users', userInfo)
//               .then(res => {
//                 console.log('User data saved:', res.data);
//               })
//               .catch(err => {
//                 console.error('Error saving user data:', err);
//                 toast.error(`Failed to save user data: ${err.message}`, { position: "top-center" });
//               });

//             setError('');
//             toast.success("Sign up successful and profile updated!", { position: "top-center" });
//             form.reset(); // Reset form on successful signup
//           })
//           .catch(error => {
//             console.error('Profile update error:', error);
//             toast.error(`Profile update failed: ${error.message}`, { position: "top-center" });
//           });
//       })
//       .catch(error => {
//         console.error('Signup error:', error);
//         setError(''); // Reset error
//         toast.error(`Sign up failed: ${error.message}`, { position: "top-center" });
//       });
//   };

//   return (
//     <div>
//       <div className="hero min-h-screen">
//         <Helmet>
//                 <title> ProFellow | SingUp</title>
//               </Helmet>
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <p className="py-6">
//               <img  className="w-2/3 ml-44"src={signup} alt="" />
//             </p>
//           </div>
//           <div className="card bg-blue-800 bg-opacity-15 w-full max-w-sm shrink-0 shadow-2xl">
//             <h1 className="text-5xl font-bold text-white">Sign Up</h1>
//             <form onSubmit={handleSignUp} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text  text-xl text-green-500">Name</span>
//                 </label>
//                 <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text  text-xl text-green-500">Photo URL</span>
//                 </label>
//                 <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered" required />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-xl text-green-500">Email</span>
//                 </label>
//                 <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text  text-xl text-green-500">Password</span>
//                 </label>
//                 <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text  text-xl text-green-500">Confirm Password</span>
//                 </label>
//                 <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" required />
//               </div>
//               {error && <p className="text-red-500">{error}</p>}
//               <div className="form-control mt-6">
//                 <input className="btn btn-outline btn-success" type="submit" value="Sign Up" />
//               </div>
//             </form>
//             <p className=' text-xl text-green-500'><small>Already have an Account? <Link to={'/login'}>Login</Link></small></p>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUp;

