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

// Different way of completing challenge.

// function tribonacci(s,n){
//     var arr = [];
//     for(var i=0; i<n; i++) {
//         arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
//     }
//     return arr;
// }

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


// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:[1, 1 ,1, 3, 5, 9, 17, 31, ...] But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get: [0, 0, 1, 1, 2, 4, 7, 13, 24, ...] Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;) If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

function tribonacci(signature,n) {
    var trib = signature;
    for (i = 3; i < n; i++) {
        trib.push((trib[i-1] + trib[i-2] + trib[i-3]));
    }
    return trib.slice(0, n);
}

Test.describe("Basic tests",function(){
    console.log(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])

    console.log(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])

    console.log(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])

    console.log(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])

    console.log(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])

    console.log(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])

    console.log(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])

    console.log(tribonacci([1,1,1],1),[1])

    console.log(tribonacci([300,200,100],0),[])

    console.log(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])
})