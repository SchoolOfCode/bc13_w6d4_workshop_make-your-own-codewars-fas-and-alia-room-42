/* 
👉 Write your kata here

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. 

You can assume that you are only given numbers.

Examples:
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
*/

//👉 Write the function your CodeWarriors will start with below here:
export default function sumTester(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		count += arr[i];
	}
	return count;
}
