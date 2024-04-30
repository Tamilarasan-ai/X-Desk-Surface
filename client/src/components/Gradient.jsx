import  { useState } from 'react';

const GradientGenerator = () => {
  const [boxColor, setBoxColor] = useState('#0000ff'); // Default blue color

  const handleBoxColorChange = (event) => {
    setBoxColor(event.target.value);
  };


  const boxStyle = {
    width: '350px',
    height: '350px',
    boxShadow: `0 0 50px ${boxColor}`,
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };


  return (
    <div className='Gradient'>
      <div style={boxStyle}>
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
   
   {/* 3JS component */}

    </div>
  );
};

export default GradientGenerator;