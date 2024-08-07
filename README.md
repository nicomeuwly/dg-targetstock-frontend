# Target stock automation project

This project is part of a Bachelor's thesis in Media Engineering at HEIG-VD, in collaboration with Digitec Galaxus AG. The aim of the project is to automate the target stock of Digitec shops. The target stock is a set of products available for purchase directly in the shops. This repository handles the front-end of the solution and is still at an early stage of development. 

## Table of contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v20 or higher)
- npm (v10 or higher)
- SQLite (for database)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/nicomeuwly/dg-targetstock-frontend.git
   cd dg-targetstock-frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Run database migrations:**

   ```sh
   npx prisma migrate dev --name init
   ```

5. **Seed the database (optional):**

   ```sh
   npx ts-node prisma/seed.ts
   ```

6. **Start the development server:**

   ```sh
   npm run dev
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/dg-targetstock-frontend 
│
├── prisma                  # Prisma schema
│   ├── dbml                # Schema used in [dbdiagram.io](https://dbdiagram.io/)
│   └── schema.prisma       # Prisma schema file
│
├── public                  # Static files
│   └── images              # Images used in the project
│
├── src
│   ├── components          # React components
│   ├── app                 # Next.js pages and api routes
│   └── lib                 # Initialise the Prisma Client
│
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## Database Schema

The project uses Prisma ORM with SQLite. The database schema is defined in `prisma/schema.prisma`.

### Models

- **Location**
- **TargetStock**
- **StockProduct**
- **Product**
- **Criteria**
- **LocationCriteria**
- **Category**
- **LocationCategory**

## API Endpoints

The project must include several API endpoints for managing data. (Only one at the moment)

## Technologies Used

- **Frontend:**
  - React
  - Next.js
  - Tailwind CSS
  - React-Tooltip

- **Backend:**
  - Node.js
  - Prisma ORM

- **Database:**
  - SQLite

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
