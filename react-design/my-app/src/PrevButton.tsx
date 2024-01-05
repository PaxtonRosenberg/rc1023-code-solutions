type Props = {
  onClick: () => void;
};

export default function PrevButton({ onClick }: Props) {
  return (
    <button className="customButton" onClick={onClick}>
      Prev
    </button>
  );
}
