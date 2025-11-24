# Interview Query Questions

**Demo:** https://interview-query-questions-pmpf.vercel.app/

## Overview

This application is a question browser for coding interview questions. It lets users explore, filter, and view interview questions with search, filtering by difficulty/type/company, sorting, and pagination. The goal was to create an interface for efficiently navigating a large set of interview questions.

The app uses React Context API for state management, keeping the architecture simple without external state libraries. Data is loaded from a CSV file using PapaParse, enabling client-side filtering and pagination. Material-UI provides a consistent UI, and TypeScript adds type safety across the codebase.

With more time, I would add authentication, upvote and downvote features, topics for better categorization, question bookmarks, loading and error states, responsiveness for mobile devices, and unit tests for better code coverage.

## Features

- 📊 **Question Browser**: View all interview questions in a clean, organized table
- 🔍 **Advanced Filtering**: Filter questions by:
  - Search by title (real-time search)
  - Difficulty level (Easy, Medium, Hard)
  - Question type (SQL, Python, Algorithms, Product Metrics, etc.)
  - Company name
- 🔄 **Sorting**: Sort questions by difficulty or votes (ascending/descending)
- 📄 **Pagination**: Navigate through questions with paginated results (10 per page)
- 📝 **Question Details**: View detailed information about each question including:
  - Full question summary
  - Difficulty level with visual indicators
  - Question type
  - Vote count
  - Company that asked the question
- 🎨 **UI**: Built with Material-UI for a polished user experience

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI (MUI) v7** - Component library
- **React Router v7** - Client-side routing
- **PapaParse** - CSV parsing
- **Vitest** - Testing framework

## How to Run Locally

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd interview-query-questions
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Other Commands

- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Run linter**: `npm run lint`
- **Run tests**: `npm test`

## Folder Structure

```
interview-query-questions/
├── public/
│   ├── questions.csv          # Interview questions data
│   └── vite.svg
├── src/
│   ├── assets/                # Static assets (fonts, images, SVGs)
│   ├── components/            # Reusable components
│   │   ├── FilterForm/        # Search and filter sidebar
│   │   ├── Navbar/            # Navigation bar
│   │   └── QuestionsTable/    # Questions table with sorting
│   ├── contexts/              # React contexts
│   │   └── QuestionsContext.tsx  # Global state management for questions
│   ├── pages/                 # Page components
│   │   ├── questions/         # Questions list page
│   │   └── questionDetail/    # Question detail page
│   ├── routes/                # Route configuration
│   │   └── AppRoutes.tsx
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Application entry point
│   ├── index.css              # Global styles
│   └── theme.ts               # Material-UI theme configuration
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```
