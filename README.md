# Interview Query Questions

A web application for browsing, filtering, and viewing interview questions. This application provides an intuitive interface to explore coding interview questions with advanced filtering, sorting, and pagination capabilities.

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
- 🎨 **Modern UI**: Built with Material-UI for a polished user experience

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI (MUI) v7** - Component library
- **React Router v7** - Client-side routing
- **PapaParse** - CSV parsing
- **Vitest** - Testing framework

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd interview-query-questions
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build

Build the application for production:

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

### Testing

Run tests with Vitest:

```bash
npm test
```

## Project Structure

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

## Data Format

The application reads questions from `public/questions.csv`. The CSV should have the following columns:

- `qid` - Unique question identifier
- `title` - Question title
- `difficulty` - Difficulty level (1=Easy, 2=Medium, 3=Hard)
- `type` - Question type (e.g., SQL, Python, Algorithms)
- `sum(cu.vote)` - Vote count
- `question_summary` - Detailed question description
- `company_asked` - Company name

## Key Features Implementation

### Context API

The application uses React Context API (`QuestionsContext`) to manage global state for:

- Question data loading and parsing
- Filtering and searching
- Sorting and pagination
- Question retrieval by ID

### CSV Parsing

Questions are loaded from a CSV file using PapaParse, which handles:

- Header parsing
- Data transformation
- Error handling

### Routing

React Router handles navigation between:

- `/` - Questions list page
- `/questions/:id` - Individual question detail page
