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

// console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));
// console.log(zeroesToEnd([0, 0, 1, 0, 1, 0, 1, 0, 1]));
// console.log(zeroesToEnd([4, 4, 5]));
// console.log(zeroesToEnd([0, 0]));



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

function shiftToRight(x = 0, y = 0)
{
    let result = (x.toString(2)).split("");
    
    if (x < 0) // use one's and two's complement to acquire correct format for the negative binary value.
    {
        result.shift();
        result.unshift("0");
        result.unshift("-");
        
        for (let i = 0; i < result.length; i++) // switch the bits.
        {
            if (result[i] === "1")
            {
                result[i] = "0";
            }
            else
            {
                result[i] = "1";
            }
        }

        result = (parseInt(result.join(""), 2) + 1);
        result = (result.toString(2)).split("");

        for (let i = 0; i < y; i++)
        {
            result.pop();
        }
        
        // undo the one's and two's complement.
        result = (parseInt(result.join(""), 2) - 1);
        result = (result.toString(2)).split("");

        for (let i = 0; i < result.length; i++) // switch the bits.
        {
            if (result[i] === "1")
            {
                result[i] = "0";
            }
            else
            {
                result[i] = "1";
            }
        }

        result.unshift("-");
    }
    else
    {
        for (let i = 0; i < y; i++)
        {
            result.pop();
        }
    }

    result = parseInt(result.join(""), 2);

    if (result.toString() === "NaN")
    {
        return 0;
    }

    return result;
}

// shiftToRight(5, 2);
// shiftToRight(-5, 2);
// shiftToRight(10, 2);
// shiftToRight(-9, 2);
// shiftToRight(-100, 5);
// shiftToRight(1, 1);
