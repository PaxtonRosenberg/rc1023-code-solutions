type Props = {
  animals: string[];
};

export default function Banner({ animals }: Props) {
  return <p className="animalNames">{animals}</p>;
}
