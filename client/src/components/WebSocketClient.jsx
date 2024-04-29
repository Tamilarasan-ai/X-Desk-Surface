import  { useState, useEffect } from 'react';

const WebSocketClient = () => {
  const [currentAngle, setCurrentAngle] = useState(90); // Initial angle assumed to be 90 degrees
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const newWs = new WebSocket("ws://localhost:3000");

    newWs.onopen = () => {
      console.log("WebSocket client connected");
    };

    newWs.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "angleUpdate") {
        setCurrentAngle(data.angle);
        console.log("Received angle update from server:", data.angle);
      } else {
        console.log("Received message from server:", event.data);
      }
    };

    setWs(newWs);

    return () => {
      newWs.close();
    };
  }, []);

  const sendButtonPress = (direction) => {
    if (ws) {
      const message = JSON.stringify({ type: "buttonPress", direction });
      ws.send(message);
      console.log("Sent button press:", direction);
    }
  };

  return { sendButtonPress, currentAngle };
};

export default WebSocketClient;
