# Rewaste Skip Select Page Refactoring | Technical Assignment

## Overview

This project contains the refactored version of the Rewaste skip select page, focusing on improving user experience and interface clarity.

## Recent Changes

### UI/UX Improvements

- Replaced bottom drawer with modal for skip selection
- Enhanced user experience with a more accessible and visible interface
- Improved interaction flow for skip selection process

### Card Component Refactoring

- Streamlined card components by removing unnecessary elements
- Added essential user information to cards
- Improved information hierarchy and readability

### Enhanced Accessibility Features

- Implemented filtering functionality for better content organization
- Added sorting capabilities to improve content discovery
- Improved overall accessibility and user navigation

### Design System

The project uses a custom design system with the following color scheme:

- Primary Blue: #0037c1
- Secondary Blue: #2563eb
- Dark Background: #1c1c1c
- Border Color: #2a2a2a

### Animations

- Implemented smooth slide-in animations for better user interaction
- Animation duration: 0.2s with ease-in-out timing

## Technology Stack

### Core Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS

### Key Packages

- React Icons
- ESLint & Prettier for code formatting

### Development Tools

- Node.js
- npm
- Git

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/Abula28/rewaste-technical-assignment
cd rewaste-technical-assignment
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── api/              # API integration and requests
├── components/       # Reusable UI components
│   ├── common/      # Shared components (Card, Modal, Select, etc.)
│   └── ...
├── css/             # Global styles and Tailwind configuration
├── hooks/           # Custom React hooks
├── pages/           # Page components
│   └── home/        # Homepage and related components
└── types/           # TypeScript type definitions
```

## Contributing

Feel free to submit issues and enhancement requests.
