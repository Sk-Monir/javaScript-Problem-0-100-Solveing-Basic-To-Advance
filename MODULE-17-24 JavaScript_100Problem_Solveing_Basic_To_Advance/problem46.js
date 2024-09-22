// Problem-01 : Help The Zoo Manager
// Function Name Must be calculateMoney()
// চিড়িয়াখানায় প্রতি টিকেট বিক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি  ১ জন দার োয়ান কে দিতে হয় ৫০০
// টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।

// Input:
// ফাংশন টি ইনপুট নেবে টিকেট সেল করার সংখ্যা । ইনপুট হবে একটি পজিটিভ সংখ্যা । (0 <= Input)

// Output:
// টিকেটের আয় ও ব্যয় গুল ো ক্যালকুলেট করে বাকী কত টাকা বাকের ভাইর কাছে থাকল ো সেটাই ত োমার
// ফাংশন আউটপুট হিসেবে রিটার্ন করবে । আউটপুট পজিটিভ নেগেটিভ যে ক োন কি ছুই হতে পারে ।
// 💡যে মন ইনপুট যদি 10 হয় তাহলে আউটপুট হবে(10 * 120) - (500 + (8 * 50)) = 300

// Challenge : বাকের ভাই যদি ইনপুট হিসেবে নেগেটিভ সংখ্যা দেয় তাহলে ত োমাকে একটা error ম্যাসেজ আউটপুট হিসেবে রিটার্ন করে দিতে হবে ।

// SAMPLE INPUT             SAMPLE OUTPUT
// 10                       300
// 1055                     125700
// 93                       10260
// - 130                    Invalid Number

function calculateMoney(ticketSale) {
    if (ticketSale <= 0) {
        return 'Invalid Number'
    } else {
        tickPrice = 120;
        totalEarn = ticketSale * tickPrice;
        totalCost = 500 + (8 * 50);
        totalSavings = totalEarn - totalCost;
        return totalSavings;
    } 
}
const result = calculateMoney('20');
console.log(result);