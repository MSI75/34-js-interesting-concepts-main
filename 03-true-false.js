/* 
Falsy: 
false
0
empty string বা খালি ‍স্ট্রিং
undefined কোন একটা ভেরিয়েবল কে যখন ডিক্লার করা না হয়।
null
NaN
-------------------
Truthy:
true
any number (positive or negative )
any string including single whitespace, '0', 'false'
[]
{}
anything else that is not falsy will be truthy
*/
const x = false;
if (x) {
    console.log('variable is truthy');
} else {
    console.log('variable is falsey');
}


let x = {};
console.log('value of x', x)
if (x) {
    console.log('variable is truthy');
} else {
    console.log('variable is Falsy');
}