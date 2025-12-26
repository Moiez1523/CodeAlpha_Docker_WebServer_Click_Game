# Docker Click Game

🎯 **A Fun Click Game built with HTML, CSS, JavaScript, and Docker**  

This is a **popup-free interactive click game** designed to run inside a Docker container. The goal is to **score 10 points in 2 minutes** by clicking the randomly appearing targets. This project demonstrates **frontend development skills**, **JavaScript interactivity**, and **Docker deployment**.

---

## **Game Overview**

- **Goal:** Click targets to score 10 points.  
- **Timer:** 2 minutes (120 seconds).  
- **Start/Stop:** Use the same button to start or stop the game.  
- **Gameplay:** Targets appear randomly in the game area and disappear after 1 second.  
- **Visuals:** Clean and modern styling with animated targets.  

---

## **Project Structure**
CodeAlpha_Docker_WebServer/
├── index.html # Main HTML file
├── style.css # Styling for the game
├── script.js # JavaScript logic (game functionality)
├── Dockerfile # Docker configuration to run the game in Nginx
└── README.md # Project documentation

---

## **How to Run the Project**

### **Using Docker (Recommended)**

1. **Build the Docker image:**

```bash
docker build -t codealpha-webserver .
docker run -d -p 8080:80 codealpha-webserver 
```


**Open the game in a browser:**

In GitHub Codespaces: Go to Ports → 8080 → Open in Browser

Or locally: Visit http://localhost:8080

Play the game:

Click targets to score points.

Reach 10 points within 2 minutes to win.

Use the Start Game / Stop Game button to control gameplay.



**Features**

Fully functional click game in a Docker container.

Animated targets appear randomly in the game area.

Popup-free design for a clean interface.

Responsive stats: Score and timer update in real-time.

Simple deployment: Docker makes it easy to run anywhere.


**Tech Stackc**

Frontend: HTML5, CSS3, JavaScript

Containerization: Docker with Nginx

Version Control: Git & GitHub
