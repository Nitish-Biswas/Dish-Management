// src/components/WebSocketComponent.js

import { useEffect } from 'react';

const WebSocketComponent = ({ onUpdate }) => {
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/ws/dishes/');

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = function(event) {
            const data = JSON.parse(event.data);
            onUpdate(data);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = (event) => {
            console.log('WebSocket connection closed:', event);
            // Optionally, try to reconnect
            // setTimeout(() => {
            //     console.log('Reconnecting...');
            //     WebSocketComponent({ onUpdate });
            // }, 1000);
        };

        // Example of sending a message
        socket.onopen = () => {
            socket.send(JSON.stringify({ message: 'Hello, server!' }));
        };

        return () => socket.close();
    }, [onUpdate]);

    return null;
};

export default WebSocketComponent;
