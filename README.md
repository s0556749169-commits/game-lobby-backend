# Game Lobby Backend Service

A robust Node.js backend service for managing game sessions and player matchmaking. Built with Express.js, PostgreSQL, and Prisma ORM, and fully containerized with Docker.

## Features

- **Game Management**: Handles game sessions with status tracking (Waiting, Started, Finished).
- **Player Matchmaking**: Robust `joinGame` logic with validation:
  - Prevents joining started or finished games.
  - Ensures a player cannot join the same game twice.
- **Database Architecture**: Relations between Users, Games, and Participants using Prisma.
- **Dockerized Environment**: One-command setup including database and automated migrations.

## Tech Stack

- **Runtime**: Node.js (v20)
- **Database**: PostgreSQL (v15)
- **ORM**: Prisma v7
- **Infrastructure**: Docker & Docker Compose

## Getting Started

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd game-lobby-backend
   ## הערות חשובות (Important Notes)
* **Docker Configuration:** בגלל מגבלות סינון אינטרנט בסביבת הפיתוח המקומית, התיקייה `node_modules` לא הוכנסה ל-`.dockerignore`. דבר זה מבטיח שה-Container יעלה בצורה תקינה גם בסביבה עם גישה מוגבלת לרשת. בסביבת Production סטנדרטית, מומלץ להחזיר את ההתעלמות מהתיקייה ולהסתמך על התקנה פנימית בתוך ה-Image.
