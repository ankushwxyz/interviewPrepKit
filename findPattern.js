// Given a string T, check if pattern P exists in it.

// Program 1 (using in-built functions)
// function findPattern (text, pattern) {
//     return text.indexOf(pattern);
// }

// Program 2 (without using in-built functions like indexOf, search)
// Doing with brute force, for optimized solution check KMP algorithm
// function findPattern(text, pattern) {
//     let textLength = text.length,
//         patternLength = pattern.length;
//     let j = 0,
//         patternFoundAt = null;
//     for (let i = 0; i < textLength; i++) {
//         if (text[i] === pattern[j]) {
//             if(j === patternLength -1) {
//                 patternFoundAt = i - (patternLength -1);
//                 break;
//             } else {
//                 j++;
//             }
//         } else {
//             j = 0;
//         }
//     }
//     return patternFoundAt;
// }






let p = findPattern('please buy these ^onions', '^onion')
console.log(p)