import { useState } from 'react';

export default function ToggleSwitch() {
  const [light, setLight] = useState(false);
  const [onText, setOnText] = useState('hidden');
  const [offText, setOffText] = useState('offText');
  const [box, setBox] = useState('offBox');
  const [toggle, setToggle] = useState('toggleOff');
  const [bgColor, setBgColor] = useState('toggleGrey');

  function toggleSwitch() {
    if (!light) {
      setToggle('toggleOn');
      setLight(true);
      setBgColor('toggleGreen');
    } else {
      setToggle('toggleOff');
      setLight(false);
      setBgColor('toggleGrey');
    }
  }

  function toggleText() {
    if (!light) {
      setOnText('onText');
      setOffText('hidden');
    } else {
      setOnText('hidden');
      setOffText('offText');
    }
  }

  function toggleBackground() {
    if (!light) {
      setBox('onBox');
    } else {
      setBox('offBox');
    }
  }

  function handleClick() {
    toggleSwitch();
    toggleText();
    toggleBackground();
  }

  return (
    <div className={box}>
      <div className={bgColor}>
        <div className={toggle} onClick={handleClick}></div>
      </div>
      <p className={offText}>OFF</p>
      <p className={onText}>ON</p>
    </div>
  );
}
