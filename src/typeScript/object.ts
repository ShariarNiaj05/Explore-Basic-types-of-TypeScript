const newUser: {
  name: string;
  age: number;
  haveRole?: boolean; // This can either true or false. Thats why we have to use ? operator!
  company: "Programming Hero" //Only assignable to this value. Without this we can't use any other type of value like string, number, boolean etc
} = {
  name: "Shariar",
  age: 18,
    haveRole: true,
  company: "Programming Hero" // From type declaration, I have to use only this specific type: Programming Hero
};
