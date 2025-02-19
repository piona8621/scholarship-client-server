import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllScholarships from "../Pages/AllScholarShip";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
// import MyApplication from "../Pages/MyApplication";
import ScholarshipDetails from "../Pages/ScholarshipDetails";
import PaymentPage from "../Pages/PaymentPage";
// import DashBoard from "../Layout/DashBoard";
import MyProfile from "../Pages/UserDasboard/MyProfile";
import MyApplications from "../Pages/UserDasboard/MyApplication";
import CheckOutForm from "../Pages/CheckOutFrom";
import MyReviews from "../Pages/UserDasboard/MyReviews";
import ManageScholarShip from "../Pages/UserDasboard/ManageScholarShip";
import AllReviews from "../Pages/UserDasboard/AllReviews";
import AllApplied from "../Pages/UserDasboard/AllApplied";
import PrivateRoute from "../Route/PrivateRoute"; // Adjust the path as necessary
import AdminProfile from "../Pages/Admin/AdminProfile";
import Users from "../Pages/Admin/Users";
import UseAdmin from "./UseAdmin";
import AdminRoute from "./AdminRoute";
import UserDashBoard from "../Layout/UserDashBoard";
import ModeratorDashBoard from "../Layout/ModeratorDashBoard";
import AddScholarShip from "../Pages/Admin/AddScholarShip";
import ModeratorProfile from "../Pages/UserDasboard/ModeratorProfile";
import ManageReviews from "../Pages/Admin/ManageReviews";
import ManageAppliedApplication from "../Pages/Admin/ManageAppliedApplication";
import AnalyticsChart from "../Pages/Admin/AnalyticsChart";
import ManageScholarship from "../Pages/UserDasboard/ManageScholarShip";
import AdminDashBoard from "../Layout/AdminDashBoard";
import NotFound from "../Components/NotFound";
import Contact from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";
import Testimonial from "../Components/Testimonial";
import Overview from "../Layout/OverView";
// import ProtectedRoute from "./ProtectedRoute";
// import ManageUsers from "../Pages/Admin/ManageUsers";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,



    children: [{
       path: '/',
       element:<Home></Home>,
    },
    {
      path: '/all-scholarship',
      element:<AllScholarships></AllScholarships>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
    path: '/about',
    element: <AboutUs></AboutUs>
    },
    {
      path: '/testimonials',
      element: <Testimonial></Testimonial>
    },
    {
      path: '/login',
      element:<Login></Login>
    },
    {
      path: '/signup',
      element:<SignUp></SignUp>
    },
    
    {
      path: '/scholarship-details/:id',
      element:<PrivateRoute>
           <ScholarshipDetails></ScholarshipDetails>
      </PrivateRoute>,
      loader: ({params}) => fetch(`https://scholarship-server-project.vercel.app/scholar/${params.id}`),
    },
    
    {
          path: '/payment/:id',
          element:<PrivateRoute>
            <PaymentPage></PaymentPage>
          </PrivateRoute>
    },
    {
       path: '*',
       element: <NotFound></NotFound>
    },



    {
      path: "/user-dashboard",
      element: (
        <PrivateRoute>
          <UserDashBoard></UserDashBoard>
        </PrivateRoute>
      ),
      children: [
        { path: "profile", element: <MyProfile></MyProfile> },
        { path: "application", element: <MyApplications></MyApplications> },
        { path: "reviews", element: <MyReviews></MyReviews> },
      ],
    },


    {
      path: "/moderator-dashboard",
      element: (
        <PrivateRoute>
           <ModeratorDashBoard></ModeratorDashBoard>
        </PrivateRoute>
      ),
      children: [
        { path: "manage-scholarship", element: <ManageScholarShip></ManageScholarShip> },
        {path: 'moderator-profile', element: <ModeratorProfile></ModeratorProfile>},
        { path: "all-reviews", element: <AllReviews></AllReviews> },
        { path: "applied-application", element: <AllApplied></AllApplied> },
        {path: 'add-scholarship', element: <AddScholarShip></AddScholarShip>},
      ],
    },


  
  ]
  },

// dashboard
{
  path: '/dashboard',
  element: <PrivateRoute>
    <AdminDashBoard></AdminDashBoard>
  </PrivateRoute>,



  children:[
    {
      path: 'profile',
      element:<PrivateRoute>
        <MyProfile></MyProfile>
      </PrivateRoute>
    },
    
    {
      path: 'application',
      element:<PrivateRoute>
        <MyApplications></MyApplications>
      </PrivateRoute>
    },
    

   {
      path: 'reviews',
      element: <PrivateRoute>
        <MyReviews></MyReviews>,
      </PrivateRoute>
   },
   
   


// admin route
{
  path: 'admin-profile',
  element: 
    <AdminProfile></AdminProfile>
},

{
  path: 'users',
  element: 
  <Users></Users>
},
{
  path: 'add-scholarship',
  element:<AddScholarShip></AddScholarShip>,
},
{
  path: "overview",
  element: <Overview></Overview>
},
{
   path: 'manage-scholarship',
   element:<ManageScholarship></ManageScholarship>
},
{
  path: 'manage-reviews',
  element:<ManageReviews></ManageReviews>
},
{
  path: 'manage-applied-applications',
  element:<ManageAppliedApplication></ManageAppliedApplication>
},
{
  path: 'analytics-chart',
  element:<AnalyticsChart></AnalyticsChart>
}

]
}



]);
export default router;