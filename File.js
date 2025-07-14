// let a = 10;
// let b = 5;
// console.log(` Multiplication Of 2 Numbers is: ${a * b}`);

// console.log("Hello Vighnesh");
// console.log("Hello, Sakshi");

// console.log("Welcome to the IT Indusrty");

// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((acc, curr) => acc + curr);
// console.log(sum);

// const nums = [2, 4, 3, 5, 1, 6];
// const evens = nums.filter((nums) => nums % 2 === 0);
// console.log(evens);

// const names = ["Alice", "Bob", "Charlie", "Denver"];
// const capitalized = names.map((names) => CharAt(0).toUpperCase().slice(1));
// console.log(capitalized);

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

let myFun = outer();

myFun();

myFun();

myFun();

myFun();
