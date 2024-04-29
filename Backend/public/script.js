document.addEventListener("DOMContentLoaded", () => {
    const socket = new WebSocket("ws://localhost:3000");
  
    function sendButtonEvent(direction) {
      const event = {
        type: "buttonPress",
        direction: direction
      };
      socket.send(JSON.stringify(event));
    }
  
    document.getElementById("clockwiseButton").addEventListener("click", () => {
      sendButtonEvent("clockwise");
    });
  
    document.getElementById("counterclockwiseButton").addEventListener("click", () => {
      sendButtonEvent("counterclockwise");
    });
  });
  