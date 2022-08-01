// ==================These Programs I found online for getting combinations of a string============================
// ====================== For my implementation check combination.js ==================================
// Program 1
function substrings(str1) {
    var array1 = [];
    for (var x = 0, y = 1; x < str1.length; x++, y++) {
        array1[x] = str1.substring(x, y);
    }
    var combi = [];
    var temp = "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent; i++) {
        temp = "";
        for (var j = 0; j < array1.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += array1[j];
            }
        }
        if (temp !== "") {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}
substrings("abcd");

// ====================================================
// Program 2

var letters = ['A', 'B', 'C', 'D'];
var combi = [];
var temp= "";
var letLen = Math.pow(2, letters.length);

for (var i = 0; i < letLen ; i++){
    temp= "";
    for (var j=0;j<letters.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += letters[j]
        }
    }
    if (temp !== "") {
        combi.push(temp);
    }
}

console.log(combi)