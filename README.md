# Browser Breakers Backend

## Introduction
The Browser Breakers Backend is the server-side component of the Browser Breakers project and is responsible for handling user authentication, project management, and other core functionalities. It provides a set of APIs for seamless interaction with the frontend, ensuring secure and efficient data handling and storage using Node.js, Express.js, and MongoDB.

## Project Type
Backend 

## Deployed App
Frontend: [Link](https://entity-craft.vercel.app/)
Backend: [link](https://browser-breakers-be.onrender.com)
Database: https://deployed-site.whatever

## Directory Structure
- backend

```
src/
├─ controllers/
├─ middleware/
├─ models/
├─ routes/
├─ utils/
.env
.env.example
.gitignore
app.js
package-lock.json
package.json
```


## Video Walkthrough of the project
Attach a very short video walkthrough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase
Attach a very short video walkthrough of codebase [ 1 - 5 minutes ]

## Features
- User Authentication: Sign up, log in, and log out functionality with JWT-based authentication.
- Project Management: Create, retrieve, update, and delete projects with secure data handling.
- Middleware Integration: Authorization middleware to protect routes.
- MongoDB Integration: Efficient and scalable database schema management

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

bash
git clone https:https://github.com/abhishekjoshi1998/ER-Backend.git
cd ER-Backend
npm install
npm start


## API Endpoints

### User Authentication
- *POST* /users/login - User login.
- *POST* /users/signup - User signup.
- *GET* /users/getUser - Get user details.

### Project Management
- *POST* /project/ - Create a new project.
- *GET* /project/getProject/{id} - Get project by ID.
- *PUT* /project/updateProject/{id} - Update project by ID.
- *DELETE* /project/deleteProject/{id} - Delete project by ID.
- *GET* /project/getAllProjects - Retrieve all projects.

---

## Technology Stack

### Backend:
- *Node.js*
- *Express.js*
- *MongoDB* (for data storage)
