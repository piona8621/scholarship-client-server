










// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaGoogle } from "react-icons/fa";
// import login from '../../src/assets/image/Secure login-pana.png'
// import { Helmet } from 'react-helmet-async';

// const Login = () => {
//   const { signIn } = useContext(AuthContext);
//   const navigate = useNavigate(); // Initialize navigate
//   const { googleSignIn} = useContext(AuthContext);


//   // const handleGoogleSignIn = () => {
//   //        googleSignIn()
//   //        .then(result => {
//   //          console.log(result)
//   //        })
//   // }





//   const handleGoogleSignIn = () => {
//     googleSignIn()
//       .then(result => {
//         console.log(result);
//         toast.success('Google login successful!');
//         navigate('/'); // Redirect to home page
//       })
//       .catch(error => {
//         console.error(error);
//         toast.error('Google login failed!');
//       });
//   };
  





//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     signIn(email, password)
//       .then(result => {
//         const user = result.user;
//         console.log(user);
//         toast.success('Login successful!');
//         navigate('/'); // Redirect to home page
//       })
//       .catch(error => {
//         console.error(error);
//         toast.error('Login failed! Please check your credentials.');
//       });
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <Helmet>
//               <title> ProFellow | Login </title>
//             </Helmet>
//       <div className="hero  min-h-screen">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <p className="py-6">
//               <img  className="w-1/2 ml-72"src={login} alt="" />
//             </p>
//           </div>
//           <div className="card bg-blue-800 bg-opacity-15 w-full max-w-sm shrink-0 shadow-2xl">
//             <h1 className="text-5xl font-bold text-white">Login now!</h1>
//             <form onSubmit={handleLogin} className="card-body">
//               <div className="form-control ">
//                 <label className="label ">
//                   <span className="label-text text-green-500 text-xl ">Email</span>
//                 </label>
//                 <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-green-500 text-xl">Password</span>
//                 </label>
//                 <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                
//               </div>
//               <div className="form-control mt-6">
//                 <input className="btn btn-outline btn-success" type="submit" value="Login" />
//                 <button onClick={handleGoogleSignIn} className='btn btn-outline btn-info mt-4'>
//                 <FaGoogle></FaGoogle>
//                   Google LogIn </button>
//               </div>
//             </form>
//             <p className='text-green-500 text-xl'><small>Don't have an Account? <Link to="/signup">SignUp</Link></small></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;











































import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import login from '../../src/assets/image/Secure login-pana.png';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize navigate
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result);
        toast.success('Google login successful!');
        navigate('/'); // Redirect to home page
      })
      .catch(error => {
        console.error(error);
        toast.error('Google login failed!');
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Login successful!');
        navigate('/'); // Redirect to home page
      })
      .catch(error => {
        console.error(error);
        toast.error('Login failed! Please check your credentials.');
      });
  };

  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>ProFellow | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Image Section */}
          <div className="text-center lg:text-left flex justify-center lg:w-1/2">
            <img className="w-4/5 md:w-3/4 lg:w-2/3" src={login} alt="Login Illustration" />
          </div>

          {/* Login Form Section */}
          <div className="card bg-blue-800 bg-opacity-15 w-full max-w-sm shrink-0 shadow-2xl p-6">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body space-y-6">
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-green-500 text-lg">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-green-500 text-lg">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
              </div>

              {/* Submit Button and Google Sign In */}
              <div className="form-control mt-6 space-y-4">
                <input className="btn btn-outline btn-success w-full" type="submit" value="Login" />
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info w-full flex justify-center items-center space-x-2">
                  <FaGoogle /> <span>Google LogIn</span>
                </button>
              </div>
            </form>

            <p className="text-center text-green-500 text-lg">
              <small>Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

