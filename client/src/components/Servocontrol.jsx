import WebSocketClient from "./WebSocketClient.jsx";


export default function Servocontrol() {
    const { sendButtonPress, currentAngle } = WebSocketClient();

    const handleClockwiseClick = () => {
      sendButtonPress("clockwise");
    };
  
    const handleCounterClockwiseClick = () => {
      sendButtonPress("counterclockwise");
    };
  
    return (
      <div>
        <div>
          <button onClick={handleClockwiseClick}>Clockwise</button>
          <button onClick={handleCounterClockwiseClick}>Counterclockwise</button>
        </div>
        <div>
          <h2>Current Angle</h2>
          <div style={{ border: "1px solid black", padding: "16px" }}>
            <p>{currentAngle}</p>
          </div>
        </div>
      </div>
    );
}
