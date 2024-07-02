export function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomCodeSnippet() {
  const loops = [
    `for (let i = 0; i < 10; i++) {
    console.log(i);
  }`,
    `while (condition) {
    // code block
  }`,
    `do {
    // code block
  } while (condition);`,
  ];

  const conditionals = [
    `if (condition) {
    // code block
  }`,
    `if (condition) {
    // code block
  } else {
    // code block
  }`,
    `switch (expression) {
    case value1:
      // code block
      break;
    case value2:
      // code block
      break;
    default:
      // code block
  }`,
  ];

  const functions = [
    `function myFunction() {
    // code block
  }`,
    `const myFunction = () => {
    // code block
  }`,
    `function myFunction(param1, param2) {
    // code block
  }`,
  ];

  const arrays = [
    `const arr = [1, 2, 3, 4, 5];`,
    `arr.forEach(element => {
    console.log(element);
  });`,
    `const mappedArray = arr.map(element => element * 2);`,
  ];

  const randomCategories = [loops, conditionals, functions, arrays];
  const randomCategory = getRandomElement(randomCategories);
  return getRandomElement(randomCategory);
}
