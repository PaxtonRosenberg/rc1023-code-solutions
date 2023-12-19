export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
  const commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonElements.push(arr1[i]);
    }
  }
  return commonElements;
}
