import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
// import { info } from "autoprefixer";



 export const AuthContext= createContext(null);
const AuthProvider = ({children}) => {
  const auth = getAuth(app)
  // const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
const axiosPublic = UseAxiosPublic();
const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));


const signIn = (email,password) => {
   setLoading(true);
   return signInWithEmailAndPassword(auth, email,password);

}

const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}

const createUser = ( email, password)=> {
  setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

const logout = () => {
  setLoading(true)
   return signOut(auth);
}









const UpdateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,
      })
}





  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
        if(currentUser){
          const userInfo = {email: currentUser.email}
         axiosPublic.post('/jwt',userInfo )
         .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
          }
         })
        }
        else{
          localStorage.removeItem('access-token')
        }
      setLoading(false);
    });
  
    return () => unsubscribe();
    
  }, [axiosPublic]);
  




  const AuthInfo = {
       user,
       loading,
       createUser,
       signIn,
       logout,
       UpdateUserProfile,
       googleSignIn,

  }
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;













































































// import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import { app } from "../Firebase/Firebase.config";
// import UseAxiosPublic from "../hooks/UseAxiosPublic";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const auth = getAuth(app);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();
//   const axiosPublic = UseAxiosPublic();

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleSignIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const logout = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   const UpdateUserProfile = (name, photo) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);

//       if (currentUser) {
//         const userInfo = { email: currentUser.email };
//         axiosPublic.post('/jwt', userInfo)
//           .then(res => {
//             if (res.data.token) {
//               localStorage.setItem('access-token', res.data.token);
//             }
//           })
//           .catch(err => {
//             console.error('JWT error:', err);
//           });
//       } else {
//         localStorage.removeItem('access-token');
//       }

//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const AuthInfo = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     logout,
//     UpdateUserProfile,
//     googleSignIn,
//   };

//   return (
//     <AuthContext.Provider value={AuthInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
































































