import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { useState } from 'react';

export default function ToggleSwitch() {
  const [light, setLight] = useState(false);
  const [onText, setOnText] = useState('hidden');
  const [offText, setOffText] = useState('offText');
  const [onSwitch, setOnSwitch] = useState('hidden');
  const [offSwitch, setOffSwitch] = useState('offSwitch');
  const [box, setBox] = useState('offBox');

  function toggleSwitch() {
    if (!light) {
      setOnSwitch('onSwitch');
      setOffSwitch('hidden');
      setLight(true);
    } else {
      setOffSwitch('offSwitch');
      setOnSwitch('hidden');
      setLight(false);
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
      <FaToggleOn className={onSwitch} onClick={handleClick} />
      <FaToggleOff className={offSwitch} onClick={handleClick} />
      <p className={offText}>OFF</p>
      <p className={onText}>ON</p>
    </div>
  );
}
