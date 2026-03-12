# Database Setup Guide

## Prerequisites

### 1. Install MySQL Server on Mac

```bash
# Using Homebrew (recommended)
brew install mysql

# Start MySQL service
brew services start mysql

# Verify installation
mysql --version
```

### 2. Secure MySQL Installation

```bash
mysql_secure_installation
```

This will guide you through setting a root password and other security options.

## Database Setup Steps

### 1. Configure Environment Variables

Update the `.env` file in the server directory with your MySQL credentials:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=openspace_db
DB_PORT=3306
NODE_ENV=development
PORT=5000
```

### 2. Run the Setup Script

The `setup-db.sh` bash script will create the database and all necessary tables:

```bash
cd server
./setup-db.sh
```

This script will:

- Create the `openspace_db` database
- Create the `users` table with all required fields
- Create the `sessions` table for token management
- Set up proper indexes for performance

### 3. Verify Database Setup

Connect to MySQL and verify:

```bash
mysql -u root -p
mysql> USE openspace_db;
mysql> SHOW TABLES;
mysql> DESCRIBE users;
```

## Database Schema

### Users Table

```sql
- id (INT, Primary Key, Auto Increment)
- firstName (VARCHAR 50)
- lastName (VARCHAR 50)
- email (VARCHAR 100, Unique)
- password (VARCHAR 255)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
```

### Sessions Table

```sql
- id (INT, Primary Key, Auto Increment)
- userId (INT, Foreign Key → users.id)
- token (VARCHAR 255, Unique)
- expiresAt (DATETIME)
- createdAt (TIMESTAMP)
```

## Running the Server

Once the database is set up:

```bash
cd server
npm start
```

The server will connect to MySQL and start on port 5000.

---

## Recommended MySQL UI Tools for Mac

### 1. **DBeaver** (Recommended - Free & Best)

- **Pros:**
  - Free, open-source, powerful
  - Supports MySQL, PostgreSQL, and 80+ databases
  - Intuitive UI with query builder
  - Good performance
  - Active community support
- **Install:** `brew install dbeaver-community`
- **Website:** https://dbeaver.io

### 2. **TablePlus** (Premium - Modern UI)

- **Pros:**
  - Modern, sleek interface
  - Fast and lightweight
  - Great for Mac with native feel
  - Free tier available, paid version ~$49
- **Install:** `brew install tableplus`
- **Website:** https://tableplus.com

### 3. **MySQL Workbench** (Official - Comprehensive)

- **Pros:**
  - Official MySQL tool
  - Comprehensive features
  - Free
  - Includes data modeling tools
- **Cons:**
  - Heavier than alternatives
  - Can be slower
- **Install:** `brew install mysql-workbench`
- **Website:** https://dev.mysql.com/downloads/workbench/

### 4. **Sequel Pro** (Lightweight - Mac-only)

- **Pros:**
  - Very lightweight
  - Simple, clean interface
  - Free
  - Mac-specific optimization
- **Cons:**
  - Mac only
  - Limited features compared to others
- **Install:** `brew install sequel-pro`
- **Website:** https://www.sequelpro.com

---

## My Recommendation

**For most developers: Use DBeaver**

- Best balance of features, performance, and price (free)
- Works across platforms
- Excellent community support
- Perfect for this project

**For Mac users who want premium UI: Use TablePlus**

- Best Mac experience
- Modern interface
- Very fast

**Install DBeaver:**

```bash
brew install dbeaver-community
```

Then connect with:

- **Host:** localhost
- **Port:** 3306
- **User:** root
- **Password:** (your password from setup)
- **Database:** openspace_db

---

## Troubleshooting

### MySQL Connection Refused

```bash
# Check if MySQL is running
brew services list

# Start MySQL if not running
brew services start mysql

# Verify MySQL is listening
mysql -u root -p
```

### Permission Denied on setup-db.sh

```bash
chmod +x setup-db.sh
```

### Database Already Exists Error

Drop the existing database:

```bash
mysql -u root -p -e "DROP DATABASE IF EXISTS openspace_db;"
# Then run ./setup-db.sh again
```
