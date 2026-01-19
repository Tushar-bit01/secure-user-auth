# Secure User Authentication System

This project is a full stack authentication application built with Node.js, Express, MongoDB, and JWT. It began as a simple authentication system and has been upgraded into a containerized application using Docker and Docker Compose to follow production style deployment practices.

The application allows users to register, log in securely, and maintain authenticated sessions using cookies and JWT tokens. Passwords are stored using bcrypt hashing and all routes follow a modular Express structure with proper validation and database integration.

---

## About the Project

The purpose of this project is to demonstrate practical backend development concepts rather than just theory. It shows how authentication works in real applications, how MongoDB is integrated using Mongoose, and how Docker networking is used to connect multiple services together.

The current version runs three containers in a single network: Node application, MongoDB database, and Mongo Express for database management. The services communicate using Docker service names instead of localhost, which reflects real industry workflows.

---

## Docker Hub Image

The application image is publicly available on Docker Hub. Anyone can pull and run the Node service without building locally.

Docker Hub Repository  
https://hub.docker.com/r/tushar179/my-nodeapp/tags

### Pull the image

docker pull tushar179/my-nodeapp

### Run the container

docker run -p 3000:3000 --env-file .env tushar179/my-nodeapp

This allows users to start the application instantly while using their own MongoDB credentials through the environment file.

---

## Project Structure

secure-user-auth  
config  
  db.js               MongoDB connection logic  
models  
  user.model.js       Mongoose schema for users  
routes  
  index.route.js      Authentication routes  
  user.routes.js      Protected user routes  
views  
  index.ejs           Landing page  
  home.ejs            Dashboard  
  login.ejs           Login form  
  register.ejs        Register form  
app.js                Main server file  
Dockerfile            Node container configuration  
mongo.yaml            Docker Compose setup  
package.json          Dependencies  

---

## Technologies Used

Backend developed with Node.js and Express framework.  
Database handled using MongoDB with Mongoose ODM.  
Authentication implemented using JWT and bcrypt.  
Frontend rendered with EJS templates.  
Containerization managed through Docker and Docker Compose.

---

## Running the Application Locally

### 1. Clone the repository

git clone https://github.com/Tushar-bit01/secure-user-auth.git  
cd secure-user-auth

### 2. Install dependencies

npm install

### 3. Create environment variables

Create a file named .env in the root directory with the following values

MONGO_DB_USERNAME=your_username  
MONGO_DB_PWD=your_password  
JWT_SECRET=your_secret_key

### 4. Run without Docker

node app.js

Open browser at  
http://localhost:3000

---

## Running with Docker Compose

The application is fully containerized and uses Docker Compose for orchestration. MongoDB, Node application, and Mongo Express run as separate services inside one network.

### Build and start containers

docker compose -f mongo.yaml up --build

Node application will be available at  
http://localhost:3000

Mongo Express interface will be available at  
http://localhost:8081

The Node service connects to MongoDB using the service name mongo:27017, which removes the need for localhost port mapping and follows container to container communication standards.

---

## Future Scope

The project will be extended with file upload functionality, role based authorization, password reset flow, improved UI design, and CI CD based deployment on cloud platforms.

---

## Author

Tushar Yadav  
https://github.com/Tushar-bit01
