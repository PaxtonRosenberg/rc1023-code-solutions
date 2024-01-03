type Props = {
  animal: string;
};

export default function Banner({ animal }: Props) {
  return <p className="animalNames">{animal}</p>;
}
