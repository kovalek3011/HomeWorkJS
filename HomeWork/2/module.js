/* 2.Написать модуль, который способен выполнять операции с числами любой длины.
4 метода для сложения, умножения, вычитания и деления. */
const BigNumber = {
  add: (a, b) => {
    res = BigInt(a) + BigInt(b);
    console.log(res);
    return res;
  },

  multiply: (a, b) => {
    res = BigInt(a) * BigInt(b);
    console.log(res);
    return res;
  },

  subtract: (a, b) => {
    res = BigInt(a) - BigInt(b);
    console.log(res);
    return res;
  },

  divide: (a, b) => {
    if (b == 0) {
      console.log("На ноль делить нельзя");
      return "На ноль делить нельзя";
    } else {
      res = BigInt(a) / BigInt(b);
      console.log(res);
      return res;
    }
  },
};
alert(BigNumber.add(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
alert(BigNumber.multiply(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
alert(BigNumber.subtract(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
alert(BigNumber.divide(Number.MAX_SAFE_INTEGER, 0));
alert(BigNumber.divide(Number.MAX_SAFE_INTEGER, 2));
