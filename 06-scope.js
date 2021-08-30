// লোকাল স্কোপের ভেরিয়েবল ভিতরে ব্যবহার করতে হবে, বাহিরে বের করতে পারবে না কিন্তু গ্লোবাল স্কোপের ভেরিয়েবল বাহিরে এবং ভিতরে ব্যবহার করতে পারবে।
// var এর মান বাহিরে এবং ভিতরে উভয় জায়গায় ব্যবহার করা হয় কিন্তু let, const শুধু ভিতরে ব্যবহার করা হয় ।
const favNum = 27;

function add(first, second) {
    // console.log(mood); // hoisting
    const result = first + second;

    // ব্লক স্কোপ {}
    if (result > 9) {
        let mood = 'happy';
        mood = 'cranky';
    }
    // console.log(mood);
    return result;
}
const sum = add(11, 35);
// console.log(mood);

for (let i = 0; i < 10; i++) {

}
// console.log(i);