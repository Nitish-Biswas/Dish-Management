// src/App.js

import React from 'react';
import DishList from './components/DishList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <header className="bg-dark text-white py-3 mb-4">
                <h1 className="text-center">Dishes Dashboard</h1>
            </header>
            <DishList />
        </div>
    );
};

export default App;
