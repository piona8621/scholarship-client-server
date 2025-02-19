import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Overview = () => {
  const [stats, setStats] = useState({ users: 0, scholarships: 0, applications: 0 });

  useEffect(() => {
    // ফেক ডেটা, এখানে API থেকে ডেটা আনবে
    setStats({ users: 1200, scholarships: 75, applications: 300 });
  }, []);

  const data = [
    { name: "Users", value: stats.users },
    { name: "Scholarships", value: stats.scholarships },
    { name: "Applications", value: stats.applications },
  ];

  return (
    <div className="p-6  rounded-lg shadow-md">
      <h2 className="text-2xl text-green-600 font-bold mb-4">Dashboard Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4A90E2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Overview;































// import React, { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import UseAxiosSecure from "../../hooks/UseAxsiosSecure";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { Bar, Pie } from "react-chartjs-2";
// import "chart.js/auto";
// import { Helmet } from "react-helmet-async";

// const OverviewPage = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = UseAxiosSecure();

//   // Fetch statistics for the charts
//   const { data: stats = {} } = useQuery({
//     queryKey: ["admin-overview"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/admin-overview");
//       return res.data;
//     },
//   });

//   const dynamicColors = ["#FF6384", "#166af2", "#FFBB33", "#0c57cf"];

//   // Bar Chart Data for Analytics
//   const barData = {
//     labels: ["Reviews", "Page Views", "Users"],
//     datasets: [
//       {
//         label: "Analytics Overview",
//         data: [stats.review || 0, stats.apply || 0, stats.users || 0],
//         backgroundColor: dynamicColors,
//         borderColor: dynamicColors.map((color) => color + "10"),
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Pie Chart Data for Task Distribution
//   const pieData = {
//     labels: ["Completed", "Pending", "In Progress"],
//     datasets: [
//       {
//         data: [stats.completed || 20, stats.pending || 31, stats.progress || 10],
//         backgroundColor: dynamicColors,
//         hoverOffset: 4,
//       },
//     ],
//   };

//   // Overview Data for BarChart
//   const overviewData = [
//     { name: "Users", value: stats.users || 0 },
//     { name: "Scholarships", value: stats.scholarships || 0 },
//     { name: "Applications", value: stats.applications || 0 },
//   ];

//   return (
//     <div className="p-6">
//       <Helmet>
//         <title> ProFellow | Overview </title>
//       </Helmet>

//       {/* User Welcome */}
//       <h1 className="text-4xl font-bold text-green-500 mb-4">
//         Welcome back, {user?.displayName || "User"}!
//       </h1>
//       <div className="flex items-center mb-6">
//         <img
//           src={user?.photoURL || "https://via.placeholder.com/150"}
//           alt="Profile"
//           className="w-16 h-16 rounded-full object-cover"
//         />
//         <div className="ml-4 text-green-500">
//           <h2 className="text-lg font-bold">{user?.displayName || "User"}</h2>
//           <p className="text-sm text-gray-500">{user?.email || "No email available"}</p>
//         </div>
//       </div>

//       {/* Overview Chart */}
//       <div className="bg-blue-900 bg-opacity-15 shadow p-4 rounded-lg mb-8">
//         <h2 className="text-xl font-bold text-white mb-2">Dashboard Overview</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={overviewData}>
//             <XAxis dataKey="name" tick={{ fill: "#ffffff" }} />
//             <YAxis tick={{ fill: "#ffffff" }} />
//             <Tooltip cursor={{ fill: "#444" }} />
//             <Bar dataKey="value" fill="#4A90E2" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Analytics Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-blue-900 bg-opacity-15 shadow p-4 rounded-lg">
//           <h2 className="text-xl font-bold mb-2 text-white">Analytics Overview (Bar Chart)</h2>
//           <Bar data={barData} />
//         </div>

//         <div className="bg-blue-900 bg-opacity-20 shadow p-4 rounded-lg text-white">
//           <h2 className="font-bold text-xl mb-2">Task Distribution (Pie Chart)</h2>
//           <Pie data={pieData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverviewPage;














































