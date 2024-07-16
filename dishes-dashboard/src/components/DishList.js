// src/components/DishList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishItem from './DishItem';
import WebSocketComponent from './WebSocketComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const DishList = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetchDishes();
    }, []);

    const fetchDishes = async () => {
        const response = await axios.get('http://localhost:8000/api/dishes/');
        setDishes(response.data);
    };

    const togglePublished = async (dishId) => {
        await axios.post('http://localhost:8000/api/dishes/toggle/', { dishId });
        fetchDishes();
    };

    const handleWebSocketUpdate = (data) => {
        setDishes((prevDishes) =>
            prevDishes.map((dish) =>
                dish.dishId === data.dishId ? data : dish
            )
        );
    };

    return (
        <div className="container mt-4">
            <WebSocketComponent onUpdate={handleWebSocketUpdate} />
            <div className="row">
                {dishes.map(dish => (
                    <div key={dish.dishId} className="col-md-4">
                        <DishItem dish={dish} togglePublished={togglePublished} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DishList;
