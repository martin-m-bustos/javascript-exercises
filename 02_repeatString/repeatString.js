const repeatString = function(string, num) {
    if (num > 0) {
        let newString = string;
        for(i = 1; i < num; i++){
            newString = string + newString;
        } 
        return newString;
    } else if (num < 0) {
        return "ERROR";
    } else {
        return "";
    }
}
// Do not edit below this line
module.exports = repeatString;
