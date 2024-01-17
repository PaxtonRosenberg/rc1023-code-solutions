import {
  FaChevronLeft,
  FaChevronRight,
  FaRegCircle,
  FaCircle,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface CarouselProps {
  images: Image[];
}

interface Image {
  src: string;
  alt: string;
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    currentIndex >= 5 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  }

  function handlePrev() {
    currentIndex <= 0 ? setCurrentIndex(5) : setCurrentIndex(currentIndex - 1);
  }

  function handleSelect(index: number) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      currentIndex < 5 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      <div className="container">
        <FaChevronLeft className="chevron" onClick={handlePrev} />
        <div className="imgCircleContainer">
          <Images images={images} currentIndex={currentIndex} />
          <div className="circleContainer">
            <Circles
              images={images}
              currentIndex={currentIndex}
              onSelect={handleSelect}
            />
          </div>
        </div>
        <FaChevronRight className="chevron" onClick={handleNext} />
      </div>
    </>
  );
}

interface ImagesProps {
  images: Image[];
  currentIndex: number;
}

function Images({ images, currentIndex }: ImagesProps) {
  return <img src={images[currentIndex].src} alt={images[currentIndex].alt} />;
}

interface CirclesProps {
  images: Image[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

function Circles({ images, currentIndex, onSelect }: CirclesProps) {
  const circles = images.map((image, index) => {
    return index === currentIndex ? (
      <FaCircle
        key={`${image} + ${index}`}
        className="circle"
        onSelect={onSelect}
      />
    ) : (
      <FaRegCircle
        key={`${image} + ${index}`}
        className="circle"
        onClick={() => onSelect(index)}
      />
    );
  });
  return <>{circles}</>;
}
