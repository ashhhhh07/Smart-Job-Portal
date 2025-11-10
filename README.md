Smart Job Portal

A Java Full Stack web application that allows users to post and view job listings. This project was developed as part of my internship at TVK Technologies, focusing on building scalable, user-friendly, and responsive web applications.

Project Overview

Smart Job Portal is designed to simplify job searching and posting. It enables employers to add job openings and allows users to view available listings in real time.
The project demonstrates full-stack integration — combining frontend technologies (HTML, CSS, JavaScript) with backend REST APIs (Java Spring Boot) and database management (MySQL/PostgreSQL).

Features

Add Jobs — Employers can post new job openings using an easy form.
List Jobs — Displays all available jobs dynamically from the backend API.

Delete Jobs — Remove job posts directly from the interface.

Auto Refresh — Job listings update in real time upon any change.

Responsive UI — Optimized layout for desktop and mobile screens.

Tech Stack
Category	Technologies Used
Frontend	HTML5, CSS3, JavaScript
Backend	Java, Spring Boot, RESTful API
Database	MySQL / PostgreSQL
Tools & Version Control	Git, GitHub, VS Code
Deployment (Optional)	Localhost / Tomcat Server
Key Learnings

During development, I gained hands-on experience in:

Building RESTful APIs and integrating them with frontend code.

Designing responsive UIs and implementing CRUD operations.

Understanding data flow between client and server.

Applying clean code practices and version control using Git.

How to Run Locally

Clone the repository

git clone https://github.com/<your-username>/smart-job-portal.git
cd smart-job-portal


Backend Setup

Start your Java Spring Boot server (should expose /api/jobs endpoints).

Configure your database in application.properties.

Frontend Setup

Open index.html in any modern web browser.

Ensure the API URL in script.js matches your backend port (default: http://localhost:8080/api/jobs).

Usage

Add new job listings through the form.

View all jobs dynamically rendered.

Delete any job post as needed.

File Structure
smart-job-portal/
│
├── index.html        # Main HTML structure
├── style.css         # Styling for the web UI
├── script.js         # JavaScript logic for CRUD operations
└── README.md         # Project documentation

Preview

Future Enhancements

Add authentication for job posters and applicants.

Integrate job search filters by location, skill, or experience.

Build admin dashboards for managing job data.

Deploy the project using AWS / Render / Vercel.

Developer

Name: Sri Ashwin T
College: Jeppiaar Engineering College
Role: Java Full Stack Developer Intern at TVK Technologies
Duration: August – September 2025

🏅 Acknowledgment

Special thanks to TVK Technologies and Professor Arumugam Rajavelu (IIT Madras) for their guidance and mentorship throughout the internship.
