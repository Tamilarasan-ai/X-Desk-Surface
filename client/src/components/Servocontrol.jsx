import WebSocketClient from "./WebSocketClient.jsx";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { BiBluetooth } from "react-icons/bi";


export default function Servocontrol() {
    const { sendButtonPress, currentAngle } = WebSocketClient();

    const handleClockwiseClick = () => {
      sendButtonPress("clockwise");
    };
  
    const handleCounterClockwiseClick = () => {
      sendButtonPress("counterclockwise");
    };
  
    return (
      <div className="control">
        <p className="connected">Connected <BiBluetooth /></p>
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
          <div  className="angle-label">
          <h2>Current Height</h2>
          </div>
          <div className="status">
            <p>{currentAngle}</p>
          </div>
        </div>
      </div>
    );
}
