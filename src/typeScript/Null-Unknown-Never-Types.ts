const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("Searching");
  }
};

searchName("Niaj");

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const covertedSpeed = (speed * 1000) / 3600;
    console.log(`My Car speed is ${covertedSpeed}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const covertToNumber = parseFloat(value);
    const covertedSpeed = (covertToNumber * 1000) / 3600;
    console.log(`my car speed is ${covertedSpeed} ${unit}`);
  }
};

getMyCarSpeed(10);
getMyCarSpeed("11 kmh^-1");

function throwError(message: string): never {
  throw new Error(message);
}

// throwError("error showing")
