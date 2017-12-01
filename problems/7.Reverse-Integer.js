// eslint-disable-next-line
const reverse = (number) => {
  const numberString = number >= 0 ? number.toString() : (-number).toString();
  let resultString = '';
  for (let i = 0; i < numberString.length; i += 1) {
    const currentNumberString = numberString[numberString.length - i - 1];
    if (
      Number(resultString) > 214748364 || (
        Number(resultString) === 214748364 &&
        (number > 0 ? Number(currentNumberString) > 7 : Number(currentNumberString) > 8)
      )
    ) {
      return 0;
    }
    resultString += currentNumberString;
  }
  return number >= 0 ? Number(resultString) : -Number(resultString);
};
