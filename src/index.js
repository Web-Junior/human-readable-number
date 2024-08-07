module.exports = function toReadable(number) {
    return numbers(number);
};

const units = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
const teens = [
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const tens = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
const hundreds = [
    "one hundred",
    "two hundred",
    "three hundred",
    "four hundred",
    "five hundred",
    "six hundred",
    "seven hundred",
    "eight hundred",
    "nine hundred",
];

function numbers(num) {
    if (num < 10) {
        return units[num];
    } else if (num > 10 && num < 20) {
        return teens[(num % 10) - 1];
    } else if (num < 100) {
        return (
            tens[Math.floor(num / 10) - 1] +
            (num % 10 === 0 ? "" : " " + units[num % 10])
        );
    } else if (num < 1000) {
        return (
            hundreds[Math.floor(num / 100) - 1] +
            (num % 100 === 0 ? "" : " " + numbers(num % 100))
        );
    } else {
        return "";
    }
}
