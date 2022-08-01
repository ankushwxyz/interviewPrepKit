function getCombinations (str) {
    // there will be 2^n combinations where n is length of string
    // e.g. for ABCD -- there will be 16 combinations i.e. nC0 + nC1 + ... nCn = 2^n
    // nC0 is of no use, i.e. selecting 0 characters, so in there will be 2^n -1 combinations.
    let iterations = Math.pow(2, str.length);
    let combinations = [];
    for(let i = 0; i< iterations; i++) {
        //get binary representation of i
        // Number(i).toString(2) converts to binary and padstart will add zeroes in front
        // otherwise '1' and '10' and '1000' all will add first char of string to combinations
        // whereas '0001', '0010', '1000' will add 'D', 'C', 'A' to combinations
        let binaryI = Number(i).toString(2).padStart(str.length,0);
        let temp = '';
        for( let j = 0; j< binaryI.length; j++) {
            if(+binaryI[j] === 1) {
                temp += str[j];
            }
        }
        if(temp.length) {
            combinations.push(temp);
        }
    }
    return combinations;
}

let combinations = getCombinations('ABCD');
console.log(combinations);

// e.g. binaryI for four character string
// 0001
// 0010
// 0011
// 0100
// 0101
// 0110
// 0111
// 1000
// 1001
// 1010
// 1011
// 1100
// 1101
// 1110
// 1111