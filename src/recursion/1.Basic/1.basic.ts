const factorial = (n: number): number => {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
};

const sumOfDigits = (n: number): number => {
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
};

const powerOfNum = (num: number, pow: number): number => {
  if (pow === 0) {
    return 1;
  }
  return num * powerOfNum(num, pow - 1);
};

const reverseString = (str: string, len: number): string => {
  if (len === 0) {
    return str[0];
  }
  return str[len] + reverseString(str, len - 1);
};
