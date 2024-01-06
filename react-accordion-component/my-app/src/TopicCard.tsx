import { useState } from 'react';

interface TopicCardProps {
  topics: topic[];
}

interface topic {
  id: number;
  title: string;
  content: string;
}

export default function TopicCard({ topics }: TopicCardProps) {
  const [clicked, setClicked] = useState(-1);

  function handleClick(index: number) {
    if (clicked === index) {
      setClicked(-1);
    } else {
      setClicked(index);
    }
  }

  const card = topics.map((topic, index) => {
    return (
      <Card
        key={index}
        topic={topic}
        index={index}
        onClick={handleClick}
        clicked={clicked}
      />
    );
  });
  return (
    <>
      <div className="container">
        {card}
        <footer>
          <p className="attribution">Image by Freepik</p>
        </footer>
      </div>
    </>
  );
}

interface CardProps {
  topic: topic;
  index: number;
  onClick: (index: number) => void;
  clicked: number;
}

function Card({ topic, index, onClick, clicked }: CardProps) {
  return (
    <div onClick={() => onClick(index)}>
      <p className="titleBox">{topic.title} </p>

      {clicked === index ? <p className="contentBox">{topic.content}</p> : null}
    </div>
  );
}
