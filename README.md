# Next.js-Application-with-Django-API-Integration
Next.js Application with Django API Integration
# Next.js Dashboard Project

## Project Overview
This is a frontend dashboard project built using Next.js and Chart.js. It displays different types of charts (Line, Bar, Pie, Candlestick) based on data fetched from a Django backend.

## How to Run the Frontend

### Prerequisites
- Node.js (version 14.x or above)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-dashboard.git
   ```cd my-dashboard

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

4. Open the application in your browser

### Libraries and Tools Used in Frontend
- Next.js: Framework for React applications with server-side rendering.
- Chart.js: Library for rendering Line, Bar, and Pie charts.
- Lightweight Charts: For rendering Candlestick charts.
- Axios: For fetching data from the Django backend.

### Backend Setup (Django)
# Prerequisites:
- Python 3.8 or higher
- pip (Python package manager)
# Installation:
1. Clone the repository:
  ```bash
  git clone https://github.com/yourusername/my-backend.git
  ```bash
  cd my-backend

2. Set up a virtual environment (recommended):
   ```bash
   python -m venv venv
   ```bash
   source venv/bin/activate  # On Windows: venv\Scripts\activate

3. Install dependencies:
   ```bash
   pip install -r requirements.txt

4. Run database migrations:
   ```bash
   python manage.py migrate

5. Start the Django server:
   ```bash
    python manage.py runserver

6. The backend server will be running on http://127.0.0.1:8000.

# API Endpoints:
- /api/line-chart-data/: Provides data for the Line chart.
- /api/bar-chart-data/: Provides data for the Bar chart.
- /api/pie-chart-data/: Provides data for the Pie chart.
- /api/candlestick-data/: Provides data for the Candlestick chart.
# Libraries and Tools Used in Backend
# Django: Backend framework.
# Django Rest Framework: Library to build REST APIs.
# CORS Headers: Library for handling CORS requests from the frontend.
# SQLite: Default database for the project (can be swapped for another).
