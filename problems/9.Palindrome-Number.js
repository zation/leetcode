const getNumberByDigit = (number, digit) => Math.floor((
  Math.floor(number / Math.pow(10, digit - 1)) -
  Math.floor(number / Math.pow(10, digit)) * 10
));

// eslint-disable-next-line
const isPalindrome = (number) => {
  if (number < 0) return false;
  let digits = 0;
  while (number / Math.pow(10, digits) >= 1) {
    digits += 1;
  }
  for (let i = 1; i <= digits; i += 1) {
    if (getNumberByDigit(number, i) !== getNumberByDigit(number, digits - i + 1)) {
      return false;
    }
  }
  return true;
};
