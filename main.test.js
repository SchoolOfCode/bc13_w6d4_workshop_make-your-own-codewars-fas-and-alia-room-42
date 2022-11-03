//👉 Write your tests below here:

// import the Express app
import sumTester from './main.js';
// import what we need from jest (expect, test)

import { expect, test } from '@jest/globals';

//compile tests 1 -4 in a single test function
test.each([
	[[1, 5.2, 4, 0, -1], 9.2],
	[[0, 0, 0, 0, 0], 0],
	[[], 0],
	[[-5.5], -5.5],
])(
	'given an array %s, the function should return the sum of indeces %s',
	function (arr, expected) {
		const actual = sumTester(arr);
		expect(actual).toBe(expected);
	}
);

// //test 1
// test('Positive and Negative sums', function () {
// 	let arr = [1, 5.2, 4, 0, -1];
// 	let actual = sumTester(arr);
// 	let expected = 9.2;
// 	expect(actual).toEqual(expected);
// });

// //test 2
// test('array of zero values should return 0', function () {
// 	const arr = [0, 0, 0, 0, 0];
// 	const actual = sumTester(arr);
// 	const expected = 0;
// 	expect(actual).toBe(expected);
// });

// //test 3
// test('empty array should return 0', function () {
// 	const arr = [];
// 	const actual = sumTester(arr);
// 	const expected = 0;
// 	expect(actual).toBe(expected);
// });

// //test 4
// test('a single index array with negative value should return the index', function () {
// 	const arr = [-5.5];
// 	let actual = sumTester(arr);
// 	let expected = -5.5;
// 	expect(actual).toEqual(expected);
// });
