# Library Management Frontend

A modern, responsive frontend application for managing library resources, built with React, TypeScript, and Vite. This application provides a user-friendly interface for library administrators and users to handle book inventories, user authentication, and more.

## Features

- **User Authentication**: Secure login and registration system with protected routes
- **Book Management**: Add, edit, view, and manage library books
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Real-time Search**: Debounced search functionality for efficient book lookup
- **API Integration**: Seamless integration with backend services via Axios
- **Type Safety**: Full TypeScript support for robust development

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Linting**: ESLint with TypeScript support

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sajithcode/LibraryManagement-Frontend.git
   
   cd librarymanagement-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Development

To start the development server with hot reload:

```bash
npm run dev
```

### Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.


## Project Structure

```
src/
├── api/              # API service functions
│   ├── auth.ts       # Authentication API calls
│   ├── axios.ts      # Axios configuration
│   └── book.api.ts   # Book-related API calls
├── assets/           # Static assets
├── components/       # Reusable React components
│   ├── books/        # Book-related components
│   └── common/       # Common UI components
├── context/          # React context providers
├── hooks/            # Custom React hooks
├── layouts/          # Layout components
├── pages/            # Page components
├── routes/           # Routing configuration
└── types/            # TypeScript type definitions
```

## API Integration

This frontend application communicates with a backend API for data management. Ensure the backend server is running and update the API base URL in `src/api/axios.ts` if necessary.


