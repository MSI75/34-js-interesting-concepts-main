/* 
undefined

1. variable value not assigned বা ভেরিয়েবল ডিক্লার করছি কিন্তু ভেলু অ্যাসাইন করি নাই।
2. function but didn't write return বা ফাংশনের রিটার্ন না করলে।
3. just wrote return but didn't return anything বা রিটার্ন লিখছি কিছুই রিটার্ন করি নাই।
4. parameter that isn't passed বা ফাংশনের প্যারামিটার না ‍দিলে।
5. property that doesn't exist in an object বা object এ যদি কোন প্রোপার্টি না থাকে তখন না থাকা প্রোপার্টিকে ‍যদি এক্সেস করা হয়। তাহলে object এ exist করবে না।
6. accessing array element out of range বা অতিরিক্ত রেন্জ দিয়ে যখন অ্যারের ভিতরে খুজা হয়।
7. accessing deleted array element বা ডিলেট অ্যারিয়া এলিমেন্টে sixth হবে না ।
8. explicitly set value to undefined বা একদম করে undefined ভেলু বসালে তখন undefined হবে।
*/
let first;
// console.log(first);

function second(x, y) {
    // document.getElementById('sum');

}
const result = second(3, 91);
// console.log(result);


function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}

const fourth = add(2, 7);
// console.log(fourth)


function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(81);

const fifth = { name: 'sogir', age: 15, location: 'bandarbon' };
// console.log(fifth.phone);

const sixth = [54, 12, 41, 31];
// console.log(sixth[4])
delete sixth[2];
// console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh);


/* 
null
*/
const myObj = { name: 'samad', profession: null }