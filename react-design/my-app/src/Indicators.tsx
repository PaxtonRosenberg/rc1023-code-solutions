type Props = {
  count: number;
};

export default function Indicators({ count }: Props) {
  return (
    <div>
      <button className="customButton indicator">{count}</button>
      <button className="customButton indicator">{count}</button>
      <button className="customButton indicator">{count}</button>
      <button className="customButton indicator">{count}</button>
      <button className="customButton indicator">{count}</button>
      <button className="customButton indicator">{count}</button>
    </div>
  );
}
