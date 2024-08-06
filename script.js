// Ye hai humara test array
const testArray = [4, 8, 2, 11, 6, 7, 10];

// Sabse bada number dhoondhne wala function
const findMaxNumber = (arr) => Math.max(...arr);

// Saare numbers ka sum nikalne wala function
function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Odd (vijay) numbers ko count karne wala function
const countOddNumbers = function(arr) {
    return arr.filter(num => num % 2 !== 0).length;
};

// Ab hum in functions ko use karke result console par dikhayenge
console.log("Array:", testArray);
console.log("Maximum number: ", findMaxNumber(testArray));
console.log("Sum of all elements:", calculateSum(testArray));
console.log("Counts of  odd numbers:", countOddNumbers(testArray));