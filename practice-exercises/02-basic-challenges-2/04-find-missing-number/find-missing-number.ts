export function findMissingNumber(arr: number[]): number | undefined {
  let sum: number = 0;
  let missingNum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  missingNum = sum - arr.length;
  return missingNum;
}
