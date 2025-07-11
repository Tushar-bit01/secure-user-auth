cat <<EOF > README.md
# 🔐 Secure User Authentication System

A full-featured authentication system built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**.  
Users can register, log in securely, and manage sessions. File upload functionality is planned for future updates.

---

## ✨ Features

- ✅ User registration & login with EJS forms
- 🔐 Passwords securely hashed with bcrypt
- 🧾 JWT-based token authentication via cookies
- ✍️ Form input validation using express-validator
- 📁 Organized project structure with Express Routers
- 📦 MongoDB integration using Mongoose
- 📤 Future: File upload support with frontend UI

---

## 📂 Project Structure

\`\`\`
secure-user-auth/

├── config/

│   └── db.js                # MongoDB connection logic

├── models/

│   └── user.model.js        # Mongoose schema

├── routes/

│   ├── index.route.js       # Auth/login/register routes

│   └── user.routes.js       # User-related routes (e.g. profile, dashboard)

├── views/

│   ├── index.ejs            # Landing page

│   ├── home.ejs             # Dashboard view

│   ├── login.ejs            # Login form

│   └── register.ejs         # Register form

├── .env                     # Environment variables

├── .gitignore

├── app.js                   # Main Express server

├── package.json

└── README.md

\`\`\`

---

## 🔧 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (via Mongoose)  
- **Templating Engine**: EJS  
- **Auth**: bcrypt + JWT  
- **Validation**: express-validator  
- **Upcoming**: File upload with Multer or Cloudinary

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

\`\`\`bash
git clone https://github.com/Tushar-bit01/secure-user-auth.git

cd secure-user-auth
\`\`\`

### 2️⃣ Install Dependencies

\`\`\`
npm install
\`\`\`

### 3️⃣ Setup Environment Variables

Create a \`.env\` file in the root directory:

\`\`\`
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
\`\`\`

### 4️⃣ Start the Application

\`\`\`bash
node app.js
\`\`\`

Visit your app at 👉 [http://localhost:3000](http://localhost:3000)

---

## 👨‍💻 Author

Built with ❤️ by [Tushar Yadav](https://github.com/Tushar-bit01)

---

## 📜 License

This project is for educational/demo use only. No official license applied.
EOF
