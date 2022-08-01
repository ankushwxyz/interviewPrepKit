// Find logest common substring between two strings
// Solution:- first find all subStrings of one of the strings(str1 in this program)
// then sort these substrings in reverse order based on length
// so that when we iterate, we compare longest string first and so on
// then check if those substrings are present in other string(str2 in this program)
function findLargestCommonSubstring(str1, str2) {
    let subStrings = [];
    let largestCommonSubString = null;
    let indexOfSubStr = null;
    if(!str1 || !str2) {
        return '';
    }
    for(let i = 0; i< str1.length; i++) {
        // notice j <= because it represents ending index in str1.substring(startIndex, endIndex) where endIndex is excluded
        // so if we use j< str1.length then last character will not be included
        for(let j=1; j<= str1.length; j++) { 
            subStrings.push(str1.substring(i,j));
        }
    }
    // sort subStrings in reverse order of their length
    subStrings.sort((a,b) => b.length - a.length);
    for( let i = 0; i < subStrings.length; i++) {
        if(str2.indexOf(subStrings[i]) !== -1) {
            largestCommonSubString = subStrings[i];
            indexOfSubStr = i;
            break;
        }
    }

    return largestCommonSubString;
}

console.log(findLargestCommonSubstring('abcde', 'cdef') === 'cde')
console.log(findLargestCommonSubstring('', '') === '')
console.log(findLargestCommonSubstring('ABC', '') === '')
console.log(findLargestCommonSubstring('', 'ABC') === '')
console.log(findLargestCommonSubstring('ABABC', 'BABCA') === 'BABC')
console.log(findLargestCommonSubstring('BABCA', 'ABCBA') === 'ABC')
console.log(findLargestCommonSubstring(
    'Algorithms and data structures implemented in JavaScript',
    'Here you may find Algorithms and data structures that are implemented in JavaScript',
  ) === 'Algorithms and data structures ')
// console.log(findLargestCommonSubstring('BABCA', 'ABCBA') === 'ABC')
// console.log(findLargestCommonSubstring('BABCA', 'ABCBA') === 'ABC')
// console.log(findLargestCommonSubstring('BABCA', 'ABCBA') === 'ABC')
// console.log(findLargestCommonSubstring('BABCA', 'ABCBA') === 'ABC')