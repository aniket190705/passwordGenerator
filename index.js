var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerSet = "abcdefghijklmnopqrstuvwxyz"
var numSet = "0123456789"
var symbolSet = "!@#$%^&*()"

var upper = $("#upperCase")[0];
var lower = $("#lowerCase")[0];
var num = $("#number")[0];
var symbol = $("#symbol")[0];


var count = 0;
var passWord = ""
function generatePass() {
    var len = $("#length").val();

    if (len == 0) {
        alert("Please enter length of password");
        return;
    }

    if ((upper.checked || lower.checked || num.checked || symbol.checked) == false) {
        alert("Please select at least one option");
        return;
    }

    console.log(len);
    if (upper.checked && count < len) {
        passWord += upperSet[Math.floor(Math.random() * upperSet.length)];
        count++;
    }

    if (lower.checked && count < len) {
        passWord += lowerSet[Math.floor(Math.random() * lowerSet.length)];
        count++;

    }

    if (num.checked && count < len) {
        passWord += numSet[Math.floor(Math.random() * numSet.length)];
        count++;

    }

    if (symbol.checked && count < len) {
        passWord += symbolSet[Math.floor(Math.random() * symbolSet.length)];
        count++;

    }
    console.log(passWord);
    if (count < len) {
        generatePass();
    }


}

$("button").on("click", function () {
    passWord = ""
    count = 0
    generatePass();
    $("h3").text(passWord);
});

console.log(upper.checked);
