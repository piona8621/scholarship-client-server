
Scholarship Management System
Project Purpose
The Scholarship Management System enables students to find and apply for scholarships easily. The system features dynamic role-based user access, allowing administrators, moderators, and students to manage, review, and apply for scholarships efficiently.

Live Demo
Access the live application here: https://scholar-ship-project.web.app/

Key Features
1. User Roles
Users: Default role on registration; can apply for scholarships, manage applications, and write reviews.
Moderators: Manage scholarships, review applications, and moderate reviews.
Admins: Manage users, scholarships, and system configurations.
2. Home Page
Dynamic Navbar with responsive design.
Banner Section: Carousel showcasing promotional content.
Top Scholarship Section: Highlights six scholarships based on criteria like low application fees and recent posts.
Additional sections for engaging content.
3. Scholarship Search & Details
Search scholarships by name, university, and degree.
Detailed scholarship page with information like stipend, fees, location, and reviews.
"Apply Scholarship" functionality integrated with payment gateway.
4. User Dashboard
My Profile: Displays user details.
My Applications: View, update, or cancel scholarship applications.
My Reviews: Manage and edit personal reviews.
5. Moderator Dashboard
Manage scholarships with add, edit, and delete functionality.
View and moderate reviews.
Provide feedback on applications and update statuses.
6. Admin Dashboard
Manage all users, roles, and scholarships.
Add scholarships and configure system settings.
Key Technical Features
Frontend
Framework: React with Tailwind CSS and Daisy UI.
Data Fetching: TanStack Query for optimized GET requests.
Routing: React Router for dynamic navigation.
Backend
Server: Node.js with Express.js.
Database: MongoDB for data storage.
Authentication: Firebase (email/password and social login).
Deployment
Frontend: Hosted on Netlify/Vercel.
Backend: Hosted on Render/Heroku.
Environment variables securely store sensitive credentials.
Additional Features
Responsive Design: Fully responsive across mobile, tablet, and desktop.
Role-Based Access Control: Users access features based on their roles.
Review System: Users can add, edit, and delete reviews.
Toast Notifications: Real-time alerts for user actions.
Installation Guide
Prerequisites
Node.js and npm installed
MongoDB setup
Firebase account
Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone 
cd scholarship-management-system
Install dependencies:

bash
Copy
Edit
npm install
cd client && npm install
cd server && npm install
Configure environment variables:

Create .env files in both client and server directories.
Add Firebase configuration, MongoDB URI, and payment gateway credentials.
Start the application:

Run the server:
bash
Copy
Edit
cd server
npm start
Run the client:
bash
Copy
Edit
cd client
npm start
Open the app in your browser:
http://localhost:3000

npm Packages Used
Frontend:
react-router-dom
react-icons
tanstack-query
firebase
daisyui
Backend:
express
cors
dotenv
jsonwebtoken
mongoose
Deployment Guidelines
Secure Firebase and MongoDB credentials using .env files.
Ensure all routes work without errors upon page reload.
Prevent unauthorized access to private routes.
Use a custom 404 page for invalid routes.
Contribution
Contributions are welcome! Please create a pull request with detailed information about your changes.

Maintainers
[Effat Ara]
