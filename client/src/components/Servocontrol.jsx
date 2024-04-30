import WebSocketClient from "./WebSocketClient.jsx";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";


export default function Servocontrol() {
    const { sendButtonPress, currentAngle } = WebSocketClient();

    const handleClockwiseClick = () => {
      sendButtonPress("clockwise");
    };
  
    const handleCounterClockwiseClick = () => {
      sendButtonPress("counterclockwise");
    };
  
    return (
      <div className="control" >
        <p>Connected</p>
        <div className="btn">
          <button className="button-1" onClick={handleClockwiseClick}><SlArrowUp /></button>
          <button className="button-2" onClick={handleCounterClockwiseClick}><SlArrowDown /></button>
        </div>
        <div className="control-speed-btn-wrapper">
          <button className="speed-low">Low</button>
          <button className="speed-mid">Mid</button>
          <button className="speed-high">High</button>
        </div>
        <div className="angle-container">
          <h2>Current Angle</h2>
          <div className="status">
            <p>{currentAngle}</p>
          </div>
        </div>
      </div>
    );
}
