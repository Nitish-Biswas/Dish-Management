// src/components/DishItem.js

import React from 'react';

const DishItem = ({ dish, togglePublished }) => {
    return (
        <div>
            <h3>{dish.dishName}</h3>
            <img src={dish.imageUrl} alt={dish.dishName} style={{ width: '100px' }} />
            <p>Published: {dish.isPublished ? 'Yes' : 'No'}</p>
            <button onClick={() => togglePublished(dish.dishId)}>
                Toggle Published
            </button>
        </div>
    );
};

export default DishItem;
