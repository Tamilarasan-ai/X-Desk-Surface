const { Server } = require("ws");
const http = require("http");
const express = require("express");
const { Board, Servo } = require("johnny-five");

const app = express();
const server = http.createServer(app);
const wss = new Server({ server });

let servo;
let currentAngle = 90; // Initial angle assumed to be 90 degrees

const board = new Board({ port: "COM7" }); // Replace with the correct port for your board

board.on("ready", () => {
  servo = new Servo(10); // Assuming pin 10 for servo control
  servo.to(currentAngle); // Set the initial angle of the servo
  console.log("Board is ready");
});

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send initial angle to client upon connection
  ws.send(JSON.stringify({ type: "angleUpdate", angle: currentAngle }));

  ws.on("message", (message) => {
    const data = JSON.parse(message);

    if (data.type === "buttonPress") {
      handleButtonPress(data.direction);
    }
  });
});

function handleButtonPress(direction) {
  if (!servo) {
    console.error("Servo not initialized");
    return;
  }

  const angleStep = 2; // Adjust the angle step as needed

  if (direction === "clockwise") {
    // Rotate servo clockwise
    const newAngle = Math.min(currentAngle + angleStep, 180); // Clamp the angle within 0 to 180 degrees
    servo.to(newAngle);
    currentAngle = newAngle;
  } else if (direction === "counterclockwise") {
    // Rotate servo counterclockwise
    const newAngle = Math.max(currentAngle - angleStep, 0); // Clamp the angle within 0 to 180 degrees
    servo.to(newAngle);
    currentAngle = newAngle;
  }

  console.log("Button pressed:", direction);
  console.log("Current angle:", currentAngle);

  // Send updated angle to all clients
  wss.clients.forEach((client) => {
    if (client.readyState === Server.OPEN) {
      client.send(JSON.stringify({ type: "angleUpdate", angle: currentAngle }));
    }
  });
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


