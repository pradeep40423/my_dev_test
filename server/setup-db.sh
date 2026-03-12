#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}========================================${NC}"
echo -e "${YELLOW}OpenSpace Database Setup Script${NC}"
echo -e "${YELLOW}========================================${NC}"
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
  echo -e "${RED}Error: .env file not found!${NC}"
  echo "Please create a .env file with the following variables:"
  echo "  DB_HOST=localhost"
  echo "  DB_USER=root"
  echo "  DB_PASSWORD=your_password"
  exit 1
fi

# Load environment variables
export $(cat .env | grep -v '#' | xargs)

# Check if mysql is installed
if ! command -v mysql &> /dev/null; then
  echo -e "${RED}Error: MySQL client is not installed!${NC}"
  echo "Install it with: brew install mysql-client"
  exit 1
fi

echo -e "${YELLOW}Connecting to MySQL server...${NC}"
echo "Host: $DB_HOST"
echo "User: $DB_USER"
echo ""

# Create database if not exists
# and then run the schema inside that database

echo -e "${YELLOW}Creating database (if needed)...${NC}"
mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" -e "CREATE DATABASE IF NOT EXISTS \`$DB_NAME\`;"

echo -e "${YELLOW}Creating tables in $DB_NAME...${NC}"
mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < schema.sql

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Database setup completed successfully!${NC}"
  echo ""
  echo -e "${GREEN}Database Details:${NC}"
  echo "  Database Name: $DB_NAME"
  echo "  Host: $DB_HOST"
  echo "  Port: $DB_PORT"
  echo ""
  echo -e "${YELLOW}Next steps:${NC}"
  echo "  1. Make sure MySQL is running"
  echo "  2. Start the server: npm start"
  echo ""
else
  echo -e "${RED}✗ Database setup failed!${NC}"
  echo "Please check your .env file and MySQL credentials"
  exit 1
fi
