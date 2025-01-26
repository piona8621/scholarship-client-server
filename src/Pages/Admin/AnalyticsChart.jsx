

import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../hooks/UseAxsiosSecure';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Helmet } from 'react-helmet-async';

const AnalyticsChart = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const { data: stat = {} } = useQuery({
    queryKey: ['admin-chart'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-chart');
      return res.data;
    },
  });

  // Dynamic Colors
  const dynamicColors = ['#FF6384', '#166af2', '#FFBB33', '#0c57cf'];

  // Bar Chart Data
  const barData = {
    labels: ['Reviews', 'Page Views', 'Users'],
    datasets: [
      {
        label: 'Analytics Overview',
        data: [stat.review || 0, stat.apply || 0, stat.users || 0],
        backgroundColor: dynamicColors,
        borderColor: dynamicColors.map((color) => color + '10'), // Adding transparency
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: ['Reviews', 'Page Views', 'Users'],
    datasets: [
      {
        data: [stat.completed || 20, stat.pending || 31, stat.progress || 10],
        backgroundColor: dynamicColors,
        hoverOffset: 4,
      },
    ],
  };

  // Bar Chart Options
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#ffffff', // Change legend text color to white
          font: {
            size: 14, // Change font size if needed
          },
        },
      },
      tooltip: {
        enabled: true,
        titleColor: '#ffffff', // Tooltip title color
        bodyColor: '#ffffff', // Tooltip body color
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff', // Change X-axis label color
        },
      },
      y: {
        ticks: {
          color: '#ffffff', // Change Y-axis label color
        },
      },
    },
  };

  // Pie Chart Options
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ffffff', // Change legend text color to white
          font: {
            size: 14, // Change font size if needed
          },
        },
      },
      tooltip: {
        enabled: true,
        titleColor: '#ffffff', // Tooltip title color
        bodyColor: '#ffffff', // Tooltip body color
      },
      datalabels: {
        color: '#ffffff', // Data label text color inside the pie chart
        font: {
          size: 14, // Size of the data label text
          weight: 'bold', // Make text bold
        },
      },
    },
  };

  return (
    <div className="p-4">
      <Helmet>
              <title> ProFellow | Analytics </title>
            </Helmet>
      {/* Welcome Section */}
      <h1 className="text-4xl font-bold text-green-500 mb-4">
        Welcome back, {user?.displayName || 'User'}!
      </h1>

      {/* User Info Section */}
      <div className="flex items-center mb-8">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img
              src={user?.photoURL || 'https://via.placeholder.com/150'} // Placeholder if no photoURL
              alt={`${user?.displayName || 'User'}'s profile`}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="ml-4 text-green-500">
          <h2 className="text-lg font-bold">{user?.displayName || 'User'}</h2>
          <p className="text-sm text-gray-500">{user?.email || 'No email available'}</p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats shadow mb-8 bg-blue-800 bg-opacity-15">
        <div className="stat ">
          <div className="stat-title text-white text-lg">Reviews</div>
          <div className="stat-value text-success">{stat.review || 0}</div>
          <div className="stat-desc text-blue-100 text-base">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-title text-white text-lg">Page Views</div>
          <div className="stat-value text-success">{stat.apply || 0}</div>
          <div className="stat-desc text-blue-100 text-base">15% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-title text-white text-lg">Users</div>
          <div className="stat-value text-success">{stat.users || 0}</div>
          <div className="stat-desc text-blue-100 text-base">5 new users added</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className=" bg-blue-900 bg-opacity-15 shadow p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-white">Analytics Overview (Bar Chart)</h2>
          <Bar data={barData} options={barOptions} />
        </div>

        {/* Pie Chart */}
        <div className=" bg-blue-900 bg-opacity-20 shadow p-4 rounded-lg text-white ">
          <h2 className=" font-bold text-xl mb-2 t">Task Distribution (Pie Chart)</h2>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;

















































