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