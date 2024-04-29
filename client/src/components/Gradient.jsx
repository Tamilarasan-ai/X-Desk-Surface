import  { useState } from 'react';

const GradientGenerator = () => {
  const [boxColor, setBoxColor] = useState('#0000ff'); // Default blue color
  const [componentColor, setComponentColor] = useState('#000000'); // Default black color

  const handleBoxColorChange = (event) => {
    setBoxColor(event.target.value);
  };

  const handleComponentColorChange = (event) => {
    setComponentColor(event.target.value);
  };

  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: boxColor,
    boxShadow: `0 0 50px ${boxColor}`,
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const componentStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: componentColor,
    borderRadius: '50%',
  };

  return (
    <div>
      <div style={boxStyle}>
        <div style={componentStyle} />
      </div>
      <div>
        <label htmlFor="boxColor">Box Color:</label>
        <input
          id="boxColor"
          type="color"
          value={boxColor}
          onChange={handleBoxColorChange}
        />
      </div>
      <div>
        <label htmlFor="componentColor">Component Color:</label>
        <input
          id="componentColor"
          type="color"
          value={componentColor}
          onChange={handleComponentColorChange}
        />
      </div>
    </div>
  );
};

export default GradientGenerator;