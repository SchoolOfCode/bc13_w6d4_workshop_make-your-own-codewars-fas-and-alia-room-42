# Step 1
Think of scenario

Write your kata's scenario in a comment in [main.js]

include the start of the function that CodeWarriors will use to solve it

Problem is:
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. 

You can assume that you are only given numbers.

Examples:
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398


function sumTester(arr){
}


# step 2

**Testing**
test 1
let arr = [1, 5.2, 4, 0, -1]
let actual = sumTester(arr)
let expected = 9.2
expect(actual).toEqual(expected)

test 2 
let arr = [0, 0, 0, 0,0 ]
let actual = sumTester(arr)
let expected = 0
expect(actual).toEqual(expected)

test 3 
let arr= []
let actual = sumTester(arr)
let expected = 0
expect(actual).toEqual(expected)

**test 4**
let arr= [-5.5]
let actual = sumTester(arr)
let expected = -5.5
expect(actual).toEqual(expected)


