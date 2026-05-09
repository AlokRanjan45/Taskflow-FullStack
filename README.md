# 🚀 TaskFlow Full Stack MERN App

TaskFlow is a full-stack MERN application for managing daily tasks with secure JWT authentication and protected APIs.

---

# 📌 Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Create Tasks
- View Tasks
- Delete Tasks
- MongoDB Database Integration
- REST API Backend
- React Frontend Dashboard

---

# 🛠️ Tech Stack

## Frontend
- React
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# 📂 Project Structure

Taskflow-FullStack/

├── backend/

├── frontend/

---

# ⚙️ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

# ⚙️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🔐 Authentication

This project uses JWT authentication.

Protected routes require:

```txt
Authorization: Bearer TOKEN
```

---

# 📡 API Routes

## Auth Routes

### Register User

```http
POST /api/v1/auth/register
```

### Login User

```http
POST /api/v1/auth/login
```

---

## Task Routes

### Get Tasks

```http
GET /api/v1/tasks
```

### Create Task

```http
POST /api/v1/tasks
```

### Delete Task

```http
DELETE /api/v1/tasks/:id
```

---

# 🌐 Deployment

## Frontend
Deploy on Vercel

## Backend
Deploy on Render

---

# 👨‍💻 Author

Alok Ranjan