import { useState } from 'react';

type Props = {
  text: string;
  color1: string;
  color2: string;
};

export default function ToggleButton({ text, color1, color2 }: Props) {
  const [isClicked, setIsClicked] = useState(true);
  console.log('isClicked initial value:', isClicked);

  function handleClick() {
    console.log('isClicked value before calling setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('isClicked value after calling setter:', isClicked);
  }
  return (
    <button
      style={{ backgroundColor: isClicked ? color1 : color2 }}
      onClick={handleClick}>
      {text}
    </button>
  );
}
