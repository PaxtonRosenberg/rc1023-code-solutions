type Props = {
  text: string;
  color: string;
  onCustomClick: (text: string) => void;
};

export default function CustomButton(props: Props) {
  function handleClick() {
    props.onCustomClick(props.text);
  }
  return (
    <button style={{ backgroundColor: props.color }} onClick={handleClick}>
      {props.text}
    </button>
  );
}
