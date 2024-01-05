type Props = {
  onClick: () => void;
};

export default function NextButton({ onClick }: Props) {
  return (
    <button className="customButton" onClick={onClick}>
      Next
    </button>
  );
}
