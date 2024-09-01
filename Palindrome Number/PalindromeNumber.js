const isPalindrome = (x) => {
    const numToString = x.toString();
    const reversedString = numToString.split("").reverse().join("");

    return numToString === reversedString;
};

const checkPalindrome = (x) => {
    if (x < 0) return false;

    const numString = x.toString();

    for (let index = 0; index < Math.floor(numString.length / 2); index++) {
        if (numString[index] !== numString[numString.length - 1 - index]) {
            return false;
        }
    }

    return true;
};

const isNumberPalindrome = (x) => {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let original = x;
    let reversed = 0;

    while (original > reversed) {
        reversed = reversed * 10 + (original % 10);
        original = Math.floor(original / 10);
    }

    return original === reversed || original === Math.floor(reversed / 10);
};