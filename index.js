"use strict";
/**
 * 1) Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

Examples
zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) --> [1, 2, 4, 5, 0, 0, 0]

zeroesToEnd([0, 0, 2, 0, 5]) --> [2, 5, 0, 0, 0]

zeroesToEnd([4, 4, 5]) --> [4, 4, 5]

zeroesToEnd([0, 0]) --> [0, 0]
Notes:

-You must mutate the original array.
-Keep the relative order of the non-zero elements the same.
*/

function zeroesToEnd(arr = [])
{
    let zeroCounter = 0;

    for (let i = 0; i < arr.length - zeroCounter; i++)
    {   
        if (arr[i] === 0)
        {
            arr.splice(i, 1);
            arr.push(0);
            i--;
            zeroCounter++;
        }
    }

    return arr;
}

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));
console.log(zeroesToEnd([0, 0, 2, 0, 5]));
console.log(zeroesToEnd([4, 4, 5]));
console.log(zeroesToEnd([0, 0]));
console.log(zeroesToEnd([0, 0, 1, 0, 1, 0, 1, 0, 1]));



/**
2) Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

Examples
shiftToRight(80, 3) --> 10

shiftToRight(-24, 2) --> -6

shiftToRight(-5, 1) --> -3

shiftToRight(4666, 6) --> 72

shiftToRight(3777, 6) --> 59

shiftToRight(-512, 10) --> -1

Notes
-There will be no negative values for the second parameter y.
-This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
*/

const shiftToRight = (x = 0, y = 0) => {return Math.floor(x / 2**y)};

console.log(shiftToRight(80, 3));
console.log(shiftToRight(-24, 2));
console.log(shiftToRight(-5, 1));
console.log(shiftToRight(4666, 6));
console.log(shiftToRight(3777, 6));
console.log(shiftToRight(-512, 10));