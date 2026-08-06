//slide 2
//1. Write a function to get the lowest, highest and average value in the array (with and without sort function).

function findLowestHighestAverage(arrNumbers) {
  arrNumbers.sort((a, b) => a - b);
  const lowest = arrNumbers[0];
  const highest = arrNumbers[arrNumbers.length - 1];
  const average =
    arrNumbers.reduce((total, currentvalue) => total + currentvalue, 0) /
    arrNumbers.length;

  return [lowest, highest, average];
}

console.log(
  findLowestHighestAverage([12, 5, 23, 18, 4, 45, 32, 100, 1000, 20]),
);

function findLowestHighestAverageWithoutMethod(arrNumbers) {
  let lowest = arrNumbers[0];
  let highest = arrNumbers[0];
  let total = arrNumbers[0];

  for (let i = 1; i < arrNumbers.length; i++) {
    if (arrNumbers[i] < lowest) lowest = arrNumbers[i];
    if (arrNumbers[i] > highest) highest = arrNumbers[i];
    total += arrNumbers[i];
  }

  return [lowest, highest, total / arrNumbers.length];
}

console.log(findLowestHighestAverageWithoutMethod([12, 5, 23, 18, 4, 45]));

//2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

function concatenateArr(arrStrings) {
  let strjoin = "";

  arrStrings.forEach((item, index) => {
    if (index === arrStrings.length - 1) {
      strjoin += `and ${item}`;
    } else {
      strjoin += `${item}, `;
    }
  });

  return strjoin;
}

concatenateArr(["apple", "banana", "cherry", "date"]); // "apple, banana, cherry, and date"

function concatenateArrWithMethod(arrStrings) {
  const lastItem = arrStrings.pop();
  const newString = arrStrings.join(", ") + `, and ${lastItem}`;
  return newString;
}

concatenateArrWithMethod(["apple", "banana", "cherry", "date"]); // "apple, banana, cherry, and date"

//3. Write a function from a given array of numbers and return the second smallest number

function secondSmallest(numbers) {
  let smallest = numbers[0];
  let second = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      second = smallest;
      smallest = numbers[i];
    } else if (numbers[i] < second && numbers[i] !== smallest) {
      second = numbers[i];
    }
  }

  return second;
}
const numbers = [5, 3, 1, 7, 2, 6, 1];
console.log(secondSmallest(numbers)); // 2

//4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.

function addArrays(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}

const array1 = [1, 2, 3];
const array2 = [3, 2, 1];
console.log(addArrays(array1, array2)); // [4, 4, 4]

//5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
function addUnique(arr, element) {
  if (!arr.includes(element)) {
    arr.push(element);
  }
  return arr;
}

{
  const numbers = [1, 2, 3, 4];
  console.log(addUnique(numbers, 4)); // [1, 2, 3, 4]
  console.log(addUnique(numbers, 7)); // [1, 2, 3, 4, 7]
}

//5. Write a function from a given array of mixed data types and return the sum of all the number

function sumNumbers(arrMixed) {
  let sum = 0;
  for (let i = 0; i < arrMixed.length; i++) {
    if (typeof arrMixed[i] === "number") {
      sum += arrMixed[i];
    }
  }

  return sum;
}
{
  const mixedArray = ["3", 1, "string", null, false, undefined, 2];
  console.log(sumNumbers(mixedArray)); // 3
}

//slide 3
//1. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
