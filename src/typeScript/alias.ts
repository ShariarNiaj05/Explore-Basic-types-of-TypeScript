// type Alias
type PersonType = {
  name: string;
  age?: number; // Optional type
  profession: string;
  address: string;
};

const person1: PersonType = {
  name: "Name 1",
  age: 22,
  profession: "Developer",
  address: "CTG",
};

const person2: PersonType = {
  name: "Name 2",
  profession: "Next level developer",
  address: "Turkey",
};
