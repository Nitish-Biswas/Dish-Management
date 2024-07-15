// src/components/WebSocketComponent.js

import { useEffect } from 'react';

const WebSocketComponent = ({ onUpdate }) => {
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/ws/dishes/');

        socket.onmessage = function(event) {
            const data = JSON.parse(event.data);
            onUpdate(data);
        };

        return () => socket.close();
    }, [onUpdate]);

    return null;
};

export default WebSocketComponent;
