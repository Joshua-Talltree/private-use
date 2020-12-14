"use strict";

// Code Warsgit

var array = []

function openOrSenior(data){
    console.log(data.length);
    for(var player = 0; player < data.length; player++) {
        if (data[player][0] < 55) {
            array.push("open");
        } else if (data[player][1] <= 7) {
            array.push("open");
        } else {
            array.push("senior");
        }
        console.log(array);
        console.log(player);
    }
    return array;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]));

// You are given an array (which will have a length of at least 3,
// but could be very large) containing integers. The array is either
// entirely comprised of odd integers or entirely comprised of even
// integers except for a single integer N. Write a method that takes
// the array as an argument and returns this "outlier" N.



// function findOutlier(integers){
//     var array = [];
//     var array2 = [];
//     for (var N = 0; N < integers.length; N++) {
//         if (integers[N] % 2 === 0) {
//             array.push(N);
//         } else {
//             array2.push(N);
//         }
//
//     }
// }
// console.log(findOutlier([0, 1, 2]));


function duplicateCount(text) {
    var lowText = text.toLowerCase(); // makes test lower case
    var aObj = {}; // empty object
    var counter = 0;
    for ( var i = 0; i < lowText.length; i++ ) {
        if ( !aObj[lowText[i]] ) {
            aObj[lowText[i]] = 1;
        } else if ( aObj[lowText[i] ] < 2 ) {
            aObj[lowText[i]] += 1;
            counter++;
        }
    }
    return counter;
}

// second option for solving this...

// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//         return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.


// return masked string
function maskify(cc) {
    if (cc.length > 4) {
        var reversed = reverse(cc);
        var newString = '';
        for (var i = 0; i < reversed.length; i++) {
            if (i < 4) {
                newString += reversed[i];
            } else {
                newString += '#';
            }
        }
        return reverse(newString);
    } else {
        return cc;
    }
}
function reverse(str) {
    return str.split("").reverse().join("");
}

console.log((maskify('4556364607935616'), '############5616'));;
console.log((maskify('1'), '1'));;
console.log((maskify('11111'), '#1111'));;

// Short-hand solution:

// function maskify(cc) {
//     cc = cc.split("");
//     for(var i = 0; i < cc.length - 4; i++){
//         cc[i] = "#";
//     }
//
//     cc = cc.join("");
//     return cc
// }

// Check to see if it's a pangram or not.

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz"
        .split("").every(function(x){
            return string.indexOf(x) !== -1;
        });
}
console.log((isPangram(string), true));
console.log((isPangram(string), false));