import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';
import { useState } from 'react';

type Props = {
  animal: string[];
};

export default function RotatingBanner({ animal }: Props) {
  const [currentIndex /*setCurrentIndex*/] = useState(0);
  return (
    <>
      <div className="container"></div>
      <div className="box">
        <br></br>
        <Banner animal={animal[currentIndex]} />
        <PrevButton />
        <br></br>
        <Indicators count={animal.length} />
        <br></br>
        <NextButton />
      </div>
    </>
  );
}
