# Data Explorer Project

This project consists of a backend API built with Node.js and Express, and a frontend application built with React. It allows users to explore, filter, and sort a dataset of individuals.

## Project Structure

The project is divided into two main parts:

1. Backend: A Node.js/Express API
2. Frontend: A React application

## Backend Setup

### Prerequisites

- Node.js (v14 or later recommended)
- MongoDB

### Dependencies

- express
- mongoose
- cors
- dotenv
- axios (for initial data fetching)

### Setup Instructions

1. Clone the repository:
   ```
   git clone git@github.com:cherry-1729-9090/Rocketium010824.git
   cd ROCKETIUM/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root of the backend directory with the following content:
   ```
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   PORT=3500
   ```
   Replace `your_database_name` with your preferred database name.

4. Ensure MongoDB is running on your local machine.

5. Start the backend server:
   ```
   node server.js
   ```

   The server will start on `http://localhost:3500` (or the port specified in your .env file).

## Frontend Setup

### Prerequisites

- Node.js (v14 or later recommended)

### Dependencies

- react
- react-dom
- axios
- styled-components

### Setup Instructions

1. Navigate to the frontend directory:
   ```
   cd ROCKETIUM/client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

   The React app will start on `http://localhost:3000`.

## Running the Full Application

1. Start the backend server (from the backend directory):
   ```
   node server.js
   ```

2. In a new terminal, start the frontend development server (from the frontend directory):
   ```
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## API Endpoints

- GET `/api/data`: Fetches the data with optional filtering and sorting
  - Query parameters:
    - `language`: Filter by language
    - `version`: Filter by version
    - `sort`: Sort the results (e.g., `name`, `-name`, `version`, `-version`)

## Features

- Display a table of individuals with their details
- Filter data by language, version, and bio content
- Sort data by name, language, and version (ascending and descending)
- Responsive design for various screen sizes

## Notes

- The backend fetches initial data from an external source when first started. Ensure you have an internet connection for this initial setup.
- Make sure to handle any CORS issues if you deploy the frontend and backend to different domains.
- For production deployment, you'll need to build the React app and serve it separately from your backend.

## Troubleshooting

If you encounter any issues with duplicate IDs in the data, the frontend has been set up to handle this, but it's worth investigating the data source to ensure data integrity.

## POSTMAN DOCUMENTATION

This is the POSTMAN documentation where endpoints and the URL parameters are mentioned clearly to observe the features of the REST API.

[Postman Documentation](https://www.postman.com/cherry17299090/workspace/rocketium/collection/33533288-a8b0cafa-1301-4b0f-bf3f-d559d153fa01?action=share&creator=33533288)

`https://www.postman.com/cherry17299090/workspace/rocketium/collection/33533288-a8b0cafa-1301-4b0f-bf3f-d559d153fa01?action=share&creator=33533288`

## Frontend Screenshot

![alt text](/assets/frontend.png)

# BACKEND CALLS

## SORT BY VERSION
![alt](/assets/SORT_BY_VERSION.png)

## REVERSE SORT BY VERSION
![alt](/assets/REVERSE_SORT_BY_VERSION.png)

## SORT BY NAME
![alt](/assets/SORT_BY_NAME.png)

## FILTER BY LANGUAGE
![alt](/assets/FILTER_BY_LANGUAGE.png)

## FILTER BY VERSION
![alt](/assets/FILTER_BY_VERSION.png)