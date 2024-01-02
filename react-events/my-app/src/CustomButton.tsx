type Props = {
  text: string;
  color: string;
  onCustomClick: (text: string) => void;
};

export default function CustomButton({ text, color, onCustomClick }: Props) {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => onCustomClick(text)}>
      {text}
    </button>
  );
}
