// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each
// other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain
// the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of 
// character deletions required to make the two strings anagrams. Can you help her find this number?

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions 
// required to make  and  anagrams. Any characters can be deleted from either of the strings.

// For example, if  and , we can delete  from string  and  from string  so that both remaining strings are  and  which are 
// anagrams.

// Function Description

// Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

// makeAnagram has the following parameter(s):

// a: a string
// b: a string

// Input : 
// cde
// abc

// Output :
// 4

// Explanation

// We delete the following characters from our two strings to turn them into anagrams of each other:

// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// We must delete  characters to make both strings anagrams, so we print  on a new line.


function makeAnagram(a, b) {
    let aCharCount = {}, bCharCount = {};
    let count = 0;
    a.split('').sort().forEach((char) => {
        if (aCharCount[char]) {
            aCharCount[char] = aCharCount[char] + 1
        } else {
            aCharCount[char] = 1;
        }
    });
    console.log(aCharCount);
    b.split('').sort().forEach((char) => {
        if (bCharCount[char]) {
            bCharCount[char] = bCharCount[char] + 1
        } else {
            bCharCount[char] = 1;
        }
    });
    console.log(bCharCount);
    Object.keys(aCharCount).forEach((key) => {
        let diff = Math.abs(aCharCount[key] - (bCharCount[key] || 0));
        count = count + diff;
        delete bCharCount[key];
    });
    // initial value for reduce is important, otherwise if bCharCount is empty array, it breaks
    let remaining = Object.values(bCharCount).reduce((val1, val2) => val1 + val2, 0); 

    count = count + remaining;
    return count;
}
