export function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomCodeSnippet() {
  const loops = [
    `for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
      console.log(\`i: \${i}, j: \${j}\`);
    }
  }`,
    `while (condition) {
    if (condition2) break;
    // code block
  }`,
    `do {
    // code block
    if (condition2) continue;
  } while (condition);`,
  ];

  const conditionals = [
    `if (condition) {
    // code block
    if (anotherCondition) {
      // another code block
    }
  }`,
    `if (condition) {
    // code block
  } else if (anotherCondition) {
    // another code block
  } else {
    // default code block
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
    const nestedFunction = () => {
      // nested function code block
    };
    nestedFunction();
  }`,
    `const myFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Success');
      }, 1000);
    });
  }`,
    `function myFunction(param1, param2, callback) {
    // code block
    callback(param1, param2);
  }`,
  ];

  const arrays = [
    `const arr = [1, 2, 3, 4, 5];
  const newArr = arr.filter(element => element % 2 === 0);
  const mappedArr = newArr.map(element => element * 2);`,
    `arr.forEach(element => {
    if (element > 2) {
      console.log(element);
    }
  });`,
    `const reducedValue = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);`,
  ];

  const higherOrderFunctions = [
    `function higherOrderFunction(callback) {
    for (let i = 0; i < 5; i++) {
      callback(i);
    }
  }
  higherOrderFunction((i) => console.log(i));`,
    `const numbers = [1, 2, 3, 4, 5];
  const result = numbers.map(num => num * 2).filter(num => num > 5).reduce((acc, num) => acc + num, 0);`,
    `function compose(f, g) {
    return function(x) {
      return f(g(x));
    };
  }
  const add1 = x => x + 1;
  const multiply2 = x => x * 2;
  const addThenMultiply = compose(multiply2, add1);
  console.log(addThenMultiply(5));`,
  ];

  const randomCategories = [
    loops,
    conditionals,
    functions,
    arrays,
    higherOrderFunctions,
  ];
  const randomCategory = getRandomElement(randomCategories);
  return getRandomElement(randomCategory);
}
