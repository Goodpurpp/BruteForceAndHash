let fs = require('fs');
let arg = process.argv;
let hashRequiredStr = 0;
let currentString = fs.readFileSync(arg[2]);
currentString = currentString.toString();
let hashCurrentStr = 0;
let tempString = "";
for (let i = 0; i < arg[3].length; i++) {
    hashRequiredStr += Math.pow(arg[3].charCodeAt(i), 2)
    hashCurrentStr += Math.pow(currentString.charCodeAt(i), 2)
    tempString += currentString[i];

}
let ans = 0
let s = tempString.length - 1;
let flag;
while (s != currentString.length) {
    flag=false;
    if (hashRequiredStr == hashCurrentStr) {
        flag = true;
        for (let i = 0; i < arg[3].length; i++) {
            if (tempString[i] != arg[3][i]) {
                flag = false;
                break
            }
        }
    }
    hashCurrentStr -= Math.pow(currentString.charCodeAt(s - arg[3].length + 1), 2) - Math.pow(currentString.charCodeAt(s + 1), 2)
    tempString = tempString.substr(1);
    tempString += currentString[s + 1];
    s++;
    if (flag == true)
        ans++;
}
console.log(ans);