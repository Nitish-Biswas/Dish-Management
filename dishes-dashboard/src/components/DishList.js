// src/components/DishList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishItem from './DishItem';
import WebSocketComponent from './WebSocketComponent';

const DishList = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetchDishes();
    }, []);

    const fetchDishes = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/dishes/');
            console.log(response.data);  // Log the fetched data
            setDishes(response.data);
        } catch (error) {
            console.error('Error fetching dishes:', error);
        }
    };

    const togglePublished = async (dishId) => {
        try {
            await axios.post('http://localhost:8000/api/dishes/toggle/', { dishId });
            fetchDishes();
        } catch (error) {
            console.error('Error toggling published status:', error);
        }
    };

    const handleWebSocketUpdate = (data) => {
        setDishes((prevDishes) =>
            prevDishes.map((dish) =>
                dish.dishId === data.dishId ? data : dish
            )
        );
    };

    return (
        <div>
            <WebSocketComponent onUpdate={handleWebSocketUpdate} />
            {dishes.map(dish => (
                <DishItem key={dish.dishId} dish={dish} togglePublished={togglePublished} />
            ))}
        </div>
    );
};

export default DishList;
