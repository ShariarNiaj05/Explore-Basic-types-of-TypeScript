//ternary operator

const age: number = 22;

/* if (age >= 18) {
    console.log('yes');
} else {
    console.log('no');
} */

const isAdult = age >= 18 ? "yes" : "no";

// console.log(isAdult);

//Nullish Coalescing Operator. It's only works for "null & Undefined" value
const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";

// console.log({ userName }, { userName2 });

type Manush = {
  name: string;
  age: number;
  address: {
    city: "No City";
    road: "No Road";
    home?: "";
  };
};


const manush1: Manush = {
    name: "Niaj",
    age: 100,
    address: {
        city: "No City",
        road: "No Road",
    }
}


const home = manush1?.address?.home ?? "No home"  //default value "No home"

console.log({home});