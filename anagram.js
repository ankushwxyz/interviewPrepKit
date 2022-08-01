function anagrams(start, str) {
    let angrms = []
    if (str.length === 1) {
        return [start + str];
    }

    for (let i = 0; i < str.length; i++) {
        let subPerm = anagrams(str[i], str.substr(0, i) + str.substr(i + 1));
        subPerm.forEach((perm) => angrms.push(start + perm))
    }
    return angrms;
}

console.log(anagrams('', 'ABC'))
console.log(anagrams('', 'ABCD'))
console.log(anagrams('', 'ABCDE'))

// ====================================================================================

// Q) Find combinations of a string
//NOt complete solution, for ABCD -- it doesn't give ACD
function findCombinations(str) {
    let combinations = [];
    debugger;
    for (let i = 0; i < str.length; i++) {
        combinations.push(str[i]);
        for (let fixedChar = 1; fixedChar < str.length; fixedChar++) {
            for (let k = i+fixedChar; k < str.length; k=k + fixedChar) {
                // combinations.push(str[j]);
                // if(fixedChar === 1) {
                //     combinations.push(str[i]+str[k])
                // } else {
                    combinations.push(str.substr(i, fixedChar)+ str[k])
                // }
            }


        }
    }
    return combinations;
}
findCombinations('ABC')

// =======================================================
// Q Remove adjacent duplicate characters from a string

function removeAdjacentDuplicates (str) {
    let finalString = '';
    for( let i =1; i< str.length; i++) {
        if(str[i] !== str[i-1]) {
            finalString = finalString+str[i-1];
        }
        if(i === str.length -1) {
            finalString = finalString+str[i];
        }
    }
    return finalString;
}

removeAdjacentDuplicates('AABAC')
