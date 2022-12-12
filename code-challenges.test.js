// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest
//_________________________________________________________
// --------------------1)

// a) Create a test with an expect statement using the variable provided.
//     my function name
describe("peopleStory", () => {
  // the array jest is going to pass as the argument
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" },
  ]; // explaining what the function does
  it("returns an array with a sentence about each person with their name capitalized.", () => {
    // Expect the function when given the array to equal
    expect(peopleStory(people)).toEqual(
      //This array
      [
        "Ford Prefect is a hitchhiker.",
        "Zaphod Beeblebrox is president of the galaxy.",
        "Arthur Dent is a radio employee.",
      ]
    );
  });
});
// After  adding jest thru my console Tested in hopes for it to fail like this.
// FAIL  ./code-challenges.test.js
// This didn't pass because we didn't make the function yet. that shows us that jest is looking for the function we want it to test.
// peopleStory
//   ✕ returns an array with a sentence about each person with their name capitalized. (1 ms)

// ● peopleStory › returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: *peopleStory* is not defined

//     12 |   it("returns an array with a sentence about each person with their name capitalized.", () => {
//     13 |     // Expected output:
//   > 14 |     expect(peopleStory(people)).toEqual([
//        |     ^
//     15 |       "Ford Prefect is a hitchhiker.",
//     16 |       "Zaphod Beeblebrox is president of the galaxy.",
//     17 |       "Arthur Dent is a radio employee.",

//     at Object.expect (code-challenges.test.js:14:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.313 s
//!!! this is the good fail we are looking for that is looking for what's expected and saying the function isn't defined.

// b) Create the function that makes the test pass.
// Now the fun part
// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// so I create a function that takes in an array
function peopleStory(array) {
  // made an empty array that i can put my story in
  const story = [];
  // using a for loop iterate over the array and more specificly look at the value for every time we get the name of the person
  for (const person of array) {
    // the name of the person is the value assosiated with the key: name inside of person.
    const name = person.name
      // knowing we have multiple words in the value of name, we are going to turn it into an array that seperates them with what we normally use to seperate words, the famous space
      .split(" ")
      // now mapping over the value for every value in this key.
      .map((value) => {
        // we want to change the zeroith index of every value to an uppercased letter and return it with the rest from the 1st index so forth.
        return value.charAt(0).toUpperCase() + value.slice(1);
      })
      // return this modified array to a string
      .join(" ");
    // stating the occupation is the value associated with the key: occupation in the array of person
    const occupation = person.occupation;
    // I push a string into my empty array called story with string interpolation to call upon the variables i created.
    story.push(`${name} is ${occupation}.`);
  }
  // show us what we have in our story
  return story;
}
// console.log(peopleStory(people));
// tested the function with a console.log() just to make sure my code is dynamic
// Ran it thru jest and got a good pass

// PASS  ./code-challenges.test.js
// peopleStory
//   ✓ returns an array with a sentence about each person with their name capitalized. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.3 s, estimated 1 s
//_________________________________________________________
// --------------------2)

// a) Create a test with an expect statement using the variables provided.
//      this function
describe("numsDivThree", () => {
  //   these are the arrays jest will use to test the function.
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
  // this is a string that says what the function does
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    // Expected output: [ 2, 0, -1, 0 ]
    // Expect the function when given this array to output an array that equals this
    expect(numsDivThree(hodgepodge1)).toEqual([2, 0, -1, 0]);
    // Expected output: [ 2, 1, -1 ]
    // Expect the function when given this array to output an array that equals this
    expect(numsDivThree(hodgepodge2)).toEqual([2, 1, -1]);
  });
});
//tested for a good fail and got it
// FAIL  ./code-challenges.test.js
// This passed!
// peopleStory
//   ✓ returns an array with a sentence about each person with their name capitalized. (2 ms)
// But this didn't. but thats what we want. Because we havn't made the function yet
// numsDivThree
//   ✕ returns an array of only the REMAINDERS of the numbers when divided by 3.

// ● numsDivThree › returns an array of only the REMAINDERS of the numbers when divided by 3.

//   ReferenceError: numsDivThree is not defined

//     91 |   it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
//     92 |     // Expected output: [ 2, 0, -1, 0 ]
//   > 93 |     expect(numsDivThree(hodgepodge1)).toEqual([2, 0, -1, 0]);
//        |     ^
//     94 |     // Expected output: [ 2, 1, -1 ]
//     95 |     expect(numsDivThree(hodgepodge2)).toEqual([2, 1, -1]);
//     96 |   });

//     at Object.expect (code-challenges.test.js:93:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.347 s, estimated 1 s

// b) Create the function that makes the test pass.
// Now to roll up the sleeves
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Make a function that takes in an array
function numsDivThree(array) {
  // make an empty array we will put our answers in
  const remainders = [];
  // using a for loop to iterate thru the array and look at each item/ value
  for (const item of array) {
    // if the item is a number
    if (typeof item === "number") {
      // I want it to make a variable of that numbers remainder when divided by 3
      const remainder = item % 3;
      // and push that remainder to my array that will store my answers
      remainders.push(remainder);
    }
  }
  // show us the array of Remainders
  return remainders;
}
//console.log(numsDivThree(hodgepodge2));
//tested it with a console.log() to make sure the code is dynamic
// tested it with jest and got a good pass
// PASS  ./code-challenges.test.js
// This still passed
// peopleStory
//   ✓ returns an array with a sentence about each person with their name capitalized. (2 ms)
// While now passing this one!
// numsDivThree
//   ✓ returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.315 s, estimated 1 s
//_________________________________________________________
// --------------------3)

// a) Create a test with an expect statement using the variables provided.
// my function is called this
describe("yourNumsCubed", () => {
  // these are the arrays the test will use to check my function
  const cubeAndSum2 = [0, 5, 10];
  const cubeAndSum1 = [2, 3, 4];
  // the function does "this"
  it("returns the sum of all the numbers cubed.", () => {
    // Expected output: 99
    // expect when the function recieves the argument of this array to equal this number
    expect(yourNumsCubed(cubeAndSum1)).toEqual(99);
    // Expected output: 1125
    // expect when the function recieves the argument of this array to equal this number
    expect(yourNumsCubed(cubeAndSum2)).toEqual(1125);
  });
});
// tested for a good fail and got it!
// FAIL  ./code-challenges.test.js
// This passes
// peopleStory
//   ✓ returns an array with a sentence about each person with their name capitalized. (2 ms)
// This passes
// numsDivThree
//   ✓ returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
// But this doesn't pass because we haven't created the function
// yourNumsCubed
//   ✕  (1 ms)

// ● yourNumsCubed ›

//   ReferenceError: yourNumsCubed is not defined

//     169 |   it("", () => {
//     170 |     // Expected output: 99
//   > 171 |     expect(yourNumsCubed(cubeAndSum1)).toEqual(99);
//         |     ^
//     172 |     // Expected output: 1125
//     173 |     expect(yourNumsCubed(cubeAndSum2)).toEqual(1125);
//     174 |   });

//     at Object.expect (code-challenges.test.js:171:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.336 s, estimated 1 s

// b) Create the function that makes the test pass.
// now the fun part!
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// made a function that takes in an array of numbers
function yourNumsCubed(numbers) {
  // made a sum that i can add to keep track of the math we are doing
  let sum = 0;
  // for loop to iterate over the array and do this to each number in the array
  for (const number of numbers) {
    // we add that number raised to the power of three"cubed" to the sum
    sum += Math.pow(number, 3);
  }
  // show us the sum we have when done
  return sum;
}
//console.log(yourNumsCubed(cubeAndSum2));
// used a console.log() to make sure my code is dynamic
// ran it thru jest
// got this
// PASS  ./code-challenges.test.js
// peopleStory
//   ✓ returns an array with a sentence about each person with their name capitalized. (5 ms)
// numsDivThree
//   ✓ returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
// yourNumsCubed
//   ✓ returns the sum of all the numbers cubed.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.426 s, estimated 1 s
// This function along with all my previouse tests have passed.
// I really enjoyed and will miss learning how to do better at testing with jest and practicing my javascript. I definetly feel this part of the assesments have helped me grow the most in not just better understanding jest and the importance of TDD but also with my understanding and application of javascript functions to accomplish various tasks.
