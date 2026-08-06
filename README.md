# 🥗 FitMeal – Nutrition Tracker

A modern MERN Stack Nutrition Tracking Web Application that helps users monitor their daily meals, track calories & macronutrients, set nutrition goals, and visualize progress through an interactive dashboard.

🔗 **Live Demo:**
https://fit-meal-two.vercel.app


# ✨ Features

### 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes

---

### 📊 Dashboard

- Nutrition Summary
- Calories Tracking
- Protein Tracking
- Carbs Tracking
- Fat Tracking
- Progress Cards
- Interactive Nutrition Chart
- Daily Health Tips

---

### 🍽 Meal Management

- Add Meal
- Edit Meal
- Delete Meal
- Nutrition Calculation
- Responsive Meal Cards

---

### 🎯 Goal Tracking

Users can set daily goals for:

- Calories
- Protein
- Carbohydrates
- Fat

Live progress updates automatically.


### 👤 Profile Management

Users can update:

- Age
- Height
- Weight
- Gender
- Activity Level


### 📱 Responsive Design

Optimized for:

- Desktop
- Tablet
- Mobile


# 🚀 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Recharts
- React Hot Toast
- Lucide React


## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js


## Database

- MongoDB Atlas

## Deployment

Frontend

- Vercel

Backend

- Render

---

# 📂 Project Structure

FitMeal
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── assets
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
└── README.md


## Frontend
bash
cd client
npm install
npm run dev

## Backend

bash
cd server
npm install
npm start


# 🔑 Environment Variables

`.env` file is inside the server directory.

env
PORT=5000

MONGO_URI=mongodb+srv://fitmealadmin:Pass%40123@cluster0.donlbkq.mongodb.net/fitmeal?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET=FitMealSuperSecretKey123456

For the client directory:

env
VITE_API_URL=http://localhost:5000/api

---

# Production

Frontend

https://fit-meal-two.vercel.app

Backend

https://fitmeal-21ph.onrender.com

---

#  API Endpoints

## Authentication


POST /api/auth/register

POST /api/auth/login

---

## Meals

GET /api/meals

POST /api/meals

PUT /api/meals/:id

DELETE /api/meals/:id

---

## Goals

GET /api/goals

PUT /api/goals

---

## Profile

GET /api/profile

PUT /api/profile

---

# ⭐ Highlights

- Full MERN Stack Application
- JWT Authentication
- RESTful APIs
- Responsive UI
- Interactive Dashboard
- Nutrition Analytics
- Goal Tracking
- Profile Management
- Loading Skeletons
- Toast Notifications
- Mobile-Friendly Design

---

# 📈 Future Improvements

- Dark Mode
- AI Meal Suggestions
- Barcode Scanner
- Weekly & Monthly Analytics
- Food Image Recognition
- Email Verification
- Forgot Password
- Google Authentication
- Export Nutrition Reports (PDF)

---

# 👨‍💻 Developer

Om Masal
