import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';

type Props = {
  animals: string[];
};

export default function RotatingBanner({ animals }: Props) {
  return (
    <>
      <div className="container"></div>
      <div className="box">
        <br></br>
        <Banner animals={animals} />
        <PrevButton />
        <br></br>
        <Indicators />
        <br></br>
        <NextButton />
      </div>
    </>
  );
}
