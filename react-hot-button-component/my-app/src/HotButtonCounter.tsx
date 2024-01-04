import { useState } from 'react';

export default function HotButtonCounter() {
  const [counter, setCounter] = useState(0);
  const [bgColor, setBgColor] = useState('black');
  const [textColor, setTextColor] = useState('white');

  function handleClick() {
    setCounter(counter + 1);

    if (counter === 2) {
      setBgColor('indigo');
    } else if (counter === 5) {
      setBgColor('mediumpurple');
    } else if (counter === 8) {
      setBgColor('palevioletred');
    } else if (counter === 11) {
      setBgColor('sandybrown');
      setTextColor('black');
    } else if (counter === 14) {
      setBgColor('yellow');
      setTextColor('black');
    } else if (counter >= 17) {
      setBgColor('white');
      setTextColor('black');
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        width: '250px',
        justifyContent: 'space-around',
      }}>
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={handleClick}>
        Hot Button
      </button>
      <p
        style={{
          border: '5px solid black',
          borderRadius: '15px',
          backgroundColor: 'yellow',
          color: 'black',
          width: '80px',
        }}>
        {counter} Clicks
      </p>
    </div>
  );
}
