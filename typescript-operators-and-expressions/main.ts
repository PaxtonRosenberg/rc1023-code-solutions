const width: number = 8;
const height: number = 24;
const area: number = width * height;
console.log('area:', area);
console.log('typeof area:', typeof area);

const bill: number = 24.75;
const payment: number = 100;
const change: number = payment - bill;
console.log('change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 98;
const midterm: number = 91;
const final: number = 99;
const grade: number = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'Paxton';
const lastName: string = 'Rosenberg';
const fullName: string = firstName + ' ' + lastName;
console.log('fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 8;
const isAcidic: boolean = pH < 7;
console.log('isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount: number = 24;
const isSparta: boolean = headCount === 300;
console.log('isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

const motto: string = fullName + ' is the GOAT';
console.log('motto:', motto);
console.log('typeof motto:', typeof motto);
