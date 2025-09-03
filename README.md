# 📝 Task Manager

A full-stack **Task Manager Application** built using the **MERN (MongoDB, Express, React, Node.js)** stack.  
This app allows users to **create, update, delete, and manage their personal tasks** with authentication.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based login/signup)  
- ✅ Create, Read, Update, Delete (CRUD) tasks  
- 📌 Mark tasks as completed or pending  
- 📅 Add priorities  
- 📊 Simple dashboard to track tasks  
- 🎨 Responsive UI with React  

---

## 🏗️ Tech Stack

**Frontend:**  
- React.js  
- React Router  
- React Redux Toolkit  
- Axios  
- Tailwind CSS (or Bootstrap/Material UI)  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- bcrypt.js (for password hashing)  

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
    git clone https://github.com/sandeepcodelab/task-manager.git

### 2. Setup Backend
    cd backend  
    npm install

**Create a .env file in backend/ with:**

PORT=5000   
MONGO_URI=your_mongodb_connection_string    
JWT_SECRET=your_jwt_secret  

**check `.env.sample`** for details

**Start the server:**

    npm run dev     


### 3. Setup Frontend   

    cd frontend     
    npm install     
    npm run dev     

--- 

## 🛠️ Available Scripts

**Backend**

- npm run dev → Start backend with nodemon
- npm start → Start backend in production

**Frontend**

- npm start → Run frontend (React)
- npm run build → Build for production

---

## 👤 User Flow

- Sign Up / Login → Authenticate using JWT
- Dashboard → View all tasks
- Create Task → Add new tasks with title, description, status, and priority
- Update Task → Edit existing tasks
- Delete Task → Remove tasks permanently
- Mark as Complete/In-Progress/Pending →  Status dropdown
