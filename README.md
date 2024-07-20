# Dishes Dashboard

This is a full-stack application for managing dishes. It uses Django and Django REST framework on the backend with a MySQL database, and React on the frontend. Real-time updates are handled via WebSockets.

## Features

- View a list of dishes.
- Toggle the published status of a dish.
- Unpublish a dish.
- Real-time updates for dish status changes.

## Prerequisites

- Python 3.8+
- Node.js 14+
- MySQL
- Redis
  

## Installation


### Backend Setup

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/dishes-dashboard.git
    cd dishes-dashboard
    ```

2. **Create a virtual environment and activate it:**

    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the dependencies:**

    ```sh
    pip install -r requirements.txt
    ```

4. **Configure the MySQL database:**

    Create a MySQL database and update the `DATABASES` setting in `backend/settings.py`:

    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'dishes_db',
            'USER': 'dish',
            'PASSWORD': 'Dish@123',
            'HOST': 'localhost',
            'PORT': '3306',
        }
    }
    ```

5. **Run database migrations:**

    ```sh
    python manage.py migrate
    ```

6. **Run the Django development server with ASGI:**

    ```sh
    daphne -b 0.0.0.0 -p 8000 backend.asgi:application
    ```

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```sh
    cd frontend
    ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

3. **Start the React development server:**

    ```sh
    npm start
    ```

    The React app will run at `http://localhost:3000`.

## Usage

- Open `http://localhost:3000` in your browser.
- Use the dashboard to toggle the published status of dishes.
- Real-time updates will be reflected on the dashboard.

## API Endpoints

- **GET /api/dishes/**: Retrieve a list of all dishes.
- **POST /api/dishes/toggle/**: Toggle the published status of a dish.
- **POST /api/dishes/unpublish/<int:dish_id>/**: Unpublish a dish.

## WebSocket

The application uses WebSockets for real-time updates. The WebSocket server runs at `ws://localhost:8000/ws/dishes/`.

## Project Structure

