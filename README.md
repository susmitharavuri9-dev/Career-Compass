Career Compass
Career Compass is a MERN-stack web application designed to help students explore career paths based on their skills and interests. It brings together profile management, resume upload, job and course information, and a rule-based career advisor in one place.
Features
User Authentication – Register and log in to the application.
Student Profile – View and update profile information and skills.
Resume Upload – Upload a resume to your profile.
Job Listings – Browse sample job opportunities.
Courses – Explore learning resources and course suggestions.
Career Advisor – Get basic career suggestions using predefined rules based on entered skills or interests.
Technology Stack
Frontend: React, Vite, CSS
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JSON Web Tokens (JWT)
Other tools: Axios, Multer, bcryptjs
Project Structure
```text
CareerCompass/
├── client/   # React frontend
└── server/   # Express backend
```
Getting Started
1. Clone the repository
```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd CareerCompass
```
2. Install frontend dependencies
```bash
cd client
npm install
```
3. Install backend dependencies
Open another terminal:
```bash
cd server
npm install
```
4. Configure environment variables
Create a `.env` file inside the `server` folder. Add the environment variable names expected by your backend configuration, for example:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Use your own MongoDB connection string and secret. Do not upload your `.env` file or real credentials to GitHub.
5. Run the application
Start the backend from the `server` folder using the script configured in its `package.json` (commonly `npm run dev` or `node server.js`).
Start the frontend from the `client` folder:
```bash
npm run dev
```
Then open the local URL shown in the frontend terminal (commonly `http://localhost:5173`).
Project Note
The career suggestions currently use predefined, rule-based logic. Job listings and course information are sample entries in the application; they are not presented as live job or course feeds. Integration with an external AI service or live listings API can be added in a future version.
Future Improvements
Integrate an AI service for more personalized career guidance.
Connect to live job and course data sources.
Improve recommendations based on student profile information.
Deploy the application for public access.
Author
Developed as a student project.
