import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';
import { useState } from 'react';

type Props = {
  animal: string[];
};

export default function RotatingBanner({ animal }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex(currentIndex + 1);

    if (currentIndex >= 5) {
      setCurrentIndex(0);
    }
  }

  function handlePrev() {
    setCurrentIndex(currentIndex - 1);

    if (currentIndex <= 0) {
      setCurrentIndex(5);
    }
  }

  function handleSelect(index: number) {
    console.log('from handleSelect:', index);
    setCurrentIndex(index);
  }

  return (
    <>
      <div className="container"></div>
      <div className="box">
        <br></br>
        <Banner animal={animal[currentIndex]} />
        <PrevButton onClick={handlePrev} />
        <br></br>
        <Indicators
          animal={animal}
          currentIndex={currentIndex}
          onSelect={handleSelect}
        />
        <br></br>
        <NextButton onClick={handleNext} />
      </div>
    </>
  );
}
