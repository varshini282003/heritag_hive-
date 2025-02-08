Heritage Hive
Heritage Hive is an interactive cultural heritage platform designed to digitally showcase and preserve India's rich heritage. It provides an engaging experience through interactive maps, heritage site details, quizzes, image galleries, and user reviews.
Features
➢
Interactive Map – Discover heritage sites using Leaflet.js
➢
Heritage Site Details – Get detailed descriptions, history, and images
➢
User Reviews – Share and read reviews for heritage sites
➢
Quizzes – Test your knowledge of cultural heritage
➢
Image Gallery – Browse high-quality images of heritage locations
➢
Responsive UI – Optimized for all devices
➢
CRUD Operations – Users can submit, update, and delete reviews
Technologies Used
Frontend:
•
React.js (for UI)
•
Leaflet.js (for interactive maps)
•
Axios (for API calls)
•
React Router (for navigation)
•
Tailwind CSS (for styling)
Backend:
•
Node.js + Express.js (for RESTful API)
•
MongoDB ( database)
•
Mongoose (for database interaction)
•
JWT Authentication (if user authentication is needed)
Deployment:
•
Frontend: Netlify / Vercel
•
Backend: Vercel / Render
•
Database: MongoDB Atlas
Installation & Setup
1. Clone the Repository
git clone https://github.com/yourusername/heritage-hive.git cd heritage-hive
2. Install Dependencies
Frontend:
cd client # Navigate to frontend folder npm install
Backend:
cd server # Navigate to backend folder npm install
3.
Set Up Environment Variables
Create a .env file in the server folder and add the following:
MONGO_URI=your_mongodb_connection_string PORT=5000 JWT_SECRET=your_secret_key
4. Start Development Server
Frontend:
npm start Backend:
npm run dev
5. Open in Browser
Go to:
http://localhost:3000 API Endpoints (Example) Method Endpoint Description GET /api/sites Fetch all heritage sites POST /api/reviews Submit a user review
GET /api/quiz Get heritage quiz questions
Live Demo (If Deployed)
•
Frontend: Netlify/Vercel Link
•
Backend: Vercel/Render Link
Contributing
Please feel free to fork the repository, create a branch, and submit a PR. All contributions are welcome!
