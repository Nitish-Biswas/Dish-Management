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

### Database Setup

1. **Create a user with name as 'dish' and password is 'Dish@123' **
   ```sh
   create user 'dish'@'localhost' indentified by 'Dish@123';
   ```

2. **Create a database with name as 'dishes_db'**
   ```sh
   create database dishes_db;
   ```

3. **Grant permissions to user 'dish'**
   ```sh
   grant all privileges on dishes_db.* to 'dish'@'localhost';
   ```
   ```sh
   FLUSH PRIVILEGES;
   ```

### Server Setup

1. **Install Redis**
   
   ***On macOS***
   ```sh
   brew install redis
   ```
   
   ***On Windows***
   ```sh
   curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
   echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
   sudo apt-get update
   sudo apt-get install redis
   ```

2. **Run Redis Server**
   
   ***On macOS***
   ```sh
   redis-server
   ```
   
   ***On Windows***
   ```sh
   sudo service redis-server start
   ```

### Backend Setup


1. **Clone the repository:**

    ```sh
    git clone https://github.com/Nitish-Biswas/Dish-Management.git
    cd Dish-Management
    ```

2. **Create a virtual environment and activate it:**

    ```sh
    python3 -m venv venv
    ```
    
   ***On macOS***
   ```sh
   source venv/bin/activate
   ```
   
   ***On Windows***
   ```sh
   venv\Scripts\activate
   ```

3. **Install the dependencies:**

    ```sh
    pip install -r requirements.txt
    ```

4. **Navigate to the backend directory:**

  ```sh
  cd backend
  ```
5. **Run database migrations:**
    ```sh
    python3 manage.py makemigrations
    ```

    ```sh
    python3 manage.py migrate
    ```

7. **Populate the Database**

   ```sh
   python3 dishes/populate_db.py
   ```

   
8. **Run the Django development server with ASGI:**

    ```sh
    python3 manage.py runserver
    ```

### Frontend Setup

1. **Navigate to the Dish-Management directory:**

    ```sh
    cd Dish-Management
    ```

2. **Activate virtual environment**

   ***On macOS***
   ```sh
   source venv/bin/activate
   ```
   
   ***On Windows***
   ```sh
   venv\Scripts\activate
   ```


3. **Navigate to the frontend directory:**

    ```sh
    cd frontend
    ```

4. **Install the dependencies:**

    ```sh
    npm install
    ```

5. **Start the React development server:**

    ```sh
    npm start
    ```

    The React app will run at `http://localhost:3000`.

## Usage

- Open `http://localhost:3000` in your browser.
- Use the dashboard to toggle the published status of dishes.
- Real-time updates will be reflected on the dashboard.

## API Endpoints

- **GET http://127.0.0.1:8000/api/dishes/**: Retrieve a list of all dishes.
- **POST http://127.0.0.1:8000/api/dishes/togglerest/**: Toggle the published status of a dish.


## WebSocket

The application uses WebSockets for real-time updates. The WebSocket server runs at `ws://localhost:8000/ws/dishes/`.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

