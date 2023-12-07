type person = {
  age: number;
  name: string;
};

export function underThirty(people: Array<person>): Array<person> {
  const peopleUnderThirty = people.filter((person) => person.age < 30);

  return peopleUnderThirty;
}
