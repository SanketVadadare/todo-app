Full-stack Todo app with Docker containerization - Frontend, Backend, and Database running in separate containers.
 
 Technologies
- Docker & Docker Compose
- Frontend: HTML, CSS, JavaScript (Nginx)
- Backend: Node.js, Express
- Database: MongoDB

todo-app/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── style.css
│   └── app.js
├── docker-compose.yml
└── README.md

How to Run
Start all containers
docker-compose up --build

What I Learned
Docker basics (images, containers, Dockerfile)
 Container networking and communication
 Docker Compose for multi-container apps
 Volumes for data persistence
 Environment variables
 Port mapping
 Service orchestration