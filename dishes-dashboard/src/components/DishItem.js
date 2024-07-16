// src/components/DishItem.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DishItem.css'; // Import custom CSS

const DishItem = ({ dish, togglePublished }) => {
    return (
        <div className="card mb-4 shadow-sm dish-item">
            <div className="dish-img-wrapper">
                <img src={dish.imageUrl} className="card-img-top dish-img" alt={dish.dishName} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{dish.dishName}</h5>
                <p className="card-text">Published: {dish.isPublished ? 'Yes' : 'No'}</p>
                <button className="btn btn-primary" onClick={() => togglePublished(dish.dishId)}>
                    Toggle Published
                </button>
            </div>
        </div>
    );
};

export default DishItem;
