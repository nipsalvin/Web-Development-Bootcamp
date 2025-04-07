# Book Notes Application

This is a simple web application for managing books and their authors. Users can add books, associate them with authors, and delete books. The application uses Node.js, Express, PostgreSQL, and EJS for templating.

## Features
- Add a new book with details such as title, author, rating, date read, and ISBN.
- Automatically check if an author exists before adding a new one.
- Delete books from the database.
- Display book details, including cover images fetched from the Open Library Covers API.

---

## Prerequisites
Before running the application, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)

---

## Setup Instructions

### 1. Install Dependencies
`npm i`

### 2. Configure Database
Run SQL queries that are in `queries.sql`

### 3. Set Up Environment Variables
Create a `.env` file in the parent folder and add the line below
`POSTGRES_PW=<your_postgres_password>` 

### 4. Runing Application
`nodemon index.js`
