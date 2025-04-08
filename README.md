# Traffic Analysis Application

A modern web application for analyzing and visualizing traffic data, built with Next.js and React.

## System Architecture

The application follows a modern web architecture with the following key components:

- **Frontend Framework**: Next.js 15.2.4 with React 19
- **Styling**: TailwindCSS with custom components
- **State Management**: React Query for server state management
- **UI Components**: Custom components built with Radix UI primitives
- **Data Visualization**: Recharts for interactive charts and graphs
- **API Communication**: Axios for HTTP requests
- **Theme Support**: Dark/Light mode using next-themes

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd traffic-analysis-app-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add necessary environment variables:
   ```
   NEXT_PUBLIC_API_URL=your_api_url_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run start` - Runs the production build
- `npm run lint` - Runs ESLint for code quality checks

## Project Structure

```
traffic-analysis-app-frontend/
├── app/                 # Next.js app directory
├── components/          # Reusable React components
├── lib/                 # Utility functions and configurations
├── public/             # Static assets
└── styles/             # Global styles and Tailwind configuration
```



