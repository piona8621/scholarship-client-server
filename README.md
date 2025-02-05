


![Screenshot 2025-02-05 131019](https://github.com/user-attachments/assets/2b659c31-4a19-4037-bd68-c6a9da866dd8)






Scholarship Management System
📌 Project Overview
The Scholarship Management System is a web-based platform that allows students to search for suitable universities and scholarships and apply for them seamlessly. The system includes different user roles (User, Moderator, and Admin) to manage applications, reviews, and scholarships effectively.

📖 Table of Contents
Project Overview
Live Demo
Features
Installation
Usage
Project Structure
Tech Stack
Environment Variables
API Endpoints
Authentication & Authorization
User Roles & Dashboard Functionalities
Deployment Guide
Challenges & Additional Features
Contributors
License
🚀 Live Demo
🔗 Live Website: Deployed Link
🔗 API Base URL: Deployed API

✨ Features
🎓 General Features
User registration & login (Email/Password & Social login)
Search & filter functionality for scholarships
Secure application process with payment integration
Role-based dashboards (User, Moderator, Admin)
Review and rating system for scholarships
JWT-based authentication
📌 Home Page Features
Navbar with authentication status
Banner section with a slider/carousel
Top Scholarships Section (6 latest scholarships based on low fees and recent posts)
Additional informative sections
🔍 Scholarship Management
Scholarship listing with details:
University Name, Logo, Location
Scholarship Category, Subject Category
Application Deadline, Fees, Rating
Scholarship Details Page (Private)
Apply for Scholarships (With Payment Integration)
🛠️ User Dashboard
View Profile
My Applications (Applied Scholarships with status & actions)
My Reviews (Edit/Delete reviews)
🏆 Moderator Dashboard
Manage Scholarships (CRUD operations)
View & delete scholarship reviews
View & manage all scholarship applications
Provide feedback on applications
🔥 Admin Dashboard
Manage all users (Role-based management & deletion)
Analytics & Reporting with charts
Full control over scholarships, applications, and reviews
🔐 Authentication & Security
Firebase authentication with JWT token storage
Environment variables for Firebase and MongoDB credentials
📊 Challenges Implemented
Pagination for Scholarships
Sorting & Filtering for Applied Applications
JWT Authentication with localStorage
Analytics Dashboard with charts
⚙️ Installation
Prerequisites
Node.js (v14+)
MongoDB (Atlas or Local)
Firebase Project
Stripe/SSLCommerz account for payments
Backend Setup
sh
Copy
Edit
git clone https://github.com/your-repo/scholarship-management.git
cd scholarship-management/server
npm install
cp .env.example .env  # Fill in the necessary values
npm start
Frontend Setup
sh
Copy
Edit
cd scholarship-management/client
npm install
cp .env.example .env  # Fill in Firebase credentials
npm start
🖥️ Usage
Register/Login

Create an account or use social login.
User role is "User" by default.
Explore Scholarships

Search, filter, and view details of scholarships.
Apply for a Scholarship

Complete payment and submit application.
Review Scholarships

Add/Edit/Delete reviews.
Admin & Moderator Controls

Manage users, scholarships, and applications.
📁 Project Structure
csharp
Copy
Edit
scholarship-management/
│── client/                # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Pages (Home, Scholarship, Dashboard, etc.)
│   │   ├── hooks/         # Custom hooks (authentication, queries)
│   │   ├── context/       # Global context API
│   │   ├── utils/         # Helper functions
│   │   ├── services/      # API calls using TanStack Query
│── server/                # Node.js backend
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express API routes
│   ├── controllers/       # Business logic controllers
│   ├── middleware/        # Authentication & error handling
│   ├── config/            # Database & Firebase config
│── README.md
│── package.json
│── .env.example
│── .gitignore
🛠️ Tech Stack
Frontend
React.js
React Router
Tailwind CSS
TanStack Query (For data fetching)
Backend
Node.js
Express.js
MongoDB (Mongoose)
Firebase Authentication
Stripe/SSLCommerz (Payment Processing)
Others
JWT (Authentication)
SweetAlert/Toastify (User Notifications)
React Icons
🔑 Environment Variables
Create a .env file in both the client and server directories.

Client .env
ini
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_SERVER_URL=http://localhost:5000
Server .env
ini
Copy
Edit
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
FIREBASE_ADMIN_CREDENTIALS=your_firebase_credentials
STRIPE_SECRET_KEY=your_stripe_key
🔌 API Endpoints
Authentication
POST /api/auth/register
POST /api/auth/login
GET /api/auth/user
Scholarships
GET /api/scholarships
POST /api/scholarships
GET /api/scholarships/:id
PUT /api/scholarships/:id
DELETE /api/scholarships/:id
Applications
POST /api/applications
GET /api/applications/user/:id
PUT /api/applications/:id
DELETE /api/applications/:id
🔐 Authentication & Authorization
Users: Can apply for scholarships, track applications, and submit reviews.
Moderators: Manage scholarships, applications, and reviews.
Admins: Full control over users, scholarships, applications, and analytics.
🏆 User Roles & Dashboard Functionalities
Role	Features
User	Apply for scholarships, track applications, submit reviews
Moderator	Manage scholarships, applications, and reviews
Admin	Manage users, analytics, all moderator privileges
🚀 Deployment Guide
Backend Deployment (Vercel/Render)
Push code to GitHub.
Deploy backend on Render/Vercel.
Set up environment variables.
Frontend Deployment (Netlify/Vercel)
Push frontend to GitHub.
Deploy on Netlify/Vercel.
Add Firebase Authentication domain.
🎯 Challenges & Additional Features
✅ Pagination for Scholarships
✅ Sorting & Filtering in Admin/Moderator Dashboards
✅ JWT Authentication
✅ Analytics Dashboard
👨‍💻 Contributors
Your Name
Open-source contributions are welcome! 🎉
📜 License
MIT License © 2025 Scholarship Management System.

This README provides a comprehensive guide for the project, ensuring clarity for both developers and users. 🚀 Let me know if you need any modifications! 😊
