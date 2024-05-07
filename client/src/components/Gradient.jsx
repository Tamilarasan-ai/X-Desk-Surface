import  { useState } from 'react';
import TableComponent from './table';

const GradientGenerator = () => {
  const [boxColor, setBoxColor] = useState('#0000ff'); // Default blue color

  const handleBoxColorChange = (event) => {
    setBoxColor(event.target.value);
  };


  const boxStyle = {
    width: '350px',
    height: '350px',
    boxShadow: `0 0 30px 15px ${boxColor}`,
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };


  return (
    <div className='Gradient'>
    
      <div style={boxStyle} className='w-100% h-[20vh]'>
      <TableComponent/>
      </div>
      <div className='Gradient-color-selector'>
        <label htmlFor="boxColor">Aura:</label>
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