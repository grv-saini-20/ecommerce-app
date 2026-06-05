# Basic React E Commerce Store

A clean, responsive single-page e-commerce storefront built using **React**, **TypeScript**, **Tailwind CSS**, and **React Router**. The application communicates with the live Platzi Fake Store API to fetch inventory data and utilizes local storage to persist shopping session states.

## Features
* **Live Catalog Stream**: Pulls current products and operational category lists directly from an external REST API.
* **Server-Side Filtering**: Category modifications trigger dynamic network refetches via API parameters rather than mutating local client arrays.
* **Dynamic Details View**: Uses dynamic route tracking (`/product/:id/details`) to fetch specific individual item metrics on demand.
* **Persistent Cart Footer**: A sticky overlay panel that acts as your basket, calculating values and updating counts. State is synchronized with `localStorage` to survive page reloads.
* **Progressive Quantity Management**: Stacks identical item selections automatically, and scales counts down incrementally when removing elements before completely clearing them out.

## Tech Stack
* **Build Tool**: Vite (React + TypeScript template)
* **Styling Core**: Tailwind CSS (paired with inline rules for specific responsive layouts)
* **Icon Engine**: Lucide React
* **Router Routing**: React Router DOM (v6)

---

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed locally.

### Installation

1. Clone this codebase:
   ```bash
   git clone https://github.com/grv-saini-20/ecommerce-app

2. Change your current working directory to the project folder:
    cd your-repo-name

3. Install all required dependencies:
    npm install

4. To launch the local development server hot-reloader
    npm run dev

Open your web browser and click or navigate to http://localhost:5173/
