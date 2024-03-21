// Normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(2, 5));

const addArrowFunction = (num1: number, num2: number): number => num1 + num2;

console.log(addArrowFunction(5, 5));

const array: number[] = [1, 2, 3, 4];
const newArray = array.map((element: number) => element * element);

console.log(newArray);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "Niaj",
  balance: 10,
  addBalance(money: number) {
    return this.balance + money;
  },
};
