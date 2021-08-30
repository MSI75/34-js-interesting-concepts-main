/* 
== এর দ্বারা শুধু দুইটার মানকে চেক করবে এটা যদি ডিফারেন্ট আকারে থাকে তাহলে চিন্তা করবে না । এটি  কনভার্টের মাধ্যমে এটা করা হয়।
*/
const first = '0';
const second = false;
if (first == second) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}


/* 
=== এর দ্বারা শুধু দুইটার মানকে চেক করবে এবং দুইটার মান একই হতে হবে ডিফারেন্ট হলে হবে না। এটি মান এবং টাইপ দুনোটারে চেক করে।
*/
//more comparison
// const a = { name: 'ali' };
// const b = { name: 'ali' };
const a = [];
const b = [];
if (a === b) {
    console.log('both are same')
} else {
    console.log('they are not same')
}