export function titleCase(str: string): string {
  const splitStr = str.toLowerCase().split(' ');
  const titleCase = [];

  for (let i = 0; i < splitStr.length; i++) {
    titleCase.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1));
  }
  return titleCase.join(' ');
}
