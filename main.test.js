//👉 Write your tests below here:

// import the Express app
import sumTester from './main.js';
// import what we need from jest (expect, test)

import { expect, test } from '@jest/globals';

test('Positive and Negative sums', function(){
    let arr = [1, 5.2, 4, 0, -1]
    let actual = sumTester(arr)
    let expected = 9.2
    expect(actual).toEqual(expected)
})

/*
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
*/