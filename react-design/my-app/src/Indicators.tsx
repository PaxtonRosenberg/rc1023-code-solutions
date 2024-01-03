type IndicatorsProps = {
  animal: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function Indicators({
  animal,
  currentIndex,
  onSelect,
}: IndicatorsProps) {
  const buttons = animal.map((item, index) => {
    return (
      <button
        key={item + index}
        style={{
          backgroundColor: index === currentIndex ? 'lightblue' : 'transparent',
        }}
        className={'customButton'}
        onClick={() => onSelect(index)}>
        {String(index)}
      </button>
    );
  });
  return <div>{buttons}</div>;
}
